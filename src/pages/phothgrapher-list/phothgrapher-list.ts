import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the PhothgrapherListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phothgrapher-list',
  templateUrl: 'phothgrapher-list.html',
})
export class PhothgrapherListPage {

  data1= {
  	name : "Linda Soaz",
  	device : "Drone",
  	star : "star"
  }
  data2= {
   	name : "John",
  	device : "Drone",
  	star : "star"	
  }
  data3= {
   	name : "Mike",
  	device : "Drone",
  	star : "star"	
  }

  showing : boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhothgrapherListPage');


  }
  ch(){
    if(!this.showing)
      this.showing=true;
    else 
      this.showing=false;
  }
  goToPay(arg){
  	
  	switch(arg)
  	{
  		case '1':  	
 		this.navCtrl.setRoot("PayPage",{ data : this.data1 })
 		break;
 		case '2':  	
 		this.navCtrl.setRoot("PayPage",{ data : this.data2 })
 		break;
 		case '3':  	
 		this.navCtrl.setRoot("PayPage",{ data : this.data3 })
 		break;
 	}
 	
  }

}
