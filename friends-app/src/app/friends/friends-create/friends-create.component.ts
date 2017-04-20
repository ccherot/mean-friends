
import { FriendsService } from './../friends.service';
import { Friend } from './../friend';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-friends-create',
  templateUrl: './friends-create.component.html',
  styleUrls: ['./friends-create.component.css']
})
export class FriendsCreateComponent implements OnInit {

  newFriend:Friend = new Friend()

  @Output() friendCreateSubmitClick = new EventEmitter

  dateString = ""

  constructor(private _friendsService: FriendsService) { }

  ngOnInit() {
  }

  onClickSubmit()
  {
    console.log("friends-create: onClickSubmit > newFriend is ", this.newFriend)
    //this.newFriend.dob = new Date(this.dateString)
    this._friendsService.create(this.newFriend).toPromise()
      .then( response => {
        console.log("friends.create: onClickSubmit > response is ", response)
        this.friendCreateSubmitClick.emit(response)
        //bubble that up to the parent
      })
      .catch (error => {
        console.log("friends.create: onClickSubmit > error is ", error)
        this.friendCreateSubmitClick.emit(error)
       })

    this.newFriend = new Friend()
    
  }


}
