import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent implements OnInit {

  @Input() datacomics: any;
  @Input() title: any; 

  constructor() { }

  ngOnInit(): void {
  }

}
