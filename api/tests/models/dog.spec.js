const { Dog, Temperament, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Temperament model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Temperament.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name of temperament is null', (done) => {
        Temperament.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name of temperament', () => {
        Temperament.create({ name: 'Friendly' });
      });
    });
  });
});


describe('Dog model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Dog.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Dog.create({ name: 'Pug' });
      });
    });
    describe('heightMin', () => {
      it('should throw an error if heightMin is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid heightMin')))
          .catch(() => done());
      });
      it('should work when its a valid heightMin', () => {
        Dog.create({ heightMin: '10' });
      });
    });
    describe('heightMax', () => {
      it('should throw an error if heightMax is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid heightMax')))
          .catch(() => done());
      });
      it('should work when its a valid heightMax', () => {
        Dog.create({ heightMax: '20' });
      });
    });    
    describe('weightMin', () => {
      it('should throw an error if weightMin is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid weightMin')))
          .catch(() => done());
      });
      it('should work when its a valid weightMin', () => {
        Dog.create({ weightMin: '6' });
      });
    });
    describe('weightMax', () => {
      it('should throw an error if weightMax is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid weightMax')))
          .catch(() => done());
      });
      it('should work when its a valid weightMax', () => {
        Dog.create({ weightMax: '10' });
      });
    });
    describe('life_span', () => {
      it('should throw an error if life_span is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid life_span')))
          .catch(() => done());
      });
      it('should work when its a valid life_span', () => {
        Dog.create({ life_span: '15' });
      });
    });
  });
});
