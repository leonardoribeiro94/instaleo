import { Component } from "@angular/core";
import { LoadingController, ModalController } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";
import { ShowMapPage } from "../show-map/show-map";

@Component({
  selector: "page-photos",
  templateUrl: "photos.html"
})
export class PhotosPage {
  public photos: any[] = [];
  constructor(
    private loadingCtrl: LoadingController,
    private db: AngularFireDatabase,
    private modalCtrl: ModalController
  ) {
    let loader = this.loadingCtrl.create({
      content: "Carregando..."
    });
    loader.present();
    this.db
      .list("/photos")
      .valueChanges()
      .subscribe(photos => {
        if (photos) {
          this.photos = photos.reverse();
        }

        loader.dismiss();
      });
  }

  showMap(location) {
    let modal = this.modalCtrl.create(ShowMapPage, { location: location });
    modal.present();
  }
}
