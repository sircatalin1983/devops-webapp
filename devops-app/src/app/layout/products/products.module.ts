import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule, MatTableModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule, 
    MatButtonModule, 
    MatCardModule, 
    MatIconModule, 
    MatDividerModule, 
    MatGridListModule,
    FlexLayoutModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductDetailComponent,
    ProductListComponent
  ]
})
export class ProductsModule { }
