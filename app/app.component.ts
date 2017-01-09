import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <style>
      .link
      {
        background-color: #0066cc;
        color : #ffffff;
      }
    </style>
    
    
    <a class="Link" routerLink="/">Home</a>
    <a class="Link" routerLink="/about">About</a>
   
    <router-outlet></router-outlet>
  `,
})
export class AppComponent
{
}
