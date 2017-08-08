import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-user', //used as a tag in app.component to include
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
name:string;
email:string;
age:number;
address:Address; //interface (can be seen at end)
hobbies:string[];
posts:Posts;
isEdit:boolean;


  constructor(private dataService:DataService) { //runs at start
    console.log('constructor ran~');
  }

  ngOnInit() { //also run at start
    console.log('ngOnInit ran...');
    this.name = 'Min Yoongi';
    this.email = 'agustd@gmail.com';
    this.age = 22;
    this.address = {
      country: 'Korea',
      city: 'Seoul',
      zip: 1234
    };
    this.hobbies = ['Rapping', 'Producing', 'Singing', 'Composing', 'Dancing', 'Sleeping'];

    this.dataService.getPosts().subscribe((posts) => { //list all in console (subscribes cuz gets observable)
      console.log(posts);
      this.posts = posts;
    });

    this.isEdit = true;
  }

onClick(){
  console.log('TAEGI!!!');
  this.name = 'Kim Taehyung';
  this.hobbies.push('Being Smol');
}

addHobby(hobby:string){
  this.hobbies.unshift(hobby);
  return false;
}

delete(hobby:string){
  for(let i = 0; i < this.hobbies.length; i++){
    if(this.hobbies[i]==hobby){

    
  this.hobbies.splice(i, 1);

    }
  }
}

editToggle(){
  this.isEdit = !this.isEdit;
}

}

interface Address{ //used to make decalarations neater (can be put in separate file)
country:string;
city:string;
zip:number;
}

interface Posts{
  id:number,
  title:string,
  body:string,
  userId:number
}