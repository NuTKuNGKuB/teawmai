import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { CommunityPage } from '../community/community';
import { GalleryPage } from '../gallery/gallery';
import { SlidesPage } from '../slides/slides';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  gotoAbout(){
    this.navCtrl.setRoot(AboutPage);
  }
  gotoCommunity(){
    this.navCtrl.push(CommunityPage);
  }
  gotoSlidesPage(){
    this.navCtrl.push(SlidesPage);
  }
}
