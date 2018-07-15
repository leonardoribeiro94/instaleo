import { Component } from "@angular/core";
import { ViewController, ModalController } from "ionic-angular";

import { SendPhotoPage } from "../send-photo/send-photo";

@Component({
  selector: "page-take-picture",
  templateUrl: "take-picture.html"
})
export class TakePicturePage {
  constructor(
    private viewCtrl: ViewController,
    private modalCtrl: ModalController
  ) {}

  dismiss = () => {
    this.viewCtrl.dismiss();
  };

  takePicture = () => {
    let modal = this.modalCtrl.create(SendPhotoPage);
    modal.present();
  };
}
