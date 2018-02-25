import {Component} from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">© Copyright 2018, <b><a href="https://www.abhijeetgandhi.com" target="_blank">Abhijeet Gandhi</a></b></span>
    <div class="socials">
      <a href="https://github.com/abhijeet-gandhi" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.facebook.com/BooTsoN0250" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://twitter.com/gandhi_abhijeet" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://www.linkedin.com/in/gandhi-abhijeet/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
