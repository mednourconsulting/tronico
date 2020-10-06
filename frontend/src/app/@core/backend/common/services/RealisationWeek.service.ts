import {Injectable} from '@angular/core';
import {HttpService} from '../api/http.service';
import {RealisationW} from '../../../../pages/model/RealisationW';
import {Observable, throwError} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';


@Injectable()
export class RealisationWeekService {

  private baseurl = 'realisationW';


  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpService) {
  }

  // POST JSON.stringify(data)
  public create(data: RealisationW): Observable<RealisationW> {
    console.log(data);
    return this.http.post(this.baseurl + '/create', data , this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  // GET
  public get(id: RealisationW): Observable<any> {
    return this.http.get(this.baseurl + id)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  // GET
  public getAll(atelier: String , year: number): Observable<any> {
    return this.http.get(this.baseurl + '/getAll/' + atelier + '/' + year )
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }
  // GET
  public getAllWeek(atelier: String , year: number ,  week: number): Observable<any> {
    return this.http.get(this.baseurl + '/getAll/' + atelier + '/' + year + '/' + week )
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  public getAllByWeek(atelier: String , year: number , DWeek: number , FWeek: number): Observable<any> {
    return this.http.get(this.baseurl + '/getAll/' + atelier + '/' + year + '/' + DWeek + '/' + FWeek)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }
  // PUT
  public update(data: RealisationW): Observable<RealisationW> {
    return this.http.put(this.baseurl + '/update', data , this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
    console.log(data);
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

  clone(input: RealisationW) {
    const output: RealisationW = new RealisationW();

    return output;
  }

  cloneList(input: any[]) {
    const output: any[] = new Array<RealisationW>();
    for (const item of input) {
      console.log(item);
      output.push(item);
    }
    return output;
  }
}
