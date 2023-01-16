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
    recomendations = {}
    @family_members.each do |family_member|
      family_member.member_preferences.each do |member_preference|
        next if member_preference.preferenceable_id.nil?

        if member_preference.preferenceable_type.eql?('Activity')
          member_preference.preferenceable.destination_activities.each do |available_destination|
            add_hash(available_destination.destination.label, recomendations)
          end
        else
          add_hash(member_preference.preferenceable.label, recomendations)
        end
      end
    end
    recomendations = recomendations.sort_by { |_, v| -v }.to_h
    update_destination_hash(recomendations, @valid_members)
  end

  private

  def add_hash(label, member_recommendations)
    if member_recommendations[label].present?
      member_recommendations[label] = member_recommendations[label] + 1
    else
      member_recommendations.store(label, 1)
    end
  end

  def check_valid_members
    @family_members = current_family.family_members
    @valid_members = @family_members.where('age > 4')
    return render json: { message: 'Survey is not completed by the whole famliy', success: false, status: 204 } unless @valid_members.completed.length == @valid_members.size

    return render json: { data: current_family.family_recommendation.recommendations, success: true, status: 200 } if current_family.family_recommendation.present?

    @min_age = @family_members.pluck(:age).min
    return render json: { message: 'Recommendations are only given for kids of age less than 18', success: false, status: 204} if @min_age > 18
  end

  def update_destination_hash(member_recommendations, valid_members)
    final_recomendations = {}
    recommendation_years = (0..(18 - @min_age)).to_a.map { |i| (Time.current.year + i).to_s }
    recommendation_years.each do |recommendation_year|
      recommendation_year_ages = valid_members.map { |user| Date.new(recommendation_year.to_i).year - Date.strptime(user.birth_year, "%Y").year }
      yearwise_recomendations = {}
      yearwise_recomendations_usa = {}
      member_recommendations.each_key do |key|
        next if check_present_destinations(final_recomendations, key)

        destination = Destination.find_by(label: key)
        if destination.is_usa?
          yearwise_recomendations_usa.store(key, member_recommendations[key])
          yearwise_recomendations_usa[key] = yearwise_recomendations_usa[key] + destination.four_to_eight if recommendation_year_ages.any? { |val| (4..8).include?(val) }
          yearwise_recomendations_usa[key] = yearwise_recomendations_usa[key] + destination.nine_to_thirteen if recommendation_year_ages.any? { |val| (9..13).include?(val) }
        else
          yearwise_recomendations.store(key, member_recommendations[key])
          yearwise_recomendations[key] = yearwise_recomendations[key] + destination.four_to_eight if recommendation_year_ages.any? { |val| (4..8).include?(val) }
          yearwise_recomendations[key] = yearwise_recomendations[key] + destination.nine_to_thirteen if recommendation_year_ages.any? { |val| (9..13).include?(val) }
        end
      end
      final_recomendations.store(recommendation_year, [(yearwise_recomendations_usa.size.positive? ?
        yearwise_recomendations_usa.max_by { |key, value| value }.first : 'USA destination is not available'),
                                                       yearwise_recomendations.max_by { |key, value| value }.first])
    end
    FamilyRecommendation.find_or_create_by(family_id: current_family.id, recommendations: final_recomendations)
    render json: { data: final_recomendations, success: true, status: 200 }
  end

  def check_present_destinations(final_recomendations, key)
    is_present = false
    final_recomendations.each_value do |fvalue|
      is_present = true if fvalue.include?(key)
      next if is_present
    end
    is_present
  end
end
