import { connect } from "react-redux";
import Card from "./Card";

const Dashboard = ({ authenticatedUser, questions, users }) => {
  const unanswered = (question) =>
    !question.optionOne.votes.includes(authenticatedUser.id) &&
    !question.optionTwo.votes.includes(authenticatedUser.id);

  const answered = (question) =>
    question.optionOne.votes.includes(authenticatedUser.id) ||
    question.optionTwo.votes.includes(authenticatedUser.id);

  return (
    <div>
      <h1 className="text-3xl font-bold mt-9" data-testid="heading">
        Dashboard
      </h1>

      <h2 className="text-2xl font-bold mt-6">New Questions</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {questions.filter(unanswered).map((question) => (
          <li key={question.id}>
            <Card question={question} author={users[question.author]} />
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mt-6">Answered Questions</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {questions.filter(answered).map((question) => (
          <li key={question.id}>
            <Card question={question} author={users[question.author]} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ authenticatedUser, questions, users }) => ({
  authenticatedUser,
  questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp),
  users,
});

export default connect(mapStateToProps)(Dashboard);
