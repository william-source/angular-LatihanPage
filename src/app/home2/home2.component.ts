import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
  constructor(private route : ActivatedRoute) { }

  nama=""
  jurusan=""
  alamat=""
  ngOnInit() {
    let nama1=this.route.snapshot.paramMap.get('nama');
    let jurusan1=this.route.snapshot.paramMap.get('jurusan');
    let alamat1=this.route.snapshot.paramMap.get('alamat');
    this.nama=nama1;
    this.jurusan=jurusan1;
    this.alamat=alamat1;
  }

}