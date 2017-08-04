import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { GitHubUser } from '../model/github.model';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {

  public title = "fv saddam";
  gitHubUser: GitHubUser;
  
  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
  }

}
