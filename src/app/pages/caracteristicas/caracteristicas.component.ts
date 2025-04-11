import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { BaseLandingpageComponent } from '@comun/componentes/base-landingpage/base-landingpage.component';

export interface Feature {
  id: number;
  title: string;
  description: string;
  about?: string[];
  extraDescription?: string;
  imageUrl: string;
  align: 'left' | 'right';
  featuresList?: string[];
}

export interface CompetitorFeature {
  category: string;
  features: string[];
}

@Component({
  selector: 'app-caracteristicas',
  standalone: true,
  templateUrl: './caracteristicas.component.html',
  styleUrl: './caracteristicas.component.scss',
  imports: [
    BaseLandingpageComponent,
    CommonModule,
    RouterModule,
    TranslateModule,
  ],
})
export class CaracteriticasComponent {
  public salesFeatures: Feature[] = [
    {
      id: 1,
      title: 'Compras y Ventas',
      description:
        'Mantener en orden las compras y ventas es esencial para que tu negocio funcione sin problemas. Con Reddoc, este proceso se vuelve mucho más sencillo: podrás llevar un control eficiente de lo que adquieres, lo que vendes y cómo manejas tu inventario, evitando pérdidas y mejorando la rentabilidad.',
      about: [
        'Registra tus compras y ventas de manera rápida y sencilla.',
        'Automatiza tu proceso con las facturas recurrentes.',
        'Genera documentos electrónicos sin complicaciones.',
        'Accede a informes en tiempo real para tomar mejores decisiones.',
      ],
      extraDescription:
        'Así, en lugar de preocuparte por los números, puedes enfocarte en lo más importante: hacer crecer tu negocio.',
      imageUrl: 'assets/landing/REDDOC_ESCENAS_COMPRA Y VENTA_v01.png',
      align: 'right',
      featuresList: [
        'Factura electrónica de venta',
        'Factura electrónica POS',
        'Cuenta de cobro o remisión',
        'Nota crédito, débito',
        'Factura de compra (Carga automática desde zip)',
        'Documento soporte',
        'Nota de ajuste al documento soporte',
        'Eventos RADIAN, facturas créditos (carga automática desde zip)',
        'Integración contable automática',
        'Filtros y criterios personalizados',
        'Analítica para obtener datos en tiempo real sobre lo que sucede en tu empresa',
        'Facilita la gestión de ítems, clasificándolos en Inventariables, No inventariables y de Servicios',
        'Aplicación de múltiples impuestos',
        'Organiza tu lista de precios para automatizar procesos y ahorrar tiempo',
        'Informe de ventas por ítem',
        'Informe cuentas por pagar',
        'Informe cuentas por cobrar',
      ],
    },
    {
      id: 2,
      title: 'Tesorería y Cartera',
      description:
        'Llevar el control de la cartera y la tesorería es clave para que tu negocio esté siempre en orden. La cartera se encarga de los cobros y pagos, asegurando un flujo de efectivo constante, mientras que la tesorería te ayuda a organizar recursos, optimizar fondos y mantener liquidez.',
      about: [
        'Gestiona tus pagos y tus cobros',
        'Controla los vencimientos',
        'Obtén informes detallados sobre estados de cuenta',
      ],
      extraDescription:
        'Así, tendrás un mejor control financiero y podrás tomar decisiones estratégicas sin complicaciones.',
      imageUrl: 'assets/landing/REDDOC_ESCENAS_TESORERIA Y CARTERA_v01.png',
      align: 'left', // Alternamos la alineación con el anterior
      featuresList: [
        'Comprobante de pago',
        'Saldo inicial de cuentas por cobrar',
        'Anticipo de clientes',
        'Comprobante de egreso',
        'Saldo inicial de cuentas por pagar',
        'Opciones de búsqueda con filtros y criterios personalizados',
        'Controla los saldos de las cuentas de banco o caja',
        'Contabilidad integrada en cuentas por pagar y cuentas por cobrar',
        'Informe de cuentas por cobrar',
        'Informe de cuentas por cobrar a corte',
        'Informe de cuentas por pagar pendiente',
      ],
    },
    {
      id: 3,
      title: 'Inventario',
      description:
        'Con Reddoc, llevar el control de tu inventario es más fácil. Podrás registrar entradas y salidas en tiempo real, asegurarte de que tu stock esté siempre actualizado y generar informes para entender mejor el movimiento de tus productos y tomar decisiones estratégicas.Todo se integra con tu negocio, desde compras y ventas hasta contabilidad y POS, para que tomes decisiones más inteligentes y tu empresa sea más eficiente.',
      about: [
        'Control de existencias',
        'Actualización del inventario en tiempo real',
        'Seguimiento de movimientos',
        'Control de costos',
        'Informes detallados y análisis sobre el movimiento de inventarios',
      ],
      extraDescription: '',
      imageUrl: 'assets/landing/REDDOC_ESCENAS_INVENTARIO_v01.png', // Ajusta la ruta según tus necesidades
      align: 'right', // Alternando la alineación con el anterior (que era 'left')
      featuresList: [
        'Solicitud de inventario',
        'Entrada de almacén',
        'Salida de almacén',
        'Traslados entre bodegas',
        'Costo de la mercancía vendida',
        'Capacidad de ver las cantidades disponibles',
        'Auditoría de inventario y corrección de posibles errores',
        'Informe de existencias',
        'Informe de historial de movimientos',
        'Informe kardex',
        'Informe detallado de existencias, productos, ubicación y estado',
      ],
    },
    {
      id: 4,
      title: 'POS+',
      description:
        'Facilita tus ventas con un POS ágil y eficiente. Vender nunca había sido tan fácil. Con el módulo POS de Reddoc, puedes procesar transacciones de manera rápida y sin complicaciones, manteniendo todo sincronizado con tu inventario y contabilidad.',
      about: [
        'Registra ventas en segundos',
        'Acepta múltiples métodos de pago',
        'Genera facturas electrónicas al instante',
        'Mantén tu inventario actualizado automáticamente',
        'Accede a reportes de ventas en tiempo real',
      ],
      imageUrl: 'assets/landing/REDDOC_ESCENAS_POS_v01.png', // Ajusta la ruta según necesidades
      align: 'left', // Alternando la alineación (el anterior fue 'right')
      featuresList: [
        'Factura POS electrónica',
        'Factura POS tradicional',
        'Compatible con lectores de códigos de barras y pantallas táctiles',
        'Aceptación de pagos en efectivo, tarjeta de crédito/débito, transferencias bancarias o combinados',
        'Control de productos y stock',
        'Descuentos y promociones',
        'Integración automática contable',
        'Cuadre de caja',
        'Informe de historial de ventas',
      ],
    },
    {
      id: 5,
      title: 'Nómina',
      description:
        'Manejar la nómina puede parecer complicado, pero con Reddoc es fácil y sin estrés. Podrás administrar pagos, generar nóminas electrónicas automáticamente y asegurarte de cumplir con las normativas vigentes. Todo está organizado para que ahorres tiempo y te enfoques en lo realmente importante: tu equipo y tu negocio.',
      about: [
        'Genera la nómina fácilmente',
        'Líquida seguridad social sin errores',
        'Accede a informes detallados en tiempo real',
        'Cumple con la normativa sin complicaciones',
      ],
      imageUrl: 'assets/landing/REDDOC_ESCENAS_NOMINA_v01.png',
      align: 'right', // Alternando la alineación (el anterior fue 'left')
      featuresList: [
        'Programación de nómina',
        'Programación de prestaciones sociales: primas, cesantías e intereses a las cesantías',
        'Provision automática',
        'Adicionales al pago, bonificaciones y descuentos',
        'Créditos',
        'Novedades: incapacidad, licencia, vacaciones',
        'Aporte automático a seguridad social',
        'Manejo de casos especiales de los meses de 31 días y del mes de febrero',
        'Liquidación de contrato laboral',
        'Contabilidad automática',
        'Nómina electrónica',
        'Cumplimiento con las leyes laborales',
        'Vinculación masiva de empleados',
        'Impresión de colillas de pago y envío por correo electrónico al colaborador',
        'Informe pago nómina',
        'Informe pago nómina detallado',
        'Informe nómina electrónica',
      ],
    },
    {
      id: 6,
      title: 'Contabilidad',
      description:
        'Sabemos que lidiar con números, facturas e impuestos puede ser todo un desafío, pero es fundamental para mantener la estabilidad de tu negocio. Con Reddoc, llevar tu contabilidad será pan comido. Tendrás una visión clara de tus compras, ventas e inventario para tomar decisiones con confianza, además de un registro detallado de tus transacciones para una auditoría sin complicaciones.',
      about: [
        'Accesibilidad remota',
        'Intuitivo y fácil de usar',
        'Automatización de documentos',
        'Variedad de informes financieros',
        'Simplificación del cumplimiento de obligaciones fiscales',
      ],
      extraDescription:
        'Así, en lugar de perder tiempo con papeleo, puedes enfocarte en hacer crecer tu negocio con la tranquilidad de que tus finanzas están en orden.',
      imageUrl: 'assets/landing/REDDOC_ESCENAS_CONTABILIDAD_t01.png',
      align: 'left', // Alternando la alineación (el anterior fue 'right')
      featuresList: [
        'Asientos contables',
        'Depreciación de activos fijos línea recta',
        'Cierre anual automático',
        'Contabilización y descontabilización masiva',
        'Opera cualquier tipo de empresa dentro de nuestro Plan de Cuentas (PUC) completamente configurable',
        'Cargue masivo de saldos iniciales',
        'Certificado de retención en la fuente',
        'Conciliación bancaria',
        'Anexos al balance',
        'Informe balance de prueba',
        'Informe balance de prueba por contacto',
        'Informe Auxiliar cuenta',
        'Informe Auxiliar tercero',
        'Informe Auxiliar general',
        'Informe de análisis de impuestos (IVAs y retenciones)',
        'Informe de auditoría',
      ],
    },
  ];
}
