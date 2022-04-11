import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pokedex';

  ngOnInit(): void {
      window.onscroll = () => {
        const pokeballBack = document.querySelector<HTMLElement>('.pokeball-back');
        const rotation = `translateY(-50%) rotateZ(${window.scrollY / 15}deg)`;

        if (pokeballBack) pokeballBack.style.transform = rotation;
      }
  }
}
