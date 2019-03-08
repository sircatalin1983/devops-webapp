import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialsRoutingModule } from './tutorials-routing.module';

import { TutorialDetailComponent } from './tutorial-detail/tutorial-detail.component';
import { TutorialListComponent } from './tutorial-list/tutorial-list.component';

@NgModule({
  imports: [
    CommonModule,
    TutorialsRoutingModule
  ],
  declarations: [
    TutorialDetailComponent,
    TutorialListComponent
  ]
})
export class TutorialsModule { }
