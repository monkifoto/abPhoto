import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  ngOnInit(){


// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', 'disabled');
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle?.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});









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
