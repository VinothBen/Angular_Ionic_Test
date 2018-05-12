import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  landingPageData: any;
  navigationItems: any;
  logoURL: any;
  filterSectionItems: any;
  trendingPlaceDetails: any;
  locations: any;
  filterSectionItemsKey: any;
  constructor(public navCtrl: NavController, public http: Http) {
    this.http.get('http://localhost:5984/ben/23c264d56c5cea025bab4945590005c2').map(res => res.json()).subscribe(data => {
        this.landingPageData = data.landingPage;
        this.navigationItems = this.landingPageData.navigationitems;
        this.logoURL = this.landingPageData.logoURL;
        this.filterSectionItems = this.landingPageData.filterSection;
        this.filterSectionItemsKey = Object.keys(this.filterSectionItems);
        this.locations = this.filterSectionItems.Location;
        this.trendingPlaceDetails = this.landingPageData.trendingPlaceDetails;
        console.log("...data", this.filterSectionItems, this.navigationItems);
    },
    err => {
      console.log("Serveice request failed!");
    }
    );
  }
  onClick = (details) =>{
    console.log("...ClickedDetails", details);
  }
}
