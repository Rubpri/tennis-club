import { Routes } from '@angular/router';
import { HomeComponent } from './Components/inicio/home/home.component';

// El Club
import { ElClubComponent } from './Components/el-club/el-club/el-club.component';
import { HazteSocioComponent } from './Components/el-club/hazte-socio/hazte-socio.component';

// Campeonatos
import { DivisionDeHonorComponent } from './Components/campeonatos/division-de-honor/division-de-honor.component';
import { PrimeraDivisionComponent } from './Components/campeonatos/primera-division/primera-division.component';
import { SegundaDivisionComponent } from './Components/campeonatos/segunda-division/segunda-division.component';

// Patrocinadores
import { PatrocinadoresComponent } from './Components/patrocinadores/patrocinadores.component';

// Contacto
import { ContactoComponent } from './Components/contacto/contacto/contacto.component';

// Perfil
import { PerfilComponent } from './Components/perfil/perfil.component';

// Auth
import { SignUpComponent } from './Components/authentication/sign-up/sign-up.component';
import { LoginComponent } from './Components/authentication/login/login.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

// Admin Noticias
import { AdminNoticiasComponent } from './Components/noticias/admin-noticias/admin-noticias.component';

// Noticias
import { NoticiasComponent } from './Components/noticias/noticias/noticias.component';



export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'el-club/sobre-nosotros', component: ElClubComponent},
    {path: 'el-club/hazte-socio', component: HazteSocioComponent},
    {path: 'campeonatos/division-de-honor', component: DivisionDeHonorComponent},
    {path: 'campeonatos/primera-division', component: PrimeraDivisionComponent},
    {path: 'campeonatos/segunda-division', component: SegundaDivisionComponent},
    {path: 'patrocinadores', component: PatrocinadoresComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'login', component: LoginComponent, ...canActivate(() => redirectLoggedInTo(['/perfil']))},
    {path: 'sign-up', component: SignUpComponent, ...canActivate(() => redirectLoggedInTo(['/perfil']))},
    {path: 'perfil', component: PerfilComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login']))},
    {path: 'admin-noticias', component: AdminNoticiasComponent},
    {path: 'noticias', component: NoticiasComponent},
    {path: '**', redirectTo: '' },
];
