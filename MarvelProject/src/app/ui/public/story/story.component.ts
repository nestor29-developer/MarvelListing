import { Component, OnInit, Input } from '@angular/core';
import { story } from 'src/app/core/models/story.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  @Input() datastories: any;
  @Input() title: any;
  datastory: story; 

  constructor( private router: Router,) { }

  ngOnInit(): void {
    this.initializeModel();
  }

  initializeModel() {
    this.datastory = {
      id: 0,
      activeListStory: false
    }
  }

  onDetail(id) { 
    this.datastory.id = id;
    sessionStorage.setItem('data-story', JSON.stringify(this.datastory)); 
    this.router.navigateByUrl('/story-detail');   
  }

}
