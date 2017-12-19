import { Injectable } from '@angular/core';

import * as moment from 'moment';

@Injectable()
export class MomentService {
    public getCurrentDate():any {
        return moment().format('DD-MM-YYYY');
    }

    public getCurrentTime():any {
        return moment().format('HH:mm');
    }

    public getCurrentHour():any {
        return moment().format('HH');
    }

    public getCurrentMinutes():any {
        return moment().format('mm');
    }
}