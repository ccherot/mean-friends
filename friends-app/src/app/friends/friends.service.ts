import { Friend } from './friend';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import 'rxjs'


@Injectable()
export class FriendsService {

  //this is the master friends list 
  friends: Friend[]

  //this is a friend that will be edited
  friendToEdit: Friend


  constructor(private _http:Http) { console.log('friends-service: constructor') }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('friends-service: ngOnInit')
  }

  getFriendsObservable()
  {
    return this._http.get('/friends')
      .map( (response: Response) => response.json() )
  }

  /*
  getFriends()
  {
    console.log('FreindsService: getFriends called')

    //do the whole operation here and set the local array of friends
    this._http.get('/friends').map( (response: Response) => response.json() ).subscribe(
      ( data ) => {
        console.log('friends-service: getFriends > data is ', data)
        
        //set the local list of Friends
        this.friends = data

        console.log('freinds-service: getFriends > friends is now ', this.friends)
      }, 
      ( error: Error ) => { console.log('ERROR: getFriends > there was an error getting friends') },
      () => { console.log('friends-service: getFriends: continue')}
    ) 
  }
  */

  create(friend: Friend){
    console.log("friends-service: create > friend is ", friend)
  	const headers = new Headers({ "Content-Type": "application/json" })
  	const options = new RequestOptions({ headers: headers })

  	return this._http.post("/friends", friend, options)
      .map( (response: Response) => response.json() )
      
  }

  delete(id: string){
    
    //const headers = new Headers({ "Content-Type": "application/json" })
  	//const options = new RequestOptions({ headers: headers, body: {id: id}})

  	return this._http.delete("/friends/" + id) // options
      .map( (response: Response) => response.json() ) 
  		
  }

  update(friend: Friend)
  {
    console.log("friends-service: update ", friend)
    
    const headers = new Headers({ "Content-Type": "application/json" })
  	const options = new RequestOptions({ headers: headers })

    return this._http.patch ('/friends', friend, options)
      .map ( (response: Response) => response.json() )
      
  }
}





