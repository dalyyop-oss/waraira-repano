# Sitio Web Interactivo: Parque Nacional Waraira Repano

**Creadora y Diseñadora Gráfica:** Dalianyela Torres  
**Institución Académica:** Instituto de Diseño Darias  
**Formato de Lienzo Original:** `1400 × 650 px` (Sistema de Retícula de Cuadrados Modulares)  
**Tecnología Principal:** Astro 5 (`^5.14.4`) + HTML5 + CSS3 + TypeScript/JavaScript  

---

## Estructura de Carpetas del Proyecto (Visual Studio Code)

```text
COMIENZO DE LA WEB DEL WARAIRA REPANO/
├── .vscode/                        # Configuración lista para Visual Studio Code
├── public/                         # Recursos multimedia extraídos del diseño original
│   ├── elementos/                  # Silueta poligonal, letreros, rocas, hongos, aves (PNG transparentes)
│   ├── fondos/                     # Fotografías de fondo (1400 x 650 px)
│   ├── fotos/                      # Galerías fotográficas (quienes-somos, geologia, flora, fauna)
│   └── iconos/                     # Iconos vectoriales y logotipo de INPARQUES
├── src/
│   ├── components/
│   │   ├── Techo.astro                   # Cabezal superior con los 5 botones y silueta del Waraira Repano
│   │   ├── CabezalVertical.astro         # Letrero de madera lateral con submenús interactivos
│   │   ├── EstructuraCuadrados.astro     # Retícula base de cuadrados + foto de fondo + degradado
│   │   ├── ModuloQuienesSomos.astro      # Pantallas 1 a 5 (Sección Naranja #FF8F00)
│   │   ├── ModuloPatrimonioNatural.astro # Pantallas 6 a 40 (Sección Amarilla #EAC00F)
│   │   ├── WarairaWebModulo.astro        # Componente encapsulado para usar como módulo en otra web
│   │   └── ArquetipoYManualEstilos.astro # Arquetipo, Manual de Estilos Gráficos y Ficha de la Creadora
│   ├── layouts/
│   │   └── LayoutPrincipal.astro         # Contenedor adaptable 1400x650 y barra de inspección para tutores
│   └── pages/
│       ├── index.astro                   # Aplicación principal integrada
│       ├── QuienesSomos.astro            # Ruta directa: ¿Quiénes somos?
│       ├── PatrimonioNatural.astro       # Ruta directa: Patrimonio natural
│       ├── ManualEstilos.astro           # Ruta directa: Arquetipo y Manual de Estilos Gráficos
│       └── ModuloEmbebible.astro         # Ruta limpia para incrustar mediante <iframe> en otra web
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── Manual_Programacion_y_Multimedia_Waraira_Repano_Dalianyela_Torres.docx
```

---

## Comandos para Ejecutar en Visual Studio Code

1. Instalar las dependencias del proyecto:
   ```bash
   npm install
   ```
2. Iniciar el servidor de desarrollo local:
   ```bash
   npm run dev
   ```
3. Compilar la versión de producción:
   ```bash
   npm run build
   ```
