import { Girl } from './../interfaces/girl';
import { PersonService } from './../services/person.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss'],
})
export class PersonDetailComponent implements OnInit {
  girl: Girl;

  constructor(
    private route: ActivatedRoute,
    private girlService: PersonService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((map) => {
      const id = map.get('id');
      this.girl = this.girlService.getGirl(id);
    });
  }
}
