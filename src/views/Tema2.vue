<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade-down-right")
      .titulo-principal__numero.text-white
        span 2
      h1 Metodología de identificación y valoración del riesgo
    .row.justify-content-center
      .col-lg-7.col-md-12(data-aos="fade-down-left")
        p Existe una variedad de métodos para identificar los riesgos, especialmente en ambientes laborales, y muchos se sustentan en la medición de la valoración de la probabilidad y la severidad de las consecuencias, atribuyéndole un valor numérico al riesgo, ejemplificado en esta fórmula 
        p.resaltado.text-bold Probabilidad x Consecuencia = Riesgo.
        p Y aunque hay áreas especializadas donde se pueden encontrar otros tipos de factores y criterios de evaluación, lo importante aquí es resaltar que, en las actividades turísticas, este es un ejercicio que se debe hacer con tiempo, durante la planeación de las mismas, y de manera detallada y rigurosa; y en algunas actividades más específicas, como turismo de aventura, por ejemplo, se debe realizar con conocimientos especializados.
        .cajon.fondocuadrado.p-4.my-4.fondo-4(data-aos="fade-down-left")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-md-3.col-sm-3.col-4
              img(src='@/assets/curso/tema2/figura1.svg')
            .col-lg-10.col-md-9.col-sm-9.col-8
              span.text-bold TIP: 
              span Los guías deben procurar estar actualizados en cursos de manejo y administración de riesgo.
      .col-lg-5.col-md-12(data-aos="fade-down-right")
        img(src='@/assets/curso/tema2/imagen1.jpg')
    p.my-5(data-aos="fade-down-left") Una opción a considerar para estudio en la guianza es la teoría dinámica de accidentes, donde se consideran dos factores: los objetivos y los subjetivos, que se entrecruzan en el ejercicio de las actividades turísticas y, en su intersección, se genera un potencial de accidentes. Entre mayor sea la superposición de los factores, mayor es la probabilidad de que ocurra un accidente.
    .row.fondo-12.ampliar.px-5.justify-content-center
      .col-lg-8.col-md-12
        .titulo-sexto.color-acento-contenido(data-aos="fade")
          h5 Figura 1. 
          span Superposición de factores
        img(src='@/assets/curso/tema2/figura2.svg')
        p.fondoblanco.my-4.p-2.text-small Nota. Hale (1983). 
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-4.col-md-12.mb-4(data-aos="fade-down-left")
        p Los factores subjetivos o humanos se pueden controlar, en cierto grado; saber cuáles son, estudiarlos y entenderlos facilita la tarea de mitigar las situaciones de riesgo presentes en las actividades turísticas.
        p Algunos ejemplos de factores objetivos y subjetivos:

      .col-lg-4.col-md-6.col-sm-10.col-10.mb-4
        .tarjeta.tarjeta-flip(data-aos="fade-down-left").text-white(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/factoresobjetivos.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.fondo-13
              .row.justify-content-center
                .col-lg-5.col-md-6.col-sm-4.col-4
                  img(src='@/assets/curso/tema2/figura4.svg')
              h4.mt-4.text-white.text-center Factores objetivos
              ul.lista-ul--color
                li 
                  i.fas.fa-location-arrow
                  | Terreno o tipo de suelo
                li 
                  i.fas.fa-location-arrow
                  | Clima
                li 
                  i.fas.fa-location-arrow
                  | Equipos
                li 
                  i.fas.fa-location-arrow
                  | Animales
                li 
                  i.fas.fa-location-arrow
                  | Corriente de un río
                li 
                  i.fas.fa-location-arrow
                  | Hora del día

      .col-lg-4.col-md-6.col-sm-10.col-10.mb-4
        .tarjeta.tarjeta-flip(data-aos="fade-down-right").text-white(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/factoressubjetivos.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.fondo-13
              .row.justify-content-center
                .col-lg-5.col-md-6.col-sm-4.col-4
                  img(src='@/assets/curso/tema2/figura3.svg')
              h4.text-center.mt-4.text-white Factores subjetivos
              ul.lista-ul--color
                li 
                  i.fas.fa-location-arrow
                  | Habilidades de los turistas
                li 
                  i.fas.fa-location-arrow
                  | Condición física
                li 
                  i.fas.fa-location-arrow
                  | Miedo
                li 
                  i.fas.fa-location-arrow
                  | Experiencia del grupo
                li 
                  i.fas.fa-location-arrow
                  | Mala comunicación
                li 
                  i.fas.fa-location-arrow
                  | Destrezas
    p(data-aos="fade-down-left") Hacer un diagnóstico de las situaciones riesgosas que se presentan en la práctica turística, analizar juiciosamente el potencial de accidentes, identificando los factores objetivos y subjetivos, definiendo la mejor forma de controlar estos últimos, es indispensable para estructurar un plan para prevenir la posibilidad de ocurrencia de situaciones de riesgo.
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-down-left")
      h2 2.1 Instrumento
    p.mb-5.pb-4(data-aos="fade-down-right") Es recomendable hacer un plan de administración de riesgos para cada recorrido, ruta, excursión, travesía, entre otras; este sirve para anticipar los riesgos, por medio de la evaluación de las causas y las consecuencias, y se deben proponer unas acciones de respuesta. Este plan lo pueden componer varios documentos, por ejemplo: una matriz de riesgos, un plan de acción y un plan de contingencia. Cada plan de administración de riesgos depende del tipo de actividad que se vaya a realizar y del cumplimiento del objetivo propuesto para la misma.

    .bloque-texto-g.fondo-14.p-3.p-sm-4.p-md-5.my-5.otrobloque(data-aos="fade-up-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/imagen2.png')})`}"
      )
      .bloque-texto-g__texto.py-5.px-4
        p Una 
          span.resaltado.text-bold matriz de riesgos 
          span ayuda a identificar, analizar y evaluar los riesgos de una actividad, es una forma de organizar la información relevante para poder proponer estrategias de manejo en caso de que ocurra el incidente previsto.
        br
        br
        p Gracias a la matriz, se pueden anticipar los riesgos, de esta manera, prevenirlos, y finalmente, definir los pasos a seguir para actuar de la mejor manera en caso de una emergencia.
    .row.justify-content-center
      .col-lg-5.col-md-12.mb-4(data-aos="fade-down-left")
        img(src='@/assets/curso/tema2/imagen3.jpg')
      .col-lg-7.col-md-12(data-aos="fade-down-right")
        .cajon.fondocuadrado3.px-4.mb-3.fondo-15.sombras(data-aos="fade-down-left")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-md-3.col-sm-3.col-4.p-3
              img(src='@/assets/curso/tema2/figura1.svg')
            .col-lg-10.col-md-9.col-sm-9.col-8
              span.text-bold TIP: 
              span Es recomendable mantener informados a los visitantes de los posibles riesgos que pueden enfrentar en cada actividad.
        p Dentro del ejercicio de la guianza, uno de los momentos en que se realizan más actividades es durante la planeación, es en el antes de la operación donde, con una mirada global, se pueden diligenciar formatos fundamentales, como el Plan de Acción, que es donde se define la ruta para lograr los objetivos, y el Plan de Contingencias, que es donde se plasman los procedimientos a ejecutar cuando un acontecimiento imprevisto ocurre.
    .row
      .col-auto.fondo-10.p-3(data-aos="fade-down-left")
        h3.mb-0 Plan de manejo de emergencias
    .row.justify-content-center.my-5
      .col-lg-8.col-md-12(data-aos="fade-down-left")
        p Desafortunadamente, hay situaciones que se presentan inesperadamente, catalogadas como emergencias, y los guías de turismo deben estar preparados para enfrentarlas, haciendo uso de los recursos establecidos en este plan. Este documento es una herramienta que establece acciones concretas, derivadas de un diagnóstico de las posibles emergencias, y que organiza el paso a paso en el manejo de dichas situaciones.
        p Debe contar con el número de contacto de los organismos locales de atención de emergencias, definir los procedimientos para cada situación identificada, e identificar a los responsables de ejecutar el plan de emergencias y los equipos necesarios.
      .col-lg-4.col-md-12(data-aos="fade-down-right")
        img(src='@/assets/curso/tema2/imagen4.jpg')
    .row.ampliar.fondo-16.px-5
      .col-12
        separador
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-down-left")
          h2 2.2 Niveles de riesgo
        p.mb-5(data-aos="fade-down-right") Según el diccionario de la Real Academia de la Lengua Española, una de las definiciones de nivel es: 
          span.resaltado “la medida de cantidad con referencia a una escala determinada”
          span . Pero, ¿esto qué quiere decir? Pues, vea lo que representa:
      .row.justify-content-center.fondo-17
        .col-xxl-11.col-xl-12.col-lg-12.mb-5(data-aos="fade-down-left")
          img.mostrar(src='@/assets/curso/tema2/figura5.svg')
        .col-md-4.col-sm-5.col-7.p-3.fondotitulo.mostrar2.mb-0(data-aos="fade-down-left")
          h3.text-center.m-auto Niveles de riesgo
        .col-12.fondo-18.padd1.mb-4(data-aos="fade-down-right")
          p.mostrar2 Si se habla de niveles de riesgo, se debe pensar en la gravedad de los mismos. 
        .col-12.fondo-19.padd2.mb-4(data-aos="fade-down-left")
          p.mostrar2 En el turismo, donde la responsabilidad del bienestar de los turistas recae sobre el guía
        .col-12.fondo-20.padd3(data-aos="fade-down-right")
          p.mostrar2 Se puede hacer el uso de la fórmula PxC=R para calcular el nivel de riesgo,
        .col-12.fondo-21.padd2(data-aos="fade-down-left")
          p.mostrar2 Donde se establecen los criterios de probabilidad y la gravedad de las consecuencias,
        .col-12.fondo-22.padd4.mb-5(data-aos="fade-down-right")
          p.mostrar2 y así poder tomar las decisiones adecuadas al momento de realizar una o varias actividades.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
