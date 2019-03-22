import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { UserListComponent } from './userlist.component';
import { UserService } from './user.service';

const userRoutes: Routes = [
    { path: '', component: UserListComponent },
    { path: ':id', component: UserComponent }
];

export const UserRouteModule: ModuleWithProviders = RouterModule.forChild(userRoutes);

@NgModule({
    declarations: [
        UserComponent,
        UserListComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(userRoutes)
    ],
    providers: [
        UserService
    ],
    bootstrap: []
})
export class UserModule { }
