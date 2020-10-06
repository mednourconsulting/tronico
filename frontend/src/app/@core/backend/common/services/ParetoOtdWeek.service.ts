import {Injectable} from '@angular/core';
import {HttpService} from '../api/http.service';
import {ParetoOtdWeek} from '../../../../pages/model/paretoOtdWeek';
import {Observable, throwError} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {BarChartData} from './BarChartData';


@Injectable()
export class ParetoOtdWeekService {

  private baseurl = 'paretoOtdWeek';


  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpService) {
  }

  // POST JSON.stringify(data)
  public create(data: ParetoOtdWeek): Observable<ParetoOtdWeek> {
    console.log(data);
    return this.http.post(this.baseurl + '/create', data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  public createAll(data: ParetoOtdWeek[]): Observable<ParetoOtdWeek[]> {
    console.log(data);
    return this.http.post(this.baseurl + '/create', data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  // GET
  public getByAtelierByYearByWeek(atelier: String , year: number , week: number): Observable<any> {
    return this.http.get(this.baseurl + '/getAll/' + atelier + '/' + year + '/' + week )
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  public saveParetoOtdWithItems(data: ParetoOtdWeek): Observable<any> {
    console.log('service ' + data);
    return this.http.post(this.baseurl + '/saveParetoOtdWithItems', data, this.httpOptions)
     .pipe(
       retry(1),
       catchError(this.errorHandl),
     );
  }

  public saveOtd(data): Observable<any> {
    console.log('service ' + data);
    return this.http.post(this.baseurl + '/saveParetoOtdWithItems', data, this.httpOptions);
  }

  // GET
  public getAllByAtelierAndYear(atelier: String, year: number): Observable<any> {
    return this.http.get(this.baseurl + '/getAll/' + atelier + '/' + year)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }
  // GET
  public getAll(atelier: String): Observable<any> {
    return this.http.get(this.baseurl + '/get/' + atelier )
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  // PUT
  public update(data: ParetoOtdWeek): Observable<ParetoOtdWeek> {
    return this.http.put(this.baseurl + '/update', data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
    console.log(data);
  }
  public updateParetoOtdWithItems(data: ParetoOtdWeek): Observable<ParetoOtdWeek> {
    console.log('service' , data);
    return this.http.put(this.baseurl + '/updateParetoOtdWithItems', data, this.httpOptions)
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

  public updateList(list: ParetoOtdWeek[]): Observable<ParetoOtdWeek[]> {
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

  clone(input: ParetoOtdWeek) {
    const output: ParetoOtdWeek = new ParetoOtdWeek();
    return output;
  }

  cloneList(input: any[]) {
    const output: any[] = new Array<ParetoOtdWeek>();
    for (const item of input) {
      console.log(item);
      output.push(item);
    }
    return output;
  }
}

