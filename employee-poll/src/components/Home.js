import { connect } from "react-redux";
import QuestionList from "./QuestionList";

const Home = ({ authenticatedUser, questions, users }) => {
  const unanswered = (question) =>
    !question.optionOne.votes.includes(authenticatedUser.id) &&
    !question.optionTwo.votes.includes(authenticatedUser.id);

  const answered = (question) =>
    question.optionOne.votes.includes(authenticatedUser.id) ||
    question.optionTwo.votes.includes(authenticatedUser.id);

  return (
    <div>
      <h1 data-testid="employee-polls-heading" className="text-3xl font-semibold text-center text-black-700">
          Employee Polls
        </h1>
      <QuestionList
        title={"New Questions"}
        questions={questions}
        users={users}
        questionFilter={unanswered}
      />
      <QuestionList
        title={"Done"}

        questions={questions}
        users={users}
        questionFilter={answered}
      />
    </div>
  );
};

const mapStateToProps = ({ authenticatedUser, questions, users }) => ({
  authenticatedUser,
  questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp),
  users,
});

export default connect(mapStateToProps)(Home);
