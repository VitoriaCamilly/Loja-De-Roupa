import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
class CheckLogged implements CanActivate {
    constructor(
        private router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean> | Promise<boolean> | boolean {
        let email = localStorage.getItem('EMAIL')
        let senha = localStorage.getItem('SENHA')
            if (email != undefined && senha != undefined) {
                console.log("entrou no if", email, senha)
                return true;
            } else {
                alert("É necessário um login válido!")
                this.router.navigate([""]);
                return false;
            }
        }
    }

export default CheckLogged;