PlayMarioJas.PlayMarioJas.settings.input = {
    "InputWritrArgs": {
        "aliases": {
            // Keyboard aliases
            "left":   [65, 37],     // a,     left
            "right":  [68, 39],     // d,     right
            "up":     [87, 38],     // w,     up
            "down":   [83, 40],     // s,     down
            "sprint": [16, 32],     // shift, space
            "pause":  [80],         // p (pause)
            // Mouse aliases
            "rightclick": [3],
        },
        "triggers": {
            "onkeydown": {
                "left": PlayMarioJas.PlayMarioJas.prototype.keyDownLeft,
                "right": PlayMarioJas.PlayMarioJas.prototype.keyDownRight,
                "up": PlayMarioJas.PlayMarioJas.prototype.keyDownUp,
                "down": PlayMarioJas.PlayMarioJas.prototype.keyDownDown,
                "sprint": PlayMarioJas.PlayMarioJas.prototype.keyDownSprint,
                "pause": PlayMarioJas.PlayMarioJas.prototype.keyDownPause,
                "mute": PlayMarioJas.PlayMarioJas.prototype.keyDownMute,
            },
            "onkeyup": {
                "left": PlayMarioJas.PlayMarioJas.prototype.keyUpLeft,
                "right": PlayMarioJas.PlayMarioJas.prototype.keyUpRight,
                "up": PlayMarioJas.PlayMarioJas.prototype.keyUpUp,
                "down": PlayMarioJas.PlayMarioJas.prototype.keyUpDown,
                "sprint": PlayMarioJas.PlayMarioJas.prototype.keyUpSprint,
                "pause": PlayMarioJas.PlayMarioJas.prototype.keyUpPause
            },
            "onmousedown": {
                "rightclick": PlayMarioJas.PlayMarioJas.prototype.mouseDownRight
            },
            "oncontextmenu": {},
            "ondevicemotion": {
                "devicemotion": PlayMarioJas.PlayMarioJas.prototype.deviceMotion
            }
        }
    }
};
