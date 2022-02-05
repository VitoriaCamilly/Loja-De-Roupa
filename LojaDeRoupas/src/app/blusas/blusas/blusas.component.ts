import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blusas',
  templateUrl: './blusas.component.html',
  styleUrls: ['./blusas.component.css']
})
export class BlusasComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
