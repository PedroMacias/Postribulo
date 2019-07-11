import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Question } from './question.model';
import icons from './icons';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html'
})
export class QuestionFormComponent {
  icons: object[] = icons;

  getIconVersion(icon: any) {
    let version = '';
    if (icon.versions.font.includes('plain-wordmark')) {
      version = 'plain-wordmark';
    } else {
      version = icon.versions.font[0];
    }

    if (icon.name === 'illustrator') {
              version = icon.versions.svg[0];
          }

    return version;

  }

  onSubmit(form: NgForm) {
    const q = new Question(
      form.value.title,
      form.value.description
    );
    console.log(q);
  }
}
