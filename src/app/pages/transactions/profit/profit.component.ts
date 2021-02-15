import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-profit',
  templateUrl: './profit.component.html',
  styles: []
})
export class ProfitComponent implements OnInit {

  
  profitForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    value: new FormControl(null, Validators.required)
  })

  constructor(private currencyPipe: CurrencyPipe, public transactionService : TransactionService) {}

  ngOnInit(): void {
    this.profitForm.valueChanges.subscribe(form => {
      if (form.value) {
        this.profitForm.patchValue({
          value: this.currencyPipe.transform(form.value.replace(/\D/g, '').replace(/^0+/, ''),
            'USD', 'symbol', '1.0-0')
        }, { emitEvent: false });
      }
    })
  }

  save(): void {
    if(this.profitForm.valid){
      this.transactionService.createTransanction(this.profitForm.value, "profits")
    }else{
      console.log("El formato es invalido")
    }
  }


}
