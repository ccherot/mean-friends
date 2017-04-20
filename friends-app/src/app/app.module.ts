
import { FriendsService } from './friends/friends.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FriendsComponent } from './friends/friends.component';
import { FriendsListComponent } from './friends/friends-list/friends-list.component';
import { FriendsCreateComponent } from './friends/friends-create/friends-create.component';
import { FriendsEditComponent } from './friends/friends-edit/friends-edit.component';
import { FriendsShowComponent } from './friends/friends-show/friends-show.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    FriendsListComponent,
    FriendsCreateComponent,
    FriendsEditComponent,
    FriendsShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FriendsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
