import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements AfterViewInit {

  @ViewChild('videoPlayer') videoPlayerRef!: ElementRef;
  constructor(private titleService: Title) { }

  ngAfterViewInit(): void {
    this.titleService.setTitle('Not Found Page')
    if (this.videoPlayerRef && this.videoPlayerRef.nativeElement) {
      const videoElement: HTMLVideoElement = this.videoPlayerRef.nativeElement;
      videoElement.volume = 0.5; // Definindo o volume para 50%
    }
  }

}
