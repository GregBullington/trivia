


//@ts-ignore
export const api = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=1&category=28&difficulty=hard&type=multiple',
  timeout: 3000
})