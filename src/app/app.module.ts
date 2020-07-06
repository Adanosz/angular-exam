import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaxLengthPipe } from './pipes/max.length.pipe';
import { BackgroundDirective } from './directives/background.directive'
import { Routes, RouterModule } from '@angular/router';
import { PetResolver } from './resolvers/pet.resolver';


const routes: Routes = [
  { path: '', component: PetListComponent, resolve: {pets: PetResolver} },
  { path: 'add-pet', component: AddPetComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PetListComponent,
    AddPetComponent,
    MaxLengthPipe,
    BackgroundDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
