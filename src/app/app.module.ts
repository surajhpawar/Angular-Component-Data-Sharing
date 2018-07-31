import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home-component/home.component';
import { UserComponent } from './user-component/user.component';
import { TitleCasePipe } from './pipes/TitleCase.pipe';
import { TestParentComponent } from './test-parent/test-parent.component';

const routes: Routes = [

  {
    path: 'user/:id',
    component: UserComponent,
  },
  {
    path: 'user',
    component: TestParentComponent,
  },
  {
    path:'',
    component: HomeComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    TitleCasePipe,
    TestParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
