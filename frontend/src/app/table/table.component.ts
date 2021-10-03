import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Observable} from 'rxjs';
import { MatSort, MatSortable} from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import { UserService} from '../user.service';
import { User } from '../models/user.model';
import { MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  companyname: String;
  @ViewChild (MatSort) sort: MatSort;
  dataSource: MatTableDataSource<User>;
  displayedColumns=['rank', 'companyname', 'nse', 'bse','priceDiff', 'percentDiff','buy','Save'];
  tableData: any;
  dialog: any;
  
  constructor(private router: Router,private UserService:UserService, private http: HttpClient,private token: TokenStorageService) { }

  ngOnInit(): void {

    const headers = { 'Authorization': 'Bearer '+ this.token.getToken };

    const body = {
    };
    this.http.post<any>('http://localhost:8080/stocktable', body, { headers }).subscribe(data => {
      this.dataSource= new MatTableDataSource(data);     
    });

    this.loadTableData();
  }


 loadTableData () {
    this.tableData = setInterval(() => {
      const headers = { 'Authorization': 'Bearer '+ this.token.getToken };

      const body = {
      };
      this.http.post<any>('http://localhost:8080/stocktable', body, { headers }).subscribe(data => {
        console.log(data);
        this.dataSource= new MatTableDataSource(data);
       
      });
  },10*1000);

}

  ngOnDestroy() {
    clearInterval(this.tableData);
  }
  
  onclick= function () {
    this.router.navigate(['/watchlist']);
  };
  
  refresh= function () {
    window.location.reload();
  };
  
  
  saveRecord(elerank,elecompany,elense,elebse,elepricediff,elebuy, elePercentProfit)
  {
    console.log(elePercentProfit)
    const headers = { 'Authorization': 'Bearer '+ this.token.getToken };
    const body = {
      
      "rank":elerank,
      "companyName":elecompany,
      "bse":elebse,
      "nse":elense,
      "percentDiff":elePercentProfit,
      "buy":elebuy,
      
    };
    //alert(elecompany+ " : "+ elebuy+ " added to Watchlist!")
    this.http.post<any>('http://localhost:8080/savestock', body, { headers }).subscribe(data => {   
    });
  }  
}

export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
export interface DialogData {
 
  name: string;
}