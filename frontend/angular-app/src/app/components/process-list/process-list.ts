import {Component, OnInit} from '@angular/core';
import {ProcessService} from '../../services/process';

@Component({
    selector: 'app-process-list',
    imports: [],
    templateUrl: './process-list.html',
    styleUrl: './process-list.scss',
    standalone: true
})
export class ProcessList implements OnInit {

    processes: any[] = [];
    history: any[] = [];

    constructor(
        private service: ProcessService
    ) {
    }

    ngOnInit(): void {
        this.service.getProcesses().subscribe(
            (data: any) => {
                this.processes = data;
            }
        );

        this.service.getHistory().subscribe(
            (data: any) => {
                this.history = data;
            }
        );
    }

}
