import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/hero.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: ``
})
export class SearchPageComponent {

  public searchInput  = new FormControl('');

  public heroes: Hero[] = [];

  constructor( private HeroesService: HeroesService ){}

  searchHero(  ){
    const value: string = this.searchInput.value ||'';

    this.HeroesService.getSuggestion( value )
      .subscribe( heroes => this.heroes = heroes )


  }

}
