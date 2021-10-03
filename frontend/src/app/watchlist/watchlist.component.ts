import { Component, OnInit } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from '../_services/token-storage.service';
import { ViewChild } from '@angular/core';
import { Observable} from 'rxjs';
import { MatSort, MatSortable} from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import { UserService} from '../user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  companyname: String;
  @ViewChild (MatSort) sort: MatSort;
  dataSource: MatTableDataSource<User>;
  companies=[];
  // comp:Array<String>;
  displayedColumns=['rank','companyname','nse','bse','percentDiff','buy','saveAt','Delete'];
  dialog: any;
  isAllSelected : boolean;
  
  constructor(private router: Router,private UserService:UserService, private http: HttpClient,private token: TokenStorageService) { }

  ngOnInit(): void {
    this.isAllSelected=true;
    const headers = { 'Authorization': 'Bearer '+ this.token.getToken };

    const body = {
    };
    this.http.post<any>('http://localhost:8080/retrievestocks', body, { headers }).subscribe(data => {
      
      this.dataSource= new MatTableDataSource(data);
       console.log(data);
    });
    
    this.http.post<any>('http://localhost:8080/watchlist', body, { headers }).subscribe(data => {
      
      this.companies= data;
       

      console.log(this.companies);
    });

   
  }

  onSelect(company)
  {
    this.isAllSelected=false;
    const headers = { 'Authorization': 'Bearer '+ this.token.getToken };

    const body = {
      "companyName" : company
    };
    this.http.post<any>('http://localhost:8080/retrieve_stocks_by_company', body, { headers }).subscribe(data => {
      
      this.dataSource= new MatTableDataSource(data);
      
    });
    
  }
  onAll(){
    this.isAllSelected=true;
    const headers = { 'Authorization': 'Bearer '+ this.token.getToken };

    const body = {
    };
    this.http.post<any>('http://localhost:8080/retrievestocks', body, { headers }).subscribe(data => {
      
      this.dataSource= new MatTableDataSource(data);
       
    });
  }

  deleteRecord(elerank,elecompany,elense,elebse,elepricediff,elebuy, elesaveat)
  {
    const headers = { 'Authorization': 'Bearer '+ this.token.getToken };
    const body = {
      "companyName":elecompany,
      "saveAt":elesaveat,      
    };
    
   // alert("Delete button is under progress :)");

    this.http.post<any>('http://localhost:8080/deletestock', body, { headers }).subscribe(data => { 
        if(this.isAllSelected){
          this.onAll();
        } else {
          this.onSelect(elecompany);
        }
    });

  }
  onBack(){
    this.router.navigate(['/table']);
  }
  onchange(){
    document.getElementById("")
  }
}
