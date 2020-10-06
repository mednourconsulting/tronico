import {Injectable} from '@angular/core';
import {HttpService} from '../api/http.service';
import {Observable, throwError} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {BarChartData} from './BarChartData';
import {PlanActTrs} from '../../../../pages/model/PlanActTrs';



@Injectable()
export class PlanActTrsService {

  private baseurl = 'planActTrs';


  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpService) {
  }

  // POST JSON.stringify(data)
  public create(data: PlanActTrs): Observable<PlanActTrs> {
    console.log(data);
    return this.http.post(this.baseurl + '/create', data , this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }
  public createAll(data: PlanActTrs[]): Observable<PlanActTrs[]> {
    console.log(data);
    return this.http.post(this.baseurl + '/createAll', data , this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  // GET
  public getAllByWeek( year: number  , week: number ): Observable<any> {
    return this.http.get(this.baseurl + '/getAll/' + year + '/' + week )
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }
  public getAll( year: number ): Observable<any> {
    return this.http.get(this.baseurl + '/get/' + year )
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }
  public get(): Observable<any> {
    return this.http.get(this.baseurl + '/getAll/')
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  // PUT
  public update(data: PlanActTrs): Observable<PlanActTrs> {
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

  public updateList(list: PlanActTrs[]): Observable<PlanActTrs[]> {
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

  cloneList(input: any[]) {
    const output: any[] = new Array<PlanActTrs>();
    for (const item of input) {
      console.log(item);
      output.push(item);
    }
    return output;
  }
}
