import { Component, OnInit } from '@angular/core';
import { story } from 'src/app/core/models/story.model';
import { Router } from '@angular/router';
import { StoriesService } from 'src/app/core/services/api/stories.service';
import { character } from 'src/app/core/models/character.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailStoryComponent implements OnInit {

  storyInfo;
  comicsInfo;
  charactersinfo;
  datastory: story; 
  datacharacter: character;
  titlehead;
  
  constructor(
    private router: Router,
    private storyService: StoriesService) {
      this.getDataStory();
     }

  ngOnInit(): void {
    this.getDataById();
    this.initializeModel();
  }

  initializeModel() {
    this.datacharacter = {
      id: 0,
      activeListCharacter: false
    }
  }

  goBack() { 
    this.datastory.activeListStory = true;
    sessionStorage.setItem('data-story', JSON.stringify(this.datastory)); 
    this.datacharacter.activeListCharacter = false;
    sessionStorage.setItem('data-character', JSON.stringify(this.datacharacter));
    this.router.navigateByUrl('/inicio');   
  }

  getDataStory() { 
    const data = sessionStorage.getItem('data-story');
    data ? this.datastory = JSON.parse(data) : null;
  }
  
  getDataById() { 
    this.storyService.getStoryById(this.datastory.id).subscribe(
      (res) => {
        this.storyInfo = res.data.results[0];
        this.getComicsByStory(); 
        console.log('storyInfo', this.storyInfo);
        this.getCharactersByStory();
      },
      (catchError) => {}
    ); 
  }

  getComicsByStory() { 
    this.storyService.getComicsByStory(this.datastory.id).subscribe(
      (res) => {  
        this.comicsInfo = res.data.results[0];
        this.titlehead = 'Comics';
        console.log('comicsInfo', this.comicsInfo); 
      },
      (catchError) => {}
    ); 
  }

  getCharactersByStory() { 
    this.storyService.getCharactersByStory(this.datastory.id).subscribe(
      (res) => { 
        debugger;
        this.charactersinfo = res.data.results[0]; 
        console.log('charactersinfo', this.charactersinfo);   
      },
      (catchError) => {}
    ); 
  } 


}
