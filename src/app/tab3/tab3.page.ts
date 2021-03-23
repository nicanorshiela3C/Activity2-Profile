import { Component } from '@angular/core';
import { ContactServiceService } from '../services/contact-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  contName = "";
  contLastname = "";
  contNumber = ""
  contacts: any = [];

  constructor(public contactService: ContactServiceService, public alertController: AlertController) { }

  saveC() {
    let contact = {
      name: this.contName,
      lastname: this.contLastname,
      number: this.contNumber
      
    }
    this.contacts.push(contact);
    this.clearField();
    console.log(this.contacts);
  }

  clearField() {
    this.contName = "";
    this.contLastname = "";
    this.contNumber = "";
  }
  async delete(cont){
    const alert = await this.alertController.create({
      header: 'Delete?',
      message: '',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'icon-color',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text:'Yes',
          cssClass:'icon-color',
          handler: () => {
            let index = this.contacts.indexOf(cont);
            if(index > -1){
              this.contacts.splice(index,1);
              console.log('Yes');
            }
          }
        }
      ]
    });
      await alert.present();
  }

}