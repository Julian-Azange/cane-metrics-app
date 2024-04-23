import { Component } from '@angular/core';

@Component({
  selector: 'app-densidad-siembra',
  templateUrl: './densidad-siembra.page.html',
  styleUrls: ['./densidad-siembra.page.scss'],
})
export class DensidadSiembraPage {
  distanciaCalles: number = 0;
  distanciaPlantas: number = 0;
  areaMetrosCuadrados: number = 0;
  variedadCana: string = "";
  densidadSiembra: number | null = null;
  fechaProduccion: Date | null = null;
  fechaCosecha: Date | null = null;
  tiempoCrecimiento: string = "";
  programacionFertilizacion: string = "";
  estimacionProduccion: string = "";

  constructor() {}

  calcularDensidad() {
    // Calcular la densidad de siembra
    if (this.distanciaCalles !== 0 && this.distanciaPlantas !== 0 && this.areaMetrosCuadrados !== 0) {
      this.densidadSiembra = Math.round((1 / (this.distanciaCalles * this.distanciaPlantas)) * this.areaMetrosCuadrados);
      // Calcular la fecha de producción y cosecha
      const fechaActual = new Date();
      this.fechaProduccion = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate() + 60); // Aproximadamente a los 60 días
      this.fechaCosecha = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate() + 120); // Aproximadamente a los 120 días
      // Calcular el tiempo de crecimiento
      const tiempoCrecimientoMin = 12;
      const tiempoCrecimientoMax = 18;
      this.tiempoCrecimiento = `La caña de azúcar tarda entre ${tiempoCrecimientoMin} y ${tiempoCrecimientoMax} meses en alcanzar su madurez completa desde el momento de la siembra hasta la cosecha.`;
      // Programación de la fertilización
      this.programacionFertilizacion = `La primera aplicación de fertilizante puede realizarse poco después del trasplante o alrededor de los 2-3 meses después de la siembra, dependiendo del crecimiento de la planta. La segunda aplicación puede realizarse varios meses después, cuando la planta esté más desarrollada y cerca de su fase de producción máxima.`;
      // Estimación de la producción
      const produccionMin = 100; // Ejemplo de producción mínima en toneladas por hectárea
      const produccionMax = 150; // Ejemplo de producción máxima en toneladas por hectárea
      this.estimacionProduccion = `La producción de caña de azúcar puede variar ampliamente según la variedad, el manejo agronómico, las condiciones climáticas y otros factores. Según nuestras estimaciones, la producción por hectárea puede oscilar entre ${produccionMin} y ${produccionMax} toneladas.`;
    } else {
      this.densidadSiembra = null;
      this.fechaProduccion = null;
      this.fechaCosecha = null;
      this.tiempoCrecimiento = "";
      this.programacionFertilizacion = "";
      this.estimacionProduccion = "";
    }
  }
}
