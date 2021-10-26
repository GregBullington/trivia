import { ProxyState } from "../AppState.js"
import { questionsService } from "../Services/QuestionsService.js"


function _draw() {
  let people = ProxyState.questions
  let template = ''
  people.forEach(q => template += q.Template)
  document.getElementById('question').innerHTML = template
}
export class QuestionsController {

  constructor() {
    console.log('Controller Online');
    ProxyState.on('questions', _draw)
    this.getQuestions()
  }


  async getQuestions(url) {
    try {
      await questionsService.getQuestions(url)
      console.log('Controller: Questions Retrieved');
    }
    catch (error) {
      console.error('What the hell happened!?', error);
    }
  }
}
