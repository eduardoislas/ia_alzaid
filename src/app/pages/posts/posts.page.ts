import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  posts: any[] = [
    { name: 'María de los ángeles Gómez', image: '../../assets/avatars/av-3.png', content: 'Desde hace más de tres años, trabajo con personas dementes. He aprendido a sumergirme en su mundo y a vivir con ellos durante un período de tiempo, y a veces es duro y doloroso, pero también divertido en otras ocasiones. A veces ocurre que te atraen su desesperanza, su miedo, y con todo esto te estas enfrentando a tus propios temores. He aprendido a no asumir este temor a la hora de volver a casa. He aprendido también que la sola idea de no poder quitarse la ropa por la noche, que otra persona la puso por la mañana, puede estropear el día, porque no se acuerdan de que habrá alguien para ayudarles por la noche. He visto lo desconcertante que puede ser, que todo lo que el cerebro ha almacenado durante años, se pierda de repente, todo se vuelva un lío sin lógica, sin sentido.', likes: 50, comments:12, shared:2, views: 72, time:"un minuto" },
    { name: 'Eduardo Islas', image: '../../assets/avatars/av-1.png', content: 'Los primeros signos y síntomas de demencia de Alzheimer: Deterioro de la memoria, como por ejemplo, dificultad para recordar eventos, Dificultad para concentrarse, planificar o resolver problemas, Problemas para completar tareas diarias en el hogar o en el trabajo, Confusión con respecto a los lugares o el paso del tiempo.', likes: 102, comments:23, shared:12, views: 120, time:"tres minutos" },
    { name: 'Guadalupe Contreras', image: '../../assets/avatars/av-5.png', content: 'Mi nombre es Guadalupe y mi marido se llama Antonio. El empezó con esa enfermedad con 52 años. Teníamos un negocio y yo estaba siempre con él. Me fui dando cuenta poco a poco de la enfermedad, yo no sabía nada de ella, pero vi que le pasaba algo raro: contaba a la gente cosas de sitios que habíamos estado que jamás en la vida habíamos ido, escondía las cosas y decía que se las habíamos escondido nosotros o mis hijos, cosa que tampoco ocurría porque mis hijos son muy formales, y él igual, mi marido era una persona muy correcta, muy educada, extraordinario.', likes: 122, comments:45, shared:18, views: 180, time:"cinco minutos" },
    { name: 'Mariana Mizraji', image: '../../assets/avatars/av-7.png', content: 'Hola, soy Mariana (46), hace un año le diagnos­ticaron Alzheimer a mi papá (82). Hace un tiempo mi papá tiene un apellido nuevo, y no tiene nada que ver con un segundo matrimonio, sino a otro agregado que se sumó sin que lo llamen: Luis Mizraji "Alzheimer".', likes: 13, comments:3, shared:2, views: 25, time:"diez minutos" },
    { name: 'Juan Navarro', image: '../../assets/avatars/av-6.png', content: 'Estar en el grupo de ayuda de la estancia Alzheimer, me ayudó a sobrellevar la enfermedad de otra manera. Fue un aprendizaje permanente. El cuidado de mamá pasó a ser el eje de nuestras vidas. A partir también de una decisión tomada ella permanecería siempre en su casa, con sus cosas personales, cerca del afecto de la familia y la compañía de su gata siamesa. Si teníamos compromisos laborales o personales, dependíamos de coordinarlos con su cuidado.', likes: 85, comments:30, shared:9, views: 135, time:"45 minutos" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
