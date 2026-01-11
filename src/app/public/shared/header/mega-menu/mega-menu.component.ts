import { Component, input } from '@angular/core';

@Component({
  selector: 'app-mega-menu',
  imports: [],
  templateUrl: './mega-menu.component.html',
  styleUrl: './mega-menu.component.scss',
})
export class MegaMenuComponent {
  showMenu = input<boolean>(false);
}
