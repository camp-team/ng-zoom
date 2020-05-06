import { PersonService } from './../../services/person.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  navLinks = [
    {
      path: '/friends',
      label: '友達',
    },
    {
      path: '/girls',
      label: '彼女',
    },
    {
      path: 'tinder',
      label: 'Tinder',
    },
  ];

  girls = this.personService.getGirls();

  constructor(private personService: PersonService) {}

  ngOnInit(): void {}
}
