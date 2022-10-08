import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'VTB-front';
 links: any[];
  private activeLinkIndex = -1;

  constructor(private router: Router) {

    this.links = [
      {path: 'rating', label: 'Рейтинг', index: 0},
      {path: "market", label: "Магазин", index: 1},
      {path: "employee", label: "Коллеги", index: 2},
    ]

  }

  ngOnInit(){
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.links.indexOf(this.links.find(tab => tab.link === '.' + this.router.url));
    });

  }


  isLoading() {
    return true;
  }
}
