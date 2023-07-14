import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataPageComponent } from './data-page/data-page.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { ChildComponent } from './child/child.component';


const routes: Routes = [
  { path: 'first', component:FirstComponent},
  { path: 'second', component:SecondComponent},
  {path: 'third', component:ThirdComponent},
  { path: '', component:FirstComponent}
];

const routing = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    DataPageComponent,FirstComponent,SecondComponent,ThirdComponent, ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
