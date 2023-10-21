import { connect } from "react-redux";
import Card from "./Card";

const QuestionList = ({ questions, users, questionFilter }) => {
  return (
    <div>
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
