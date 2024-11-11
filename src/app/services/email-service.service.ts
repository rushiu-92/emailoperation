import { Injectable } from '@angular/core';
import emailjs ,{ EmailJSResponseStatus } from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  constructor() { }

  sendEmail(recipientEmail: string, otherParams: any): Promise<EmailJSResponseStatus> {

    const templateParams = {
      to_email: recipientEmail, 
      ...otherParams            
    };
  
    return emailjs.send(
      'service_07z9m2w',   
      'template_4va31tc',   
      templateParams,
      '9incNuXIxkaOPCj0J'      
    );
  }
  
}
