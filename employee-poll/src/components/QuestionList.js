import { connect } from "react-redux";
import Card from "./Card";

const QuestionList = ({ title, questions, users, questionFilter }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mt-6">{title}</h2>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {questions.filter(questionFilter).map((question) => (
          <li key={question.id}>
            <Card question={question} author={users[question.author]} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default connect()(QuestionList);
