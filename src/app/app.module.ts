import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { TestpageComponent } from './testpage/testpage.component';
import { HomepageComponent } from './homepage/homepage.component';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'testpage', component: TestpageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TestpageComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
