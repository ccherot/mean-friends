
import { FriendsService } from './../friends.service';
import { Friend } from './../friend';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-friends-edit',
  templateUrl: './friends-edit.component.html',
  styleUrls: ['./friends-edit.component.css']
})
export class FriendsEditComponent implements OnInit {

  @Input() friend:Friend

  @Output() friendsEditSubmitClick = new EventEmitter

  constructor(private _friendsService:FriendsService) { }

  ngOnInit() {
    //this.friend =  this._friendsService.friendToEdit
    //console.log("friends-edit: ngOnInit called and this._friendsService.friendToEdit is ", this._friendsService.friendToEdit )
    console.log("friends-edit: ngOnInit called and this.friend is ", this.friend)
  }

  onClickSubmit()
  {
    console.log("friends-edit: onClickSubmit")
    this._friendsService.update(this.friend).toPromise()
    .then( response => {
      console.log("friends-edit: onClickSubmit > response is " + response)
      this.friendsEditSubmitClick.emit(response)
    })
    .catch( error => {
      console.log("friends-edit: onClickSubmit > error is " + error)
      this.friendsEditSubmitClick.emit(error)
    })
  }

}
