import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  ngOnInit(): void {
    if (localStorage.getItem("theme")) {
      document.querySelector("[data-theme]").setAttribute("data-theme", localStorage.getItem("theme"));
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.querySelector("[data-theme]").setAttribute("data-theme", "dark");
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      document.querySelector("[data-theme]").setAttribute("data-theme", "light");
    }
  }
}
