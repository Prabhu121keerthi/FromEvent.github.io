import { Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, Observable, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FromEventClick';

  buttonSubscription:any;

  @ViewChild('btn', {static:true}) button:ElementRef;

  constructor(private elem:ElementRef) {}

  ngAfterViewInit() {
    this.buttonClick();
  }

  buttonClick() {
    this.buttonSubscription = fromEvent(this.button.nativeElement, 'click')
    .pipe(debounceTime(300))
    .subscribe(res => console.log(res));
  }
  ngOnDestroy() {
    this.buttonSubscription.unsubscribe();
  }
}
