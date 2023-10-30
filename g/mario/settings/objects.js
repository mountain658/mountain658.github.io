PlayMarioJas.PlayMarioJas.settings.objects = {
    "onMake": "onMake",
    "indexMap": ["width", "height"],
    "doPropertiesFull": true,
    "inheritance": {
        "Quadrant": {},
        "Map": {},
        "Area": {},
        "Location": {},
        "Thing": {
            "character": {
                "Player": {},
                "enemy": {
                    "Goomba": {},
                    "Koopa": {},
                    "Beetle": {},
                    "Piranha": {},
                    "Blooper": {},
                    "CheepCheep": {},
                    "Podoboo": {},
                    "BulletBill": {},
                    "Lakitu": {},
                    "SpinyEgg": {},
                    "Spiny": {},
                    "HammerBro": {
                        "Bowser": {}
                    },
                    "Hammer": {},
                    "BowserFire": {},
                },
                "item": {
                    "Mushroom": {
                        "Mushroom1Up": {},
                        "MushroomDeathly": {}
                    },
                    "FireFlower": {},
                    "Fireball": {
                        "CastleFireball": {}
                    },
                    "Star": {},
                    "Shell": {
                        "BeetleShell": {}
                    },
                    "Vine": {}
                },
                "BrickShard": {},
                "Bubble": {},
                "Coin": {},
                "Firework": {},
            },
            "solid": {
                "Block": {},
                "BridgeBase": {},
                "Brick": {},
                "DeadGoomba": {},
                "Pipe": {},
                "PipeHorizontal": {},
                "PipeVertical": {},
                "Platform": {},
                "Stone": {
                    "RestingStone": {}
                },
                "Cannon": {},
                "Springboard": {},
                "Floor": {},
                "TreeTop": {},
                "ShroomTop": {},
                "CastleAxe": {},
                "CastleBlock": {},
                "CastleBridge": {},
                "CastleChain": {},
                "Coral": {},
                "WaterBlocker": {},
                "detector": {
                    "DetectCollision": {
                        "ScrollEnabler": {},
                    },
                    "DetectWindow": {
                        "ScrollBlocker": {},
                        "RandomSpawner": {}
                    },
                    "DetectSpawn": {}
                }
            },
            "scenery": {
                "Blank": {},
                "BrickHalf": {},
                "BrickPlain": {},
                "Bush1": {},
                "Bush2": {},
                "Bush3": {},
                "CastleDoor": {},
                "CastleFlag": {},
                "CastleRailing": {},
                "CastleRailingFilled": {},
                "CastleTop": {},
                "CastleWall": {},
                "Cloud": {
                    "Cloud1": {},
                    "Cloud2": {},
                    "Cloud3": {},
                },
                "Fence": {},
                "Flag": {},
                "FlagPole": {},
                "FlagTop": {},
                "HillSmall": {},
                "HillLarge": {},
                "Peach": {},
                "PlatformString": {},
                "PlantSmall": {},
                "PlantLarge": {},
                "Railing": {},
                "ShroomTrunk": {},
                "String": {},
                "StringCornerLeft": {},
                "StringCornerRight": {},
                "Toad": {},
                "TreeTrunk": {},
                "Water": {}
            },
            "Text": {
                "DecorativeBack": {},
                "DecorativeDot": {},
                "TextA": {},
                "TextB": {},
                "TextC": {},
                "TextD": {},
                "TextE": {},
                "TextF": {},
                "TextG": {},
                "TextH": {},
                "TextI": {},
                "TextJ": {},
                "TextK": {},
                "TextL": {},
                "TextM": {},
                "TextN": {},
                "TextO": {},
                "TextP": {},
                "TextQ": {},
                "TextR": {},
                "TextS": {},
                "TextT": {},
                "TextU": {},
                "TextV": {},
                "TextW": {},
                "TextX": {},
                "TextY": {},
                "TextZ": {},
                "Text0": {},
                "Text1": {},
                "Text2": {},
                "Text3": {},
                "Text4": {},
                "Text5": {},
                "Text6": {},
                "Text7": {},
                "Text8": {},
                "Text9": {},
                "TextSpace": {},
                "TextSlash": {},
                "TextCharacters": {
                    "TextPeriod": {},
                    "TextExclamationMark": {},
                    "TextColon": {},
                },
                "TextColored": {
                    "TextColoredD": {},
                    "TextColoredE": {},
                    "TextColoredI": {},
                    "TextColoredN": {},
                    "TextColoredO": {},
                    "TextColoredT": {},
                    "TextColored1": {},
                    "TextColored5": {},
                    "TextColored8": {},
                    "TextColored9": {},
                    "TextColoredSpace": {},
                    "TextColoredCopyright": {}
                },
                "TextLarge": {
                    "TextLargeE": {},
                    "TextLargeP": {},
                    "TextLargeR": {},
                    "TextLargeS": {},
                    "TextLargeU": {}
                },
                "TextHuge": {
                    "TextHugeA": {},
                    "TextHugeB": {},
                    "TextHugeI": {},
                    "TextHugeM": {},
                    "TextHugeO": {},
                    "TextHugeR": {},
                    "TextHugeS": {},
                    "TextHugeSpace": {},
                    "TextHugePeriod": {}
                },
                "ScoreText": {
                    "Text100": {},
                    "Text200": {},
                    "Text400": {},
                    "Text500": {},
                    "Text800": {},
                    "Text1000": {},
                    "Text2000": {},
                    "Text4000": {},
                    "Text5000": {},
                    "Text8000": {},
                    "Text1Up": {},
                },
                "CustomText": {}
            }
        }
    },
    "properties": {
        "Quadrant": {
            "tolx": 0,
            "toly": 0
        },
        "Map": {
            "initialized": false,
            "time": 400
        },
        "Area": {
            "onMake": PlayMarioJas.PlayMarioJas.prototype.initializeArea,
            "setBackground": PlayMarioJas.PlayMarioJas.prototype.setAreaBackground,
            "floor": 104,
            "jumpmod": 1.056,
            "maxyvel": PlayMarioJas.PlayMarioJas.unitsize * 2,
            "maxyvelinv": PlayMarioJas.PlayMarioJas.unitsize * -3.5,
            "onPlayerDeathTimeout": 280,
            "onGameOverTimeout": 280,
            "gravity": PlayMarioJas.PlayMarioJas.gravity,
            "canscroll": true,
            "underwater": false,
            "notime": false,
            "nokeys": false,
            "onPlayerDeath": PlayMarioJas.PlayMarioJas.prototype.setMap,
            "onGameOver": PlayMarioJas.PlayMarioJas.prototype.gameOver,
            "attributes": {
                "underwater": {
                    "gravity": PlayMarioJas.PlayMarioJas.gravity / 2.8,
                    "stretches": [{
                        "thing": "WaterBlocker",
                        "y": 104,
                        "height": 16
                    }, {
                        "thing": "Water",
                        "y": 88
                    }]
                },
                "blockBoundaries": {
                    "afters": [{
                        "thing": "ScrollBlocker", "noBoundaryStretch": true
                    }]
                },
                "random": {
                    "onPlayerDeath": PlayMarioJas.PlayMarioJas.prototype.mapEntranceRespawn,
                    "onPlayerDeathTimeout": 140
                },
                "editor": {
                    "onPlayerDeath": PlayMarioJas.PlayMarioJas.prototype.mapEntranceRespawn,
                    "onPlayerDeathTimeout": 140
                }
            }
        },
        "Location": {
            "area": 0,
            "entry": "Normal"
        },
        "Thing": {
            // Sizing
            "width": 8,
            "height": 8,
            "tolx": 0,
            "toly": PlayMarioJas.PlayMarioJas.unitsize / 8,
            // Velocity
            "xvel": 0,
            "yvel": 0,
            "speed": 0,
            // Score amounts on death
            "scoreStomp": 100,
            "scoreFire": 200,
            "scoreStar": 200,
            "scoreBelow": 100,
            // Placement
            "alive": true,
            "placed": false,
            // Quadrants
            "maxquads": 4,
            "outerok": false,
            // Sprites
            "sprite": "",
            "spriteType": "neither",
            "opacity": 1,
            "scale": 1,
            // Triggered functions
            "animate": PlayMarioJas.PlayMarioJas.prototype.animateEmerge,
            "onMake": PlayMarioJas.PlayMarioJas.prototype.thingProcess,
            "death": PlayMarioJas.PlayMarioJas.prototype.killNormal,
            "collide": undefined,
            "movement": undefined
        },
        "character": {
            "groupType": "Character",
            "character": true,
            "lookleft": true,
            "moveleft": true,
            "firedeath": true,
            "movement": PlayMarioJas.PlayMarioJas.prototype.moveSimple
        },
        "Player": {
            "player": true,
            "canjump": true,
            "nofire": true,
            "nokillend": true,
            "checkOverlaps": true,
            "power": 1,
            "numballs": 0,
            "moveleft": 0,
            "skidding": 0,
            "star": 0,
            "dieing": 0,
            "nofall": 0,
            "maxvel": 0,
            "paddling": 0,
            "jumpers": 0,
            "landing": 0,
            "tolx": PlayMarioJas.PlayMarioJas.unitsize * 2,
            "toly": 0,
            "walkspeed": PlayMarioJas.PlayMarioJas.unitsize / 2,
            "maxspeed": PlayMarioJas.PlayMarioJas.unitsize * 1.35, // Really only used for timed animations
            "maxspeedsave": PlayMarioJas.PlayMarioJas.unitsize * 1.35,
            "scrollspeed": PlayMarioJas.PlayMarioJas.unitsize * 1.75,
            "running": '', // Evaluates to false for cycle checker
            "fire": PlayMarioJas.PlayMarioJas.prototype.animatePlayerFire,
            "movement": PlayMarioJas.PlayMarioJas.prototype.movePlayer,
            "death": PlayMarioJas.PlayMarioJas.prototype.killPlayer,
            "onResting": PlayMarioJas.PlayMarioJas.prototype.animatePlayerLanding,
            "onRestingOff": PlayMarioJas.PlayMarioJas.prototype.animatePlayerRestingOff,
            "type": "character",
            "name": "player normal small still",
            "getKeys": function () {
                return {
                    "run": 0,
                    "crouch": 0,
                    "jump": 0,
                    "jumplev": 0,
                    "sprint": 0
                };
            }
        },
        "enemy": {
            "type": "enemy",
            "speed": PlayMarioJas.PlayMarioJas.unitsize * .21,
            "collide": PlayMarioJas.PlayMarioJas.prototype.collideEnemy,
            "death": PlayMarioJas.PlayMarioJas.prototype.killFlip
        },
        "Goomba": {
            "scoreFire": 100,
            "scoreStar": 100,
            "spawnType": "DeadGoomba",
            "toly": PlayMarioJas.PlayMarioJas.unitsize,
            "death": PlayMarioJas.PlayMarioJas.prototype.killGoomba,
            "spriteCycleSynched": [
                [PlayMarioJas.PlayMarioJas.prototype.unflipHoriz, PlayMarioJas.PlayMarioJas.prototype.flipHoriz]
            ]
        },
        "Koopa": {
            "height": 12,
            "shellspawn": true,
            "spawnType": "Shell",
            "shelltype": "Shell",
            "toly": PlayMarioJas.PlayMarioJas.unitsize * 2,
            "death": PlayMarioJas.PlayMarioJas.prototype.killKoopa,
            "spriteCycle": [
                ["one", "two"]
            ],
            "attributes": {
                "smart": {
                    "movement": PlayMarioJas.PlayMarioJas.prototype.moveSmart,
                    "spawnSettings": {
                        "smart": true
                    }
                },
                "jumping": {
                    "movement": PlayMarioJas.PlayMarioJas.prototype.moveJumping,
                    "jumpheight": PlayMarioJas.PlayMarioJas.unitsize * 1.17,
                    "gravity": PlayMarioJas.PlayMarioJas.gravity / 2.8,
                    "scoreStomp": 400
                },
                "floating": {
                    "onThingAdded": PlayMarioJas.PlayMarioJas.prototype.spawnMoveFloating,
                    "movement": PlayMarioJas.PlayMarioJas.prototype.moveFloating,
                    "nofall": true,
                    "yvel": PlayMarioJas.PlayMarioJas.unitsize / 8,
                    "maxvel": PlayMarioJas.PlayMarioJas.unitsize / 4,
                    "scoreStomp": 400
                }
            }
        },
        "Beetle": {
            "speed": PlayMarioJas.PlayMarioJas.unitsize * .21,
            "xvel": PlayMarioJas.PlayMarioJas.unitsize * .21,
            "height": 8,
            "nofire": 2,
            "shellspawn": true,
            "movement": PlayMarioJas.PlayMarioJas.prototype.moveSmart,
            "death": PlayMarioJas.PlayMarioJas.prototype.killToShell,
            "spawnType": "BeetleShell",
            "shelltype": "BeetleShell",
            "spriteCycle": [
                ["one", "two"]
            ],
        },
        "Piranha": {
            "height": 12,
            "toly": PlayMarioJas.PlayMarioJas.unitsize * 8,
            "countermax": 49,
            // nofall": true,
            "deadly": true,
            // nocollidesolid": true,
            "grounded": true,
            "death": PlayMarioJas.PlayMarioJas.prototype.killNormal,
            "movement": PlayMarioJas.PlayMarioJas.prototype.movePiranha,
            "onThingAdded": PlayMarioJas.PlayMarioJas.prototype.spawnPiranha,
            "spriteCycleSynched": [
                ["one", "two"]
            ]
        },
        "Blooper": {
            "height": 12,
            "nofall": true,
            "nocollidesolid": true,
            "speed": PlayMarioJas.PlayMarioJas.unitsize / 2,
            "onThingAdded": PlayMarioJas.PlayMarioJas.prototype.spawnBlooper,
            "movement": PlayMarioJas.PlayMarioJas.prototype.moveBlooper,
            "death": PlayMarioJas.PlayMarioJas.prototype.killFlip
        },
        "CheepCheep": {
            "nofall": true,
            "nocollidesolid": true,
            "nocollidechar": true,
            "movement": PlayMarioJas.PlayMarioJas.prototype.moveCheepCheep,
            "xvel": PlayMarioJas.PlayMarioJas.unitsize / -6,
            "yvel": PlayMarioJas.PlayMarioJas.unitsize / -32,
            "death": PlayMarioJas.PlayMarioJas.prototype.killFlip,
            "spriteCycleSynched": [
                ["one", "two"]
            ],
            "attributes": {
                "red": {
                    "xvel": PlayMarioJas.PlayMarioJas.unitsize / -4,
                    "yvel": PlayMarioJas.PlayMarioJas.unitsize / -24
                },
                "flying": {
                    "movement": PlayMarioJas.PlayMarioJas.prototype.moveCheepCheepFlying,
                    "gravity": PlayMarioJas.PlayMarioJas.gravity / 3.5
                }
            }
        },
        "Podoboo": {
            "width": 7,
            "speed": PlayMarioJas.PlayMarioJas.unitsize * 1.75,
            "gravity": PlayMarioJas.PlayMarioJas.unitsize / 24,
            "jumpHeight": 28,
            "frequency": 245,
            "deadly": true,
            "nofall": true,
            "nofire": true,
            "nocollidechar": true,
            "nocollidesolid": true,
            "grounded": true,
            "movement": undefined,
            "onThingAdded": PlayMarioJas.PlayMarioJas.prototype.spawnPodoboo
        },
        "BulletBill": {
            "height": 7,
            "nofall": true,
            "nofire": true,
            "nocollidechar": true,
            "nocollidesolid": true,
            "grounded": true,
            "movement": undefined,
            "xvel": PlayMarioJas.PlayMarioJas.unitsize / 2,
        },
        "Lakitu": {
            "height": 12,
            "nofall": true,
            "noshiftx": true,
            "nocollidesolid": true,
            "grounded": true,
            "death": PlayMarioJas.PlayMarioJas.prototype.killLakitu,
            "onThingAdded": PlayMarioJas.PlayMarioJas.prototype.spawnLakitu,
            "movement": PlayMarioJas.PlayMarioJas.prototype.moveLakituInitial
        },
        "SpinyEgg": {
            "width": 7,
            "deadly": true,
            "movement": undefined,
            "onResting": PlayMarioJas.PlayMarioJas.prototype.animateSpinyEggHatching,
            "spawnType": "Spiny",
            "spriteCycleSynched": [
                ["one", "two"]
            ]
        },
        "Spiny": {
            "deadly": true,
            "moveleft": true,
            "spriteCycle": [
                ["one", "two"]
            ]
        },
        "HammerBro": {
            "height": 12,
            "onThingAdded": PlayMarioJas.PlayMarioJas.prototype.spawnHammerBro,
            "movement": PlayMarioJas.PlayMarioJas.prototype.moveHammerBro,
            "spriteCycle": [
                ["one", "two"]
            ]
        },
        "Bowser": {
            "width": 16,
            "height": 16,
            "speed": PlayMarioJas.PlayMarioJas.unitsize * .14,
            "gravity": PlayMarioJas.PlayMarioJas.gravity / 2.8,
            "jumpTimes": [117],
            "fireTimes": [280, 350, 490],
            "throwAmount": 7,
            "throwDelay": 84,
            "throwPeriod": 210,
            "throwBetween": 11,
            "deadly": true,
            "noflip": true,
            "nofiredeath": true,
            "nokillend": true,
            "outerok": true,
            "spawnType": "Goomba",
            "movement": PlayMarioJas.PlayMarioJas.prototype.moveBowser,
            "killonend": PlayMarioJas.PlayMarioJas.prototype.animateBowserFreeze,
            "death": PlayMarioJas.PlayMarioJas.prototype.killBowser,
            "onThingAdded": PlayMarioJas.PlayMarioJas.prototype.spawnBowser,
            "spriteCycle": [
                ["one", "two"]
            ]
        },
        "Hammer": {
            "movement": undefined,
            "nocollidesolid": true,
            "nocollidechar": true,
            "deadly": true,
            "nofire": true,
            "spriteCycle": [
                ["one", "two", "three", "four"],
                3
            ]
        },
        "BowserFire": {
            "width": 12,
            "height": 4,
            "nocollidesolid": true,
            "nocollidechar": true,
            "nofall": true,
            "deadly": true,
            "nofire": true,
            "movement": PlayMarioJas.PlayMarioJas.prototype.moveBowserFire,
            "xvel": PlayMarioJas.PlayMarioJas.unitsize * -.63,
            "spriteCycle": [
                [
                    PlayMarioJas.PlayMarioJas.prototype.flipVert,
                    PlayMarioJas.PlayMarioJas.prototype.unflipVert
                ]
            ]
        },
        "item": {
            "collide": PlayMarioJas.PlayMarioJas.prototype.collideFriendly,
            "onCollideUp": PlayMarioJas.PlayMarioJas.prototype.collideUpItem,
            "jump": PlayMarioJas.PlayMarioJas.prototype.itemJump,
            "item": true,
            "nofire": true
        },
        "Mushroom": {
            "action": PlayMarioJas.PlayMarioJas.prototype.playerShroom,
            "speed": PlayMarioJas.PlayMarioJas.unitsize * .42
        },
        "Mushroom1Up": {
            "action": PlayMarioJas.PlayMarioJas.prototype.playerShroom1Up
        },
        "MushroomDeathly": {
            "action": PlayMarioJas.PlayMarioJas.prototype.killPlayer
        },
        "FireFlower": {
            "action": PlayMarioJas.PlayMarioJas.prototype.playerShroom,
            "spriteCycle": [
                ["one", "two", "three", "four"]
            ]
        },
        "Fireball": {
            "width": 4,
            "height": 4,
            "nofire": true,
            "nostar": true,
            "collidePrimary": true,
            "grounded": true,
            "animate": PlayMarioJas.PlayMarioJas.prototype.animateFireballEmerge,
            "collide": PlayMarioJas.PlayMarioJas.prototype.collideFireball,
            "death": PlayMarioJas.PlayMarioJas.prototype.animateFireballExplode,
            "spriteCycleSynched": [
                ["one", "two", "three", "four"], "spinning", 4
            ]
        },
        "CastleFireball": {
            "deadly": true,
            "nocollidesolid": true,
            "nocollidechar": true,
            "nofall": true,
            "outerok": true,
            "collide": PlayMarioJas.PlayMarioJas.prototype.collideCastleFireball
        },
        "Firework": {
            "nocollide": true,
            "nofall": true,
            "animate": PlayMarioJas.PlayMarioJas.prototype.animateFirework
        },
        "Star": {
            "name": "star item", // Item class so player's star isn't confused with this
            "width": 7,
            "grounded": true,
            "speed": PlayMarioJas.PlayMarioJas.unitsize * .56,
            "action": PlayMarioJas.PlayMarioJas.prototype.collideStar,
            "movement": PlayMarioJas.PlayMarioJas.prototype.moveJumping,
            "jumpheight": PlayMarioJas.PlayMarioJas.unitsize * 1.17,
            "gravity": PlayMarioJas.PlayMarioJas.gravity / 2.8,
            "spriteCycle": [
                ["one", "two", "three", "four"], 0, 7
            ]
        },
        "Shell": {
            "height": 7,
            "speed": PlayMarioJas.PlayMarioJas.unitsize * 2,
            "collidePrimary": true,
            "nofire": false,
            "moveleft": 0,
            "xvel": 0,
            "move": 0,
            "shell": true,
            "hitcount": 0,
            "peeking": 0,
            "counting": 0,
            "landing": 0,
            "enemyhitcount": 0,
            "movement": PlayMarioJas.PlayMarioJas.prototype.moveShell,
            "collide": PlayMarioJas.PlayMarioJas.prototype.collideShell,
            "death": PlayMarioJas.PlayMarioJas.prototype.killFlip,
            "spawnType": "Koopa",
            "attributes": {
                "smart": {}
            }
        },
        "BeetleShell": {
            "height": 8,
            "nofire": 2,
            "spawnType": "Beetle"
        },
        "Vine": {
            "width": 7,
            "nofall": true,
            "nocollide": true,
            "nocollidesolid": true,
            "grounded": true,
            "speed": PlayMarioJas.PlayMarioJas.unitsize / 4,
            "movement": PlayMarioJas.PlayMarioJas.prototype.moveVine,
            "collide": PlayMarioJas.PlayMarioJas.prototype.collideVine,
            "animate": PlayMarioJas.PlayMarioJas.prototype.animateEmergeVine
        },
        "BrickShard": {
            "width": 4,
            "height": 4,
            "nocollide": true,
            "grounded": true,
            "movement": undefined,
            "spriteCycle": [
                [PlayMarioJas.PlayMarioJas.prototype.unflipHoriz, PlayMarioJas.PlayMarioJas.prototype.flipHoriz]
            ]
        },
        "Bubble": {
            "width": 2,
            "height": 2,
            "nocollide": true,
            "nofall": true,
            "movement": PlayMarioJas.PlayMarioJas.prototype.moveBubble,
            "yvel": PlayMarioJas.PlayMarioJas.unitsize / -4
        },
        "Coin": {
            "width": 5,
            "spritewidth": 5,
            "height": 7,
            "nofall": true,
            "nocollidechar": true,
            "nocollidesolid": true,
            "allowUpSolids": true,
            "animate": PlayMarioJas.PlayMarioJas.prototype.animateEmergeCoin,
            "onCollideUp": PlayMarioJas.PlayMarioJas.prototype.collideUpCoin,
            "collide": PlayMarioJas.PlayMarioJas.prototype.collideCoin,
            "spriteCycleSynched": [
                ["one", "two", "three", "two", "one"]
            ]
        },
        "solid": {
            "type": "solid",
            "groupType": "Solid",
            "spritewidth": 8,
            "spriteheight": 8,
            "repeat": true,
            "solid": true,
            "nocollidesolid": true,
            "firedeath": 0,
            "nofire": 2,
            "collide": PlayMarioJas.PlayMarioJas.prototype.collideCharacterSolid,
        },
        "Brick": {
            "breakable": true,
            "bottomBump": PlayMarioJas.PlayMarioJas.prototype.collideBottomBrick
        },
        "Block": {
            "unused": true,
            "contents": "Coin",
            "bottomBump": PlayMarioJas.PlayMarioJas.prototype.collideBottomBlock,
            "spriteCycleSynched": [
                ["one", "two", "three", "two", "one"]
            ]
        },
        "BridgeBase": {
            "height": 4,
            "spritewidth": 4,
        },
        "DeadGoomba": {
            "height": 4,
            "nocollide": true,
            "onThingAdded": PlayMarioJas.PlayMarioJas.prototype.spawnDeadGoomba
        },
        "Pipe": {
            "width": 16,
            "spritewidth": 16,
            "actionTop": PlayMarioJas.PlayMarioJas.prototype.mapExitPipeVertical
        },
        "PipeHorizontal": {
            "height": 16,
            "spriteheight": 16,
            "width": 19.5,
            "spritewidth": 19.5,
            "actionLeft": PlayMarioJas.PlayMarioJas.prototype.mapExitPipeHorizontal,
            "attributes": {
                "width": 8,
                "spritewidth": 8
            }
        },
        "PipeVertical": {
            "position": "beginning",
            "width": 16,
            "spritewidth": 16
        },
        "Platform": {
            "height": 4,
            "spritewidth": 4,
            "fallThresholdStart": PlayMarioJas.PlayMarioJas.unitsize * 2.8,
            "fallThresholdEnd": PlayMarioJas.PlayMarioJas.unitsize * 2,
            "acceleration": PlayMarioJas.PlayMarioJas.unitsize / 16,
            "repeat": true,
            "killonend": false,
            "maxvel": PlayMarioJas.PlayMarioJas.unitsize / 4 * 1.5,
            "attributes": {
                "floating": {
                    "onThingAdded": PlayMarioJas.PlayMarioJas.prototype.spawnMoveFloating,
                    "movement": PlayMarioJas.PlayMarioJas.prototype.moveFloating,
                    "yvel": PlayMarioJas.PlayMarioJas.unitsize / 4 * 1.5
                },
                "sliding": {
                    "onThingAdded": PlayMarioJas.PlayMarioJas.prototype.spawnMoveSliding,
                    "movement": PlayMarioJas.PlayMarioJas.prototype.moveSliding,
                    "xvel": PlayMarioJas.PlayMarioJas.unitsize / 4 * 1.5
                },
                "transport": {
                    "movement": undefined,
                    "collide": PlayMarioJas.PlayMarioJas.prototype.collideTransport
                },
                "falling": {
                    "movement": PlayMarioJas.PlayMarioJas.prototype.moveFalling
                },
                "inScale": {
                    "movement": PlayMarioJas.PlayMarioJas.prototype.movePlatformScale
                }
            }
        },
        "RestingStone": {
            "opacity": 0.01, // Why is opacity set to 1 when added?
            "onRestedUpon": PlayMarioJas.PlayMarioJas.prototype.activateRestingStone
        },
        "Cannon": {
            "frequency": 280,
            "spriteheight": 8,
            "onThingAdded": PlayMarioJas.PlayMarioJas.prototype.spawnCannon
        },
        "Springboard": {
            "height": 14.5,
            "heightNormal": 14.5,
            "spriteheight": 10,
            "collide": PlayMarioJas.PlayMarioJas.prototype.collideSpringboard
        },
        "CastleAxe": {
            "collide": PlayMarioJas.PlayMarioJas.prototype.collideCastleAxe
        },
        "CastleBlock": {
            "onThingAdded": PlayMarioJas.PlayMarioJas.prototype.spawnCastleBlock,
            "attributes": {
                "fireballs": {
                    "speed": 1
                }
            }
        },
        "CastleBridge": {
            "height": 8,
            "spriteheight": 8,
            "spritewidth": 4,
            "killonend": PlayMarioJas.PlayMarioJas.prototype.animateCastleBridgeOpen
        },
        "CastleChain": {
            "width": 7.5,
            "spritewidth": 7.5,
            "height": 8,
            "nocollide": true,
            "killonend": PlayMarioJas.PlayMarioJas.prototype.animateCastleChainOpen
        },
        "Floor": {
            "nofire": true // for the "Super Fireballs" mod
        },
        "WaterBlocker": {
            "hidden": true,
            "collide": PlayMarioJas.PlayMarioJas.prototype.collideWaterBlocker
        },
        "detector": {
            "hidden": true,
            "collideHidden": true
        },
        "DetectCollision": {
            "collide": PlayMarioJas.PlayMarioJas.prototype.collideDetector
        },
        "ScrollEnabler": {
            "activate": PlayMarioJas.PlayMarioJas.prototype.activateScrollEnabler
        },
        "DetectWindow": {
            "movement": PlayMarioJas.PlayMarioJas.prototype.activateWindowDetector
        },
        "RandomSpawner": {
            "activate": PlayMarioJas.PlayMarioJas.prototype.spawnRandomSpawner
        },
        "ScrollBlocker": {
            "onThingAdded": PlayMarioJas.PlayMarioJas.prototype.spawnScrollBlocker,
            "activate": PlayMarioJas.PlayMarioJas.prototype.activateScrollBlocker
        },
        "DetectSpawn": {
            "movement": PlayMarioJas.PlayMarioJas.prototype.spawnDetector
        },
        "scenery": {
            "groupType": "Scenery",
            "repeat": true,
            "nocollide": true, // for when placed in Solid group
            "noBoundaryStretch": true
        },
        "BrickHalf": [8, 4],
        "BrickPlain": [8, 8],
        "Bush1": [16, 8],
        "Bush2": [24, 8],
        "Bush3": [32, 8],
        "CastleDoor": [8, 20],
        "CastleFlag": [6.5, 10],
        "CastleRailing": [8, 4],
        "CastleRailingFilled": [8, 4],
        "CastleTop": [12, 12],
        "CastleWall": [8, 48],
        "Cloud1": [16, 12],
        "Cloud2": [24, 12],
        "Cloud3": [32, 12],
        "Flag": [8, 8],
        "FlagPole": [1, 72],
        "FlagTop": [4, 4],
        "Fence": [8, 8],
        "HillSmall": [24, 9.5],
        "HillLarge": [40, 17.5],
        "Peach": [8, 13],
        "PlatformString": [1, 1],
        "PlantSmall": [7, 15],
        "PlantLarge": [8, 23],
        "Railing": [4, 4],
        "ShroomTrunk": [8, 8],
        "String": [1, 1],
        "StringCornerLeft": [5, 5],
        "StringCornerRight": [5, 5],
        "Toad": [8, 13],
        "TreeTrunk": [4, 4],
        "Water": {
            "width": 4,
            "height": 5
        },
        "Text": {
            "width": 3.5,
            "height": 3.5,
            "groupType": "Text",
            "size": ""
        },
        "DecorativeBack": {
            "width": 88,
            "height": 44,
            "spritewidth": .5,
            "spriteheight": .5,
        },
        "DecorativeDot": {
            "width": 1.5,
            "height": 1.5
        },
        "TextSpace": {
            "hidden": true
        },
        "TextColored1": [3, 3.5],
        "TextColoredSpace": {
            "hidden": true
        },
        "TextColoredCopyright": [4, 4],
        "TextLarge": {
            "width": 7.5,
            "height": 14,
            "size": "Large"
        },
        "TextHuge": {
            "width": 7.5,
            "height": 22
        },
        "TextHugeI": {
            "width": 3.5
        },
        "TextHugeM": {
            "width": 11.5
        },
        "TextHugeSpace": {
            "width": 3.5,
            "hidden": true
        },
        "TextHugePeriod": {
            "width": 3.5
        },
        "ScoreText": {
            "groupType": "Text",
        },
        "TextCharacters": [2.5, 4],
        "TextCharagersHuge": [1, 1],
        "Text100": [6, 4],
        "Text200": [6, 4],
        "Text400": [6, 4],
        "Text500": [6, 4],
        "Text800": [6, 4],
        "Text1000": [8, 4],
        "Text2000": [8, 4],
        "Text4000": [8, 4],
        "Text5000": [8, 4],
        "Text8000": [8, 4],
        "Text1Up": [8, 4],
        "CustomText": {
            "hidden": true,
            "spacingHorizontal": .5,
            "spacingVertical": 8,
            "spacingVerticalBlank": 6,
            "onThingAdded": PlayMarioJas.PlayMarioJas.prototype.spawnCustomText
        }
    }
};
