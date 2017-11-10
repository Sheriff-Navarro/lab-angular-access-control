import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {VisitListService} from './visit-list.service';
import { LogFormComponentComponent } from './log-form-component/log-form-component.component'

@NgModule({
  declarations: [
    AppComponent,
    LogFormComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [VisitListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
