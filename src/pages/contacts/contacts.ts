import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as faker from 'faker';
/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {
  public userArray:any = [];
  public prevValue:any = null

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userArray= [];
    for(let i=0; i<30; i++){
      this.userArray.push(
                    {  
                      firstName: faker.name.firstName(), 
                      lastName: faker.name.lastName(),
                      fullName: faker.name.findName(),
                    }
      );
    }
    this.userArray.sort(function(a, b) {
      var nameA = a.firstName.toUpperCase();
      var nameB = b.firstName.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }

  importContacts(){
    this.navCtrl.push('ImportContactsPage');
  }

  getValue(val){
    if(this.prevValue == null){
      this.prevValue = val.charAt(0);
      return val.charAt(0);
    }
    else if(this.prevValue == val.charAt(0)){
      return null;
    }
    else{
      this.prevValue = val.charAt(0);
      return val.charAt(0);
    } 
  }

  contactDetailsPage(contact){
    this.navCtrl.push('ViewContactPage', contact);
  }
}
