import { connect } from "react-redux";
import QuestionList from "./QuestionList";
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
      <QuestionList title={"New Questions"} questions={questions} users={users}  questionFilter={unanswered}/>
      <QuestionList title={"Answered Questions"} questions={questions} users={users}  questionFilter={answered}/>
    </div>
  );
};

const mapStateToProps = ({ authenticatedUser, questions, users }) => ({
  authenticatedUser,
  questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp),
  users,
});

export default connect(mapStateToProps)(Dashboard);
