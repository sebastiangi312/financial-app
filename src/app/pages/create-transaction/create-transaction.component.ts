import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styles: [
  ]
})
export class CreateTransactionComponent{


  transaction: FormGroup;

  constructor(private fb: FormBuilder) {
    this.transaction = this.createTransaction();
  }

  save(): void {
    console.log(this.transaction.value)
  }

  createTransaction(): FormGroup {
    return this.fb.group({
      name: [''],
      type: ['spend'],
      value: ['']
    });
  }

  changeType(newType: Boolean): void {
    if (newType == false) {
      this.transaction.patchValue({
        type: "spend"
      });
    }else if (newType == true) {
      this.transaction.patchValue({
        type: "profit"
      });
    }
  }
}
