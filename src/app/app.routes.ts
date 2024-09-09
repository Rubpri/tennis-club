import { Routes } from '@angular/router';
import { ElClubComponent } from './Components/el-club/el-club/el-club.component';
import { HomeComponent } from './Components/inicio/home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'el-club', component: ElClubComponent},
    {path: '**', redirectTo: '' },
];
