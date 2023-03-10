import { Component } from '@angular/core';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.css']
})
export class StudioComponent {
  ngOnInit(){
        const dots = document.querySelector('.dots');
      dots?.addEventListener('click', e => {
      const target = e.target as HTMLDivElement;
      if (!target?.matches('.dot')) {
        return;
      }
      
      const index = Array.from(dots.children).indexOf(target);
      const selector = `.carousel__slide:nth-child(${index + 1})`;
      const box = document.querySelector(selector) as HTMLDivElement;
      box.scrollIntoView({
        behavior: 'smooth',
        inline: 'start'
      })
    })
  }

}
