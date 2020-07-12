import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'smooth-date-picker',
  templateUrl: './smooth-date-picker.component.html',
  styleUrls: ['./smooth-date-picker.component.scss']
})
export class SmoothDatePickerComponent implements OnInit {


  /*  
    *****************************INPUTS************************************

    *format - date format which will be returned by module (optionally)
    *defaultDate - date which will be set (optionally)  
    *cssSettings - array of all styles for picker (optionally)
    *pickerSettings - array of all pickerSettings 

  */

  @Input('format') format: string;
  @Input('defaultDate') defaultDate: string | Date;
  @Input('cssSettings') cssSettings: [];
  @Input('pickerSettings') pickerSettings: [];

  date = '01/01/2021';

  /*
    ***************************OUTPUTS*************************************

    *returnedDate - date which will be returned (required)

  */

  @Output('returnedDate') returnedDate: string | Date;

  
  constructor() { }

  ngOnInit() {
  }
  

}
