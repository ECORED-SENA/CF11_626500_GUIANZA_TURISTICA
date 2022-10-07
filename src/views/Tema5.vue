<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade-down-right")
      .titulo-principal__numero.text-white
        span 5
      h1 Simulacro
    .row.ampliar.px-5.fondo-26
      .col-12
        .row.justify-content-center.align-items-center
          .col-lg-4.col-md-10(data-aos="fade-down-right")
            img(src='@/assets/curso/tema5/figura1.svg')
          .col-lg-8.col-md-12(data-aos="fade-down-right")
            p Es la reproducción de sucesos y escenarios reales asociados a un peligro identificando los riesgos derivados de este y sus posibles consecuencias, permitiendo, de modo general, identificar cómo actuar antes, durante y después de una emergencia.
            ul.lista-ul--color
              li 
                i.fas.fa-location-arrow
                | Sismos.
              li 
                i.fas.fa-location-arrow
                | Incendios (urbanos, forestales).
              li 
                i.fas.fa-location-arrow
                | Inundaciones.
              li 
                i.fas.fa-location-arrow
                | Deslizamientos (avalanchas, derrumbes).
              li 
                i.fas.fa-location-arrow
                | Exposición a gases (espacios abiertos, espacios confinados).
              li 
                i.fas.fa-location-arrow
                | Rescates acuáticos y de altura.
    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-down-left")
      h2 5.1 Objetivos de un simulacro
    p.my-5(data-aos="fade-down-right") Los objetivos de un simulacro son:
    TabsA.color-acento-contenido.mb-5(data-aos="fade-down-left")
      .tarjeta.fondo-27.p-4(titulo="En las personas")
        .row.justify-content-center.align-items-center
          .col-md-10.col-sm-12.col-12
            h4 En las personas
            ul.lista-ul--color
              li 
                i.fas.fa-location-arrow
                | Crear hábitos de respuesta. 
              li 
                i.fas.fa-location-arrow
                | Identificar rutas de evacuación. 
              li 
                i.fas.fa-location-arrow
                | Cuantificar y mejorar tiempos de respuesta. 
              li 
                i.fas.fa-location-arrow
                | Reconocer los equipos de apoyo y sus funciones.
          .col-md-2.col-sm-3.col-4
            img(src='@/assets/curso/tema5/figura2.svg')
      
      .tarjeta.fondo-27.p-4(titulo="En las organizaciones e instalaciones")
        .row.justify-content-center.align-items-center
          .col-md-10.col-sm-12.col-12
            h4 En las organizaciones e instalaciones
            ul.lista-ul--color
              li 
                i.fas.fa-location-arrow
                | Identificar los recursos físicos para la atención de una emergencia.
              li 
                i.fas.fa-location-arrow
                | Verificar la pertinencia de la ubicación y cantidad de recursos físicos para la atención de la emergencia.
              li 
                i.fas.fa-location-arrow
                | Verificar el estado y funcionamiento de los equipos y recursos físicos para la atención de una emergencia.
              li 
                i.fas.fa-location-arrow
                | Identificar o reubicar puntos de encuentro.
          .col-md-2.col-sm-3.col-4
            img(src='@/assets/curso/tema5/figura3.svg')
      .tarjeta.fondo-27.p-4(titulo="En los planes de acción y protocolos")
        .row.justify-content-center.align-items-center
          .col-md-10.col-sm-12.col-12
            h4 En los planes de acción y protocolos
            ul.lista-ul--color
              li 
                i.fas.fa-location-arrow
                | Verificación de la pertinencia en los planes de acción y contingencia en la respuesta a una emergencia.
              li 
                i.fas.fa-location-arrow
                | Desempeño del equipo humano de emergencia.
              li 
                i.fas.fa-location-arrow
                | Permiten medir la capacitación y entrenamiento de las diferentes brigadas.
              li 
                i.fas.fa-location-arrow
                | Permiten medir la eficiencia en el manejo de las comunicaciones e información.
              li 
                i.fas.fa-location-arrow
                | Recreación de una situación de emergencia previamente identificada.
          .col-md-2.col-sm-3.col-4
            img(src='@/assets/curso/tema5/figura4.svg')
    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-down-left")
      h2 5.2 Clasificación de los simulacros
    p.my-5(data-aos="fade-down-left") Los simulacros se pueden clasificar de la siguiente manera:
    .row.ampliar.fondo-24.px-5.justify-content-center
      .col-12(data-aos="fade-up-right")
        .row.justify-content-center
          .col-lg-8.col-md-12
            img(src='@/assets/curso/tema5/figura5.svg')
    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-down-left")
      h2 5.3 Fases de un simulacro
    p.mb-5(data-aos="fade-down-left") Las fases o etapas de los simulacros son:
    TabsB.color-acento-contenido.mb-5(data-aos="fade-down-right")
      .py-4.py-md-5(titulo="Etapa 1<br/>Análisis" :icono="require('@/assets/curso/tema5/icono1.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Etapa 1. Análisis 
            p En esta primera etapa, es primordial verificar y recolectar la información y  datos  de las condiciones asociadas a los diferentes actores que van a intervenir en el desarrollo de la actividad. 
            ul.lista-ul--color
              li 
                i.fas.fa-location-arrow
                | Factores humanos involucrados.
              li 
                i.fas.fa-location-arrow
                | Factores ambientales. 
              li 
                i.fas.fa-location-arrow
                | Recursos físicos.
              li 
                i.fas.fa-location-arrow
                | Tipo de simulacro.         
          .col-md-6
            figure
              img(src='@/assets/curso/tema5/imagen1.jpg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Etapa 2<br/>Planeación" :icono="require('@/assets/curso/tema5/icono2.svg')")
        .row
          .col-md-6
            h4 Etapa 2. Planeación
            p En esta segunda etapa, se debe desarrollar el plan de acción específico (documento escrito) para la ejecución del simulacro; el plan de acción nos entregará los requerimientos mínimos a tener en cuenta:
            ul.lista-ul--color
              li 
                i.fas.fa-location-arrow
                | El plan de acción del simulacro debe contener el manejo de tiempos y responsables.    
              li 
                i.fas.fa-location-arrow
                | Equipos de protección personal.
              li 
                i.fas.fa-location-arrow
                | Elementos de protección personal.
              li 
                i.fas.fa-location-arrow
                | Recurso humano de emergencia.
              li 
                i.fas.fa-location-arrow
                | Medios de alerta y comunicación de emergencia.
              li 
                i.fas.fa-location-arrow
                | Equipos de protección y extinción de incendios.
              li 
                i.fas.fa-location-arrow
                | Determinación inicial de las zonas de alto, medio y bajo riesgo.
            p Por último, en esta etapa previa realización del simulacro, se debe discutir con los participantes y directivas la pertinencia del mismo y considerar las posibles modificaciones que los participantes consideren se deben realizar.
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema5/imagen2.jpg')        
      .py-4.py-md-5(titulo="Etapa 3<br/>Alistamiento " :icono="require('@/assets/curso/tema5/icono3.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Etapa 3. Alistamiento 
            p Informar con anterioridad la fecha, hora y objetivos del simulacro a desarrollar; este paso debe estar contenido en el plan de acción. 
            p Para simulacros programados, se debe informar a todos y cada uno de los participantes el plan de acción, dando a conocer las acciones a realizar, rutas de encuentro y puntos de encuentro.
            p Para simulacros  sin previo aviso, informar únicamente a los brigadistas y equipos de emergencia las acciones e instrucciones. 
        
          .col-md-6
            figure
              img(src='@/assets/curso/tema5/imagen3.jpg')

      .py-4.py-md-5(titulo="Etapa 4<br/>Ejecución " :icono="require('@/assets/curso/tema5/icono4.svg')")
        .row
          .col-md-6
            h4 Etapa 4. Ejecución 
            p El simulacro se debe realizar considerando los siguientes pasos:
            ul.lista-ul--color
              li 
                i.fas.fa-location-arrow
                | Activación del simulacro.
              li 
                i.fas.fa-location-arrow
                | Señal de alarma.
              li 
                i.fas.fa-location-arrow
                | Detección de la causa de emergencia.
              li 
                i.fas.fa-location-arrow
                | Aviso a la cadena mando, superiores.
              li 
                i.fas.fa-location-arrow
                | Ejecución del plan de acción.
              li 
                i.fas.fa-location-arrow
                | Detección de las zonas de alto, medio y bajo riesgo. 
              li 
                i.fas.fa-location-arrow
                | Definir medidas de control.
              li 
                i.fas.fa-location-arrow
                | Definir la pertinencia de la evacuación.
              li 
                i.fas.fa-location-arrow
                | Puesta en marcha de las medidas de control (brigadas o equipos de emergencia).
              li 
                i.fas.fa-location-arrow
                | Verificar la existencia de lesionados.
              li 
                i.fas.fa-location-arrow
                | Evaluación de daños.
              li 
                i.fas.fa-location-arrow
                | Fin de simulacro.
              li 
                i.fas.fa-location-arrow
                | Regreso a la normalidad.
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema5/imagen4.jpg')        
      
      .py-4.py-md-5(titulo="Etapa 5<br/>Control" :icono="require('@/assets/curso/tema5/icono5.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Etapa 5.  Control
            ul.lista-ul--color
              li 
                i.fas.fa-location-arrow
                | Evaluación del simulacro (antes, durante y después).
              li 
                i.fas.fa-location-arrow
                | Retroalimentación del balance de ejecución a todos los participantes, dando importancia a los aspectos buenos y a los aspectos por mejorar, mencionando las acciones correctivas a tener en cuenta.
          .col-md-6
            figure
              img(src='@/assets/curso/tema5/imagen5.jpg')

</template>

<script>
export default {
  name: 'Tema5',
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
