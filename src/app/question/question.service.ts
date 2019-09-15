import { Injectable } from '@angular/core';
import { Question } from './question.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import urljoin from 'url-join';
import 'rcjs/add/operator/toPromise';

@Injectable()
export class QuestionService {

private questionsUrl: string;

constructor(private http: HttpClient) {
  this.questionsUrl = urljoin(environment.apiUrl, 'questions');
}

getQuestions(): Promise<void | Question[]> {
  return this.http.get(this.questionsUrl)
            .toPromise()
            .then(response => JSON.parse(JSON.stringify(response as Question[])))
            .catch(this.handleError);
}

handleError(error: any) {
  const errMsg = error.message ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  console.log(errMsg);
}
}
