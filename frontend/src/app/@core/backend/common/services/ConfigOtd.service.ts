import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {HttpService} from '../api/http.service';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {ConfigOtdW} from '../../../../pages/model/ConfigOtdW';

@Injectable()
export class ConfigOtdService {

  private baseurl = 'configOtdW';


  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpService) {
  }

  // POST JSON.stringify(data)
  public create(data: ConfigOtdW): Observable<ConfigOtdW> {
    return this.http.post(this.baseurl + '/create', data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  // GET
  public findByYear(year: number, atelier: string): Observable<any> {
    return this.http.get(this.baseurl + '/findByYear/' + year + '/' + atelier)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  // GET
  public getAll(atelier: String , year: number ): Observable<any> {
    return this.http.get(this.baseurl + '/getAll/' + atelier + '/' + year)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  // PUT
  public update(id: number, data: ConfigOtdW): Observable<ConfigOtdW> {
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

  clone(input: ConfigOtdW) {
    const output: ConfigOtdW = new ConfigOtdW();
    return output;
  }

  cloneList(input: any[]) {
    const output: any[] = new Array<ConfigOtdW>();
    for (const item of input) {
      console.log(item);
      output.push(item);
    }
    return output;
  }
}
