import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { TestpageComponent } from './testpage/testpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotfoundcomponentComponent } from './notfoundcomponent/notfoundcomponent.component';
import { OtherpageComponent } from './otherpage/otherpage.component';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'testpage', component: TestpageComponent},
  { path: 'otherpage', component: OtherpageComponent},
  { path: '**', component: NotfoundcomponentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TestpageComponent,
    HomepageComponent,
    NotfoundcomponentComponent,
    OtherpageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
