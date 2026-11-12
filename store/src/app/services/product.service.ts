import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
   private http = inject(HttpClient);
  private ApiUrl = environment.apiUrl

  getAll(): Observable<ProductModel[]>{
    return this.http.get<ProductModel[]>(this.ApiUrl)
  } 
}
