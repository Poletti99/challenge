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
});