import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HightlightDirective } from './directives/hightlight/hightlight.directive';
import { RouterModule } from '@angular/router';
import { ExponentePipe } from './pipes/exponente.pipe';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HightlightDirective,
    ExponentePipe
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HightlightDirective,
    ExponentePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class SharedModule { }
