import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {HttpService} from '../api/http.service';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {ConfigProductiviteMensuel} from '../../../../pages/model/ConfigProductiviteMensuel';

@Injectable()
export class ConfigProductiviteMensuelService {
  private baseurl = 'configProductiviteMensuel';


  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpService) {
  }

  // POST JSON.stringify(data)
  public create(data: ConfigProductiviteMensuel): Observable<ConfigProductiviteMensuel> {
    return this.http.post(this.baseurl + '/create', data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  public getConfigByYear(atelier: String , year: number): Observable<any> {
    return this.http.get(this.baseurl + '/findByYear/' + year + '/' + atelier)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  // GET


  // PUT
  public update(id: number, data: ConfigProductiviteMensuel): Observable<ConfigProductiviteMensuel> {
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

  cloneList(input: any[]) {
    const output: any[] = new Array<ConfigProductiviteMensuel>();
    for (const item of input) {
      console.log(item);
      output.push(item);
    }
    return output;
  }
}
