import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SocialRoutingModule } from './social-routing.module';
import { MaterialModule } from '../material/material.module';

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
    SocialRoutingModule,
    MaterialModule
  ]
})
export class SocialModule { }
