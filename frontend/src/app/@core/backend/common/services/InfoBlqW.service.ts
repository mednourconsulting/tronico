import {Injectable} from '@angular/core';
import {HttpService} from '../api/http.service';
import {InfoBloqW} from '../../../../pages/model/infoBloqW';
import {Observable, throwError} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {BarChartData} from './BarChartData';


@Injectable()
export class InfoBlqWService {

  private baseurl = 'infoBloquant';


  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpService) {
  }

  // POST JSON.stringify(data)
  public create(data: InfoBloqW): Observable<InfoBloqW> {
    console.log(data);
    return this.http.post(this.baseurl + '/create', data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  // GET
  public get(id: InfoBloqW): Observable<any> {
    return this.http.get(this.baseurl + id)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  public getByWeek(w1: number, w2: number) {
    return this.http.get(this.baseurl + '/getWeekBetween/' + w1 + '-' + w2)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  // GET
  public getAll(atelier: String , year: number): Observable<any> {
    return this.http.get(this.baseurl + '/getAll/' + atelier + '/' + year)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  // GET
  public getAllByWeek(atelier: String , year: number , week: number): Observable<any> {
    return this.http.get(this.baseurl + '/getAll/' + atelier + '/' + year + '/' + week)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }
  // PUT
  public update(id: number, data: InfoBloqW): Observable<InfoBloqW> {
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

  public getChartData(year: number): number[] {
    const list: number[] = [];
    console.log('requested year= ' + year);
    let res: Observable<BarChartData>;
    res = this.http.get(this.baseurl + '/getChartData/' + year)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
    res.subscribe(data => {
      console.log(list);
    });
    return list;
  }

  public updateList(list: InfoBloqW[]): Observable<InfoBloqW[]> {
    return this.http.put(this.baseurl + '/updateList', list)
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

  clone(input: InfoBloqW) {
    const output: InfoBloqW = new InfoBloqW();
    output.id = input.id;
    output.week = input.week;
    output.year = input.year;
    return output;
  }

  cloneList(input: any[]) {
    const output: any[] = new Array<InfoBloqW>();
    for (const item of input) {
      console.log(item);
      output.push(item);
    }
    return output;
  }
}

