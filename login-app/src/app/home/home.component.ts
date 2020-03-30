import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Subscription } from 'rxjs';
import { DataSharingService } from '../dataSharing.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  user: User = new User();
  constructor( private userDataSharing: DataSharingService) {
  }

  ngOnInit(): void {
    let userSubscription: Subscription = new Subscription();
    userSubscription = this.userDataSharing.userVM.subscribe(value => {
      this.user = value;
      userSubscription.unsubscribe();
    });

  }
}
 
