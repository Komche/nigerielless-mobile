import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environment';
@Injectable({
  providedIn: 'root'
})
export class WordpressService {
  url = '';
  productUrl = environment.site_url + environment.product;
  imageUrl = environment.site_url + environment.product_media;
  totalPosts = null;
  pages: any;
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.productUrl);
  }


getProductImage(media) {
  return this.http.get(this.imageUrl + media);
}


}
