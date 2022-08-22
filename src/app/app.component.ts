import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FromEventKeyup';

  @ViewChild('name', {static:true}) name:ElementRef;

  ngAfterViewInit() {
    fromEvent(this.name.nativeElement, 'keyup')
    .subscribe(res => console.log(res));
  }
}
