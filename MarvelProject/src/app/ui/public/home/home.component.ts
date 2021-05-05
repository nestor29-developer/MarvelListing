import { Component, OnInit, ViewChild } from '@angular/core';
import { CharactersService, ComicsService, StoriesService } from 'src/app/core/services';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { MatMenuTrigger } from '@angular/material/menu';
import { character } from './../../../core/models/character.model';
import { story } from 'src/app/core/models/story.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit { 
  // @ViewChild('storylist') story: MatMenuTrigger;

  optionOne;
  optionTwo;
  optionThree;
  characters;
  comics;
  stories;
  titlelabel;
  datacharacter: character;
  datastory: story;

  constructor(
    private characterService: CharactersService,
    private comicservice: ComicsService,
    private storyservice: StoriesService) { 
      this.initializeModel();
  }

  ngOnInit(): void {  
    this.getDataCharacters();
    this.getDataComics();
    this.getDataStories();
    this.validation();
  }

  getDataCharacter() {
    const data = sessionStorage.getItem('data-character');
    data ? (this.datacharacter = JSON.parse(data)) : null;
  }

  getDataStory() {
    const data = sessionStorage.getItem('data-story');
    data ? (this.datastory = JSON.parse(data)) : null;
  }

  initializeModel() {
    this.datacharacter = {
      id: 0,
      activeListCharacter: false,
    };
    this.datastory = {
      id: 0,
      activeListStory: false,
    };
    this.getDataCharacter();
    this.getDataStory();
  }

  getDataCharacters(): void {
    this.characterService.getCharacters().subscribe(
      (res) => { 
        this.characters = res.data.results;
        console.log(this.characters); 
      },
      (catchError) => {}
    );
  }

  getDataComics(): void {
    this.comicservice.getComics().subscribe(
      (res) => {   
        this.comics = res.data.results;
        console.log('comics',this.comics); 
      },
      (catchError) => {}
    );
  }

  getDataStories(): void {
    this.storyservice.getStories().subscribe(
      (res) => {   
        this.stories = res.data.results;
        console.log('stories',this.stories);  
      },
      (catchError) => {}
    );
  }

  validation() {
    this.datacharacter.activeListCharacter ? this.onActiveTitleOption(1) : this.datastory.activeListStory ? this.onActiveTitleOption(3) : null ;
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
        this.optionTwo = false; 
        this.optionThree = false;
        break;
      case 2:
        this.titlelabel = "Comics";
        this.optionOne = false;
        this.optionTwo = true; 
        this.optionThree = false;
        break;
      case 3:
        this.titlelabel = "Stories";
        this.optionOne = false;
        this.optionTwo = false; 
        this.optionThree = true;
        break; 
    }
  }
 
}
