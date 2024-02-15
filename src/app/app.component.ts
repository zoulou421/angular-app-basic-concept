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
  actions:Array<any>=[
    {title:"Home","route":"/home", icon:"house"},
    {title:"Products","route":"/products", icon:"arrow-down-up"},
    {title:"New Product","route":"/newProduct", icon:"plus-circle"},
  ];
currentAction:any;
  setCurrentAction(action: any) {
    this.currentAction=action;
  }
}
