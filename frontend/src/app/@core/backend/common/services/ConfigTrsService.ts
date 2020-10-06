import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {HttpService} from '../api/http.service';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {ConfigTrs} from '../../../../pages/model/ConfigTrs';

@Injectable()
export class ConfigTrsService {

  private baseurl = 'configTrs';


  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpService) {
  }

  // POST JSON.stringify(data)
  public create(data: ConfigTrs): Observable<ConfigTrs> {
    return this.http.post(this.baseurl + '/create', data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }
  // POST JSON.stringify(data)
  public getAll(): Observable<ConfigTrs> {
    return this.http.get(this.baseurl + '/getAll/'  )
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }
  // GET
  public findByYear(year: number): Observable<ConfigTrs> {
    return this.http.get(this.baseurl + '/getObjectifByYear/' + year)
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
}
