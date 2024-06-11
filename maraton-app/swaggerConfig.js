const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',  // Wersja specyfikacji OpenAPI
    info: {
      title: 'System Zarządzania Maratonami API',
      version: '1.0.0',
      description: 'Dokumentacja API Systemu Zarządzania Maratonami',
    },
  },
  apis: ['./routes/*.js'], // Ścieżki do plików, gdzie znajdują się komentarze JSDoc do dokumentacji
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
