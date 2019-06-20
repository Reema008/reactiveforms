import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration Form';
   angForm: FormGroup;
  

   constructor(private fb: FormBuilder) {
    this.createForm();
  }
   createForm() {
    this.angForm = this.fb.group({
       name: ['', [Validators.required,Validators.minLength(4)] ],
       dob: ['', [Validators.required] ],
       email: ['', [Validators.required,Validators.email]],
       num: ['',[Validators.required,Validators.pattern("[0-9]{10}")]],
       password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
       abtu: ['',[Validators.required,Validators.minLength(20)]],
       states: ['', [Validators.required]],
       gender: ['', [Validators.required] ],
       accept: ['', [Validators.requiredTrue]]
    });
  }
}