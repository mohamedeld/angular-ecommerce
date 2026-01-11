import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MegaMenuComponent } from './mega-menu/mega-menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [RouterLink, MegaMenuComponent],
})
export class HeaderComponent {
  showMenu = signal(false);

  toggleMenu(isShow: boolean) {
    this.showMenu.set(isShow);
  }
}
