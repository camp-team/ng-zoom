import { PersonService } from './services/person.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'deakan';

  constructor(private personService: PersonService) {}

  deleteMasami2() {
    this.personService.deleteGirl('masami2');
  }
}
