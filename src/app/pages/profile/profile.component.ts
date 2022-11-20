import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
 
  contactForm!: FormGroup
  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {

    this.contactForm = this.fb.group({
      firstName : ['', Validators.required, Validators.maxLength],
      lastName : ['', Validators.required, Validators.maxLength(20)],
      email : ['', Validators.email],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      biography:['', Validators.required]
    })
  }

  onSubmit(){

      console.log(this.contactForm.value)
    
    
  }

  
}
