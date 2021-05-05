import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http-token.interceptor';
 
import { 
  CharactersService
} from './services';
import { ApiService } from './services/shared/api.service';  
import { ComicsService } from './services/api/comics.service';
import { StoriesService } from './services/api/stories.service';

@NgModule({
  imports: [
    CommonModule, 
  ],
  providers: [
    ApiService,  
    CharactersService,
    ComicsService,
    StoriesService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true }
  ],
  declarations: []
})
export class ServicesModule { }
