import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-book',
  templateUrl: './register-book.component.html',
  styleUrls: ['./register-book.component.css'],
})
export class RegisterBookComponent implements OnInit {
  registerData: any;
  message: string = '';
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: number = 2000;

  constructor(
    private _bookService: BookService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.registerData = {};
  }

  registerBook() {
    if (
      !this.registerData.name ||
      !this.registerData.author ||
      !this.registerData.description ||
      !this.registerData.category ||
      !this.registerData.location ||
      !this.registerData.quantity
    ) {
      console.log('Failed process: Incomplete data');
      this.message = 'failed process: Incomplete data';
      this.openSnackBarError();
      this.registerData = {};
    } else {
      this._bookService.registerBook(this.registerData).subscribe(
        (v) => {
          this._router.navigate(['/listBook']);
          this.message = 'Succesfull user registration';
          this.openSnackBarSuccesfull();
          this.registerData = {};
        },
        (e) => {
          console.log(e);
          this.message = e.error;
          this.openSnackBarError();
        }
      );
    }
  }
  openSnackBarSuccesfull() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds,
      panelClass: ['styleSnackBarSuccesfull'],
    });
  }
  openSnackBarError() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds,
      panelClass: ['styleSnackBarError'],
    });
  }

  ngOnInit(): void {}
}
