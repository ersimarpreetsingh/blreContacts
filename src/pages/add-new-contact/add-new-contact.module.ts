import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNewContactPage } from './add-new-contact';

@NgModule({
  declarations: [
    AddNewContactPage,
  ],
  imports: [
    IonicPageModule.forChild(AddNewContactPage),
  ],
})
export class AddNewContactPageModule {}
