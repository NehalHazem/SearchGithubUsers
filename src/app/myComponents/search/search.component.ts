import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SearchService } from '../search.service';
import { User } from '../Interface/User';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  form: FormGroup;
  user: User;
  errorMsg: string;
  isSuccess: boolean;

  constructor(private service: SearchService, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      login: ['', Validators.required]
    });
  }

  searchUser() {
    this.service.searchUser(this.form.value.login).subscribe((data: any) => {
      this.user = data;
      this.isSuccess = true;
    }, err => {
      this.errorMsg = err.message;
      this.isSuccess = false;
    });
  }

  // sendData() {
  //   localStorage.setItem('userData', JSON.stringify(this.user));
  // }

}
