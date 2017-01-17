import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {

    private authors: string[] = ['Smith', 'Johnson', 'William', 'Miller', 'Brown'];

    get Authors(): string[] {
        return this.authors.slice();
    }

}