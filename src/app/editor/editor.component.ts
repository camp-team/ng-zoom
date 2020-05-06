import { Girl } from './../interfaces/girl';
import { PersonService } from './../services/person.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  form = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(40)]],
  });
  id: string;
  person: Girl;

  constructor(
    private fb: FormBuilder,
    private personService: PersonService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((map) => {
      this.id = map.get('id') || null;
      this.person = this.personService.getGirl(this.id);
      console.log(this.person);
      this.form.setValue({
        name: this.person.name,
      });
    });
  }

  private add() {
    this.personService.addGirl({
      id: Date.now().toString(),
      name: this.form.value.name,
      job: '女優',
      photoURL:
        'https://storage.mainichikirei.jp/images/2019/03/29/20190329dog00m100002000c/001_size6.jpg',
      nickName: 'まさみちゃん',
      birthDay: '1987-06-03',
    });

    this.snackBar.open('作成しました', null, {
      duration: 2000,
    });
  }

  private update() {
    this.personService.updateGirl({
      ...this.person,
      ...this.form.value,
    });
  }

  submit() {
    if (this.id) {
      this.update();
    } else {
      this.add();
    }
  }
}
