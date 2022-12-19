class  Api::V1::RecomendationsController < BaseController

  def recomendation
    all_members = current_family.family_members
    family_members = all_members.where("age > ?", 4)
    if family_members.completed.length == family_members.size
      recomendation_hash = Hash.new
      family_members.each do |family_member|
        family_member.response_choices.each do |response_choice|
          unless response_choice.choice_id.nil?
            if recomendation_hash["#{response_choice.choice_id}"].present?
              recomendation_hash["#{response_choice.choice_id}"] = recomendation_hash["#{response_choice.choice_id}"] + 1
            else
              recomendation_hash.store("#{response_choice.choice_id}", 1)
            end
          end
        end
      end
      sorted_hash = recomendation_hash.sort_by { |_key, value | value }.reverse
      choice_ids = sorted_hash.map {|sorted_hash| sorted_hash.first }.take(18 - all_members.pluck(:age).min)
      choices = []
      choice_ids.each do |choice_id|
        record = Choice.find_by(id: choice_id)
        choices << record
      end
      render json: { data: choices, message: "I am going to show you recomendations", status: 204}
    else
      render json: { message: "Survey is not completed by the whole famliy", status: 204}
    end
  end
end
