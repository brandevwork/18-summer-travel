require 'json'
questions = JSON.parse(File.read('questions.json'))
countries = JSON.parse(File.read('countries.json'))
activities = JSON.parse(File.read('activities.json'))
question_activities = JSON.parse(File.read('question_activities.json'))
question_destinations = JSON.parse(File.read('question_destinations.json'))
destination_activities = JSON.parse(File.read('destination_activities.json'))

questions.each_with_index do |question, q_index|
  q = Question.find_or_create_by(text: question['question'], question_type: question['question_type'])
  q.image.attach(io: File.open("app/assets/images/choice_images/q#{q_index + 1}.png"), filename: "q#{q_index + 1}.png")
  q.update(heading: question['heading']) unless question['heading'].nil?
  q.update(subheading: question['subheading']) unless question['subheading'].nil?
  q.update(boldtext: question['boldtext']) unless question['boldtext'].nil?
end

countries.each do |country|
  c = Country.find_or_create_by(continent: country['continent'], name: country['name'])
  country['destinations'].each do |destination|
    d = Destination.find_or_create_by(name: destination['name'], label: destination['label'], country_id: c.id)
    d.update(four_to_eight: destination['four_to_eight']) unless destination['four_to_eight'].nil?
    d.update(nine_to_thirteen: destination['nine_to_thirteen']) unless destination['nine_to_thirteen'].nil?
  end
end

activities.each_with_index do |activity, a_index|
  a = Activity.find_or_create_by(name: activity['name'], label: activity['label'])
  a.activity_image.attach(io: File.open("app/assets/images/choice_images/a#{a_index + 1}.jpg"), filename: "a#{a_index + 1}.jpg") unless activity['image_name'].nil?
end

question_destinations.each do |question_destination|
  question_destination['destination_ids'].each do |destination_id|
    QuestionDestination.find_or_create_by(question_id: question_destination['question_id'], destination_id: destination_id)
  end
end

question_activities.each do |question_activity|
  question_activity['activity_ids'].each do |activity_id|
    QuestionActivity.find_or_create_by(question_id: question_activity['question_id'], activity_id: activity_id)
  end
end

destination_activities.each do |destination_activity|
  destination_activity['available_destination_ids'].each do |available_destination_id|
    DestinationActivity.find_or_create_by(activity_id: destination_activity['activity_id'], destination_id: available_destination_id)
  end
end
