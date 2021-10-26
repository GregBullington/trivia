



export class Question {
  constructor(data) {
    this.question = data.question
    this.difficulty = data.difficulty
    this.category = data.category
    this.correct_answer = data.correct_answer
    this.incorrect_answer = data.incorrect_answer
  }

  get Template() {
    return `
    <div class="p-3">
      <b>
        ${this.question}
      </b>
    </div>
    <div class="row">
      <p>Select an answer below!</p>
    </div>`

  }
}