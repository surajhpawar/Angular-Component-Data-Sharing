import { Component, OnInit, AfterViewInit, ViewChild  } from '@angular/core';
import { UserService } from '../services/user.service';

import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { User } from '../models/user.model';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService]
})
export class HomeComponent implements OnInit, AfterViewInit {
  actualList: any;
  resultsLength: any;
  dataSource = new MatTableDataSource(this.actualList);
  displayedColumns = ['id','name','address',	'contact', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService, private sharedService: SharedService) {
    this.actualList = [];
    this.loadData();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadData(){
    this.dataSource.data = [];
    this.userService.getUserList().subscribe((data) => {
      this.actualList = data;
      this.dataSource.data = this.actualList;
      this.resultsLength = this.actualList.length;
    });
  }

  deleteUser(userId: any) {
    this.userService.deletetUserById(userId).subscribe((data,error) => {
      this.loadData();
      alert('User Deleted Successfully..!!');
    })
  }

  edit(row: User){
    this.sharedService.setUser(row);
  }

}
