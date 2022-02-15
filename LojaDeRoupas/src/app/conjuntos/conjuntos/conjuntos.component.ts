import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conjuntos',
  templateUrl: './conjuntos.component.html',
  styleUrls: ['./conjuntos.component.css']
})
export class ConjuntosComponent implements OnInit {

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
