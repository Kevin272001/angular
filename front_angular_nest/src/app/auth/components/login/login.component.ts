import { Component ,inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // Corregido: styleUrl a styleUrls
})
export class LoginComponent {
  private authService=inject(this.AuthService)
  loginForm = new FormGroup({ email: new FormControl('', [Validators.email, Validators.required]),
  password: new FormControl('', Validators.required)
})
   funIngresar() {
     this.authService.loginConNest(this.loginForm.value).subscribe(
      (res) => { console.log(res); },
       (error) => { console.log(error)
}
 ); // alert("Ingresando ...")
  }
 }
