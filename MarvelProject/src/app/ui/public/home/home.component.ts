import { Component, OnInit, ViewChild } from '@angular/core';
import { CharactersService } from 'src/app/core/services';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { MatMenuTrigger } from '@angular/material/menu';
import { character } from './../../../core/models/character.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit { 
  @ViewChild('storylist') story: MatMenuTrigger;

  optionOne;
  characters;
  titlelabel;
  datacharacter: character;

  constructor(private characterService: CharactersService) { 
  }

  ngOnInit(): void { 
    this.initializeModel();
    this.getDataCharacter();
    this.getDataCharacters();
  }

  getDataCharacter() {
    const data = sessionStorage.getItem('data-character');
    data ? (this.datacharacter = JSON.parse(data)) : null;
  }

  initializeModel() {
    this.datacharacter = {
      id: 0,
      activeListCharacter: false,
    };
  }

  getDataCharacters(): void {
    this.characterService.getCharacters().subscribe(
      (res) => { 
        this.characters = res.data.results;
        console.log(this.characters);
        this.validation();
      },
      (catchError) => {}
    );
  }

  validation() {
    this.datacharacter.activeListCharacter ? this.onActiveTitleOption(1) : null;
  }

  // onActiveTitleOption(number): void {
  //   switch (number) {
  //     case 1:
  //       this.comic.closeMenu();
  //       this.story.closeMenu();
  //       setTimeout(() => {
  //         this.character.openMenu();
  //         this.comic.closeMenu();
  //         this.story.closeMenu();
  //       }, 100);

  //       break;
  //     case 2:
  //       this.character.closeMenu();
  //       this.story.closeMenu();
  //       setTimeout(() => {
  //         this.comic.openMenu();
  //         this.character.closeMenu();
  //         this.story.closeMenu();
  //       }, 100);
  //       break;
  //     case 3:
  //       this.character.closeMenu();
  //       this.comic.closeMenu();
  //       setTimeout(() => {
  //         this.story.openMenu();
  //         this.character.closeMenu();
  //         this.comic.closeMenu();
  //       }, 100);
  //       break;
  //   }
  // }

  onActiveTitleOption(number): void {
    switch (number) {
      case 1:
        this.titlelabel = 'Characters';
        this.optionOne = true;
        this.story.closeMenu();
        break;
      case 2:
        this.titlelabel = "Comics";
        this.optionOne = false;
        this.story.closeMenu();
        break;
      case 3:
        break; 
    }
  }

  onActivateDisplay(number): void { 
    switch (number) {
      case 31: 
      this.optionOne = false;
        break;
      case 32: 
      this.optionOne = false;
        break; 
    }
  }
}
