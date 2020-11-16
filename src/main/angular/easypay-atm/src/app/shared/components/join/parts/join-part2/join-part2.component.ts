import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AbstractJoinPartComponent } from '../abstract-join-part/abstract-join-part.component';
import { UserType } from 'src/app/core/constants/user-type.enum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-join-part2',
  templateUrl: './join-part2.component.html',
  styleUrls: ['./join-part2.component.scss']
})
export class JoinPart2Component extends AbstractJoinPartComponent implements OnInit, OnDestroy {
  readonly UserType = UserType;

  private subscriptions: Subscription[] = [];

  constructor(private fb: FormBuilder) {
    super();
    this.formCrl = this.fb.group({
      type: this.fb.control(UserType.customer, []),
      piva: this.fb.control({ value: '', disabled: true }, [Validators.required]),
      ragSoc: this.fb.control({ value: '', disabled: true }, [Validators.required]),
    });
  }

  ngOnInit() {
    this.subscriptions.push(this.formCrl.get('type').valueChanges.subscribe(userType => {
        if ( userType === UserType.customer  ) {
          this.formCrl.get('piva').disable();
          this.formCrl.get('ragSoc').disable();
        } else {
          this.formCrl.get('piva').enable();
          this.formCrl.get('ragSoc').enable();
        }
    }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  getValue() {
    return {
      type: this.formCrl.controls.type.value,
      piva: this.formCrl.controls.piva.value,
      ragSoc: this.formCrl.controls.ragSoc.value,
    };
  }
}
