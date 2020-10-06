import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {HttpService} from '../api/http.service';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {BarChartData} from './BarChartData';
import {ParetoOtdWeekItem} from '../../../../pages/model/ParetoOtdWeekItem';
import {ParetoOtdWeek} from '../../../../pages/model/paretoOtdWeek';

@Injectable()
export class ParetoOtdWeekItemService {
  private baseurl = 'paretoOtdWeekItem';


  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpService) {
  }

  // POST JSON.stringify(data)
  public create(data: ParetoOtdWeekItem): Observable<ParetoOtdWeekItem> {
    console.log(data);
    return this.http.post(this.baseurl + '/create', data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  public saveAll(data: ParetoOtdWeekItem[]): Observable<ParetoOtdWeekItem[]> {
    console.log('in service' + data);
    return this.http.post(this.baseurl + '/saveParetoOtdWithItems', data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  // GET
  public get(id: ParetoOtdWeekItem): Observable<any> {
    return this.http.get(this.baseurl + id)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  // GET
  public getAll(paretoOtdItems: ParetoOtdWeek): Observable<any> {
    return this.http.get(this.baseurl + '/getAll/' + paretoOtdItems)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  // PUT
  public update(data: ParetoOtdWeekItem): Observable<ParetoOtdWeekItem> {
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

  public updateList(list: ParetoOtdWeekItem[]): Observable<ParetoOtdWeekItem[]> {
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

  clone(input: ParetoOtdWeekItem) {

  }

  cloneList(input: any[]) {
    const output: any[] = new Array<ParetoOtdWeekItem>();
    for (const item of input) {
      console.log(item);
      output.push(item);
    }
    return output;
  }
}

