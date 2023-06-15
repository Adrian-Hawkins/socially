import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'sc-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage {

  constructor(private snackBar: MatSnackBar) {}

  share(){
    const link = 'https://github.com/Adrian-Hawkins/socially';
    if(navigator.share) {
      navigator
        .share({
          title: 'Share link to repository',
          url: link
        })
        .then(() => {
          this.snackBar.open('Be sure to star the repo!', 'Close', { duration: 2000 });
        })
        .catch((error) => {
          console.error('Sharing failed:', error);
        });
    } else {
      navigator.clipboard.writeText(link).then(() => {
        this.snackBar.open('Be sure to star the repo!', 'Close', { duration: 2000 });
      });
    }
  }
}
