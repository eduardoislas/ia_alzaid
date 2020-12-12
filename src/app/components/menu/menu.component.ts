import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { MenuOption } from '../../interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  options: Observable<MenuOption[]>;

  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.options = this.dataService.getMenuOptions();
  }

}
