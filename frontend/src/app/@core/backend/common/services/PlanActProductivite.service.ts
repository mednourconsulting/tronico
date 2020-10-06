import {Injectable} from '@angular/core';
import {HttpService} from '../api/http.service';
import {PlanActProductivite} from '../../../../pages/model/PlanActProductivite';
import {Observable, throwError} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {BarChartData} from './BarChartData';


@Injectable()
export class PlanActProductiviteService {

  private baseurl = 'planActProductivite';


  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpService) {
  }

  // POST JSON.stringify(data)
  public create(data: PlanActProductivite): Observable<PlanActProductivite> {
    console.log(data);
    return this.http.post(this.baseurl + '/create', data , this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  // GET
  public get(atelier: String): Observable<any> {
    return this.http.get(this.baseurl + '/get/' + atelier)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  // GET
  public getAll(atelier: String): Observable<any> {
    return this.http.get(this.baseurl + '/getAll/' + atelier)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }
  public getAllByMonth(atelier: String , year: number , month: number): Observable<any> {
    return this.http.get(this.baseurl + '/getAll/' + atelier + '/' + year + '/' + month)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }
  // PUT
  public update(id: number, data: PlanActProductivite): Observable<PlanActProductivite> {
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

  public updateList(list: PlanActProductivite[]): Observable<PlanActProductivite[]> {
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

  clone(input: PlanActProductivite) {
    const output: PlanActProductivite = new PlanActProductivite();

    output.qui = input.qui;
    return output;
  }

  cloneList(input: any[]) {
    const output: any[] = new Array<PlanActProductivite>();
    for (const item of input) {
      console.log(item);
      output.push(item);
    }
    return output;
  }

  public createAll(data: PlanActProductivite[]): Observable<PlanActProductivite[]>  {
    console.log();
    return this.http.post(this.baseurl + '/createAll/', data , this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }
}
