import {Injectable} from '@angular/core';
import {HttpService} from '../api/http.service';
import {ProductionMensuel} from '../../../../pages/model/ProductionMensuel';
import {Observable, throwError} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';


@Injectable()
export class ProductionMensuelService {

    private baseurl = 'productionMensuel';


    // Http Headers
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
    };

    constructor(private http: HttpService) {
    }

    // POST JSON.stringify(data) //
    public create(data: ProductionMensuel): Observable<ProductionMensuel> {
        console.log(data);
        return this.http.post(this.baseurl + '/create', data, this.httpOptions)
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
    public getByMonth(atelier: String, year: number, month: number): Observable<any> {
        return this.http.get(this.baseurl + '/get/' + atelier + '/' + year + '/' + month)
            .pipe(
                retry(1),
                catchError(this.errorHandl),
            );
    }

    // GET
    public getAll(atelier: String, year: number): Observable<any> {
        return this.http.get(this.baseurl + '/getAll/' + atelier + '/' + year)
            .pipe(
                retry(1),
                catchError(this.errorHandl),
            );
    }

    public getByAtelierWeekYear(atelier: String, year: number, month: number): Observable<any> {
        return this.http.get(this.baseurl + '/get/' + atelier + '/' + year + '/' + month)
            .pipe(
                retry(1),
                catchError(this.errorHandl),
            );
    }

    // PUT
    public update(data: ProductionMensuel): Observable<ProductionMensuel> {
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

    public getChartData(year: number): number[] {
        const list: number[] = [];
        this.http.get(this.baseurl + '/getChartData/' + year)
            .pipe(
                retry(1),
                catchError(this.errorHandl),
            ).subscribe(data => {
            list.push(data.totalProductivite);
            list.push(data.totalObjectif);
            list.push(data.totalEcart);
            console.log(list);
        });
        return list;
    }

    public updateList(list: ProductionMensuel[]): Observable<ProductionMensuel[]> {
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

    clone(input: ProductionMensuel) {
        const output: ProductionMensuel = new ProductionMensuel();

        return output;
    }

    cloneList(input: any[]) {
        const output: any[] = new Array<ProductionMensuel>();
        for (const item of input) {
            console.log(item);
            output.push(item);
        }
        return output;
    }
}
