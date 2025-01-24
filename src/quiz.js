class Quiz {
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    if (this.currentQuestionIndex < this.questions.length) {
      this.currentQuestionIndex++;
    }
  }

  shuffleQuestions() {
    for (var i = this.questions.length - 1; i >= 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.questions[i];
      this.questions[i] = this.questions[j];
      this.questions[j] = temp;
    }
  }

  checkAnswer(answer) {
    if (answer) {
      this.correctAnswers++;
    }
  }

  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      return false;
    } else if (this.currentQuestionIndex === this.questions.length) {
      return true;
    }
  }

  filterQuestionsByDifficulty(difficulty) {
    if (difficulty >= 1 && difficulty <= 3) {
      this.questions = this.questions.filter(
        (questions) => questions.difficulty === difficulty
      );
    }
  }
  // alternative solution
  // if (typeof difficulty !== "number") {
  //     return false;
  //   }
  //   this.questions = this.questions.filter((question) => {
  //     if (question.difficulty === difficulty) {
  //       return true;
  //     }
  //   });

  averageDifficulty() {
    const averageDifficulty = this.questions.reduce((sum, questions) => {
      return sum + questions.difficulty;
    }, 0);

    return averageDifficulty / this.questions.length;
  }
}
