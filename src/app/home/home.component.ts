import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route : ActivatedRoute,private router : Router) { }
  
  

  idvarpass= '';
  nama="";
  alamat ="";
  jurusan ="";
 
  save(){
    this.router.navigate(['/home2',this.nama,this.alamat,this.jurusan]);
  }
  ngOnInit() {
    let id=this.route.snapshot.paramMap.get('id');
    this.idvarpass=id;

  }

}