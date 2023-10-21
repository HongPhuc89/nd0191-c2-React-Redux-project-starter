import React from "react";
import { connect } from "react-redux";
import QuestionList from "./QuestionList";

const QuestionTabs = ({ authenticatedUser, questions, users }) => {
  const [openTab, setOpenTab] = React.useState(1);
  const unanswered = (question) =>
    !question.optionOne.votes.includes(authenticatedUser.id) &&
    !question.optionTwo.votes.includes(authenticatedUser.id);

  const answered = (question) =>
    question.optionOne.votes.includes(authenticatedUser.id) ||
    question.optionTwo.votes.includes(authenticatedUser.id);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-blue-600"
                    : "text-blue-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Unanswered Questions
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-blue-600"
                    : "text-blue-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Answered Questions
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <QuestionList
                    questions={questions}
                    users={users}
                    questionFilter={unanswered}
                  />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <QuestionList
                    questions={questions}
                    users={users}
                    questionFilter={answered}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect()(QuestionTabs);
