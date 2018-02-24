import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
   declare var google;

  


  @IonicPage()
  @Component({
    selector: 'page-reservation',
    templateUrl: 'reservation.html',
  })
export class ReservationPage {
	@ViewChild('map') mapElement: ElementRef;
  	map: any;
	country: string = "";
	reservationDay: string="";
  city:string =""
  pinPoint:string= ""
	time: number;

  france = new google.maps.LatLng(46.616597, 2.612052);
  paris = new google.maps.LatLng(48.854998, 2.341908);
  tower= new google.maps.LatLng(48.858349, 2.294406);
  latLng = new google.maps.LatLng(37.506091, 127.052397);
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  loadMap(latLng, zoom){
 
    
 
    let mapOptions = {
      center: latLng,
      zoom: zoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    var marker = new google.maps.Marker({
    position: latLng,
    map: this.map
    });    
  }



  goTopgl(){
  	this.navCtrl.setRoot("PhothgrapherListPage");
  }
  ionViewDidLoad() {
    this.loadMap(this.latLng, 15);
    setTimeout(()=>{
     this.reservationDay="2018-02-28";
     setTimeout(()=>{
      this.country="프랑스";
      this.loadMap(this.france,5);
       setTimeout(()=>{
       this.city="파리";
       this.loadMap(this.paris,10);
       setTimeout(()=>{
         this.pinPoint="에펠탑"
         this.loadMap(this.tower,15);
         setTimeout(()=>{
         this.time=2
         },1000)
       },2000)
       }, 2000)
     }, 2000)
    }, 1000)
  }

}
