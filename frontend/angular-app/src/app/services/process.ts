import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ProcessService {

    api = environment.apiUrl;

    constructor(
        private http: HttpClient
    ) {
    }

    createProcess(data: any) {
        return this.http.post(
            `${this.api}/process`,
            data
        );
    }

    getProcesses() {
        return this.http.get(
            `${this.api}/process`
        );
    }

    getHistory() {
        return this.http.get(
            `${this.api}/history`
        );
    }
}
