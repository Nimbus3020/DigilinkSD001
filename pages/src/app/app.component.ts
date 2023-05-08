import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentPage = 0;

  images = [
    {
      title:'At the Beach',
      url:'https://unsplash.cohttps://images.unsplash.com/photo-1516815231560-8f41ec531527?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIzfHxiZWFjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60m/photos/eXHeq48Z-Q4'
    },
    {
      title:'Theme park',
      url:'https://unhttps://images.unsplash.com/photo-1516051662687-567d7c4e8f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGhlbWUlMjBwYXJrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60splash.com/photos/GZc4fnQsaWQ'
    },
    {
      title: 'Trees',
      url: 'https://uhttps://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvcmVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60nsplash.com/photos/3Kv48NS4WUU'
    },
    {
      title:'Space X',
      url: 'https://unsplash.htthttps://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BhY2UlMjB4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60pshttps://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BhY2UlMjB4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BhY2UlMjB4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60/photos/OHOU-5UVIYQ'
    },
    {
      title:'At the Beach',
      url:'https://unsplash.cohttps://images.unsplash.com/photo-1516815231560-8f41ec531527?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIzfHxiZWFjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60m/photos/eXHeq48Z-Q4'
    },
    {
      title:'Theme park',
      url:'https://unhttps://images.unsplash.com/photo-1516051662687-567d7c4e8f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGhlbWUlMjBwYXJrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60splash.com/photos/GZc4fnQsaWQ'
    },
    {
      title: 'Trees',
      url: 'https://uhttps://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvcmVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60nsplash.com/photos/3Kv48NS4WUU'
    },
    {
      title:'Space X',
      url: 'https://unsplash.htthttps://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BhY2UlMjB4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60pshttps://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BhY2UlMjB4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BhY2UlMjB4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60/photos/OHOU-5UVIYQ'
    },
    {
      title:'At the Beach',
      url:'https://unsplash.cohttps://images.unsplash.com/photo-1516815231560-8f41ec531527?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIzfHxiZWFjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60m/photos/eXHeq48Z-Q4'
    },
    {
      title:'Theme park',
      url:'https://unhttps://images.unsplash.com/photo-1516051662687-567d7c4e8f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGhlbWUlMjBwYXJrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60splash.com/photos/GZc4fnQsaWQ'
    },
    {
      title: 'Trees',
      url: 'https://uhttps://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvcmVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60nsplash.com/photos/3Kv48NS4WUU'
    },
    {
      title:'Space X',
      url: 'https://unsplash.htthttps://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BhY2UlMjB4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60pshttps://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BhY2UlMjB4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BhY2UlMjB4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60/photos/OHOU-5UVIYQ'
    },
    {
      title:'At the Beach',
      url:'https://unsplash.cohttps://images.unsplash.com/photo-1516815231560-8f41ec531527?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIzfHxiZWFjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60m/photos/eXHeq48Z-Q4'
    },
    {
      title:'Theme park',
      url:'https://unhttps://images.unsplash.com/photo-1516051662687-567d7c4e8f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGhlbWUlMjBwYXJrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60splash.com/photos/GZc4fnQsaWQ'
    },
    {
      title: 'Trees',
      url: 'https://uhttps://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvcmVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60nsplash.com/photos/3Kv48NS4WUU'
    },
    {
      title:'Space X',
      url: 'https://unsplash.htthttps://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BhY2UlMjB4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60pshttps://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BhY2UlMjB4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BhY2UlMjB4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60/photos/OHOU-5UVIYQ'
    },
    {
      title:'At the Beach',
      url:'https://unsplash.cohttps://images.unsplash.com/photo-1516815231560-8f41ec531527?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIzfHxiZWFjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60m/photos/eXHeq48Z-Q4'
    },
    {
      title:'Theme park',
      url:'https://unhttps://images.unsplash.com/photo-1516051662687-567d7c4e8f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGhlbWUlMjBwYXJrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60splash.com/photos/GZc4fnQsaWQ'
    },
    {
      title: 'Trees',
      url: 'https://uhttps://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvcmVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60nsplash.com/photos/3Kv48NS4WUU'
    },
    {
      title:'Space X',
      url: 'https://unsplash.htthttps://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BhY2UlMjB4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60pshttps://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BhY2UlMjB4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BhY2UlMjB4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60/photos/OHOU-5UVIYQ'
    },
  ];

  checkWindowIndex(index: number){
    return Math.abs(this.currentPage - index) < 5;
  }
}
