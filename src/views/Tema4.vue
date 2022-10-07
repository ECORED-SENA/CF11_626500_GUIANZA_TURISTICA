<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade-down-right")
      .titulo-principal__numero.text-white
        span 4
      h1 Iconografía del riesgo
    .bloque-texto-g.fondonaranja.p-3.p-sm-4.p-md-5.my-5.otrobloque2(data-aos="fade-up-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/imagen.png')})`}"
      )
      .bloque-texto-g__texto.py-5.px-4
        p.mb-0 En los escenarios en que se desenvuelve el guía de turismo, aparecen símbolos y señales llamados “señalética”, referidos, por ejemplo, a: señales de tránsito, de bioseguridad, de tipos de senderos, o señales de riesgo o emergencia, entre otras. Estas últimas, las de riesgo, son importantes y el guía debe reconocerlas, ya que este tipo de iconografías dan cuenta de una información que puede evitar que el guía no conduzca a su grupo a una situación de riesgo.
    p.my-5(data-aos="fade-up-right") En el siguiente video, podrá conocer el origen de la señalética, pictogramas y su clasificación, además de la tipología en el área de turismo.
    figure(data-aos="fade-up-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.ampliar.fondo-24.px-5.justify-content-center
      .col-12(data-aos="fade-up-right")
        p.my-5 Luego de conocer un poco sobre señalética o iconografía, es importante identificar cómo se clasifican las señales:
        .row.justify-content-center
          .col-lg-6.col-md-12
            img(src='@/assets/curso/tema4/figura1.svg')
      .cajon.fondocuadrado2.p-4.my-4.fondo-11(data-aos="fade")
        .row.justify-content-center.align-items-center
          .col-lg-1.col-md-2.col-sm-2.col-3
            img(src='@/assets/curso/tema4/figura2.svg')
          .col-lg-11.col-md-10.col-sm-10.col-9
            p.mb-3 Para ampliar la información, puede remitirse a la bibliografía complementaria en Seguridad y Salud en el Trabajo.
</template>

<script>
export default {
  name: 'Tema4',
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
