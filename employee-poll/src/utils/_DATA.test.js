const { _saveQuestionAnswer, _saveQuestion } = require("./_DATA");
describe("_saveQuestion", () => {
  it("should return true for correct parameters", async () => {
    const question = {
      optionOneText: "optionOneText",
      optionTwoText: "optionTwoText",
      author: "tylermcginnis",
    };

    const savedQuestion = await _saveQuestion(question);
    expect(savedQuestion).toBeTruthy();
    expect(savedQuestion).toEqual({
      id: expect.any(String),
      timestamp: expect.any(Number),
      author: "tylermcginnis",
      optionOne: {
        votes: [],
        text: "optionOneText",
      },
      optionTwo: {
        votes: [],
        text: "optionTwoText",
      },
    });
  });

  it("Should not work if the one of one parameter is missing", async () => {
    const question = {
      optionOneText: "optionOneText",
      author: "tylermcginnis",
    };
    await expect(_saveQuestion(question)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });

});

describe("_saveQuestionAnswer", () => {
  it("should return true for correct parameters", async () => {
    const response = await _saveQuestionAnswer({
      authedUser: "tylermcginnis",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne",
    });

    expect(response).toBeTruthy();
  });

  it("should return error for false parameters", async () => {
    const response = await _saveQuestionAnswer({
      authedUser: "tylermcginnis",
      qid: undefined,
      answer: "optionOne",
    }).catch((e) => e);

    expect(response).toBe("Please provide authedUser, qid, and answer");
  });
});
