import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  ngOnInit(){
    const nav = document.querySelector(".primary-navigation")as HTMLButtonElement ;
    const navToggle = document.querySelector(".mobile-nav-toggle")as HTMLButtonElement ;;

    navToggle.addEventListener("click", () => {
        
        const visiblity = nav.getAttribute("data-visible");
       

        if (visiblity === "false") {
            nav.setAttribute("data-visible", "true");
            navToggle.setAttribute("aria-expanded", "true");
        } else {
            nav.setAttribute("data-visible", "false");
            navToggle.setAttribute("aria-expanded", "false");
        }

    })

  }

}
