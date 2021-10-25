import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { OrdersFilterModel } from '@angular-workshop/shared/models';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'client-orders-ui-orders-filter',
  templateUrl: './orders-filter.component.html',
  styleUrls: ['./orders-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersFilterComponent implements OnInit {

  @Input() set query(value: string) {
    this.form.patchValue({ searchQuery: value });
  }

  @Output() filter: EventEmitter<OrdersFilterModel> = new EventEmitter<OrdersFilterModel>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      searchQuery: [null]
    })
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.filter.emit(this.form.getRawValue());
  }
}
