import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username: string;
    password: string;
    constructor(private authService : AuthService, private router : Router) { }

    ngOnInit(): void {
    }

    login() : void {
        let result = false;
        this.authService.login(this.username, this.password).subscribe(response => {
            if (response) {
                sessionStorage.setItem('user', JSON.stringify({token: response.token, id: response.id}));
                this.router.navigateByUrl('/home');
            } else {
                alert("Login Failed");
            }
        });
    }
}
