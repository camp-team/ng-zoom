import { Girl } from './../interfaces/girl';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  girls: Girl[] = [
    {
      id: 'masami',
      name: '長澤まさみ1',
      job: '女優',
      photoURL:
        'https://storage.mainichikirei.jp/images/2019/03/29/20190329dog00m100002000c/001_size6.jpg',
      nickName: 'まさみちゃん',
      birthDay: '1987-06-03',
    },
    {
      id: 'masami2',
      name: '長澤まさみ2',
      job: '格闘家',
      photoURL:
        'https://storage.mainichikirei.jp/images/2019/03/29/20190329dog00m100002000c/001_size6.jpg',
      nickName: 'KKKK',
      birthDay: '1987-06-03',
    },
    {
      id: 'masami3',
      name: '長澤まさみ3',
      job: '女優',
      photoURL:
        'https://storage.mainichikirei.jp/images/2019/03/29/20190329dog00m100002000c/001_size6.jpg',
      nickName: 'まさみちゃん',
      birthDay: '1987-06-03',
    },
  ];

  constructor() {}

  getGirls() {
    return this.girls;
  }

  getGirl(id: string): Girl {
    return this.girls.find((girl) => girl.id === id);
  }

  addGirl(girl: Girl) {
    this.girls.push(girl);
  }

  updateGirl(data: Girl) {
    this.girls.map((girl) => {
      if (girl.id === data.id) {
        return Object.assign(girl, data);
      } else {
        return girl;
      }
    });
  }

  deleteGirl(id: string) {
    this.girls = this.girls.filter((girl) => girl.id !== id);
  }
}
