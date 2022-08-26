import { Component } from '@angular/core';
import { FreeapiService } from './services/freeapi.service';
import { Comments } from './classes/comments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-api-integration';
  constructor(private _freeApiService: FreeapiService) {}

  listcomments!: Comments[];

  ngOnInit() {
    this._freeApiService.getComments().subscribe((data) => {
      this.listcomments = data;
    });
  }
}
