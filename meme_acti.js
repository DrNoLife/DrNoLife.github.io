$(document).ready(function() {

    // Prepare meme sentences
    var mqLeft =
    ["What the fuck did you just fucking say about me, you little bitch?\nI'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills.\nI am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. \nYou are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. \nYou think you can get away with saying that shit to me over the Internet? \nThink again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. \n",
    'lul bruv, cmon, u rly tnk ur smthng good? lmfa ll no brv jst stop ur shitttt XXDDDDDD ur badddd u know it is it ggezzzzzz'];
    var mqUp =
    ['you got so mad when i dissed the drake song, did u think he was singing about you? and whats with the ass comments, i love pussy. anyways, u ned to﻿ calm down and take a chill pill child, i dissed a song that we both know sucks. get over it, the song is garbage, stop cryiong.',
    'Hey! Brother man over there! Yeah you! ...\n You\'re shit.'];
    var mqBounce =
    ["⚠️⚠️ warning : you need an IQ of at least 200 to understand this comment ⚠️⚠️\n Wa🅱🅱a lu🅱🅱a du🅱 du🅱 i'm pickle Rick 😄😂😂😂 \nHit that mf like if you understood👌💯😜",
    '#SoSo#So#Fresh#So#Nuts#SuckMahNats'];

    // Eh fuck it, let's just get the random number for the arrays now.. Who gives a fuck?
    var mqLeftRan = Math.floor(Math.random() * 2) + 0;
    var mqUpRan = Math.floor(Math.random() * 2) + 0;
    var mqBounceRan = Math.floor(Math.random() * 2) + 0;

    console.log(mqLeftRan);
    console.log(mqUpRan);
    console.log(mqBounceRan);

    // Prepare the music
    var audio_obj = document.createElement('audio');
    audio_obj.setAttribute('src', 'fresh.mp3');
    $.get();

    // Play music on click
    $('.play_sound').click(function() {
        audio_obj.play();

        // Change css for some elements
        $('section.landing').css('display', 'none');

        // Change html values for rolly things
        $('.mq1').text(mqLeft[mqLeftRan]);
        $('.mq2').text(mqUp[mqUpRan]);
        $('.mq3').text(mqBounce[mqBounceRan]);
    });

});
