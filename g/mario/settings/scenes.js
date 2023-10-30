PlayMarioJas.PlayMarioJas.settings.scenes = {
    "cutscenes": {
		"Flagpole": {
			"firstRoutine": "StartSlidingDown",
			"routines": {
				"StartSlidingDown": PlayMarioJas.PlayMarioJas.prototype.cutsceneFlagpoleStartSlidingDown,
				"HitBottom": PlayMarioJas.PlayMarioJas.prototype.cutsceneFlagpoleHitBottom ,
				"Countdown": PlayMarioJas.PlayMarioJas.prototype.cutsceneFlagpoleCountdown,
				"Fireworks": PlayMarioJas.PlayMarioJas.prototype.cutsceneFlagpoleFireworks
			}
		},
		"BowserVictory": {
		    "firstRoutine": "CollideCastleAxe",
		    "routines": {
		        "CollideCastleAxe": PlayMarioJas.PlayMarioJas.prototype.cutsceneBowserVictoryCollideCastleAxe,
		        "CastleBridgeOpen": PlayMarioJas.PlayMarioJas.prototype.cutsceneBowserVictoryCastleBridgeOpen,
		        "BowserFalls": PlayMarioJas.PlayMarioJas.prototype.cutsceneBowserVictoryBowserFalls,
		        "Dialog": PlayMarioJas.PlayMarioJas.prototype.cutsceneBowserVictoryDialog
		    }
		}
	}
};
