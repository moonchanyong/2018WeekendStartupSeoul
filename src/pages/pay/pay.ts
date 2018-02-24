import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
   declare var google;

@IonicPage()
@Component({
  selector: 'page-pay',
  templateUrl: 'pay.html',
})
export class PayPage {
	@ViewChild('map') mapElement: ElementRef;
	map: any;

  data={name:"",device:"",star:""};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data=this.navParams.get("data");
  	console.log(this.data);
  }

  ionViewDidLoad() {
    this.loadMap();
  }
 loadMap(){
 
    let latLng = new google.maps.LatLng(48.858363, 2.294106);
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    var marker = new google.maps.Marker({
    position: latLng,
    map: this.map
    });    
  }

  goToChat(){
  	this.navCtrl.setRoot("ChatPage", {data : this.data});
  }
}
