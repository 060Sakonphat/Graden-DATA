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
