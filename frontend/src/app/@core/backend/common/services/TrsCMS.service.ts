import {Injectable} from '@angular/core';
import {HttpService} from '../api/http.service';
import {Observable, throwError} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {TrsCMS} from '../../../../pages/model/TrsCMS';
import {ConfigTrs} from '../../../../pages/model/ConfigTrs';


@Injectable()
export class TrsCMSService {

  private baseurl = 'trs';


  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpService) {
  }

  // POST JSON.stringify(data)
  public create(data: TrsCMS): Observable<any> {
    return this.http.post(this.baseurl + '/create', data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  // GET
  public get(year: number): Observable<any> {
    return this.http.get(this.baseurl + '/getByYear/' + year)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }
  public getByWeek(year: number , week: number): Observable<any> {
    return this.http.get(this.baseurl + '/getByWeek/' + year + '/' + week)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }
  // GET
  public getAll(): Observable<any> {
    return this.http.get(this.baseurl + '/getAll/')
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  // PUT
  public update(data: TrsCMS): Observable<TrsCMS> {
    return this.http.put(this.baseurl + '/update', data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
    console.log(data);
  }
  public findByYearByWeek(year: number  , week: number ): Observable<any> {
    return this.http.get(this.baseurl + '/getObjectifByYear/' + year + '/' + week)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  // DELETE
  public delete(id: number) {
    return this.http.delete(this.baseurl + '/delete/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
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
