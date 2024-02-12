import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  intervalSub:any
  /*implements OnInit,OnDestroy
  ngOnInit() {
    this.intervalSub=setInterval(()=>{
      console.log("Hello from the ngOnInit")
    },1000);
  }
  ngOnDestroy() {
    if(this.intervalSub){
      clearInterval(this.intervalSub);
    }
  }*/

}
