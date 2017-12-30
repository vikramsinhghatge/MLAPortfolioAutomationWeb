import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import '../../assets/css/styles.css';

@Component({
  selector: 'dashboard-page',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})

export class DashboardComponent {
    selectedItem = 'WL';

    listClick(event, newValue) {
        console.log(newValue);
        this.selectedItem = newValue;
    }
}
