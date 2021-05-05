import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bc-circular-loader',
  templateUrl: './circular-loader.component.html',
  styleUrls: ['./circular-loader.component.scss']
})
export class CircularLoaderComponent implements OnInit, AfterContentChecked {

  @Input() color!: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    this.setInitialColorLoader();
  }

  setInitialColorLoader() {
    if (this.color === null || this.color === undefined) {
      this.color = '#FB0019';
    }
  }
}
