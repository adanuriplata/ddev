---
title: UTM - Mide todas tus acciones de mkt digital y organízalo en Analytics 
cover: 2021/04/utmgoogleanalytics.jpeg
excerpt: Mide todas tus acciones de mkt digital y organízalo en Analytics | Muchos profesionales del marketing digital aun desconocen el poderoso uso de las utm. En este post te mostrarte los beneficios y como con 2 minutos ...
date: 2021-04-18
seo:
  siteImage: 2021/04/utmgoogleanalytics.jpeg
  title: Medir campañas digitales con UTM Google Analytics
tags: 
  - Google Analytics, Ads
---

Una de las preguntas que me hacen frecuentemente son: 
<br>
- ¿Hay una manera de ver en Google Analytics de donde viene todo el trafico pero de mis campañas de marketing digital?
<br>
- ¿Como lleno la información de campañas en **Google Analytics**?


Muchos profesionales del marketing digital aun desconocen el poderoso uso de las utm. En este post tratare de mostrarte los beneficios y como con 2 minutos que le agregues cuando programas tus campañas  puedes obtener información muy valiosa.

## ¿Ques es UTM?

> UTM en marketing digital es la forma de darle mas información acerca de tus campañas a Google Analytics.

- Hey! Google Analytics tú lo sabes todo pero cuando den clic en este enlace: márcalo como enviado desde la campaña regreso a clases y ponle que fue un banner azul con la imagen de 2 niños felices publicado en instagram.

## Técnicamente que es UTM

Poniéndonos en *technical mode* las utm son variables con información que viajan través de la url. Cuando enviamos una petición al servidor usamos una dirección url por ejemplo:

`https://fuzzjs.com/usuarios`

En el ejemplo anterior le decimos al navegador que queremos llegar a dicha dirección. El servidor donde se encuentra alojado el sitio web recibe la petición de mostrar lo que hay en la dirección "usuarios" y entonces muestra la página.

Pero sí queremos ver solo un usuario podemos mandar el nombre de dicho usuario. Si el nombre del usuario fuera Pedro colocaríamos  **usuario=pedro**Para agregar estos parámetros se tiene que anteponer un signo "?" después el nombre del campo y su valor.

``` php
? + [campo] + = + [valor] 
```

La url queda de la siguiente forma:

``` js
Parametro:  ?usuario=pedro

```

``` js
//URL sin parametro: https://fuzzjs.com/usuarios
//URL con el parametro: https://fuzzjs.com/usuarios?usuario=pedro
```

Ahora cuando el servidor reciba la petición también recibirá un parámetro donde se le indica que el usuario a buscar es Pedro, internamente la pagina en su código tendrá funciones que interpretaran esa información y realizaran la búsqueda.

`https://fuzzjs.com/oferta-regreso-a-clases?medio="google"`

Listo ahora ya sabes de forma general cómo funciona puede sonar un poco complejo pero créeme es muy sencillo y ya veras como lo puedes hacer sin aprenderte ningún código.

## ¿Como agrego UTM a mis campañas?

Con la información anterior seguramente estas pensando que agregando código cómo **?campaña=verano** o **?medio=facebook** seria el camino para  agregar dichas utm a tus campañas y realmente no estas en un error pero eso es un poco engorroso y tedioso. Por eso existen herramientas que nos ayudan a generar dichas url´s sin complicarnos la vida.

> Google tiene una serie de herramientas que nos ayudan a hacer más facíl estas y otras tareashttps://ga-dev-tools.appspot.com/campaign-url-builder/

![campaign url builder](/assets/img/2021/04/camping-url-builder.jpg)

Google UTM BUILDER GA DEV TOOLS

En en el enlace anterior encontraras una herramienta que nos permite ir llenando campos con la información de nuestras campañas y al final te crea un enlace con la url y los parámetros utm que podrá interpretar Google Analytics

## ¿Cómo lleno el generador de url, utm builder?

El formulario cuenta con 6 campos de los cuales solo 3 son obligatorios.En ellos podrás ingresar la información de tu campaña.

![utm builder form](/assets/img/2021/04/camping-url-builder-form.jpg)

UTM BUILDER FORM

A continuación  veremos una tabla donde se informa que deberias llenar en cada campo.

Tomemos como ejemplo un colegio que busca implementar una campaña de regreso a clases donde buscas promocionar un descuento con un banner que colocaras en el sitio web de un blog de noticias para padres llamado serpadre.com


<div class="table-wrapper" markdown="block">

| CAMPO                    | CONTENIDO                                          | EJEMPLO |
| -----------              | -------------------------------------------------- | ------- |
| Website URL              | La url de destino como tu sitio web o landing page |  https://colegioX.com/regreso-a-clases
| Fuente de la campaña     | Lugar donde estara tu campaña | blog serpadre.com
| Medio de la campaña      | Medio por el cual va a interactuar tu publico con tu campaña (video, banner, imagen, etc.) | banner
| Nombre de la campaña     | Nombre para identificar en Analytics todas las interacciones que se tuvieron con esta campaña | Regreso a clases
| Término de la campaña    | Opcional - alguna palabra clave en particular        | lo dejaremos vacio
| Contenido de la campaña  | Opcional - Si estas haciendo un test A/B aqui puedes colocar la variante para diferenciar, o si tienes dos banners puedes agregar la diferencia entre uno y otro        | imagen con chicos sonriendo

</div>


![utm builder content](/assets/img/2021/04/camping-url-builder-form-full.jpg)

UTM BUILDER CONTENT

Ahora que ya tenemos los campos con nuestra información podemos ver abajo que se ha generado la url con la información necesaria que podra reconocer Google Analytics.

![url utm generada con google](/assets/img/2021/04/camping-url-builder-shortener.jpg)

Sin embargo la url puede ser muy larga y no tan fácil  de compartir por ese motivo tenemos una  opción  de acortar nuestra url.

Podemos presionar en *Convert URL to Short Link  y obtener una url corta*

![url acortada utm generada con google](/assets/img/2021/04/camping-url-builder-shortener-2.jpg)

Listo ahora puedes colocar esa url en el enlace de tus campañas y cuando tus usuarios interactúen con tu campaña podrás saber exactamente de dónde provienen esos clics y por que medio o fuente tu campaña tiene mejor rendimiento.

Coméntanos que otra herramienta conoces de medición y si te fue util comparte esta información.

*#elConocimientoNosHaceLibres*