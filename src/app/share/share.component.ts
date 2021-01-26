import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
  dark: boolean;

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem("theme")) {
      localStorage.getItem("theme") == "dark" ? this.dark = true : this.dark = false;
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      this.dark = true;
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      this.dark = false;
    }
  }

}
