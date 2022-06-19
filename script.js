'use strict'
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const close=document.querySelector('.close-button');
const show=document.querySelector('.explore');
let anotherClose=document.querySelector('.ok');

const openModal=function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

}

const closeModal=function(){
    modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

show.addEventListener('click',openModal);
close.addEventListener('click',closeModal);
anotherClose.addEventListener('click',closeModal);
overlay.addEventListener('click', closeModal);

//mobile responsive js
// let menu=document.querySelector('.menu');


// menu.addEventListener('click',function(){
//   console.log('buttonclicked');
// document.getElementById('remove').classList.remove('visibilty');
// })
let navLink=document.getElementById("navlink");
let menuClass=document.getElementById("menuClass");
function hidemenu(){
  navLink.classList.add('visibility');

}
function showmenu(){
  navLink.classList.remove('visibility');
  menuClass.classList.add('visibility');
}