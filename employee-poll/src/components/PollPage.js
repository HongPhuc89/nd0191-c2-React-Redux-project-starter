import { connect } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { handleAddQuestionAnswer } from "../actions/questions";

const PollPage = ({ dispatch, authenticatedUser, question, author }) => {
  const navigate = useNavigate();

  if (!authenticatedUser || !question || !author) {
    return <Navigate to="/404" />;
  }

  const hasVotedForOptionOne = question.optionOne.votes.includes(
    authenticatedUser.id
  );
  const hasVotedForOptionTwo = question.optionTwo.votes.includes(
    authenticatedUser.id
  );
  const hasVoted = hasVotedForOptionOne || hasVotedForOptionTwo;

  const handleOptionOne = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestionAnswer(question.id, "optionOne"));
    navigate("/");
  };

  const handleOptionTwo = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestionAnswer(question.id, "optionTwo"));
    navigate("/");
  };

  const calcPercentage = (option, question) => {
    const numberVotesTotal =
      question.optionOne.votes.length + question.optionTwo.votes.length;
    switch (option) {
      case "optionOne":
        return (
          (question.optionOne.votes.length / numberVotesTotal) * 100 + " %"
        );
      case "optionTwo":
        return (
          (question.optionTwo.votes.length / numberVotesTotal) * 100 + " %"
        );
      default:
        return "";
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold mt-9 mb-6">Poll by {author.id}</h1>
      </div>

      <div className="flex justify-center">
        <img src={author.avatarURL} alt="Profile" className="h-24 w-24" />
      </div>

      <div className="flex justify-center">
        <h2 className="text-2xl font-bold mt-20">Would You Rather?</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <button
          onClick={handleOptionOne}
          disabled={hasVoted}
          className={
            "rounded-xl bg-zinc-100 hover:shadow-xl transition" +
            (hasVotedForOptionOne ? "bg-lime-400" : "")
          }
        >
          <div className={hasVotedForOptionOne ? "chosen" : ""}>
            <p className="font-bold mb-0">{question.optionOne.text}</p>
            {!hasVoted && (
              <p className="underline underline-offset-4">Click</p>
            )}
            {hasVoted && (
              <p className="text-xs">
                Votes: {question.optionOne.votes.length} (
                {calcPercentage("optionOne", question)})
              </p>
            )}
          </div>
        </button>

        <button
          onClick={handleOptionTwo}
          disabled={hasVoted}
          className={
            "p-2 rounded-xl bg-zinc-100 hover:shadow-xl transition" +
            (hasVotedForOptionTwo ? "bg-lime-400" : "")
          }
        >
          <p className="font-bold mb-2">{question.optionTwo.text}</p>
          {!hasVoted && (
            <p className="underline underline-offset-4 mb-3">Click</p>
          )}
          {hasVoted && (
            <p className="text-xs">
              Votes: {question.optionTwo.votes.length} (
              {calcPercentage("optionTwo", question)})
            </p>
          )}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authenticatedUser, users, questions }) => {
  try {
    const question = Object.values(questions).find(
      (question) => question.id === useParams().id
    );
    const author = Object.values(users).find(
      (user) => user.id === question.author
    );
    return { authenticatedUser, question, author };
  } catch (e) {
    return <Navigate to="/404" />;
  }
};

export default connect(mapStateToProps)(PollPage);
