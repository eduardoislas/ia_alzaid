import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.page.html',
  styleUrls: ['./service-detail.page.scss'],
})
export class ServiceDetailPage implements OnInit {

  services: any[] = [
    { name: 'Dra. María de los ángeles Gómez', picture: '../../assets/avatars/av-3.png', specialty: 'Médico familiar', address: 'Calle X, colonia X, Consultorio ##'},
    { name: 'Dr. Pedro Morales', picture: '../../assets/avatars/av-2.png', specialty: 'Geriatra' , address: 'Calle X, colonia X, Consultorio ##'},
    { name: 'Dra. Mariana Mizraji', picture: '../../assets/avatars/av-7.png', specialty: 'Radiólogo', address: 'Calle X, colonia X, Consultorio ##' },
    { name: 'Dr. Juan Navarro', picture: '../../assets/avatars/av-6.png', specialty: 'Médico familiar', address: 'Calle X, colonia X, Consultorio ##' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
