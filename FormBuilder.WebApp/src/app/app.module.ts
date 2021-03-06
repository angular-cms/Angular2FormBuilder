import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from '@angular/material';
import 'hammerjs';

import * as state from './state-management';
import { STATE_ACTIONS } from './state-management/actions';
import { AppEffectModules } from './state-management/effects';

import { APP_SERVICES, GlobalErrorHandler } from './services';

import { AppComponent } from './app.component';
import { AppResolver } from './app.resolver';
import { AppRoutingModule } from './app.routing';
import { PipeModule } from './pipes';
import {
    HomeComponent,
    ErrorDialogComponent,
    PageNotFoundComponent
} from './components';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
        MaterialModule,
        StoreModule.provideStore(state.reducer),
        ...AppEffectModules,
        AppRoutingModule,
        PipeModule.forRoot()
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        PageNotFoundComponent,
        ErrorDialogComponent
    ],
    providers: [
        ...APP_SERVICES,
        ...STATE_ACTIONS,
        AppResolver,
        { provide: ErrorHandler, useClass: GlobalErrorHandler }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
