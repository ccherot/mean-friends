import { FriendsService } from './friends.service';
import { Component, OnInit, Input } from '@angular/core';
import { Friend } from './friend'

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends:Friend[]

  friendToEdit: Friend
  friendToShow: Friend

  //these are emitted from the friends-list component
  showFriendsList: Boolean = true
  showEditView: Boolean = false
  showShowView: Boolean = false
  showFriendsCreate: Boolean = false

  //these are emitted from the friend-edit component
  onShowFriendsListClick(status)
  {
    console.log("friends-component: onShowFriendsListClick > status is ", status)

    if (status && status.error)
    {
      alert(status.error)
    }
    else{
      this.updateFriends()
    }
    

    this.showShowView = false;
    this.showEditView = false;
    this.showFriendsList = true;
    this.showFriendsCreate = false;
  }


  onFriendsListDeleteClick(status)
  {
    console.log("friends.component: onFriendsDeleteClick > status is ", status)
    if (status && status.status && status.status == "ok")
    {
      this.updateFriends()
    }
    else if (status && status.error){
      alert(status.error)
    }
  }

  onFriendsListEditClick(friend:Friend) //friend
  //onShowEdit(message) //friend
  {
    //console.log("friends.component: onShowEdit > message is ", message)
    console.log("friends.component: onFriendsListEditClick called  > friend is ", friend)
    this.friendToEdit = friend

    this.showFriendsList = false;
    this.showShowView = false;
    this.showEditView = true;
    this.showFriendsCreate = false
  }

  onFriendsListShowClick(friend)
  {
    console.log("friends.component: onFriendsListShowClick called ", friend)
    this.friendToShow = friend

    this.showShowView = true;
    this.showFriendsList = false;
    this.showEditView = false;
    this.showFriendsCreate = false
  }

  onFriendsListCreateClick()
  {
    console.log("friends.component: onFriendsListCreateClick called ", )
    
    this.showShowView = false
    this.showFriendsList = false
    this.showEditView = false;
    this.showFriendsCreate = true
  }
  

  toggleVisibility()
  {

  }

  constructor(private _friendsService:FriendsService) { }

  ngOnInit() {
    this.updateFriends()
  }

  updateFriends()
  {
    this._friendsService.getFriendsObservable().toPromise()
      .then( friends => {
        this.friends = friends
        console.log("friends.component.ts: updateFriends > success > friends are " + friends)
      })
      .catch(err => console.log("friends.component.ts: updateFriends > ERROR retrieving friends") )
  }

}
