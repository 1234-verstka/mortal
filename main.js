

const SCORPION = {
  name:'Scorpion',
  hp: 100,
  img:'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon:['Кинжал'],
  attack:function (){
    console.log( 'Scorpion' + '' , 'Fight...');
  }
  
};


const SUBZERO = {
  name:'Sub-Zero',
  hp: 80,
  img:'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon:['Кинжал'],
  attack:function (){
    console.log( 'Sub-Zero' + '' , 'Fight...');
  }
};


function createPlayer( player, pers){
const $player1 = document.createElement('div');
$player1.classList.add(player);


const $progressbar = document.createElement('div');
$progressbar.classList.add('progressbar');
$player1.appendChild($progressbar);

const $character = document.createElement('div');
$character.classList.add('character');
$player1.appendChild($character);

const $life = document.createElement('div');
$life.classList.add('life');
$life.innerText = pers.hp;
$life.classList.width='100%';
$progressbar.appendChild($life);

const $name = document.createElement('div');
$name.classList.add('name');
$name.innerText=pers.name;
$progressbar.appendChild($name);

const $img = document.createElement('img');
$img.src = pers.img;
$character.appendChild($img);

const $arenas = document.querySelector('.arenas');
$arenas.appendChild($player1);
};


createPlayer('player1', SCORPION);
createPlayer('player2', SUBZERO);



