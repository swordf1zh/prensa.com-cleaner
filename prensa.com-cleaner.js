// ==UserScript==
// @name        Prensa.com Solo Noticias
// @version     0.1
// @author      swordf1zh
// @namespace   swordf1zh
// @description Script para poder leer cómodamente las noticias en prensa.com sin anuncios, comentarios, etc..
// @include     *.prensa.com/*
// @exclude     *.prensa.com/
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @license	MIT License; http://www.opensource.org/licenses/mit-license.php
// @copyright	2014, Ricardo Tribaldos (http://ricardo.tribaldos.org/)
// @grant       none
// ==/UserScript==

var title = $('.content>h1');
var keep = $('.uhora_body');
var styles = {
        margin: '0 auto',
        width: '50%'
    };

$('body').remove();

$('<body>').appendTo('html');
$('<div>').appendTo('body');
$('body>div').addClass('prity');

$('.prity').css( styles );
$('div').append( title ).append( keep );