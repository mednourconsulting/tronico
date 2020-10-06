import {HttpHeaders} from '@angular/common/http';
import {HttpService} from '../api/http.service';
import {retry} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';


@Injectable()
export class WeekMonthService  {


  private baseurl = 'Week';


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

}
