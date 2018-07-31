import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-parent',
  templateUrl: './test-parent.component.html',
  styleUrls: ['./test-parent.component.css']
})
export class TestParentComponent implements OnInit {
  parentMessage:string;
  constructor() {
    this.parentMessage = "Proceed to Add New User";
  }

  ngOnInit() {
  }

}
