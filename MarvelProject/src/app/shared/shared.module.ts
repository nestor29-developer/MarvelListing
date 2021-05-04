import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialAngularModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { MatCardCustomComponent } from './mat-card-custom/mat-card-custom.component';
 
 
@NgModule({ 
  imports: [
    CommonModule,
    ReactiveFormsModule,    
    MaterialAngularModule,
  ], 
  exports: [ 
    ReactiveFormsModule,    
    MaterialAngularModule, 
    HeaderComponent,
    MatCardCustomComponent
  ], 
  declarations: [
    HeaderComponent,
    MatCardCustomComponent
  ], 
})
export class SharedModule { }
