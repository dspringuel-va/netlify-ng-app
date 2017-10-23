import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { TestpageComponent } from './testpage/testpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotfoundcomponentComponent } from './notfoundcomponent/notfoundcomponent.component';
import { TestformComponent } from './testform/testform.component';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'testpage', component: TestpageComponent},
  { path: 'testform', component: TestformComponent},
  { path: '**', component: NotfoundcomponentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TestpageComponent,
    HomepageComponent,
    NotfoundcomponentComponent,
    TestformComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
