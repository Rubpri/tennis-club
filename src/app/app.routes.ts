import { Routes } from '@angular/router';
import { HomeComponent } from './Components/inicio/home/home.component';

// El Club
import { ElClubComponent } from './Components/el-club/el-club/el-club.component';
import { HazteSocioComponent } from './Components/el-club/hazte-socio/hazte-socio.component';

// Campeonatos
import { DivisionDeHonorComponent } from './Components/campeonatos/division-de-honor/division-de-honor.component';
import { PrimeraDivisionComponent } from './Components/campeonatos/primera-division/primera-division.component';
import { SegundaDivisionComponent } from './Components/campeonatos/segunda-division/segunda-division.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'el-club/sobre-nosotros', component: ElClubComponent},
    {path: 'el-club/hazte-socio', component: HazteSocioComponent},
    {path: 'campeonatos/division-de-honor', component: DivisionDeHonorComponent},
    {path: 'campeonatos/primera-division', component: PrimeraDivisionComponent},
    {path: 'campeonatos/segunda-division', component: SegundaDivisionComponent},
    {path: '**', redirectTo: '' },
];
