import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsManagerService {

  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }
  
  public getContacts(){ 
    return this.httpClient.get(this.SERVER_URL + 'contacts');
}

/* public getPolicy(policyId){
    return this.httpClient.get(`${this.SERVER_URL + 'policies'}/${policyId}`); 
} */
public createContact(contact: {id: number, amount: number, clientId: number, userId: number, description: string}){
   return this.httpClient.post(`${this.SERVER_URL + 'contacts'}`, contact)
}

/* public deletePolicy(policyId){
   return this.httpClient.delete(`${this.SERVER_URL + 'policies'}/${policyId}`)
} */
/* public updatePolicy(policy: {id: number, amount: number, clientId: number, userId: number, description: string}){
   return this.httpClient.put(`${this.SERVER_URL + 'policies'}/${policy.id}`, policy)
} */

}
