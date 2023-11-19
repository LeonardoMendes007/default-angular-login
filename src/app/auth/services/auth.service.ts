import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
    private router: Router) { }

login(usuario: IUser) : Observable<any> {

/*return this.httpClient.post<any>(apiUrlUsuario + "/login", usuario).pipe(
tap((resposta) => {
if(!resposta.sucesso) return;

localStorage.setItem('token', btoa(JSON.stringify(resposta['token'])));
localStorage.setItem('usuario', btoa(JSON.stringify(resposta['usuario'])));

this.router.navigate(['']);
}));*/

return this.mockUserLogin(usuario).pipe(tap((resposta) => {
if(!resposta.sucesso) return;

localStorage.setItem('token', btoa(JSON.stringify("TokenQueSeriaGeradoPelaAPI")));
localStorage.setItem('usuario', btoa(JSON.stringify(usuario)));
this.router.navigate(['']);
}));
}

private mockUserLogin(usuario: IUser): Observable<any> {
var retornoMock: any = [];
console.log(usuario);
if(usuario.username === "admin" && usuario.password == "123456"){
retornoMock.sucesso = true;
retornoMock.usuario = usuario;
retornoMock.token = "Token";
return of(retornoMock);
}

retornoMock.sucesso = false;
retornoMock.usuario = usuario;
return of(retornoMock);
}

logout() {
localStorage.clear();
this.router.navigate(['login']);
}

get getCurrentUser(): IUser | null {
return localStorage.getItem('usuario')
? JSON.parse(atob(localStorage.getItem('usuario') || '{}'))
: null;
}

get getToken(): string {
return localStorage.getItem('token')
? JSON.parse(atob(localStorage.getItem('token') || '{}'))
: null;
}

get loginIsValid(): boolean {
return localStorage.getItem('token') ? true : false;
}
}
