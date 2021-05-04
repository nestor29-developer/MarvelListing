import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/core/services/api/characters.service';
import { Router } from '@angular/router';
import { character } from 'src/app/core/models/character.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

 
  characterInfo;
  comicsInfo;
  datacharacter: character; 

  constructor(
    private characterService: CharactersService,
    private router: Router) { 
    this.getDataCharacter();
  }

  ngOnInit(): void {
    this.getDataById();
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
      },
      (catchError) => {}
    );
 
  }

  goBack() { 
    this.datacharacter.activeListCharacter = true;
    sessionStorage.setItem('data-character', JSON.stringify(this.datacharacter)); 
    this.router.navigateByUrl('/inicio');   
  }

  getComicsByCharacter() { 
    this.characterService.getComicsByCharacter(this.datacharacter.id).subscribe(
      (res) => { 
        this.comicsInfo = res.data.results[0];
        console.log('comicsInfo', this.comicsInfo); 
      },
      (catchError) => {}
    );

  }

}
