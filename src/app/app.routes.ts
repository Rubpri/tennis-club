import { Routes } from '@angular/router';
import { ElClubComponent } from './Components/el-club/el-club/el-club.component';
import { HomeComponent } from './Components/inicio/home/home.component';
import { HazteSocioComponent } from './Components/el-club/hazte-socio/hazte-socio.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'el-club/sobre-nosotros', component: ElClubComponent},
    {path: 'el-club/hazte-socio', component: HazteSocioComponent},
    {path: '**', redirectTo: '' },
];
