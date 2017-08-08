import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; //import for http
import 'rxjs/add/operator/map'; //imports map (used for conversion)


@Injectable()
export class DataService {

  constructor(public http:Http) {
    console.log('Data Service Connected');
  }
  
getPosts(){
  return this.http.get('http://jsonplaceholder.typicode.com/posts')
    .map(res => res.json()); //converts observable(posts) to json
}

}
