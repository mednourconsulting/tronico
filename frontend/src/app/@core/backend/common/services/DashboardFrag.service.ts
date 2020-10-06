import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {HttpService} from '../api/http.service';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {DashboardFrag} from '../../../../pages/model/DashboardFrag';

@Injectable()
export class DashboardFragService {

  private baseurl = 'dashboardFrag';
  static ngInjectableDef = undefined;

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpService) {
  }

  // POST JSON.stringify(data)
  public create(data: DashboardFrag): Observable<DashboardFrag> {
    console.log(data);
    return this.http.post(this.baseurl + '/create', data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  // GET
  public getByAtelier(atelier: string, year: number, week: number): Observable<DashboardFrag> {
    return this.http.get(this.baseurl + '/getByAtelier/' + atelier + '-' + year + '-' + week)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }
  public get(atelier: string): Observable<DashboardFrag> {
    return this.http.get(this.baseurl + '/get/' + atelier )
        .pipe(
            retry(1),
            catchError(this.errorHandl),
        );
  }

  public getCurrentWeek() {
    let week: number;
    this.http.get(this.baseurl + '/getCurrentWeek').subscribe(data => {
      week = data;
      console.log('service' + data);
      console.log('service' + week);
    });
    return week;
  }

  // GET
  public getByYearAndWeek(year: number, week: number): Observable<DashboardFrag> {
    return this.http.get(this.baseurl + '/getByYearAndWeek/' + year + '-' + week)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }


  public getTra(atelier1: string, atelier2: string, year: number, week: number): Observable<DashboardFrag> {
    return this.http.get(this.baseurl + '/getTra/vauban/eiffel/' + year + '/' + week)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  // PUT
  public update(id: number, data: DashboardFrag): Observable<DashboardFrag> {
    return this.http.put(this.baseurl + '/update', data, this.httpOptions)
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

  clone(input: DashboardFrag) {
    const output: DashboardFrag = new DashboardFrag();
    return output;
  }

  cloneList(input: any[]) {
    const output: any[] = new Array<DashboardFrag>();
    for (const item of input) {
      console.log(item);
      output.push(item);
    }
    return output;
  }
}
