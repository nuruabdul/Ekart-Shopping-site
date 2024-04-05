// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  // standalone: true,
  // imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{
 EmailId: string;
   Password: string;
     
  
  constructor(private router:Router) {
    // this.loginObj = new Login();
  }
  ngOnInit(): void {
  }
  onSubmit() {
    // Perform login logic...
  
    // Assume login is successful
    const isLoggedIn = true;
  
    if (isLoggedIn) {
      // Log successful login to the console
      console.log('Login successful');
  
      // Display an alert
      alert('Login successful');
  
      // Navigate to the dashboard page after successful login
      this.router.navigate(['/container']);
    } else {
      // Handle unsuccessful login
      console.log('Login failed');
      alert('Login failed');
    }
  }
}
// onSubmit(){
//   this.router.navigate(["/container"]);



  
  // loginObj: Login;

  

  // onLogin() {
  //   debugger;
  //   this.http.post('https://freeapi.gerasim.in/api/User/Login', this.loginObj).subscribe((res:any)=>{
  //     if(res.result) {
  //       alert("Login Success");
  //       localStorage.setItem('angular17token', res.data.token)
  //       this.router.navigateByUrl('/login')
  //     } else {
  //       alert(res.message)
  //     }
  //   })

// }

// export class Login { 
//     EmailId: string;
//     Password: string;
//     constructor( private router: Router) {
//       this.EmailId = '';
//       this.Password = '';
//     } 

   



