import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

// Toast
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

// Firebase
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';



export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(),
    provideAnimations(),
    provideToastr(), provideFirebaseApp(() => initializeApp({"projectId":"tennis-club-1af60","appId":"1:704430829208:web:7e72251c01b846b3d72aed","storageBucket":"tennis-club-1af60.appspot.com","apiKey":"AIzaSyAGlXQckYHYC-gSSB-KX4HSTjtVnmOMuZI","authDomain":"tennis-club-1af60.firebaseapp.com","messagingSenderId":"704430829208"})), 
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore()), 
    provideStorage(() => getStorage()),
  ]
};
