import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { BaseLandingpageComponent } from '@comun/componentes/base-landingpage/base-landingpage.component';

export interface Feature {
  id: number;
  title: string;
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
