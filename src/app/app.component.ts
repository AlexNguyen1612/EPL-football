import { Component } from '@angular/core';
import {trigger, animate, style, group, query, transition} from '@angular/animations';
import { Router,NavigationEnd,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
  trigger('routerTransition', [
    transition('4 => 3,4 => 2,4 => 1, 3 => 2, 3 => 1, 2 => 1', [
            style({ height: '!' }),
            query(':enter', style({ transform: 'translateX(-100%)' })),
            query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
            // animate the leave page away
            group([
                query(':leave', [
                    animate('1s ease-in-out', style({ transform: 'translateX(100%)' })),
                ]),
                // and now reveal the enter
                query(':enter', animate('1s ease-in-out', style({ transform: 'translateX(0%)' }))),
            ]),
        ]),
      transition('1 => 5', [
            style({ height: '!' }),
            query(':enter', style({ transform: 'translateY(100%)' })),
            query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
            // animate the leave page away
            group([
                query(':leave', [
                    animate('1s ease-in-out', style({ transform: 'translateY(-100%)' })),
                ]),
                // and now reveal the enter
                query(':enter', animate('1s ease-in-out', style({ transform: 'translateY(0%)' }))),
                
            ]),
        ]),
        transition('5 => 1', [
            style({ height: '!' }),
            query(':enter', style({ transform: 'translateY(-100%)' })),
            query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
            // animate the leave page away
            group([
                query(':leave', [
                    animate('1s ease-in-out', style({ transform: 'translateY(100%)' })),
                ]),
                // and now reveal the enter
                query(':enter', animate('1s ease-in-out', style({ transform: 'translateY(0%)' }))),
                
            ]),
        ]),
     transition('3 => *,2 => *,1 => *,4 => *', [
            style({ height: '!' }),
            query(':enter', style({ transform: 'translateX(100%)' })),
            query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
            // animate the leave page away
            group([
                query(':leave', [
                    animate('1s ease-in-out', style({ transform: 'translateX(-100%)' })),
                ]),
                // and now reveal the enter
                query(':enter', animate('1s ease-in-out', style({ transform: 'translateX(0%)' }))),
                
            ]),
        ]),
    
])
],

})
export class AppComponent {
  title = 'app';
  
  getState(outlet) {
   return outlet.activatedRouteData['state'];
  }
}
