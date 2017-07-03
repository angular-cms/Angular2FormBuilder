import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Store } from '@ngrx/store';

import { AppState } from '../state-management';

@Injectable()
export class AppConfig {
    private subscription: Subscription;
    public isResolved: boolean = false;
    constructor(private http: Http, private store: Store<AppState>) {
    }

    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
}