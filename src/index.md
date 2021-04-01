---
title: Mi primera 
layout: base.njk
templateEngineOverride: njk,md
---

## Blog Posts

{% include "postlist.njk" %}

## Cat of the Day

<section class="py-40">
        <div class="container mx-auto p-10">
            <p class="text-green-ddev font-mono">Hola, soy</p>
            <h1 class="text-white-l-ddev text-6xl py-2" style="font-family: 'DotGothic16';">Adan Uri Plata</h1>
            <h2 class="text-3xl py-2">Construyo cosas para internet</h2>
            <span>@distordev</span>
            <p>Soy un <span class="text-green-ddev">Desarrollador Web</span> y <span class="text-green-ddev">Growth Marketer</span> con amplia experiencia en Wordpress y Google Ads </p>
            <br>
            <button type="button" class="focus:outline-none text-green-ddev text-sm py-2.5 px-5 rounded-md border border-green-ddev ddev-hover-button ">Contactame ahora</button>
        </div>
    </section>

<img class="bg-gray-100" src="{{ catpic }}" />