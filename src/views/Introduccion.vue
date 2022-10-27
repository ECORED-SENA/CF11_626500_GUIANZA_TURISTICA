<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-down-right")
      .titulo-principal__numero.text-white
        span
          i.fas.fa-info
      h1 Introducción
    p En cada contexto, el riesgo puede ser manejado si se analiza con cuidado, este puede ser medido hasta un punto, pero esto depende de la percepción de peligro de las personas y de la tolerancia al riesgo, aspectos subjetivos que juegan un papel primordial a la hora de tomar decisiones para reducir la posibilidad de que ocurra un accidente en el desarrollo de una actividad de turismo.
    p.mb-5 A continuación, en el siguiente video, conocerá la importancia del servicio guiado en la prevención y disminución de peligros y los riesgos a los que se encuentran expuestos los turistas:   
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/kKNbC_Owa4s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
 
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
