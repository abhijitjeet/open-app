import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollFunction);
  }

  title = 'open-app';

  scrollFunction() {
    var toolbarSelector = document.getElementById('toolbar');
    if(document.documentElement.scrollTop > 50) {
      if (toolbarSelector) {
        toolbarSelector.classList.add('scrolled-toolbar');
      }
    } else {
      if (toolbarSelector) {
        toolbarSelector.classList.remove('scrolled-toolbar');
      }
    }
  }
}
