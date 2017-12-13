import { Component } from '@angular/core';

import { MomentService } from '../services/moment/moment.service';
import * as moment from 'moment';

@Component({
    selector: 'salutation',
    templateUrl: 'salutation.component.html',
    styleUrls: ['salutation.component.css']
})

export class SalutationComponent {
    public currentTime: moment.Moment;

    public salutation: string;

    constructor(
        private momentService: MomentService
    ) {
        this.currentTime = momentService.getCurrentTime();
    }

    ngOnInit() {
        this.setSalutation();
    }

    public setSalutation(): void {
        let currentHour: number,
            currentMinutes: number;

        currentHour = parseInt(this.momentService.getCurrentHour());
        currentMinutes = parseInt(this.momentService.getCurrentMinutes());

        switch (currentHour) {
            case 0: {
                this.salutation = currentMinutes >= 0 ? 'Good Morning User, Hope you have a lovely day!': 'Hello User, Hope you have a lovely day!';
                break;
            }
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            {
                this.salutation = 'Good Morning User, Hope you have a lovely day!';
                break;
            }
            case 12:
            case 13:
            case 14:
            case 15:
            case 16: {
                this.salutation = 'Good Afternoon User, Hope you are having a lovely day!';
                break;
            }
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23: {
                this.salutation = 'Good Evening User, Hope had  a lovely day!';
                break;
            }
            default: {
                this.salutation = 'Hello User, Hope you have a lovely day';
                break;
            }
        }
    }
}