import { Component, OnInit, Input } from '@angular/core';
import { SearchUsersService } from '../services/search-users.service';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { GitHubUser } from '../model/github.model';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {

  place: string;
  language: string;
  results: any[] = [];
  selected: boolean = false;
  selectedUser: any;
  error_text: string = "";

  bsModalRef: BsModalRef;

  constructor(private searchService: SearchUsersService,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.place = 'jakarta';
  }

  search(place: string, language: string) {
  	this.selected = false;
  	this.error_text = "";
  	
  	if (place || language) {
      this.place = place;
      this.language = language;
      this.searchService.getUsersByPlaceAndLanguage(place, language).subscribe(
        users => {
          this.results = users;
        },
        error => {
          this.results = [];
          this.error_text = "Sorry! No Users found. Try again";
          console.error(error);
        }
      )
    }
  }

  getDetails(username: string) {
    this.searchService.getDetailsByUserName(username).subscribe(
      userDatils => {
        this.selectedUser = userDatils;
        this.selected = true;
      },
      error => {
        this.selected = false;
        console.error(error);
      }
    )
  }

}
