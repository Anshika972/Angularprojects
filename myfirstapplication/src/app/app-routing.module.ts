import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationpageComponent } from './registrationpage/registrationpage.component';




  const routes: Routes = [
    { path: 'book', component: BooklibraryPageComponent },
    { path: 'home', component: HomepageComponent },
    {  path: 'register', component: RegistrationpageComponent },
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
