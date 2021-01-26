import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
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

  setTheme(): void {
    let setBoo: boolean, setTheme: string;

    if (this.dark) {
      setBoo = false;
      setTheme = "light";
    } else {
      setBoo = true;
      setTheme = "dark";
    }

    document.querySelector("[data-theme]").setAttribute("data-theme", setTheme);
    localStorage.setItem("theme", setTheme);
    this.dark = setBoo;
  }
}
