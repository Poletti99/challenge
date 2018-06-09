import { sum, sub, div, mult } from '../library/mathLibrary';
import { expect } from 'chai';

describe("Math Library", () => {
    describe('Sum', () => {
        context('Sum with good values', () => {
            it('Should return 4 when receive 2,2', () => {
                expect(sum(2, 2)).to.be.equal(4);
            });

            it('Should return 4 when receive 6,-2', () => {
                expect(sum(6, -2)).to.be.equal(4);
            });
        });
        context('Sum with bad values', () => {
            it('Should return Erro when receive a,2', () => {
                expect(sum('a', 2)).to.be.equal('Erro');
            });

            it('Should return Erro when receive 2,a', () => {
                expect(sum('a', 2)).to.be.equal('Erro');
            });

            it('Should return Erro when receive a,a', () => {
                expect(sum('a', 'a')).to.be.equal('Erro');
            });
        });
    });

    describe('Sub', () => {
        context('Sub with good values', () => {
            it('Should return 4 when receive 6,2', () => {
                expect(sub(6, 2)).to.be.equal(4);
            });

            it('Should return -8 when receive -6,2', () => {
                expect(sub(-6, 2)).to.be.equal(-8);
            });
        });

        context('Sub with bad values', () => {
            it('Should return Erro when receive a,2', () => {
                expect(sub('a', 2)).to.be.equal('Erro');
            });

            it('Should return Erro when receive 2,a', () => {
                expect(sub('a', 2)).to.be.equal('Erro');
            });

            it('Should return Erro when receive a,a', () => {
                expect(sub('a', 'a')).to.be.equal('Erro');
            });
        });
    });
    describe('Mult', () => {
        context('Mult with good values', () => {
            it('Should return 4 when receive 2,2', () => {
                expect(mult(2, 2)).to.be.equal(4);
            });

            it('Should return -8 when receive -4,2', () => {
                expect(mult(-4, 2)).to.be.equal(-8);
            });
        });

        context('Mult with bad values', () => {
            it('Should return Erro when receive a,2', () => {
                expect(mult('a', 2)).to.be.equal('Erro');
            });

            it('Should return Erro when receive 2,a', () => {
                expect(mult('a', 2)).to.be.equal('Erro');
            });

            it('Should return Erro when receive a,a', () => {
                expect(mult('a', 'a')).to.be.equal('Erro');
            });
        });
    });
    describe('Div', () => {
        context('Div with good values', () => {
            it('Should return 4 when receive 8,2', () => {
                expect(div(8, 2)).to.be.equal(4);
            });

            it('Should return -8 when receive -16,2', () => {
                expect(div(-16, 2)).to.be.equal(-8);
            });
        });

        context('Div with bad values', () => {
            it('Should return Erro when receive a,2', () => {
                expect(div('a', 2)).to.be.equal('Erro');
            });

            it('Should return Erro when receive 2,a', () => {
                expect(div('a', 2)).to.be.equal('Erro');
            });

            it('Should return Erro when receive a,a', () => {
                expect(div('a', 'a')).to.be.equal('Erro');
            });
        });
    });
});