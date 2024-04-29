import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PlaceHolders } from '../../shared/enums/placeHolders.enums';
import { labels } from '../../shared/enums/labels.enums';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { FaIcons } from '../../shared/enums/fa-icons.enums';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  SearchForRestaurantAndFood = PlaceHolders.SearchForRestaurantAndFood;
  SetupYourPreciseLocation = labels.SetupYourPreciseLocation;
  isDropdowunSearchClicked: boolean = false;
  fa = FaIcons;

  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  showDropdowunSearch() {
    this.isDropdowunSearchClicked = true;
  }
}
