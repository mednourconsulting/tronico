import {HttpHeaders} from '@angular/common/http';
import {HttpService} from '../api/http.service';
import {catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {Produit} from '../../../../pages/model/produit';


@Injectable()
export class ProduitService  {


  private baseurl = 'produit';


  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };


  constructor(private http: HttpService) {
  }
  public getAll(): Observable<any> {
    return this.http.get(this.baseurl + '/getAll')
      .pipe(
        retry(1));
  }
  public create(data: Produit): Observable<Produit> {
    return this.http.post(this.baseurl + '/create', data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }
  public getByProduit(data: String): Observable<any> {
    return this.http.get(this.baseurl + '/getByProduit/' + data)
      .pipe(
        retry(1));
  }
  public delete(id: number) {
    return this.http.delete(this.baseurl + '/delete/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }
  // PUT
  public update(data: Produit): Observable<Produit> {
    return this.http.put(this.baseurl + '/update', data , this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
    console.log(data);
  }
  // Error handling
  public errorHandl(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
