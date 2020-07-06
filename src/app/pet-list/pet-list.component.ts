import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PetService } from '../services/pet.service';
import { Pet } from '../models/pet.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit, OnDestroy {

  public pets: Pet[] = [];
  public subscriptions$: Subscription[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(array => {
      this.pets = array.pets;
      console.log(this.route.data)
      console.log(this.pets)
    });
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach(sub => sub.unsubscribe());
  }
}
