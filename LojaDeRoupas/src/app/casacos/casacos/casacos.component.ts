import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-casacos',
  templateUrl: './casacos.component.html',
  styleUrls: ['./casacos.component.css']
})
export class CasacosComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  encaminhar(caminho) {
    this.router.navigate([caminho]);
    window.scrollTo(0, 0);
  }
}
