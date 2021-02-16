import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Instrument } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.page.html',
  styleUrls: ['./instrument.page.scss'],
})
export class InstrumentPage implements OnInit {

  instruments: Observable<Instrument[]>;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.instruments = this.dataService.getInstruments();
  }
  save(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Registros guardados',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigateByUrl('indicators');
  }

}
