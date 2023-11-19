import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { IUser } from '../../interfaces/iuser';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup | any;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if(this.loginForm.invalid) return;

    var user = this.loginForm.getRawValue() as IUser;

    this.authService.login(user).subscribe(
      res => {
        if(!res.sucesso){
          this.snackBar.open('Falha na autenticação', 'Usuário ou senha incorretos.', {
            duration: 3000
          });
        }
      }
    )
  }
}
