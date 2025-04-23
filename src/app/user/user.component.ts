import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users'; 
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";


@Component({
    selector: 'app-user',
    imports: [CardComponent],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User ; 
  @Input({required : true}) selected! : boolean;

  @Output() selectedUserEmitter = new EventEmitter<string>()
  
  
  selectUser() {
    this.selectedUserEmitter.emit(this.user.id);
  }
  
  get imagePath(): string {
    return 'assets/users/'+ this.user.avatar;
  }
}
