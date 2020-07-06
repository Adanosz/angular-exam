import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PetService } from '../services/pet.service';
import { Pet } from '../models/pet.model';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {
  
  public petAddForm: FormGroup;

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.petAddForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      type: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required, Validators.maxLength(200)]),
    })
  }

  onAdd() {
    let pet: Pet = {
      name: this.petAddForm.getRawValue().name,
      type: +this.petAddForm.getRawValue().type,
      description: this.petAddForm.getRawValue().description
    }
    this.petService.addNewPet(pet);
  }
}
