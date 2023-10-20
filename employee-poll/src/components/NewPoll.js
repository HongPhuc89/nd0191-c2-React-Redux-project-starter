import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleAddQuestion } from "../actions/questions";

const NewPoll = ({ dispatch }) => {
  const navigate = useNavigate();
  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");

  const isSubmitDisabled = !firstOption || !secondOption;

  const handleFirstOptionChange = (e) => {
    const value = e.target.value;
    setFirstOption(value);
  };

  const handleSecondOptionChange = (e) => {
    const value = e.target.value;
    setSecondOption(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(firstOption, secondOption));
        navigate("/");
  };

  return (
    <div>
      <div className="flex justify-center">
      <h1 className="text-3xl font-bold mt-9 mb-9">Create Your Own Poll</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mt-3">
          <label
            htmlFor="firstOption"
            data-testid="firstOptionLabel"
            className="block text-sm font-medium text-slate-700"
          >
            First Option
          </label>
          <div className="mt-1">
            <input
              value={firstOption}
              onChange={handleFirstOptionChange}
              type="text"
              name="firstOption"
              id="firstOption"
              className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
            />
          </div>
        </div>

        <div className="mt-3">
          <label
            htmlFor="secondOption"
            className="block text-sm font-medium text-slate-700"
          >
            Second Option
          </label>
          <div className="mt-1">
            <input
              value={secondOption}
              onChange={handleSecondOptionChange}
              type="text"
              name="secondOption"
              id="secondOption"
              className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
            />
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            type="submit"
            disabled={isSubmitDisabled}

            className={`${
              isSubmitDisabled ? "bg-gray-200" : "bg-sky-500 hover:bg-sky-700"
            } px-5 py-2.5 text-sm leading-5 rounded-md`}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect()(NewPoll);
