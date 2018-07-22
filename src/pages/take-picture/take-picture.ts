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

  ionViewDidLoad() {
    let video = <any>document.getElementById("video");

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        video.src = window.URL.createObjectURL(stream);
        video.play();
      });
    }
  }

  dismiss = () => {
    this.viewCtrl.dismiss();
  };

  takePicture = () => {
    var video = <any>document.getElementById("video");
    var canvas = <any>document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, 320, 240);

    video.classList.add("animated");
    video.classList.add("flash");

    setTimeout(() => {
      let modal = this.modalCtrl.create(SendPhotoPage, {
        photo: canvas.toDataURL()
      });

      modal.present();
    }, 800);
  };
}