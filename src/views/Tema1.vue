<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade-down-right")
      .titulo-principal__numero.text-white
        span 1
      h1 Identificación y valoración del riesgo en el contexto del servicio guiado
    .row.justify-content-center
      .col-lg-6.col-md-12.mb-4(data-aos="fade-down-right")
        img(src='@/assets/curso/tema1/imagen1.jpg')
      .col-lg-6.col-md-12(data-aos="fade-down-left")
        p Existen factores causantes de los incidentes, algunos de ellos no se pueden controlar, como, por ejemplo, el clima, pero otros son controlables y su influencia sobre el riesgo se puede manejar. Estos últimos son los que se pueden denominar como factores humanos, ya que se puede determinar que las personas, con sus acciones o sus decisiones, se convierten en agentes principales que ocasionan los accidentes.
        p Según el Diccionario de la Real Academia de la Lengua Española, la definición de riesgo es: “Contingencia o proximidad de un daño”. Esto es, que existe la posibilidad de que algo pueda suceder con alguna consecuencia, referente a la proximidad de daño; sin embargo, una contingencia puede o no ocurrir. Otras definiciones hablan de la exposición a una situación donde hay una posibilidad de sufrir un daño o de estar en peligro (Martínez, 2021). El riesgo es entonces la forma de medir la probabilidad de que un acontecimiento ocurra en un lugar y los posibles daños.
    p.my-5(data-aos="fade-down-left") Se pueden encontrar diferentes tipos de riesgos y varían según el tipo de actividad o entorno en el que se presentan, algunos ejemplos son:
    .row.ampliar.px-5.fondo-1.justify-content-center
      .col-9
        ImagenInfografica.color-acento-botones.mb-5(data-aos="fade-down-right")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/figura1.svg', alt='Texto que describa la imagen')

          .tarjeta.fondo-2.p-3(x="29.5%" y="23%" numero="+")
            .h5.mb-2 Riesgos naturales
            p Se pueden presentar en un territorio provocados por un evento natural, por ejemplo, nevadas, huracanes, aludes, terremotos, etc.

          .tarjeta.fondo-2.p-3(x="36.5%" y="46.4%" numero="+")
            .h5.mb-2 Riesgos biológicos
            p Son provocados por organismos como virus, bacterias, hongos, entre otros, y que producen afectaciones a la salud.

          .tarjeta.fondo-2.p-3(x="50%" y="54%" numero="+")
            .h5.mb-2 Riesgos económicos
            p Es la incertidumbre generada por una situación económica alterada afectando las finanzas de una empresa, de una persona, de un país.

          .tarjeta.fondo-2.p-3(x="63.7%" y="46.4%" numero="+")
            .h5.mb-2 Riesgos laborales
            p Es la probabilidad de que las personas sufran una lesión física o mental a causa de su trabajo. 

          .tarjeta.fondo-2.p-3(x="70.5%" y="23%" numero="+")
            .h5.mb-2 Riesgos sanitarios
            p Están determinados por un hecho que afecta la salud de las personas; pueden ser provocados por el hombre o por causas naturales.
      p.mt-5(data-aos="fade-down-left") La clasificación de los riesgos depende de la intensidad y de la frecuencia con que se presenten, por lo general, se usan adjetivos como: alto, moderado o bajo. Pero también se puede encontrar que se habla de riesgos de menor o mayor gravedad, según el tema de que se esté hablando.
    p.mb-5(data-aos="fade-down-right") En cuanto a las características, según el diccionario de seguros de la fundación Mapfre, el riesgo puede ser:
    .row.mb-5
      .col-md-6.col-lg.my-5.mb-lg-0(data-aos="fade-down-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/figura2.svg')
          .tarjeta.fondo-3
            .p-4
              h2.text-center Incierto o aleatorio
              p.text-center Esa incertidumbre no sólo se materializa de la forma normal en que generalmente es considerada (ocurrirá o no ocurrirá), sino que en algunas ocasiones se conoce con certeza que ocurrirá, pero se ignora cuándo”.

      .col-md-6.col-lg.my-5.mb-lg-0(data-aos="fade-down")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/figura3.svg')
          .tarjeta.fondo-3
            .p-4
              h2.text-center Posible
              p.text-center Ha de existir la posibilidad de riesgo, es decir, debe poder suceder. 

      .col-md-6.col-lg.my-5.mb-lg-0(data-aos="fade-down-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/figura4.svg')
          .tarjeta.fondo-3
            .p-4
              h2.text-center Fortuito
              p.text-center “El riesgo debe provenir de un acto o acontecimiento ajeno a la voluntad humana de producirlo”.
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-down-left")
      h2 1.1 Técnicas de manejo y técnicas de evaluación
    .row.justify-content-center
      .col-lg-7.col-md-12.mb-4(data-aos="fade-down-right")
        p Para hacer un manejo adecuado del riesgo, se sugiere iniciar por conocer el lugar donde se va a llevar a cabo la actividad turística, hacer un mapa ubicando los riesgos identificados. Una herramienta útil es documentar los incidentes ocurridos en la ruta, estos incidentes son como alertas, que al ser analizadas se pueden definir las causas que llevaron a la ocurrencia del suceso, con qué frecuencia pasan y la severidad de las mismas, y así poder proponer acciones preventivas para evitar que suceda un accidente en el futuro. Otra herramienta que se puede utilizar son los diagramas de flujo, que permiten identificar fallas en los procedimientos y protocolos.
        p Igualmente, es recomendable hacer una inspección periódica de equipos y herramientas usados en las actividades turísticas, con el fin de identificar fallas o defectos por el uso de los mismos y poder definir cambios o reparaciones.
        p El constante monitoreo tanto de los lugares como de los equipos disminuye la posibilidad de ocurrencia de los accidentes y los ajustes periódicos son medidas de control para reducir los riesgos en las áreas frecuentadas por los turistas.
      .col-lg-5.col-md-12(data-aos="fade-down-left")
        img(src='@/assets/curso/tema1/imagen2.jpg')
    .cajon.fondocuadrado.p-4.my-4.fondo-4(data-aos="fade-down-left")
      .row.justify-content-center.align-items-center
        .col-lg-1.col-md-2.col-sm-3.col-4
          img(src='@/assets/curso/tema1/figura5.svg')
        .col-lg-11.col-md-10.col-sm-9.col-8
          span.text-bold TIP: 
          span Tener diversas perspectivas aumenta la posibilidad de encontrar más riesgos y de definir mejores acciones, por lo tanto, se convierte en una toma de decisiones en conjunto.
    .row.justify-content-center
      .col-lg-9.col-md-12.mb-4(data-aos="fade-down-right")
        p Técnicas de evaluación de riesgos hay varias, lo que quiere decir que es cuestión del guía o de la agencia elegir la que mejor le parezca, lo importante es que se haga el ejercicio, esto denota una preocupación por asegurar el bienestar de los turistas de una zona.
        p.mb-4 Uno de los métodos más comunes es el de asignar valores a la probabilidad de que ocurra un accidente y a la severidad de las consecuencias del accidente; al multiplicar estas dos cifras, se determina el riesgo.
        .row.fondo-5.p-4.justify-content-center.align-items-center
          .col-xxl-1.col-xl-2.col-lg-2.col-md-3.col-sm-3.col-3
            img(src='@/assets/curso/tema1/figura7.svg')
          .col-xxl-11.col-xl-10.col-lg-10.col-md-9.col-sm-9.col-9
            p.text-bold PROBABILIDAD X CONSECUENCIA = RIESGO
        p.mt-4 Esta fórmula se convierte, para el guía, en una herramienta de toma de decisiones al momento de planear las actividades turísticas; es indispensable entender cómo funciona el riesgo, de dónde viene, es decir, cuáles son sus causas, para poder aplicarla y así reducir el potencial de accidentes en cada actividad en la que el guía participe como líder.
      .col-lg-3.col-md-8(data-aos="fade-down-left")
        img(src='@/assets/curso/tema1/figura6.svg')
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-down-left")
      h5 Tabla 1
      span Ejemplo de valoración del riesgo
    .tabla-b.color-acento-contenido.mb-5(data-aos="fade-down-right")
      table
        caption.fondo-7.texto-normal Nota. Tomada del Manual REPSE Caso: la Organización para la Educación y Protección Ambiental OpEPA ha desarrollado una metodología en su Manual REPSE.
        thead
          tr.fondo-6
            <td class="text-white text-center" colspan="2">
              h4 Probabilidad de ocurrencia
            </td>
            <td class="text-white text-center" colspan="2">
              h4 Severidad de las consecuencias
            </td>
        tbody.text-center
          tr.text-center
            td.bordederecha.anchocol
              h4 1
            td.bordederecha Extremadamente improbable
            td.bordederecha.anchocol
              h4 1
            td Extremadamente improbable
          tr.text-center
            td.bordederecha.anchocol 
              h4 2
            td.bordederecha Muy poco probable
            td.bordederecha.anchocol
              h4 2
            td Muy poco probable
          tr.text-center
            td.bordederecha.anchocol
              h4 3
            td.bordederecha Posible
            td.bordederecha.anchocol 
              h4 3
            td Posible
          tr.text-center
            td.bordederecha.anchocol 
              h4 4
            td.bordederecha Probable
            td.bordederecha.anchocol 
              h4 4
            td Probable
          tr.text-center
            td.bordederecha.anchocol 
              h4 5
            td.bordederecha Seguro
            td.bordederecha.anchocol
              h4 5
            td Seguro
    .row.justify-content-center
      .col-lg-6.col-md-12.mb-4(data-aos="fade-down-right")
        p Todos los riesgos pueden ser evaluados y minimizados si se emplean los métodos adecuados. Aunque los valores de la tabla son subjetivos, al aplicar la fórmula se da un punto de partida para iniciar la evaluación del riesgo y, de esta forma, poder mitigarlo. Se podría aumentar la escala y definir más elementos, pero siempre el uso de la fórmula arrojaría un número que determinaría el valor del riesgo.
        .cajon.fondocuadrado.p-4.my-4.fondo-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-md-3.col-sm-3.col-3
              img(src='@/assets/curso/tema1/figura8.svg')
            .col-lg-10.col-md-9.col-sm-9.col-9
              span.text-bold TIP: 
              span para cada actividad turística a realizar, se debe aplicar la fórmula 
              span.resaltado.text-bold P x C = R 
              span y definir qué tanto riesgo se está dispuesto a asumir.
      .col-lg-6.col-md-12(data-aos="fade-down-left")
        img(src='@/assets/curso/tema1/imagen3.jpg')
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-down-left")
      h2 1.2 Métodos de control y de mitigación
    p(data-aos="fade-down-left") Los guías de turismo deben procurar manejar el riesgo de manera eficiente en el ejercicio de su profesión, para lo cual es necesario tener muy claro cuáles son los factores que intervienen en un potencial accidente. 
    p.mb-5(data-aos="fade-down-left") Estos factores son de dos tipos:
    .row.justify-content-center
      .col-lg-6.col-md-12.p-5.fondo-8(data-aos="fade-down-right")
        h4.text-white Factores objetivos
        p.text-white Que también se pueden llamar ambientales, porque son los factores externos, que se pueden observar e incluso medir, pero que no se pueden controlar.
      .col-lg-6.col-md-12.p-5.fondo-9(data-aos="fade-down-left")
        h4 Factores subjetivos o humanos: 
        p.mb-0 Son aquellos que influyen en el momento de tomar una decisión, como estado mental, actitudes, hábitos, limitaciones de las personas.
        p.mb-0 Estos factores son relevantes en la forma en cómo se perciben las diferentes situaciones que se pueden presentar durante un ejercicio de guianza.
    p.my-5(data-aos="fade-down-left") Estos factores constituyen los factores de riesgo, cuando se realizan actividades turísticas siempre van a estar presentes, aumentando las probabilidades de que ocurra un accidente. Los guías deben concentrarse en identificar los factores humanos, que no son más que los comportamientos de las personas que tienen a su cargo, que son finalmente los que se pueden, en cierta medida, controlar, y son por lo general los principales causantes de los accidentes.
    .row
      .col-auto.fondo-10.p-3(data-aos="fade-down-left")
        h3.mb-0 Factores de seguridad

    .row.justify-content-center.my-5
      .col-lg-4.col-md-12.mb-4(data-aos="fade-down-left")
        img(src='@/assets/curso/tema1/imagen4.jpg')
      .col-lg-8.col-md-12(data-aos="fade-down-right")
        p Es necesario hablar de los factores de seguridad (factores positivos), que son fundamentales para contrarrestar los factores de riesgo y así garantizar la mitigación de los accidentes. Si en una balanza hay más factores de riesgo, se da una alerta sobre la alta posibilidad de que un accidente ocurra, pero si se buscan los factores de seguridad adecuados, la balanza se pondría en equilibrio y el nivel de riesgo disminuirá.
        .cajon.fondocuadrado2.p-4.my-4.fondo-11
          p.mb-3 Algunos ejemplos de factores de seguridad son:
          p.text-bold Experiencia, entrenamiento, liderazgo, kit de primeros auxilios, equipo de soporte.        
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
