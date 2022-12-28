require 'json'
categories = JSON.parse(File.read('category.json'))

categories.each do |category|
  Category.find_or_create_by(name: category['category'])
end

questions = JSON.parse(File.read('question_choices.json'))
survey = Survey.find_or_create_by(survey_name: '18 Summer Tool')

questions.each_with_index do |question, q_index|
  q = Question.find_or_create_by(question_text: question['question'], survey_id: survey.id)
  q.question_image.attach(io: File.open("app/assets/images/choice_images/q#{q_index + 1}.png"), filename: "q#{q_index + 1}.png")
  q.update(heading: question['heading']) unless question['heading'].nil?
  question['choices'].each_with_index do |choice, c_index|
    choice = Choice.find_or_create_by(choice_text: choice, question_id: q.id, category_id: question['category_id'])
    choice.image.attach(io: File.open("app/assets/images/choice_images/q#{q_index + 1}_c#{c_index + 1}.jpg"), filename: "q#{q_index + 1}_c#{c_index + 1}.jpg") if q_index < 4
  end
end
