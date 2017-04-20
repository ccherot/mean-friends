import { FriendsService } from './../friends.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Friend } from './../friend'


@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  @Input() friends:Friend[]

  @Output() friendsListDeleteClick = new EventEmitter()
  @Output() friendsListEditClick = new EventEmitter() 
  @Output() friendsListShowClick:EventEmitter<Friend> = new EventEmitter<Friend>() 
  @Output() friendsListCreateClick = new EventEmitter()
  
  constructor(private _friendsService:FriendsService) { }

  ngOnInit() {
    console.log("friends-list: ngOnInit called")
  }

  onClickDelete(friend:Friend)
  {
    console.log("friends-list: onClickDelete called")
    //call the delete method of the _friendsService
    this._friendsService.delete(friend._id).toPromise()
      .then( response => {
        console.log("friend-list: onClickDelete > response is ", response)
        this.friendsListDeleteClick.emit(response)
      })
      .catch( error => {
        console.log("ERROR: friend-list: onClickDelete > ERROR is ", error)
        this.friendsListDeleteClick.emit(error)
      })
  }

  onClickEdit(friend:Friend)
  {
    console.log("friends-list: onClickEdit called with friend ", friend)
    //bubble up the edit click event so the parent can
    //set the friendToEdit property and make the edit component visible
    this.friendsListEditClick.emit(friend)
  }

  onClickShow(friend:Friend)
  {
    console.log("friends-list: onCliCkShow called and friend is ", friend)
    this.friendsListShowClick.emit(friend)
  }

  onKeyDown(event)
  {
    console.log("friends-list: onKeyDown called and event is ", event)
    //TODO:  APPLY A FILTER TO THE FRIENDS ARRAY?
  }

  onClickCreate()
  {
    console.log("friends-list: onClickCreate called ")
    this.friendsListCreateClick.emit()
  }
}
