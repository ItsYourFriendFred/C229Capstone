import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/util/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  formData!: FormGroup;

  constructor(private builder: FormBuilder, private contact: ContactService) { }

  ngOnInit(): void {
    this.formData = this.builder.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      phoneNumber: new FormControl('', [Validators.pattern('[- +()0-9]{10,15}')]),
      comment: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  get firstName() { return this.formData.get('firstName');}

  get lastName() { return this.formData.get('lastName');}

  get email() { return this.formData.get('email');}

  get phoneNumber() { return this.formData.get('phoneNumber');}

  get comment() { return this.formData.get('comment');}

  onSubmit(formData: FormGroup) {
    console.log(formData);
    this.contact.PostMessage(formData).subscribe({
      next: (response) => {
        location.href = 'https://mailthis.to/confirm';
        console.log(response);
      },
      error: (e) => {
        console.warn(e.responseText);
        console.log({ e });
      }
    });
    this.formData.reset(formData.value);
  }
}
