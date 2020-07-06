import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PetService } from '../services/pet.service';

@Injectable({ providedIn: 'root' })
export class PetResolver implements Resolve<any> {
  constructor(private petService: PetService) {}

  public resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.petService.fetchPets();
  }
}