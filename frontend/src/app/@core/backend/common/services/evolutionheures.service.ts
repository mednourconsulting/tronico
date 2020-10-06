import {Injectable} from '@angular/core';
import {HttpService} from '../api/http.service';
import {Evolutionheures} from '../../../../pages/model/evolutionheures';
import {Observable, throwError} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {BarChartData} from './BarChartData';


@Injectable()
export class EvolutionheuresService {

  private baseurl = 'evolutionh';


  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpService) {
  }

  // POST JSON.stringify(data)
  public create(data: Evolutionheures): Observable<Evolutionheures> {
    console.log(data);
    return this.http.post(this.baseurl + '/create', {
      'week': data.week,
      'budjet': data.budjet,
      'ecart': data.ecart,
      'facture': data.facture,
      'heuresCDE': data.heuresCDE,
      'heuresPrevus': data.heuresPrevus,
    }, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  // GET
  public get(id: Evolutionheures): Observable<any> {
    return this.http.get(this.baseurl + id)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  // GET
  public getAll(year: number): Observable<any> {
    return this.http.get(this.baseurl + '/getAll/' + year)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }
  // GET
  public getAllByWeek(year: number, week: number): Observable<any> {
    return this.http.get(this.baseurl + '/getAll/' + year + '/' + week)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }
  // PUT
  public update(data: Evolutionheures): Observable<Evolutionheures> {
    return this.http.put(this.baseurl + '/update',  data, this.httpOptions)
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
      list.push(data.totalBudjet);
      list.push(data.totalHeuresCDE);
      list.push(data.totalHeuresPrevus);
      list.push(data.totalFacture);
      list.push(data.totalEcart);
    });
    return list;
  }

  public updateList(list: Evolutionheures[]): Observable<Evolutionheures[]> {
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

  clone(input: Evolutionheures) {
    const output: Evolutionheures = new Evolutionheures();
    output.id = input.id;
    output.week = input.week;
    output.ecart = input.ecart;
    output.facture = input.facture;
    output.heuresCDE = input.heuresCDE;
    output.heuresPrevus = input.heuresPrevus;
    output.budjet = input.budjet;
    return output;
  }

  cloneList(input: any[]) {
    const output: any[] = new Array<Evolutionheures>();
    for (const item of input) {
      console.log(item);
      output.push(item);
    }
    return output;
  }
}
