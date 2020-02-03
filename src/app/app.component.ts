import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {RxwebValidators} from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      products: this.fb.array([this.createItem()]),
    });
  }

  createItem() {
    return this.fb.group({
      price: '',
      newPrice: ['', [RxwebValidators.lessThanEqualTo({fieldName: 'price'})]],
    });
  }

  addItem() {
    const fa = this.form.controls.products as FormArray;
    fa.push(this.createItem());

  }
}
