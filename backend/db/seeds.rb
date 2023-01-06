require 'json'
questions = JSON.parse(File.read('questions.json'))

questions.each_with_index do |question, q_index|
  q = Question.find_or_create_by(text: question['question'], question_type: question['question_type'])
  q.image.attach(io: File.open("app/assets/images/choice_images/q#{q_index + 1}.png"), filename: "q#{q_index + 1}.png")
  q.update(heading: question['heading']) unless question['heading'].nil?
  q.update(subheading: question['subheading']) unless question['subheading'].nil?
  q.update(boldtext: question['boldtext']) unless question['boldtext'].nil?
end

countries = JSON.parse(File.read('countries.json'))

countries.each do |country|
  c = Country.find_or_create_by(continent: country['continent'], name: country['name'])
  country['destinations'].each do |destination|
    d = Destination.find_or_create_by(name: destination['name'], label: destination['label'], country_id: c.id)
    d.update(four_to_eight: destination['four_to_eight']) unless destination['four_to_eight'].nil?
    d.update(nine_to_thirteen: destination['nine_to_thirteen']) unless destination['nine_to_thirteen'].nil?
  end
end

# questions.each_with_index do |question, q_index|
#   q = Question.find_or_create_by(question_text: question['question'], survey_id: survey.id)
#   q.question_image.attach(io: File.open("app/assets/images/choice_images/q#{q_index + 1}.png"), filename: "q#{q_index + 1}.png")
#   q.update(heading: question['heading']) unless question['heading'].nil?
#   question['choices'].each_with_index do |choice, c_index|
#     choice = Choice.find_or_create_by(choice_text: choice, question_id: q.id, category_id: question['category_id'])
#     choice.image.attach(io: File.open("app/assets/images/choice_images/q#{q_index + 1}_c#{c_index + 1}.jpg"), filename: "q#{q_index + 1}_c#{c_index + 1}.jpg") if q_index < 4
#   end
# end
