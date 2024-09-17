import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private userSubject = new BehaviorSubject<User | null>(null);
  public user$ = this.userSubject.asObservable();

  constructor(private auth: Auth) { }

  register({email, password}: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  async login({email, password}: any) {
    const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
    this.userSubject.next(userCredential.user);
    return userCredential;
  }

  async logout() {
    await signOut(this.auth);
    this.userSubject.next(null);
  }

  getCurrentUser() {
    return this.userSubject.value;
  }

}
