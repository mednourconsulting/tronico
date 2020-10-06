import {HttpHeaders} from '@angular/common/http';
import {HttpService} from '../api/http.service';
import {retry} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ProjetBM} from '../../../../pages/model/ProjetBM';


@Injectable()
export class ProjetBMService {


  private baseurl = 'projetBM';


  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };


  constructor(private http: HttpService) {
  }

  public getAll(): Observable<any> {
    return this.http.get(this.baseurl + '/getAll')
      .pipe(
        retry(1));
  }

  public create(data: ProjetBM): Observable<any> {
    return this.http.post(this.baseurl + '/create', data, this.httpOptions)
      .pipe(
        retry(1));
  }

  public update(data: ProjetBM): Observable<any> {
    return this.http.put(this.baseurl + '/update', data, this.httpOptions)
      .pipe(
        retry(1));
  }

  public delete(data: ProjetBM): Observable<any> {
    return this.http.delete(this.baseurl + '/delete/' + data.id, this.httpOptions)
      .pipe(
        retry(1));
  }


  public getByYearAndWeekBetween(year: number, weekMin: number, weekMax: number) {
    return this.http.get(this.baseurl + '/getByYearAndWeekBetween/' + year + '-' + weekMin + '-' + weekMax)
      .pipe(
        retry(1));
  }
}
