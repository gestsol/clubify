import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

	activarMenu(e : any){
	  
		var menu =  document.getElementsByClassName('navbarActive'); 
		menu[0].classList.add("navItem");
		menu[0].classList.remove("navbarActive");
		
		
		var menuSelected = document.getElementsByClassName(''+e+''); 
		menuSelected[0].classList.add("navbarActive");
		menuSelected[0].classList.remove("navItem");
	}

}


