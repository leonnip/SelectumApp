import {Component} from '@angular/core';
import {ProcessService} from '../../services/process';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'app-process-form',
    imports: [
        FormsModule
    ],
    templateUrl: './process-form.html',
    styleUrl: './process-form.scss',
    standalone: true
})
export class ProcessForm {

    model = {
        name: '',
        description: '',
        step_order: 0
    };

    constructor(
        private service: ProcessService
    ) {
    }

    submit() {
        this.service.createProcess(this.model).subscribe(
            () => {
                alert("Proceso creado");
            }
        );
    }
}
