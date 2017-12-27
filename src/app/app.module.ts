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
import { ChartModule } from 'angular-highcharts';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequestComponent } from './dashboard/request/request.component';
import { WaitingListComponent } from './dashboard/waitingList/waitingList.component';
import { EditDataComponent } from './dashboard/editData/editData.component';
import { AnalyticsComponent } from './dashboard/analytics/analytics.component';
import { SalutationComponent } from './salutation/salutation.component';
import { CaptureComponent } from "./capture/capture.component";
import { ChartComponent } from "./chart/chart.component";
import { MomentService } from "./services/moment/moment.service";
import { WindowService } from "./services/window/window.service";

const appRoutes: Routes = [
    {
      path: 'login', component: LoginComponent
    },
    { path: 'dashboard',
      component: DashboardComponent,
      children: [
        { path: 'request', component: RequestComponent },
        { path: 'waitingList', component: WaitingListComponent },
        { path: 'editData', component: EditDataComponent },
        { path: 'analytics', component: AnalyticsComponent }
      ]
    }
];

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        WebCamModule,
        ChartModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        RequestComponent,
        WaitingListComponent,
        EditDataComponent,
        AnalyticsComponent,
        SalutationComponent,
        CaptureComponent,
        ChartComponent
    ],
    bootstrap: [ AppComponent ],
    providers: [ MomentService, WindowService ]
})

export class AppModule { }
