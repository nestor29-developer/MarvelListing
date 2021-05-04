import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { CharacterComponent } from './character/character.component';
import { DetailComponent } from './character/detail/detail.component';
 
@NgModule({
  declarations: [ 
    HomeComponent,
    PublicComponent,
    CharacterComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PublicRoutingModule, 
    SharedModule
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [  
  ],
  bootstrap: [
    PublicComponent
  ],
  providers:[ 
  ],

  exports: [ 
  ]

})
export class PublicModule { }
