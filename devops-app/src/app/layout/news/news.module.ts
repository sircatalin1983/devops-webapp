import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';

import { NewDetailComponent } from './new-detail/new-detail.component';
import { NewListComponent } from './new-list/new-list.component';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  declarations: [
    NewListComponent,
    NewDetailComponent
  ]
})
export class NewsModule { }
