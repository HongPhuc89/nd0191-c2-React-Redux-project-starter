import { connect } from "react-redux";
import QuestionTabs from "./QuestionTabs";

const Home = ({ authenticatedUser, questions, users }) => {
  return (
    <div>
      <h1
        data-testid="employee-polls-heading"
        className="text-3xl font-semibold text-center text-black-700 mb-10 mt-10"
      >
        Employee Polls
      </h1>
      <QuestionTabs
        authenticatedUser={authenticatedUser}
        questions={questions}
        users={users}
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
