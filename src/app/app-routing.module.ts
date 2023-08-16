import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MyComponents/home/home.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { ServicesComponent } from './MyComponents/services/services.component';
import { ContactComponent } from './MyComponents/contact/contact.component';
import { TermsconditionsComponent } from './MyComponents/termsconditions/termsconditions.component';
import { ExternalComponent } from './MyComponents/external/external.component';
import { FaqComponent } from './MyComponents/faq/faq.component';
import { PrivacyComponent } from './MyComponents/privacy/privacy.component';
import { ErrorComponent } from './MyComponents/error/error.component';
import { ProcessComponent } from './MyComponents/process/process.component';
import { ContactGformComponent } from './MyComponents/contact-gform/contact-gform.component';
import { PaymentComponent } from './MyComponents/payment/payment.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path:'about', component:AboutComponent },
  { path:'services', component:ServicesComponent },
  // { path:'contact', component:ContactComponent },
  {path: 'contact', component: ContactGformComponent},
  { path:'termsconditions', component:TermsconditionsComponent },
  { path:'faq', component:FaqComponent },
  { path:'external', component:ExternalComponent },
  { path:'privacy', component:PrivacyComponent },
  { path:'process', component:ProcessComponent },
  { path:'support', component:PaymentComponent },
  { path:'**', component:ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
