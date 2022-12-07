require 'json'

questions = JSON.parse(File.read('question_choices.json'))
survey = Survey.find_or_create_by(survey_name: "18 Summer Tool", survey_type: "adult")

questions.each do |question|
  q = Question.find_or_create_by(question_text: question["question"], survey_id: survey.id)
  question["choices"].each do |choice|
    Choice.find_or_create_by(choice_text: choice, question_id: q.id)
  end
end
