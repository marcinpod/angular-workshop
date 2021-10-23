import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'angular-workshop-new-order-page',
  templateUrl: './new-order-page.component.html',
  styleUrls: ['./new-order-page.component.scss']
})
export class NewOrderPageComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      comment: [null, [Validators.required, Validators.minLength(10)]],
      data: [null, Validators.required],
      products: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {}

  handleSubmit(): void {
    console.log(this.form.getRawValue());
  }

  addProduct(): void {
    (this.form.get('products') as FormArray).push(
      this.formBuilder.group({
        name: [null, Validators.required],
        price: [null, Validators.required]
      }));
  }

  get products(): FormGroup[] {
    return (this.form.get('products') as FormArray).controls as FormGroup[];
  }

}
