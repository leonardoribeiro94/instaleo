import { Component, ViewChild } from "@angular/core";
import {
  Slides,
  ViewController,
  AlertController,
  NavParams
} from "ionic-angular";

@Component({
  selector: "page-send-photo",
  templateUrl: "send-photo.html"
})
export class SendPhotoPage {
  @ViewChild(Slides) slides: Slides;

  public location: string = "";
  public photo: string = "";
  public filter: string = "original";
  public filters: string[] = [
    "original",
    "_1977",
    "aden",
    "brannan",
    "brooklyn",
    "clarendon",
    "earlybird",
    "gingham",
    "hudson",
    "inkwell",
    "kelvin",
    "lark",
    "lofi",
    "maven",
    "mayfair",
    "moon",
    "nashville",
    "perpetua",
    "reyes",
    "rise",
    "slumber",
    "stinson",
    "toaster",
    "valencia",
    "walden",
    "willow",
    "willow"
  ];

  constructor(
    private viewCtrl: ViewController,
    private alertCtrl: AlertController,
    private navParams: NavParams
  ) {
    this.photo = this.navParams.get("photo");
  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        data => {
          this.location = data.coords.latitude + "," + data.coords.longitude;
        },
        () => {
          let alert = this.alertCtrl.create({
            title: "Ops, algo deu errado",
            subTitle: "Não foi possível obter sua localização",
            buttons: ["OK"]
          });

          alert.present();
        }
      );
    }
  };

  changeFielter = () => {
    let currentIndex = this.slides.getActiveIndex();
    this.filter = this.filters[currentIndex];
  };

  dismiss = () => {
    this.viewCtrl.dismiss();
  };
}
