import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';

declare const gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pokedex';

  constructor(private router: Router) {
    this.router = router;
    this.trackPageView();
  }

  ngOnInit(): void {
      window.onscroll = () => {
        const pokeballBack = document.querySelector<HTMLElement>('.pokeball-back');
        const rotation = `translateY(-50%) rotateZ(${window.scrollY / 15}deg)`;

        if (pokeballBack) pokeballBack.style.transform = rotation;
      }
  }

  private trackPageView(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(({ urlAfterRedirects }: NavigationEnd) => {
        gtag('event', 'page_view', { page_path: urlAfterRedirects });
      });
  }
}
