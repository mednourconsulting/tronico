import {Injectable} from '@angular/core';
import {HttpService} from '../api/http.service';
import {PlanActPcd} from '../../../../pages/model/PlanActPcd';
import {Observable, throwError} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {BarChartData} from './BarChartData';


@Injectable()
export class PlanAcPcdService {

  private baseurl = 'planActPcd';


  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpService) {
  }

  // POST JSON.stringify(data)
  public create(data: PlanActPcd): Observable<PlanActPcd> {
    console.log(data);
    return this.http.post(this.baseurl + '/create', data , this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  public createAll(data: PlanActPcd[]): Observable<PlanActPcd[]>  {
    console.log();
    return this.http.post(this.baseurl + '/createAll/', data , this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }
  // GET
  public get( atelier: String): Observable<any> {
    return this.http.get(this.baseurl + '/get/' + atelier)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  // GET
  public getAll(atelier: String , year: number): Observable<any> {
    return this.http.get(this.baseurl + '/getAll/' + atelier + '/' + year  )
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }
  // GET
  public getAllByWeek(atelier: String , year: number , week: number): Observable<any> {
    return this.http.get(this.baseurl + '/getAll/' + atelier + '/' + year   + '/' + week)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }
  // PUT
  public update(data: PlanActPcd): Observable<PlanActPcd> {
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

  public updateList(list: PlanActPcd[]): Observable<PlanActPcd[]> {
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

  clone(input: PlanActPcd) {
    const output: PlanActPcd = new PlanActPcd();

    output.qui = input.qui;
    return output;
  }

  cloneList(input: any[]) {
    const output: any[] = new Array<PlanActPcd>();
    for (const item of input) {
      console.log(item);
      output.push(item);
    }
    return output;
  }

}
