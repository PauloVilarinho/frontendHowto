import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faSearch = faSearch;
  private logged: boolean;

  constructor(private router: Router, private authService: AuthServiceService) {
   }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  Logout() {
    this.authService.logOut();

  }

  ngOnInit() {
    this.authService.loggedIn().subscribe(logged => this.logged = logged);
  }

}
