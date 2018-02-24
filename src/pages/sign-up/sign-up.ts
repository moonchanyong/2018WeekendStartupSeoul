import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { NgForm } from '@angular/forms';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up', 
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
	constructor(public navCtrl: NavController, public navParams: NavParams){

	}
	name: string = "문찬용"
	mail: string ="mcy7272@naver.com"
	phone: string ="010-9851-7008"
	pwd: string ="1234"
	pwdCheck:string = "1234"
	number: number = 1102430;
	birthday: string ="1992-06-10"
	divVisible:boolean = false;
	setDivVisible: boolean = true;
  signup(f: NgForm) {

  		localStorage.setItem(this.mail,this.pwd);
  		console.log("sign up and pop", localStorage.getItem(this.mail));
  		this.divVisible = true;
    } 
  goToClient(){
  	this.navCtrl.setRoot("ReservationPage");

  }
  openSetbutton(){
  	this.setDivVisible = true;
  	this.divVisible = false;
  }

}
