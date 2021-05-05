import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-mat-card-custom',
  templateUrl: './mat-card-custom.component.html',
  styleUrls: ['./mat-card-custom.component.scss']
})
export class MatCardCustomComponent implements OnInit {

  activeScrollRight;
  activeScrollLeft;
  scrollRightEnd;
  scrollLeftEnd;
  @ViewChild('cardContent', { static: false }) public cardContent: ElementRef;
  @Input() data: any;
  @Input() title: any;

  constructor() { }

  ngOnInit(): void {
  }

  scrollLeft() {
    this.activeScrollRight=true;
    this.activeScrollLeft=false;
    this.cardContent.nativeElement.scrollLeft -= 150;
    this.enableScroll();
  }

  scrollRight() {
    this.activeScrollRight=false;
    this.activeScrollLeft=true;
    this.cardContent.nativeElement.scrollLeft += 150;
    this.enableScroll();
  }

  enableScroll() {
    const elem = this.cardContent.nativeElement;
    const newScrollLeft = elem.scrollLeft;
    const width = elem.offsetWidth;
    const scrollWidth = elem.scrollWidth;
    if (Math.round(scrollWidth - newScrollLeft) === width) {
      this.scrollRightEnd = true;
    } else {
      this.scrollRightEnd = false;
    }
    if (newScrollLeft === 0) {
      this.scrollLeftEnd = true;
    } else {
      this.scrollLeftEnd = false;
    }
  }

  

}
