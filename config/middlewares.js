module.exports = [
  {
    name: 'strapi::cors',
    config: {
      origin: ['*'],  // หรือกำหนด URL ของ Flutter ที่อนุญาต
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization'],
    },
  },
];

module.exports = [
  // Error Handling Middleware
  'strapi::errors',

  // Security Middleware
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https://*'],
          'media-src': ["'self'", 'data:', 'blob:', 'https://*'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },

  // CORS Middleware (Cross-Origin Resource Sharing)
  'strapi::cors',

  // Public Files Middleware
  'strapi::public',

  // Favicon Middleware
  'strapi::favicon',

  // Query Middleware
  'strapi::query',

  // Body Parser Middleware
  'strapi::body',

  // Logging Middleware
  'strapi::logger',
];
