// import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../_services/auth.service';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {
//   form: any = {};
//   isSuccessful = false;
//   isSignUpFailed = false;
//   errorMessage = '';

//   constructor(private authService: AuthService) { }

//   ngOnInit() {
//   }

//   onSubmit() {
//     this.authService.register(this.form).subscribe(
//       data => {
//         console.log(data);
//         this.isSuccessful = true;
//         this.isSignUpFailed = false;
//       },
//       err => {
//         this.errorMessage = err.error.message;
//         this.isSignUpFailed = true;
//       }
//     );
//   }
// }

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,private router: Router) { }
 
  
  ngOnInit() {
  }

  toSignin(pagename:string) 
  { 
    this.router.navigate([pagename]); 
  } 
  onSubmit() {
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        if(this.isSuccessful)
        {
          this.router.navigate(['/login']); 
        }
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
      
    );
  
    
  }
 
}