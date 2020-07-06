import { Directive, HostListener, Input, HostBinding } from '@angular/core';
import { PetType } from '../models/pet.model';

@Directive({
  selector: '[appBackGround]'
})
export class BackgroundDirective  {

  constructor() { }

  @Input() petType: PetType;

  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

  @HostListener('mouseenter') public mouseEnter() {
    if (this.petType === PetType.DOG) {
      this.backgroundColor = 'blue';
    } else if (this.petType === PetType.CAT) {
      this.backgroundColor = 'red';
    }
  }
  @HostListener('mouseleave') public mouseLeave() {
    this.backgroundColor = 'transparent'
  }
}