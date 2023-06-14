import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private router: Router) { }
  navigateToTermsConditions() {
    const bodyElement = document.querySelector('body');
    if (bodyElement) {
      bodyElement.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = '/termsconditions';
      }, 150); // Adjust the delay (in milliseconds) to match the duration of your fade-out animation
    }
  }
  navigateToPrivacy() {
    const bodyElement = document.querySelector('body');
    if (bodyElement) {
      bodyElement.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = '/privacy';
      }, 150); // Adjust the delay (in milliseconds) to match the duration of your fade-out animation
    }
  }
  navigateToContact() {
    const bodyElement = document.querySelector('body');
    if (bodyElement) {
      bodyElement.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = '/contact';
      }, 150); // Adjust the delay (in milliseconds) to match the duration of your fade-out animation
    }
  }
  navigateToFAQ() {
    const bodyElement = document.querySelector('body');
    if (bodyElement) {
      bodyElement.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = '/faq';
      }, 150); // Adjust the delay (in milliseconds) to match the duration of your fade-out animation
    }
  }
  navigateToWorks() {
    const bodyElement = document.querySelector('body');
    if (bodyElement) {
      bodyElement.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = '/';
      }, 150); // Adjust the delay (in milliseconds) to match the duration of your fade-out animation
    }
  }
  navigateToServices() {
    const bodyElement = document.querySelector('body');
    if (bodyElement) {
      bodyElement.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = '/services';
      }, 150); // Adjust the delay (in milliseconds) to match the duration of your fade-out animation
    }
  }
  navigateToAbout() {
    const bodyElement = document.querySelector('body');
    if (bodyElement) {
      bodyElement.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = '/services';
      }, 150); // Adjust the delay (in milliseconds) to match the duration of your fade-out animation
    }
  }
}

