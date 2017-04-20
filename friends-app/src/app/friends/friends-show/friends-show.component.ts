
import { FriendsService } from './../friends.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Friend } from './../friend'

@Component({
  selector: 'app-friends-show',
  templateUrl: './friends-show.component.html',
  styleUrls: ['./friends-show.component.css']
})
export class FriendsShowComponent implements OnInit {

  @Input() friend:Friend

  @Output() showFriendsListClick = new EventEmitter()

  constructor(private _friendsService:FriendsService) { }

  ngOnInit() {
    console.log("friends-show: ngOnInit called and this.friend is ", this.friend)
  }

  onClickShowList()
  {
    this.showFriendsListClick.emit()
  }


}
