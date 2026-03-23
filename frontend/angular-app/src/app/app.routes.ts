import { Routes } from '@angular/router';
import {ProcessForm} from './components/process-form/process-form';
import {ProcessList} from './components/process-list/process-list';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'process-list',
        pathMatch: 'full'
    },

    {
        path: 'process-form',
        component: ProcessForm
    },

    {
        path: 'process-list',
        component: ProcessList
    },

    {
        path: '**',
        redirectTo: 'process-list'
    }
];
