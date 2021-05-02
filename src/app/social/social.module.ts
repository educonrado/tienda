import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { FormsModule } from '@angular/forms';
import { ExponentePipe } from '../shared/pipes/exponente.pipe';
import { SharedModule } from '../shared/shared.module';
import { SocialRoutingModule } from './social-routing.module';

@NgModule({
  declarations: [
    ContactComponent,
    DemoComponent
  ],
  exports: [
    ContactComponent,
    DemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    SocialRoutingModule
  ]
})
export class SocialModule { }
