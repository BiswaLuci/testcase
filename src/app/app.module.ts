import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { FloatingimageComponent } from './floatingimage/floatingimage.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { CounttimerComponent } from './counttimer/counttimer.component';
import { ServicecountComponent } from './servicecount/servicecount.component';
import { StudentmarkComponent } from './studentmark/studentmark.component';
import { DynamicdivComponent } from './dynamicdiv/dynamicdiv.component';
import { TimerComponent } from './counttimer/timer/timer.component';
import { TimerinputComponent } from './counttimer/timerinput/timerinput.component';
import { TimestampComponent } from './counttimer/timestamp/timestamp.component';
import { StartpausecounterComponent } from './counttimer/startpausecounter/startpausecounter.component';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FloatingimageComponent,
    EcommerceComponent,
    CounttimerComponent,
    ServicecountComponent,
    StudentmarkComponent,
    DynamicdivComponent,
    TimerComponent,
    TimerinputComponent,
    TimestampComponent,
    StartpausecounterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatTableModule,
    MatSortModule,
    AppRoutingModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
