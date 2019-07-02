import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  userData;
  loginName;

  constructor(private activatedRoute: ActivatedRoute, private service: SearchService) { }

  ngOnInit() {
    // this.userData = JSON.parse(localStorage.getItem('userData'));
    this.activatedRoute.params.subscribe(param => {
      this.loginName = param.login;
    });
    this.getUserData(this.loginName);
  }

  getUserData(loginName) {
    this.service.searchUser(loginName).subscribe((data: any) => {
      this.userData = data;
    });
  }

}
