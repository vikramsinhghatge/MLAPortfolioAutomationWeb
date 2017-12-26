import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

/* Import all the angular material modules in this module.
 * Make sure this module stays below BrowserModule */
import { AngularMaterialModule } from './angular.material.module';

import { WebCamModule } from 'ack-angular-webcam';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SalutationComponent } from './salutation/salutation.component';
import { CaptureComponent } from "./capture/capture.component";
import { MomentService } from "./services/moment/moment.service";
import { WindowService } from "./services/window/window.service";

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
];

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        WebCamModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        SalutationComponent,
        CaptureComponent
    ],
    bootstrap: [ AppComponent ],
    providers: [ MomentService, WindowService ]
})

export class AppModule { }
