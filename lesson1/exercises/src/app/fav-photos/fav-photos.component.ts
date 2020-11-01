import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Cool Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://images.pexels.com/photos/5483420/pexels-photo-5483420.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
  image3 = 'https://images.pexels.com/photos/5255412/pexels-photo-5255412.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';

  constructor() { }

  ngOnInit() {
  }

}