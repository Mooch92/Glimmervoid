import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appRoutes } from './routes';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class CardRoutingModule { }
