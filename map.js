let lon = 27.57;
let lat = 53.9;


function map() {
  ymaps.ready(init);

  function init() {
    let myMap = new ymaps.Map("map", {
      center: [lat, lon],
      zoom: 10
    });

    myMap.geoObjects
      .add(new ymaps.Placemark([lat, lon], {
        balloonContent: 'Город, погода которого вас интересует'
      }, {
        preset: 'islands#dotIcon',
        iconColor: '#735184'
      }))
  }
}

map();