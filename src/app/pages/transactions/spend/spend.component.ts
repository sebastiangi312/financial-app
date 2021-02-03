import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profit',
  templateUrl: './spend.component.html',
  styles: []
})
export class SpendComponent implements OnInit {

  spendForm = new FormGroup({
    name: new FormControl('', Validators.required),
    value: new FormControl('', Validators.required)
  })

  constructor(private currencyPipe: CurrencyPipe) {}

  ngOnInit(): void {
    this.spendForm.valueChanges.subscribe(form => {
      if (form.value) {
        this.spendForm.patchValue({
          value: this.currencyPipe.transform(form.value.replace(/\D/g, '').replace(/^0+/, ''),
            'USD', 'symbol', '1.0-0')
        }, { emitEvent: false });
      }
    })
  }

  save(): void {
    if(this.spendForm.valid){
      const {name, value} = this.spendForm.value;
      console.log(name, value)
    }
  }

}
