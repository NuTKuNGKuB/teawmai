import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomersProvider } from '../../providers/customers/customers';
import { CustomerdetailPage } from '../customerdetail/customerdetail';
/**
 * Generated class for the CustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html',
})
export class CustomerPage {
  allcustomer: any = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public data: CustomersProvider) {
    
        this.data.loadAll().then(result=>{ this.allcustomer = result});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerPage');
  }
  showcustomer(cusId){
    this.navCtrl.push(CustomerdetailPage,{id : cusId});
  }

}
