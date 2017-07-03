import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import { AppState } from './state-management';

import { AppConfig, AppService } from './services';

@Injectable()
export class AppResolver implements Resolve<any> {

    constructor(private appService: AppService, private store: Store<AppState>, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return Observable.of({ res: 'I am data'});
    }
}