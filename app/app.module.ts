import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { SolValueComponent} from './components/solvalue.component';
import { AboutComponent}  from './components/about.component';
import { HttpModule }     from '@angular/http';
import { routing }   from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, routing ],
  declarations: [ AppComponent, SolValueComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
