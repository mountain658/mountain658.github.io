PlayMarioJas.PlayMarioJas.settings.maps = {
    "mapDefault": "1-1",
    "locationDefault": "0",
    "groupTypes": ["Character", "Solid", "Scenery", "Text"],
    "requireEntrance": true,
    "screenAttributes": [
        "gravity",
        "setting",
        "time",
        "underwater",
        "floor",
        "jumpmod",
        "maxyvel",
        "maxyvelinv",
        "notime",
        "nokeys",
        "canscroll"
    ],
    "screenVariables": {
        "bottomDeathDifference": function (GameStarter) {
            return GameStarter.unitsize * 12;
        },
        "bottomPlatformMax": function (GameStarter) {
            var area = GameStarter.AreaSpawner.getArea(),
                diff = GameStarter.MapScreener.bottomDeathDifference;
                
            if (!area) {
                return -1;
            }
                
            return (area.floor + diff) * GameStarter.unitsize;
        },
        "gravity": function (GameStarter) {
            var area = GameStarter.AreaSpawner.getArea();
            
            if (area && area.underwater) {
                return GameStarter.gravity / 2.8;
            }
            
            return GameStarter.gravity;
        }
    },
    "onSpawn": PlayMarioJas.PlayMarioJas.prototype.addPreThing,
    "macros": {
        "Example": PlayMarioJas.PlayMarioJas.prototype.macroExample,
        "Fill": PlayMarioJas.PlayMarioJas.prototype.macroFillPreThings,
        "Pattern": PlayMarioJas.PlayMarioJas.prototype.macroFillPrePattern,
        "Floor": PlayMarioJas.PlayMarioJas.prototype.macroFloor,
        "Pipe": PlayMarioJas.PlayMarioJas.prototype.macroPipe,
        "PipeCorner": PlayMarioJas.PlayMarioJas.prototype.macroPipeCorner,
        "Tree": PlayMarioJas.PlayMarioJas.prototype.macroTree,
        "Shroom": PlayMarioJas.PlayMarioJas.prototype.macroShroom,
        "Water": PlayMarioJas.PlayMarioJas.prototype.macroWater,
        "CastleSmall": PlayMarioJas.PlayMarioJas.prototype.macroCastleSmall,
        "CastleLarge": PlayMarioJas.PlayMarioJas.prototype.macroCastleLarge,
        "Ceiling": PlayMarioJas.PlayMarioJas.prototype.macroCeiling,
        "Bridge": PlayMarioJas.PlayMarioJas.prototype.macroBridge,
        "Scale": PlayMarioJas.PlayMarioJas.prototype.macroScale,
        "PlatformGenerator": PlayMarioJas.PlayMarioJas.prototype.macroPlatformGenerator,
        "WarpWorld": PlayMarioJas.PlayMarioJas.prototype.macroWarpWorld,
        "CheepsStart": PlayMarioJas.PlayMarioJas.prototype.macroCheepsStart,
        "CheepsStop": PlayMarioJas.PlayMarioJas.prototype.macroCheepsStop,
        "BulletBillsStart": PlayMarioJas.PlayMarioJas.prototype.macroBulletBillsStart,
        "BulletBillsStop": PlayMarioJas.PlayMarioJas.prototype.macroBulletBillsStop,
        "LakituStop": PlayMarioJas.PlayMarioJas.prototype.macroLakituStop,
        "StartInsideCastle": PlayMarioJas.PlayMarioJas.prototype.macroStartInsideCastle,
        "EndOutsideCastle": PlayMarioJas.PlayMarioJas.prototype.macroEndOutsideCastle,
        "EndInsideCastle": PlayMarioJas.PlayMarioJas.prototype.macroEndInsideCastle,
        "Section": PlayMarioJas.PlayMarioJas.prototype.macroSection,
        "SectionPass": PlayMarioJas.PlayMarioJas.prototype.macroSectionPass,
        "SectionFail": PlayMarioJas.PlayMarioJas.prototype.macroSectionFail,
        "SectionDecider": PlayMarioJas.PlayMarioJas.prototype.macroSectionDecider
    },
    "entrances": {
        "Normal": PlayMarioJas.PlayMarioJas.prototype.mapEntranceNormal,
        "Plain": PlayMarioJas.PlayMarioJas.prototype.mapEntrancePlain,
        "Castle": PlayMarioJas.PlayMarioJas.prototype.mapEntranceCastle,
        "Walking": PlayMarioJas.PlayMarioJas.prototype.mapEntranceWalking,
        "Vine": PlayMarioJas.PlayMarioJas.prototype.mapEntranceVine,
        "PipeVertical": PlayMarioJas.PlayMarioJas.prototype.mapEntrancePipeVertical,
        "PipeHorizontal": PlayMarioJas.PlayMarioJas.prototype.mapEntrancePipeHorizontal,
    },
    "patterns": (function (patterns) {
        var pattern,
            i;
        for (i in patterns) {
            if (patterns.hasOwnProperty(i)) {
                pattern = patterns[i];
                if (!pattern.length) {
                    continue;
                }
                
                // Pattern's last array should previously be ["blank", width]
                pattern.width = pattern[pattern.length - 1][1];
                pattern.pop();
            }
        }
        return patterns;
    })({
        "BackRegular": [
            ["HillLarge", 0, 0],
            ["Cloud1", 68, 68],
            ["Bush3", 92, 0],
            ["HillSmall", 128, 0],
            ["Cloud1", 156, 76],
            ["Bush1", 188, 0],
            ["Cloud3", 220, 68],
            ["Cloud2", 292, 76],
            ["Bush2", 332, 0],
            ["Blank", 384]
        ],
        "BackCloud": [
            ["Cloud2", 28, 64],
            ["Cloud1", 76, 32],
            ["Cloud2", 148, 72],
            ["Cloud1", 228, 0],
            ["Cloud1", 284, 32],
            ["Cloud1", 308, 40],
            ["Cloud1", 372, 0],
            ["Blank", 384]
        ],
        "BackFence": [
            ["PlantSmall", 88, 0],
            ["PlantLarge", 104, 0],
            ["Fence", 112, 0, 32],
            ["Cloud1", 148, 68],
            ["PlantLarge", 168, 0],
            ["PlantSmall", 184, 0],
            ["PlantSmall", 192, 0],
            ["Cloud1", 220, 76],
            ["Cloud2", 244, 68],
            ["Fence", 304, 0, 16],
            ["PlantSmall", 320, 0],
            ["Fence", 328, 0],
            ["PlantLarge", 344, 0],
            ["Cloud1", 364, 76],
            ["Cloud2", 388, 68],
            ["Blank", 384]
        ],
        "BackFenceMin": [
            ["PlantLarge", 104, 0],
            ["Fence", 112, 0, 32],
            ["Cloud1", 148, 68],
            ["PlantLarge", 168, 0],
            ["PlantSmall", 184, 0],
            ["PlantSmall", 192, 0],
            ["Cloud1", 220, 76],
            ["Cloud2", 244, 68],
            ["Fence", 304, 0, 16],
            ["PlantSmall", 320, 0],
            ["Fence", 328, 0],
            ["Cloud1", 364, 76],
            ["Cloud2", 388, 68],
            ["Blank", 384]
        ],
        "BackFenceMin2": [
            ["Cloud2", 4, 68],
            ["PlantSmall", 88, 0],
            ["PlantLarge", 104, 0],
            ["Fence", 112, 0],
            ["Fence", 128, 0, 16],
            ["Cloud1", 148, 68],
            // ["PlantLarge", 168, 0],
            ["PlantSmall", 184, 0],
            ["PlantSmall", 192, 0],
            ["Cloud1", 220, 76],
            ["Cloud2", 244, 68],
            ["Fence", 304, 0, 16],
            ["PlantSmall", 320, 0],
            ["Fence", 328, 0],
            ["PlantLarge", 344, 0],
            ["Cloud1", 364, 76],
            ["Cloud2", 388, 68],
            ["Blank", 384]
        ],
        "BackFenceMin3": [
            ["Cloud2", 4, 68],
            ["PlantSmall", 88, 0],
            ["PlantLarge", 104, 0],
            ["Fence", 112, 0, 4],
            ["Cloud1", 148, 68],
            ["PlantSmall", 184, 0],
            ["PlantSmall", 192, 0],
            ["Cloud1", 220, 76],
            ["Cloud2", 244, 68],
            ["Cloud1", 364, 76],
            ["Cloud2", 388, 68],
            ["Blank", 384]
        ]
    }),
    "library": {}
};
