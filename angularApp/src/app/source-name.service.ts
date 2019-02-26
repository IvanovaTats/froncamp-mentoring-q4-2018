import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SourceNameService {

  sourceName: string;
  constructor() { }

  getSourceName() {
    console.log('get');
    return this.sourceName;
  }
  setSourceName(publisher: string) {
    this.sourceName = publisher;
    console.log('set');
  }
}
