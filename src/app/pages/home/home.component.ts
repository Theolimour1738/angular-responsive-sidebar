import { Component, OnInit } from '@angular/core';
import contacts  from '/Repos/angular-responsive-sidebar/src/app/contacts.json';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';
export interface CONTACTS {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  cellNumber: string;
  bio: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Contacts: CONTACTS[] = contacts;
  selectedContact?: CONTACTS;
  constructor( public dialog:MatDialog) { }
  openDialog(){
    this.dialog.open(ProfileComponent)
  }


  ngOnInit(): void {

    
  }

  onSelect(contact: CONTACTS): void {
    this.selectedContact = contact;
  }

}


