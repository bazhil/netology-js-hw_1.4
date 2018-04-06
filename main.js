'use strict'

var positions = [
        'Отвертка ультразвуковая WHO-D',
        'Ховерборд Mattel 2016',
        'Нейтрализатор FLASH black edition',
        'Меч световой FORCE (синий луч)',
        'Машина времени DeLorean',
        'Репликатор домашний STAR-94',
        'Лингвенсор 000-17',
        'Целеуказатель электронный WAY-Y'
      ]

//task 1
var lenMassive = positions.length;
var index;
for(index = 0; index < lenMassive; ++index){
  console.log((index+1), positions[index]);
}

//task 2
positions.push('Экзоскелет Trooper-111', 'Нейроинтерфейс игровой SEGUN', 'Семена дерева Эйва');
var lenMassive = positions.length;
var index;
for(index = 0; index < lenMassive; ++index){
  console.log((index+1), positions[index]);
}

//task 3
var nameItem = 'Машина времени DeLorean'  
var indexItem = positions.indexOf(nameItem);
console.log(indexItem);
positions.splice(indexItem, 1);
positions.unshift(nameItem);
console.log('Заказать в первую очередь:\n', positions.slice(0, 3));