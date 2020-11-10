import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProdComponent } from './prod.component';
import { ProdRoutingModule } from './prod.routing';
import {ListboxModule} from 'primeng/listbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {MultiSelectModule} from 'primeng/multiselect';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [ProdComponent],
  imports: [
    CommonModule,
    ProdRoutingModule,
    HttpClientModule,
    ListboxModule,
    FormsModule,
    ButtonModule,
    TableModule,
    MultiSelectModule,
    ConfirmDialogModule,
    DialogModule,
    InputTextModule,
    ReactiveFormsModule
  ],


})
export class ProdModule { }
