import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscriptions = ['Basic', 'Intermediate', 'Advanced', 'Pro'];
  selected = 'Advanced';
  @ViewChild('form') form: NgForm;

  onSubmit() {
    console.log(this.form);
    console.log(this.form.value);
  }
}
