import { ProxyState } from "../AppState.js";
import { Question } from "../Models/Question.js"
import { api } from "./AxiosService.js"


class QuestionsService {
  constructor() {
    console.log('Services Online');
  }

  async getQuestions(url) {
    console.log('Service: Getting the Questions');
    const response = await api.get(url)
    ProxyState.questions = response.data.results.map(q => new Question(q))
    console.log('Trivia questions retrieval response', response.data.results);
  }
}






export const questionsService = new QuestionsService