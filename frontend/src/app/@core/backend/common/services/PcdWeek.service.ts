import {Injectable} from '@angular/core';
import {HttpService} from '../api/http.service';
import {PcdWeek} from '../../../../pages/model/PcdWeek';
import {Observable, throwError} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';


@Injectable()
export class PcdWeekService {

  private baseurl = 'pcdWeek';


  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpService) {
  }

  // POST JSON.stringify(data)
  public create(data: PcdWeek): Observable<PcdWeek> {
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
  public getAll(atelier: String  , year: number): Observable<any> {
    return this.http.get(this.baseurl + '/getAll/' + atelier + '/' + year)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }
  // GET
  public getAllByWeek(atelier: String  , year: number , week: number): Observable<any> {
    return this.http.get(this.baseurl + '/getAll/' + atelier + '/' + year + '/' + week)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }
  // PUT
  public update(id: number): Observable<PcdWeek> {
    return this.http.put(this.baseurl + '/update', this.httpOptions)
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

  public updateList(list: PcdWeek[]): Observable<PcdWeek[]> {
    return this.http.put(this.baseurl + '/updateList', list)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }
  public getChartData(year: number): number[] {
    const list: number[] = [];
    this.http.get(this.baseurl + '/getChartData/' + year)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      ).subscribe(data => {
      list.push(data.totalPcdEuro);
      list.push(data.totalPcdQte);
      list.push(data.totalEcartEuro);
      list.push(data.totalEcartQte);
      console.log(list);
    });
    return list;
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

  clone(input: PcdWeek) {
    const output: PcdWeek = new PcdWeek();
    output.id = input.id ;
    output.ecartEuro = input.ecartEuro;
    output.ecartQte = input.ecartQte;
    output.objectifEuro = input.objectifEuro;
    output.objectifQte = input.objectifQte;
    output.objectifEuro = input.objectifEuro;
    return output;
  }

  cloneList(input: any[]) {
    const output: any[] = new Array<PcdWeek>();
    for (const item of input) {
      console.log(item);
      output.push(item);
    }
    return output;
  }

}
