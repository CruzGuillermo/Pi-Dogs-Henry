/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  name: 'Pug',
  heightMin: 20,
        heightMax: 21,
        weightMin: 20,
        weightMax: 21,
        life_span: 4,
        image:  "https://static.nationalgeographic.es/files/styles/image_3200/public/10207.600x450.webp?w=400",
};

describe('Dog routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Dog.sync({ force: true })
    .then(() => Dog.create(dog)));
  describe('GET /dogs', () => {
    it('should get 200', () =>
      agent.get('/dogs').expect(201)
    );
  });
});


describe("Rutas temperaments", () => {
  describe("GET /temperaments", () => {
    it("se espera una respuesta 200", () => agent.get("/temperaments").expect(200));
  });
});

describe("Obtiene un dog por id o name", () => {
  describe("GET /idRaza/:id", () => {
    it("Se espera una respuesta 200 se si pasa un id", () =>
      agent.get("/dogs/6").expect(200));
  });
  describe("GET /dogs?name=abc", () => {
    it("Si se recibe name devolver 200", () =>
      agent.get("/dogs?name=abc"));
  });
  describe("GET /dogs", () => {
    it("Si no se recibe mas que la ruta devuelve 201 con los perros", (done) => {
      agent.get("/dogs").then(() => done());
    });
  });
});

