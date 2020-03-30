import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';

@Injectable()
export class DataSharingService {
    user: User = new User();
    public userVM: BehaviorSubject<User> = new BehaviorSubject<User>(this.user);
}