import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-comp',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-comp.component.html',
  styleUrl: './form-comp.component.scss',
})
export class FormCompComponent {
  onSubmit(f: NgForm) {
    if (f.valid) {
      console.log(f);
    }
  }

  getValue(f: FormControl) {
    console.log(f);
  }
}
