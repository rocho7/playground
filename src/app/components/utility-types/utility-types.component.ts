import { Component, OnInit } from '@angular/core';
import { Users } from './utility-types.const/user.class';

@Component({
  selector: 'app-utility-types',
  templateUrl: './utility-types.component.html',
  styleUrls: ['./utility-types.component.css']
})
export class UtilityTypesComponent implements OnInit {

  users: Users;

  constructor() {
    this.users = new Users();
  }


  ngOnInit(): void {

    // * la propiedad lastName es opcional
   this.users.add({
      createdAt: new Date('2020/03/01'),
      updateAt: new Date('2021/03/03'),
      name: 'Angel'
    });

    // * La propiedad lastName es obligatoria
    this.users.addWithFullInfo({
      createdAt: new Date('2020/03/01'),
      updateAt: new Date('2021/03/03'),
      name: 'Angel',
      lastName: 'León'
    });

    this.users.find({
      name: 'Angel'
    });

    this.users.update({
      name: 'Federico',
      lastName: 'Lorca'
    });

    this.users.groupByName()
  }

}
