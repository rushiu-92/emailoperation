import { Component, ElementRef, ViewChild } from '@angular/core';
import { EmailServiceService } from 'src/app/services/email-service.service';

@Component({
  selector: 'app-email-template',
  templateUrl: './email-template.component.html',
  styleUrls: ['./email-template.component.scss']
})
export class EmailTemplateComponent {
  constructor(private emailService : EmailServiceService ){}
  @ViewChild('emailContent', { static: false }) emailContent!: ElementRef;


  sendEmail() {
    const messageHtml = this.emailContent.nativeElement.innerHTML;
  //  email send to ---> ugalmugalerushi8381@gmail.com 
    this.emailService.sendEmail('ugalmugalerushi8381@gmail.com',{ 
      message_html: messageHtml

    })
    .then(response => {
      console.log('Email sent successfully!', response.status, response.text);
    })
    .catch(error => {
      console.error('Error sending email:', error);
    });
    
  }

}
