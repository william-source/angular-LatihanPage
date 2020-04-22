import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  idvarpass= '';
  ngOnInit() {
    let id=this.route.snapshot.paramMap.get('id');
    this.idvarpass=id;
  }

}