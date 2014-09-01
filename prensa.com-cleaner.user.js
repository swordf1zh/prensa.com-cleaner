// ==UserScript==
// @name		Prensa.com Solo Noticias
// @version		0.1
// @author		swordf1zh
// @namespace	https://openuserjs.org/users/swordf1zh
// @description	Script para leer cómodamente (sin anuncios, comentarios, etc.) las noticias en el periódico La Prensa (Prensa.com) de Panamá.
// @include		*.prensa.com/*
// @exclude		*.prensa.com/
// @require		http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @require		http://openuserjs.org/src/libs/swordf1zh/prensa.com-cleaner.js
// @license		MIT License; http://www.opensource.org/licenses/mit-license.php
// @copyright	2014, Ricardo Tribaldos (http://ricardo.tribaldos.org/)
// @grant		none
// ==/UserScript==

var title = $('.content>h1');
var keep = $('.uhora_body');
var gallery = $('#gallery');
var onlyImg = $('img.decoded');

var styles = {
        margin: '0 auto',
        width: '50%'
    };

$('body').remove();

$('<body>').appendTo('html');
$('<div>').appendTo('body');
$('body>div').addClass('prity');

$('.prity').css( styles );
$('div').append( title ).append( keep ).append( gallery ).append( onlyImg );