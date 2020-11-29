import { Machine, assign } from "xstate";

export const quizMachine = Machine({
  id: "quizMachine",
  initial: "idle",
  context: {
    retries: 0,
    questionNumber: 0,
  },
  states: {
    idle: {
      on: {
        FETCH: "loading",
      },
    },
    loading: {
      on: {
        RESOLVE: "homeScreen",
        REJECT: "loading",
      },
    },
    homeScreen: {
      on: {
        BEGIN: "quizScreen",
      },
    },
    quizScreen: {
      on: {
        QUESTION_ONE: {
          target: "questionOne",
          actions: assign({
            questionNumber: (context) => context.questionNumber + 1,
          }),
        },
      },
    },
    questionOne: {
      on: {
        QUESTION_TWO: {
          target: "questionTwo",
          actions: assign({
            questionNumber: (context) => context.questionNumber + 1,
          }),
        },
      },
    },
    questionTwo: {
      on: {
        QUESTION_THREE: {
          target: "questionThree",
          actions: assign({
            questionNumber: (context) => context.questionNumber + 1,
          }),
        },
      },
    },
    questionThree: {
      on: {
        QUESTION_FOUR: {
          target: "questionFour",
          actions: assign({
            questionNumber: (context) => context.questionNumber + 1,
          }),
        },
      },
    },
    questionFour: {
      on: {
        QUESTION_FIVE: {
          target: "questionFive",
          actions: assign({
            questionNumber: (context) => context.questionNumber + 1,
          }),
        },
      },
    },
    questionFive: {
      on: {
        QUESTION_SIX: {
          target: "questionSix",
          actions: assign({
            questionNumber: (context) => context.questionNumber + 1,
          }),
        },
      },
    },
    questionSix: {
      on: {
        QUESTION_SEVEN: {
          target: "questionSeven",
          actions: assign({
            questionNumber: (context) => context.questionNumber + 1,
          }),
        },
      },
    },
    questionSeven: {
      on: {
        QUESTION_EIGHT: {
          target: "questionEight",
          actions: assign({
            questionNumber: (context) => context.questionNumber + 1,
          }),
        },
      },
    },
    questionEight: {
      on: {
        QUESTION_NINE: {
          target: "questionNine",
          actions: assign({
            questionNumber: (context) => context.questionNumber + 1,
          }),
        },
      },
    },
    questionNine: {
      on: {
        QUESTION_TEN: {
          target: "questionTen",
          actions: assign({
            questionNumber: (context) => context.questionNumber + 1,
          }),
        },
      },
    },
    questionTen: {
      on: {
        RESULTS: {
          target: "resultsScreen",
          actions: assign({
            questionNumber: (context) => context.questionNumber + 1,
          }),
        },
      },
    },
    resultsScreen: {
      on: {
        PLAY_AGAIN: "quizScreen",
      },
    },
    failure: {
      on: {
        RETRY: {
          target: "loading",
          actions: assign({
            retries: (context) => context.retries + 1,
          }),
        },
      },
    },
  },
});
