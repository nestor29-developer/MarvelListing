import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { character } from './../../../core/models/character.model'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @Input() datacharacters: any;
  @Input() title: any;
  datacharacter: character;

  constructor(
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.initializeModel();
  }

  initializeModel() {
    this.datacharacter = {
      id: 0,
      activeListCharacter: false
    }
  }

  onDetail(id) { 
    this.datacharacter.id = id;
    sessionStorage.setItem('data-character', JSON.stringify(this.datacharacter)); 
    this.router.navigateByUrl('/character-detail');   
  }

}
