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
    render json: { data: recomendation_hash.sort_by { |_, v| -v }.to_h, success: true, status: 200 }
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
end
