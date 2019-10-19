import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  products;
  constructor(public navCtr: NavController, private ws: WordpressService) {
    this.ws.getProducts().subscribe(data => {
      console.log(data);
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          //console.log(data[key].featured_media);
          this.ws.getProductImage(data[key].featured_media).subscribe(img => {
            console.log(img);
            data[key].featured_media = img.guid.rendered;
            console.log(data[key].featured_media);
            this.products = data;
          });
        }
      }
      this.products = data;
    });
  }

  ngOnInit() {
  }

}
