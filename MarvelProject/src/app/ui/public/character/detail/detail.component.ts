import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/core/services/api/characters.service';
import { Router } from '@angular/router';
import { character } from 'src/app/core/models/character.model';
import { story } from 'src/app/core/models/story.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

 
  characterInfo;
  comicsInfo;
  storiesInfo;
  datacharacter: character;
  datastory: story; 
  titlehead;

  constructor(
    private characterService: CharactersService,
    private router: Router) { 
    this.getDataCharacter();
  }

  ngOnInit(): void {
    this.getDataById();
    this.initializeModel();
  }

  initializeModel() {
    this.datastory = {
      id: 0,
      activeListStory: false
    }
  }

  getDataCharacter() { 
    const data = sessionStorage.getItem('data-character');
    data ? this.datacharacter = JSON.parse(data) : null;
  }

  getDataById() { 
    this.characterService.getCharacterById(this.datacharacter.id).subscribe(
      (res) => {
        this.characterInfo = res.data.results[0];
        this.getComicsByCharacter(); 
        console.log('characterInfo', this.characterInfo);
        this.getStoriesByCharacter();
      },
      (catchError) => {}
    ); 
  }

  goBack() { 
    this.datacharacter.activeListCharacter = true;
    sessionStorage.setItem('data-character', JSON.stringify(this.datacharacter));
    this.datastory.activeListStory = false;
    sessionStorage.setItem('data-story', JSON.stringify(this.datastory));  
    this.router.navigateByUrl('/inicio');   
  }

  getComicsByCharacter() { 
    this.characterService.getComicsByCharacter(this.datacharacter.id).subscribe(
      (res) => { 
        this.comicsInfo = res.data.results[0];
        this.titlehead = 'Comics';
        console.log('comicsInfo', this.comicsInfo); 
      },
      (catchError) => {}
    ); 
  }

  getStoriesByCharacter() { 
    this.characterService.getStoriesByCharacter(this.datacharacter.id).subscribe(
      (res) => { 
        this.storiesInfo = res.data.results[0]; 
        console.log('storiesInfo', this.storiesInfo);   
      },
      (catchError) => {}
    ); 
  } 

}
