import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import { AppState, ErrorActions } from '../state-management';
import { AppConfig } from './app.config';

@Injectable()
export class AppService {

    constructor(protected http: Http, protected config: AppConfig, private store: Store<AppState>, private errorActions: ErrorActions) { }
    
    protected handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            if (error.status == 0) {
                errMsg = "The server is offline or inaccessible";
            } else {
                errMsg = `${error.status}${error.statusText ? ' - ' + error.statusText : ''}`;
            }
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        this.store.dispatch(this.errorActions.showError(errMsg));
        return Observable.throw(errMsg);
    }
}