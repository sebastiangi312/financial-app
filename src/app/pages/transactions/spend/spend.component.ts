import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from '../services/transaction.service';

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

  constructor(private currencyPipe: CurrencyPipe, private transactionService : TransactionService) {}

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
      const newTransaction = {
        name : this.spendForm.get("name")?.value,
        value : this.currencyInputChanged(this.spendForm.get("value")?.value)
      }
      this.transactionService.createTransanction(newTransaction, "spends")
    }else{
      console.log("El formato es invalido")
    }
  }

  currencyInputChanged(value : string) {
    var num = value.replace(/[$,]/g, "");
    return Number(num);
  }

}
