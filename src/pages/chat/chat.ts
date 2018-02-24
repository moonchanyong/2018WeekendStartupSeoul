import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';


/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  txt: string = ""
  data={ name:"initial",device:"initial",star:"initial"};
  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	public http:Http
  	) {
  }
  send(){
  	let json = this.http.post("https://translation.googleapis.com/language/translate/v2",{
  		q: this.txt,
  		target: "fr",
  		source: "ko",
  		key: "AIzaSyBCpLbJNPfx_GmNORISTUKnAPzgF-FL4vU"
  	}).toPromise().then(data => {
  	  console.log(data);	
  	}).catch(err => {
  		console.log(err);
  	});
  	
  	this.txt = ""
  }
  ionViewDidLoad() {
    this.data=this.navParams.get("data");

  }

}
