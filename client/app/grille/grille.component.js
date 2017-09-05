//////////////////////////////////////////////////////////////////
// Nom du fichier: grille.component.ts
//
// TODO: Faire a ce que le Sudoku accept seulement un integer seulement et non une lettre
// TODO: Corriger le CSS du Sudoku
// TODO: Choisir le niveau de difficulte
///////////////////////////////////////////////////////////////////
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var GrilleComponent = (function () {
    function GrilleComponent(grilleService) {
        this.grilleService = grilleService;
    }
    GrilleComponent.prototype.getGrilles = function () {
        this.grilleReponse = this.grilleService.getGrille();
        this.grilleTrous = this.grilleService.getGrilleTrous();
        this.grilleToSubmit = this.grilleService.getGrilleToSubmit();
    };
    GrilleComponent.prototype.ngOnInit = function () {
        this.getGrilles();
    };
    //Empeche l'usager d'entrer un nombre a plus de 1 chiffre dans le input
    GrilleComponent.prototype.checkMaxLength = function (input, i, j) {
        if (String(input).length !== 1) {
            var premierChiffreInput = String(input).charAt(String(input).length - 1);
            var nouveauInput = Number(premierChiffreInput);
            this.grilleToSubmit[i][j] = nouveauInput;
        }
        if (this.grilleToSubmit[i][j] === 0) {
            this.grilleToSubmit[i][j] = null;
        }
    };
    GrilleComponent.prototype.reinitialiserPartie = function () {
        for (var i = 0; i < this.grilleToSubmit.length; i++) {
            for (var j = 0; j < this.grilleToSubmit[i].length; j++) {
                if (this.grilleTrous[i][j] === 0) {
                    this.grilleToSubmit[i][j] = null;
                }
            }
        }
    };
    return GrilleComponent;
}());
GrilleComponent = __decorate([
    core_1.Component({
        selector: 'grille-sudoku',
        template: "\n  <p>NIVEAU DE DIFFICULTE: N/A</p>\n  <div class =\"grille\">\n  <table>\n    <tr *ngFor= \"let row of grilleTrous; let i = index\"  class=\"row\" >\n\n      <td *ngFor= \"let cell of row; let j = index\"  class=\"column\">\n\n      <div class = \"cell\" *ngIf=\"cell != 0  && (j !== 2 && j !== 5)\">\n        <label> {{cell}} </label>\n      </div>\n\n       <div class=\"cellMultiple3\" *ngIf=\"cell != 0  && (j === 2 || j === 5)\">\n       <label> {{cell}} </label>\n      </div>\n\n      <div *ngIf=\"cell === 0 && (j !== 2 && j !== 5)\">\n        <input type=\"number\" [(ngModel)]=\"grilleToSubmit[i][j]\" value= \"\" max=\"9\" min=\"1\" \n                                      #leInput (keyup)=\"checkMaxLength(leInput.value, i, j)\"/>\n      </div>\n      \n       <div class=\"inputMultiple3\" *ngIf=\"cell === 0 && (j === 2 || j === 5)\">\n          <input type=\"number\" [(ngModel)]=\"grilleToSubmit[i][j]\" value= \"\" max=\"9\" min=\"1\"\n                                                                #leInput (keyup)=\"checkMaxLength(leInput.value, i, j)\"/>\n      </div>\n\n\n      <div *ngIf=\"i === 2 || i === 5\">\n      <br/> \n      </div>\n      </td>\n\n    </tr>\n\n  </table>\n  </div>\n\n  <div id=\"boutonDiv\">\n    <button id=\"boutonReinitialiser\" (click)=\"reinitialiserPartie()\"> R\u00E9initialiser partie </button>\n  </div>\n  ",
        styles: ["\n  input {\n    text-align: center;\n    width: 50px;\n    height: 48px;\n    color: blue;\n    font-size: 250%;\n    border: none;\n    border-collapse: collapse;\n\n  }\n  .inputMultiple3{\n    text-align: center;\n    width: 50px;\n    height: 50px;\n    color: blue;\n    font-size: 100%;\n    border-right: 12px solid black;\n    border-collapse: collapse;\n  }\n  .grille {\n    margin: auto;\n    width: 512px;\n    border-collapse: collapse;\n    background-color: black;\n  }\n  .cell{\n    text-align: center;\n    background-color: gray;\n    width: 50px;\n    height: 50px;\n    color: black;\n    font-size: 250%;\n    border-collapse: collapse;\n  }\n  .cellMultiple3{\n    text-align: center;\n    background-color: gray;\n    width: 50px;\n    height: 50px;\n    color: black;\n    font-size: 250%;\n    border-collapse: collapse;\n    border-right: 12px solid black;\n  }\n  #boutonReinitialiser{\n    position: relative;\n    margin: auto;\n    left: 42%;\n    font-size:25px;\n    border:none;\n    margin: 0px 10px;\n    border-radius:3px;\n    box-shadow:0 3px 0 #0eb2c1;\n    background: #5DBCD2;\n    cursor: pointer;\n  }\n  #boutonDiv{\n        padding-top: 10px;\n\n  }\n\n  /*Sert a cacher les spinbox des input de type number*/ \n   input::-webkit-outer-spin-button,\n   input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0; \n}\n    "
        ]
    })
], GrilleComponent);
exports.GrilleComponent = GrilleComponent;
