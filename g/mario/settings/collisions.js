/// <reference path="../PlayMarioJas.ts" />
var PlayMarioJas;
(function (PlayMarioJas) {
    "use strict";
    PlayMarioJas.PlayMarioJas.settings.collisions = {
        "keyGroupName": "groupType",
        "keyTypeName": "title",
        "globalCheckGenerators": {
            "Character": PlayMarioJas.PlayMarioJas.prototype.generateCanThingCollide,
            "Solid": PlayMarioJas.PlayMarioJas.prototype.generateCanThingCollide
        },
        "hitCheckGenerators": {
            "Character": {
                "Character": PlayMarioJas.PlayMarioJas.prototype.generateIsCharacterTouchingCharacter,
                "Solid": PlayMarioJas.PlayMarioJas.prototype.generateIsCharacterTouchingSolid
            }
        },
        "hitCallbackGenerators": {
            "Character": {
                "Solid": PlayMarioJas.PlayMarioJas.prototype.generateHitCharacterSolid,
                "Character": PlayMarioJas.PlayMarioJas.prototype.generateHitCharacterCharacter
            }
        }
    };
})(PlayMarioJas || (PlayMarioJas = {}));
