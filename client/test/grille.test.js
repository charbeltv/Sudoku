"use strict";
require("reflect-metadata");
var grille_component_1 = require("./../app/grille/grille.component");
var should = require('chai').should;
var assert = require('chai').assert;
// Initialise le service et component
var service;
var grilleComponent = new grille_component_1.GrilleComponent(service);
// Donne une valeur mock de l'attribut grilleToSubmit.
grilleComponent.grilleToSubmit = [
    [null, null, 3, 4, null, 6, 7, 8, 9],
    [4, 5, 6, null, 8, 9, 1, null, 3],
    [7, 8, null, 1, 2, null, 4, 5, null],
    [null, 3, 4, 5, 6, 7, 8, 9, 1],
    [5, null, 7, null, null, 1, null, 3, 4],
    [8, 9, 1, 2, 3, null, 5, 6, null],
    [3, null, 5, 6, null, 8, null, 1, 2],
    [null, 7, 8, null, 1, 2, 3, 4, 5],
    [null, 1, 2, 3, null, 5, 6, 7, 8],
];
describe('GrilleComponent', function () {
    describe('#checkMaxLength()', function () {
        it('devrait changer la case de grilleToSubmit au dernier chiffre du input si le input est plus grand que 1 caractere', function () {
            grilleComponent.checkMaxLength(6567, 0, 2);
            grilleComponent.grilleToSubmit[0][2].should.equal(7);
            grilleComponent.checkMaxLength(-6569, 0, 2);
            grilleComponent.grilleToSubmit[0][2].should.equal(9);
        });
        it('devrait changer la case de grilleToSubmit a null si le dernier caractere du input entre est 0', function () {
            grilleComponent.checkMaxLength(90, 0, 2);
            // grilleComponent.grilleToSubmit[0][2].should.equal(null);
            assert.equal(grilleComponent.grilleToSubmit[0][2], null);
            /* grilleComponent.checkMaxLength(1000, 0, 2);
             grilleComponent.grilleToSubmit[0][2].should.equal(null);*/
        });
    });
});
