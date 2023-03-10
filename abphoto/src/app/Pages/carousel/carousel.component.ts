import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  constructor(){}

  ngOnInit(){

    const track = document.querySelector('.carousel__track') as HTMLDivElement;
    console.log(track);
    const slides = Array.from(track?.children) as Element[];
    const nextButton = document.querySelector('.carousel__button--right')as HTMLButtonElement;
    const prevButton = document.querySelector('.carousel__button--left')as HTMLButtonElement;
    const dotsNav = document.querySelector('.carousel_nav')as HTMLDivElement;
    const dots = Array.from(dotsNav?.children);
    
    const slideWidth = slides[0].getBoundingClientRect().width;
    console.log("ngOnInit");
    let direction : number = 0; 
    let nextSlide : any = null;
    let targetDot : any = null;
    let targetIndex : any = null;

    setInterval(function() {
     
      const currentSlide = document.querySelector('.current_slide') as HTMLDivElement;
      const curDot = dotsNav.querySelector('.current_slide') as HTMLButtonElement;
      if( direction == 0 ){
        nextSlide = currentSlide?.nextElementSibling as HTMLDivElement;
        targetDot = curDot.nextElementSibling as HTMLButtonElement;
        if(nextSlide == null){
          direction = 1;
          nextSlide = currentSlide?.previousElementSibling as HTMLDivElement;
          targetDot = curDot.previousElementSibling as HTMLButtonElement;
        }
      }
      else{
        nextSlide = currentSlide?.previousElementSibling as HTMLDivElement;
        targetDot = curDot.previousElementSibling as HTMLButtonElement;
        if(nextSlide == null){
          direction = 0;
          nextSlide = currentSlide?.nextElementSibling as HTMLDivElement;
          targetDot = curDot.nextElementSibling as HTMLButtonElement;
        }
      }
     
      const targetIndex = slides.findIndex(slide => slide === nextSlide);
      moveToSlide(currentSlide, nextSlide);

      updateDots(curDot, targetDot);

      hideShowArrows(targetIndex, prevButton, nextButton, slides);
      console.log("setTimeout direction: " + direction);
  }, 5000);
  
    
  
    const setSlidePosition = (slide:any, index:any) => {
      slide.style.left = slideWidth * index + 'px'; 
    }
  
     slides.forEach(setSlidePosition);
  
     const moveToSlide = (currentSlide: HTMLDivElement, targetSlide: HTMLDivElement) =>{
      (document.querySelector('.carousel__track') as HTMLDivElement).style.transform = 'translateX(-' + targetSlide?.style.left + ')';
      currentSlide.classList.remove('current_slide');
      targetSlide.classList.add('current_slide');

     
  
     }
  
    prevButton?.addEventListener('click', e =>{
      console.log('PrevClick');
    const currentSlide = document.querySelector('.current_slide') as HTMLDivElement;
    const prevSlide = currentSlide?.previousElementSibling as HTMLDivElement;
    const curDot = dotsNav.querySelector('.current_slide') as HTMLButtonElement;
    const targetDot = curDot.previousElementSibling as HTMLButtonElement;
    const targetIndex = slides.findIndex(slide => slide === prevSlide);
    updateDots(curDot, targetDot);
    moveToSlide(currentSlide, prevSlide);
    hideShowArrows(targetIndex, prevButton, nextButton, slides);
    })
  
    nextButton?.addEventListener('click', e => {
      console.log('PrevClick');
      const currentSlide = document.querySelector('.current_slide') as HTMLDivElement;
      const nextSlide = currentSlide?.nextElementSibling as HTMLDivElement;
      const curDot = dotsNav.querySelector('.current_slide') as HTMLButtonElement;
      const targetDot = curDot.nextElementSibling as HTMLButtonElement;
      const targetIndex = slides.findIndex(slide => slide === nextSlide);
      updateDots(curDot, targetDot);
      moveToSlide(currentSlide, nextSlide);
      hideShowArrows(targetIndex, prevButton, nextButton, slides);
    })
  
    dotsNav?.addEventListener('click', e=>{
      console.log('dotClick');
      const targetDot = e.target as HTMLElement;
      let btn = targetDot.closest('button') as HTMLButtonElement;
  
      const track = document.querySelector('.carousel__track') as HTMLDivElement;
      const slides = Array.from(track?.children);
      const dotsNav = document.querySelector('.carousel_nav')as HTMLDivElement;
      const dots = Array.from(dotsNav?.children);
      const currentSlide = document.querySelector('.current_slide') as HTMLDivElement;
      const curDot = dotsNav.querySelector('.current_slide') as HTMLButtonElement;
      const targetIndex = dots.findIndex(dot => dot === btn);
      const targetSlide = slides[targetIndex] as HTMLDivElement;
  
      moveToSlide(currentSlide, targetSlide);
  
      updateDots(curDot, btn);
  
      hideShowArrows(targetIndex, prevButton, nextButton, slides);
  
    })
  
    const updateDots = (currentDot:HTMLButtonElement, targetDot: HTMLButtonElement) => {
      currentDot?.classList.remove('current_slide');
      targetDot?.classList.add('current_slide');
    }
  
    const hideShowArrows = (targetIndex:number, prevButton : HTMLButtonElement, nextButton: HTMLButtonElement, slides: Element[]) =>{
      if(targetIndex === 0){
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
      }
      else if (targetIndex === slides.length-1){
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
      }
      else{
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
      }
    }
  
  }
  
  }
  