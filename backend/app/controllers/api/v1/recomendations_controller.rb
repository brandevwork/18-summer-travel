class  Api::V1::RecomendationsController < BaseController
  before_action :check_valid_members, only: [:recomendation]

  swagger_controller :recomendations, 'Recomendations'

  swagger_api :recomendation do
    summary 'Fetches the recomendations of a family'
    notes 'These are the recomendations for a family'
    response :unauthorized
    response :not_acceptable, 'The request you made is not acceptable'
  end

  def recomendation
    recomendation_hash = {}
    @family_members.each do |family_member|
      family_member.member_preferences.each do |member_preference|
        next if member_preference.preferenceable_id.nil?

        if member_preference.preferenceable_type.eql?('Activity')
          member_preference.preferenceable.destination_activities.each do |available_destination|
            add_hash(available_destination.destination.label, recomendation_hash)
          end
        else
          add_hash(member_preference.preferenceable.label, recomendation_hash)
        end
      end
    end
    recomendation_hash = recomendation_hash.sort_by { |_, v| -v }.to_h
    update_destination_hash(recomendation_hash, @valid_members)
  end

  private

  def add_hash(label, reco_hash)
    if reco_hash[label].present?
      reco_hash[label] = reco_hash[label] + 1
    else
      reco_hash.store(label, 1)
    end
  end

  def check_valid_members
    @family_members = current_family.family_members
    @valid_members = @family_members.where('age > 4')
    return render json: { message: 'Survey is not completed by the whole famliy', success: false, status: 204 } unless @valid_members.completed.length == @valid_members.size

    @min_age = @family_members.pluck(:age).min
    return render json: { message: 'Recommendations are only given for kids of age less than 18', success: false, status: 204} if @min_age > 18
  end

  def update_destination_hash(reco_hash, valid_members)
    recommendation_hash = {}
    recommendation_years = (0..(18 - @min_age)).to_a.map { |i| (Time.current.year + i).to_s }
    recommendation_years.each do |recommendation_year|
      recommendation_year_ages = valid_members.map { |user| Date.new(recommendation_year.to_i).year - Date.strptime(user.birth_year, "%Y").year }
      new_hash = {}
      reco_hash.each do |key, value|
        next if recommendation_hash.value?(key)

        destination = Destination.find_by(label: key)
        new_hash.store(key, reco_hash[key])
        new_hash[key] = new_hash[key] + destination.four_to_eight if recommendation_year_ages.any? { |val| (4..8).include?(val) }
        new_hash[key] = new_hash[key] + destination.nine_to_thirteen if recommendation_year_ages.any? { |val| (9..13).include?(val) }
      end
      recommendation_hash.store(recommendation_year, new_hash.max_by { |key, value| value }.first)
    end
    render json: { data: recommendation_hash, success: true, status: 200 }
  end
end
