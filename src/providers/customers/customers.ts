import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CustomersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CustomersProvider {
  data: any;
  constructor(public http: HttpClient) {
   this.data=[
     {id:"1" , name:"nut" ,tell:"0858585964" , address:"109 moo.4"},
     {id:"2" , name:"not" ,tell:"0895485264" , address:"109 moo.4"},
     {id:"3" , name:"nay" ,tell:"0854872586" , address:"109 moo.4"}
   ];
  }
   loadAll(){
     return Promise.resolve(this.data);
   }
   getcustomerById(id){
      for(var i=0;i<(this.data).length;i++){
        if(this.data[i].id==id){
          return Promise.resolve(this.data[i]);
        }

      }
   }

}
