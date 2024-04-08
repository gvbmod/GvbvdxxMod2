/*
I want to let you know,
that Gvbvdxx (Me) created this extension.

I did not make JSNes though, because I dont want to
spend time making a JavaScript NES emulator from scratch.

This took a bunch of hours to make. (and a lot of debugging)

So please give credit if you want to use this extension in
your own scratch mod.

By the way, the code for this is pretty large, wich means
that it will take a while to compile.
 */

//I know, this is an insanly large extension.
//But, somebody sugguested it and now I know how to code more
//for scratch.

//Scratch stuff.

var ArgumentType = require('../../extension-support/argument-type');
var BlockType = require('../../extension-support/block-type');
var Cast = require('../../util/cast');

//Not sure if there is a better way to get the icon url.
var blockIconURI = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxODAiIGhlaWdodD0iMTgwIiB2aWV3Qm94PSIwLDAsMTgwLDE4MCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1MCwtOTApIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTE1MCwyNTEuN2MwLC0zNS40NzYzOSAwLC0xMTIuMTI5NSAwLC0xMzVjMCwtMTQuNjczMDQgNy4zMjY5NiwtMjYuNyAyMiwtMjYuN2MyMS40MDQxNywwIDk5LjE0NDY0LDAgMTM3LDBjMTEuODk0MTYsMCAyMSw1LjgwNTgzIDIxLDE3LjdjMCwyMC44MTU2MyAwLDEwNi44MzQ0NiAwLDE0NC41YzAsMTAuODQyNzcgLTYuNjU3MjMsMTcuOCAtMTcuNSwxNy44Yy0yMC4xODIzMSwwIC0xMDIuMzEyNTEsMCAtMTQxLjUsMGMtMTkuMjg1NjUsMCAtMjEsLTE4LjMgLTIxLC0xOC4zeiIgZmlsbD0iI2U4MDAwMCIgc3Ryb2tlLXdpZHRoPSJOYU4iLz48ZyBzdHJva2Utd2lkdGg9IjAiPjxwYXRoIGQ9Ik0xNTYuMDg2MDIsMjExLjY2ODgxdi0xOC40OTg2MWgxNjcuODI3OTZ2MTguNDk4NjF6IiBmaWxsPSIjYzZjZWNkIi8+PHBhdGggZD0iTTE1Ni4wODYwMiwxOTMuNDM4M2wxNS4wMTMzNiwtNjEuOTMwMTNsMTM3LjUzMzE0LC0wLjI2ODFsMTUuMjgxNDYsNjIuMTk4MjJ6IiBmaWxsPSIjZGNlMmUxIi8+PHBhdGggZD0iTTE2Ni40MDMzMSwyMjguMzk3MmwtMTAuMzE3MjksLTE4LjEzNTg5bDE2Ny44Mjc5NiwwLjM2MjcybC0xMi43MjQ2NiwxOC4xMzU4OXoiIGZpbGw9IiM0YTRiNDUiLz48cGF0aCBkPSJNMTg1Ljg0NDY1LDIyMC4zMDgydi0yLjQ4NTcyaDEzLjQwNDc5djIuNDg1NzJ6IiBmaWxsPSIjMTkxOTE5Ii8+PHBhdGggZD0iTTIwNS40MTU2NCwyMjAuMzA4MnYtMi40ODU3aDEzLjQwNDc5djIuNDg1N3oiIGZpbGw9IiMxOTE5MTkiLz48cGF0aCBkPSJNMjc0Ljg1MjQ1LDE5NC43Nzg3OGwtMS4zNDA0OCwtMTQuMjA5MDhoMjYuODA5NThsMi42ODA5NiwxNC4yMDkwOHoiIGZpbGw9IiMyOTJkMmIiLz48cGF0aCBkPSJNMTc5LjQxMDM1LDE4MS45MTAxOHYtMS42MDg1N2g5NC42Mzc4MXYxLjYwODU3eiIgZmlsbD0iI2M0YzZjNiIvPjxwYXRoIGQ9Ik0yNzIuOTc1NzgsMTc5LjA0ODI2di0yLjk0OTA2aDI2LjAwNTI5djIuOTQ5MDZ6IiBmaWxsPSIjOGM4ZDhkIi8+PHBhdGggZD0iTTI3Mi4xNzE1LDE3NS4wMjY4MnYtMi42ODA5NmgyNi44MDk1OHYyLjY4MDk2eiIgZmlsbD0iIzhjOGQ4ZCIvPjxwYXRoIGQ9Ik0yNzEuMDk5MTEsMTcwLjczNzI5di0yLjY4MDk2aDI2LjgwOTU4djIuNjgwOTZ6IiBmaWxsPSIjOGM4ZDhkIi8+PHBhdGggZD0iTTI3MS4zNjcyMSwxNjYuNzE1ODV2LTIuNjgwOTZoMjYuNTQxNDh2Mi42ODA5NnoiIGZpbGw9IiM4YzhkOGQiLz48cGF0aCBkPSJNMjcxLjA5OTExLDE2Mi40MjYzMnYtMi4xNDQ3N2gyNS4yMDF2Mi4xNDQ3N3oiIGZpbGw9IiM4YzhkOGQiLz48cGF0aCBkPSJNMjcwLjAyNjczLDE1OS4yMDkxN3YtMi42ODA5NmgyNi41NDE0OHYyLjY4MDk2eiIgZmlsbD0iIzhjOGQ4ZCIvPjxwYXRoIGQ9Ik0yNzAuMDI2NzMsMTU0LjkxOTY0di0yLjY4MDk2aDI1LjIwMXYyLjY4MDk2eiIgZmlsbD0iIzhjOGQ4ZCIvPjxwYXRoIGQ9Ik0yNjkuMjIyNDQsMTUwLjYzMDExdi0xLjYwODU3aDI1LjIwMXYxLjYwODU3eiIgZmlsbD0iIzhjOGQ4ZCIvPjxwYXRoIGQ9Ik0yNjguOTU0MzQsMTQ2LjM0MDU3di0xLjM0MDQ4aDI0LjY2NDgxdjEuMzQwNDh6IiBmaWxsPSIjOGM4ZDhkIi8+PHBhdGggZD0iTTI2OC40MTgxNSwxNDMuNjU5NjJsLTEuMzQwNDgsLTEwLjk5MTkzbDIzLjMyNDMzLC0wLjI2ODFsMi42ODA5NiwxMC43MjM4M3oiIGZpbGw9IiM4YzhkOGQiLz48cGF0aCBkPSJNMTc2LjUzNzg5LDE5My41NjY2bDIuODcyNDYsLTEzLjAyMThoMS4wMzQwOWwtMS43MjM0NywxMy4yMTMyOXoiIGZpbGw9IiNjNGM2YzYiLz48cGF0aCBkPSJNMTc2LjQyMjk5LDIwNy4zNTQzOWwwLjE5MTUsLTE0LjE3MDc4bDIuMTA2NDYsLTAuMTkxNWwwLjc2NTk5LDE0LjM2MjI3eiIgZmlsbD0iI2M0YzZjNiIvPjxwYXRoIGQ9Ik0xNzcuMTg4OTksMjA3LjczNzM4di0zLjI1NTQ1aDk2LjUxNDQ4djMuMjU1NDV6IiBmaWxsPSIjYzRjNmM2Ii8+PHBhdGggZD0iTTI3MC44MzEwMSwyMjUuMzQxN2w0LjAyMTQ0LC0zMC41NjI5MmgyOC4xNTAwNmwtNC44MjU3MywzMC41NjI5MnoiIGZpbGw9IiMxYTFhMWEiLz48L2c+PC9nPjwvZz48L3N2Zz4=";

//Load JSNes emulator libary.
var jsnes = require("./jsnes.js");

//Debugging some stuff here.
console.log("Gvbvdxx Nes Extension V1.0");
console.log("jsnes:", jsnes);

//

var constants = require("./constants.js");

var audioRuntime = require("./audio-player.js");
var audio = new audioRuntime(); //Moving this over to when its created, so we can give it the scratch audio engine context.

var emulationPaused = true;
var timerMode = "internalClock";

var screenConverter = require("./screen-converter.js");

//Audio processor code:

var volume = 100;

function processAudio(left, right) {
    var volumeReal = volume / 100;
    audio.processAudioSamples(left * volumeReal, right * volumeReal); //Amplify it by it's volume.
}
//This seems to fix the cannot process audio issue:
processAudio(0, 0);

//Some stuff for the JSNes libary to use.

var updateCanvasEventThing = [];

function getSampleRate() {
    try {
        if (!window.AudioContext) {
            return 44100;
        }
        let myCtx = new window.AudioContext();
        let sampleRate = myCtx.sampleRate;
        myCtx.close();
        return sampleRate;
    } catch (e) {
        window.alert(e);
    }
}

function updateSkins () {
	updateCanvasEventThing.forEach((f) => {
		f();
	});
}

//Easily remake the JSNes libary object using a function.

function makeNESObj () {
	return new jsnes.NES({
		onFrame: function (frameBuffer) {
			screenConverter.convertToCanvas(frameBuffer);
			updateSkins();
		},
		onAudioSample: function (left, right) {
			processAudio(left, right);
		},
		sampleRate: getSampleRate()
	});
}

var nes = makeNESObj();

//Timer code:

function framePassed() {
    if (!emulationPaused) {
        try {
            nes.frame();
        } catch (e) {
            //Do nothing for now.
            //Usally means an error processing the frame.
        }
    } else {
		//Stop playing audio (put left and right audio samples left 0 right 0). This is used when the game emulation is paused.
        processAudio(0, 0);
    }
}
//Got this stuff from stack overflow.
var fps, fpsInterval, startTime, now, then, elapsed;
function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animate();
}
function animate() {
    // request another frame

    setTimeout(animate, 1);

    // calc elapsed time since last loop

    now = Date.now();
    elapsed = now - then;

    // if enough time has elapsed, draw the next frame

    if (elapsed > fpsInterval) {
        // Get ready for next frame by setting then=now, but also adjust for your
        // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
        then = now - (elapsed % fpsInterval);

        if (timerMode == "internalClock") {
            framePassed();
        }
    }
}
startAnimating(60);
//Has some syncing issues with set interval,
//but still use it if there are any issues with the time based clock.
setInterval(() => {
    if (timerMode == "interval") {
        framePassed();
    }
    if (emulationPaused) {
        processAudio(0, 0);
    }
}, 1000 / 60);

//To load the roms.

var loadedROMData = null;

function _arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}

async function loadURL(url) {
    var f = await fetch(url);
    var data = await f.arrayBuffer();
	loadedROMData = atob(_arrayBufferToBase64(data));
    nes.loadROM(loadedROMData);
    emulationPaused = false; //start ticking time.
}

//Extension code:

var nesSkin = null;
var nesSkinCons = null;

class NesEmulator {
    constructor(runtime) {
        this.runtime = runtime;

        var BitmapSkin = runtime.renderer.exports.BitmapSkin;
        class NESSkin extends BitmapSkin {
            constructor(id, renderer) {
                super(id, renderer);

                this.videoError = false;

                this.readyPromise = new Promise((resolve) => {
                    resolve();
                });

                this.videoElement = screenConverter.cvs;
                this.videoElement.crossOrigin = "anonymous";

                this.videoDirty = true;
                updateCanvasEventThing.push(() => {
                    this.markVideoDirty();
                    this.reuploadVideo();
                });
                this.reuploadVideo();
                this.emitWasAltered();
            }

            reuploadVideo() {
                this.videoDirty = false;
                this.setBitmap(this.videoElement);
            }

            markVideoDirty() {
                this.videoDirty = true;
                this.emitWasAltered();
            }

            get size() {
                if (this.videoDirty) {
                    this.reuploadVideo();
                }
                return super.size;
            }

            getTexture(scale) {
                if (this.videoDirty) {
                    this.reuploadVideo();
                }
                return super.getTexture(scale);
            }

            dispose() {
                super.dispose();
            }
        }
        var skinId = runtime.renderer._nextSkinId++;
        var skin = new NESSkin(skinId, runtime.renderer);
        runtime.renderer._allSkins[skinId] = skin;
        nesSkin = skin;

        this.classNESSkin = NESSkin;

        runtime.on("PROJECT_STOP_ALL", () => this.resetEverything());
        runtime.on("PROJECT_START", () => this.resetEverything());

        runtime.on("BEFORE_EXECUTE", () => {
            for (const skin of renderer._allSkins) {
                if (skin instanceof NESSkin) {
                    skin.markVideoDirty();
                }
            }
        });

        this.latestError = "";
        var audioEngine = runtime.audioEngine;
        audio.audioCtx = audioEngine.audioContext;
		audio.inputNode = audioEngine.getInputNode();
        setInterval(() => {
            audio.audioCtx = audioEngine.audioContext;
			audio.inputNode = audioEngine.getInputNode();
        }, 1000 / 60)
    }
	
	cleanVars () {
		nes = makeNESObj();
		
		//Basicly reset all values to defaults.
		
		this.latestError = ""; //Remove the latest error.
		
		volume = 100; //100% volume.
		
		timerMode = "internalClock"; //Set the clock back to internal clock.
		
		screenConverter.resetToDefaults(); //Clear the screen.
		
		emulationPaused = true; //Pause the emulation.
		
		updateSkins(); //Since we are changing the screen to black, we need to update the skins to reflect it.
		
		//I dont think making a new audio player object will be easy,
		//so just make the sample data empty.
		processAudio(0, 0);
	}

    resetEverything() {
        emulationPaused = true;
        for (const target of this.runtime.targets) {
            const drawable = this.runtime.renderer._allDrawables[target.drawableID];
            if (drawable.skin instanceof this.classNESSkin) {
                target.setCostume(target.currentCostume);
            }
        }
    }

    async loadrom(args) {
        try {
            await loadURL(Cast.toString(args.datauri));
        } catch (e) {
            this.setError(e);
        }
    }
	
	reset(args) {
        try {
			//This is sort of like buying a new NES every time you want to reset the game,
			//but I still think this is nessasary though.
			nes = makeNESObj();
			//Reload the rom.
            nes.loadROM(loadedROMData);
        } catch (e) {
            this.setError(e);
        }
    }

    startEmulation() {
        emulationPaused = false;
    }

    pauseEmulation() {
        emulationPaused = true;
    }

    processFrame() {
        try {
            nes.frame();
        } catch (e) {
            this.setError(e);
        }
    }

    processFrames(args) {
        var amountFrames = Cast.toNumber(args.FRAMES);
        if (Number(amountFrames)) {
            var countFrames = 0;
            while ((countFrames < amountFrames) || (countFrames > 1515)) { //Max skip frames is 1515, for saftey crash checking.
                try {
                    nes.frame();
                } catch (e) {
                    this.setError(e);
                }
                countFrames += 1;
            }
        }
    }

    setVolume(args) {
        var toVolume = Cast.toNumber(args.VOLUME);
        if (toVolume) {
            volume = Number(toVolume);
        } else {
            volume = 0;
        }
    }

    getVolume() {
        return volume.toString(); //Just in case scratch uses if () to check if value is undefined or something.
    }

    isPaused() {
        return emulationPaused.toString();
    }

    setTimerMode(args) {
        var mode = args.TIMER.toString();
        if (mode == "internalClock") {
            timerMode = "internalClock";
        }
        if (mode == "interval") {
            timerMode = "interval";
        }
        if (mode == "custom") {
            timerMode = "custom";
        }
    }

    getTimeMethodsMenu() {
        return {
            acceptReporters: false,
            items: [{
                    text: "Internal PC clock",
                    value: "internalClock",
                }, {
                    text: "Set interval",
                    value: "interval",
                }, {
                    text: "Custom (manually program the clock)",
                    value: "custom",
                }
            ]
        };
    }

    getInfo() {
        return {
            id: "nesemulator",
            name: "NES Emulator",
            color1: "#ff6b6b",
            color2: "#fa5252",
            color3: "#e03131",
            blockIconURI: blockIconURI,
            blocks: [
				{
                    opcode: "cleanVars",
                    text: "Reset everything.",
                    blockType: BlockType.COMMAND,
                    arguments: {
                    }
                },
                "---", {
                    opcode: "loadrom",
                    text: "Load ROM from URL: [datauri]",
                    blockType: BlockType.COMMAND,
                    arguments: {
                        datauri: {
                            type: ArgumentType.STRING,
							defaultValue: ".nes rom file URL here"
						}
                    }
                }, {
                    opcode: "reset",
                    text: "Reset game",
                    blockType: BlockType.COMMAND,
                    arguments: {
                    }
                },
                "---", {
                    opcode: "showScreen",
                    text: "Show NES screen on [TARGET]",
                    blockType: BlockType.COMMAND,
                    arguments: {
                        TARGET: {
                            type: ArgumentType.STRING,
                            menu: "targets",
                        }
                    }
                }, {
                    opcode: "stopShowingScreen",
                    text: "Stop showing NES screen on [TARGET]",
                    blockType: BlockType.COMMAND,
                    arguments: {
                        TARGET: {
                            type: ArgumentType.STRING,
                            menu: "targets",
                        }
                    }
                },
                "---", {
                    opcode: "startEmulation",
                    text: "Resume emulation",
                    blockType: BlockType.COMMAND,
                    arguments: {}
                }, {
                    opcode: "pauseEmulation",
                    text: "Pause emulation",
                    blockType: BlockType.COMMAND,
                    arguments: {}
                }, {
                    opcode: "isPaused",
                    text: "Emulation Paused?",
                    blockType: BlockType.BOOLEAN,
                    arguments: {}
                }, {
                    opcode: "processFrame",
                    text: "Run a single frame.",
                    blockType: BlockType.COMMAND,
                    arguments: {
                        TARGET: {
                            type: ArgumentType.STRING,
                            menu: "targets",
                        }
                    }
                }, {
                    opcode: "processFrames",
                    text: "Process [FRAMES] frame(s).",
                    blockType: BlockType.COMMAND,
                    arguments: {
                        FRAMES: {
                            defaultValue: 10,
                            type: ArgumentType.NUMBER
                        }
                    }
                }, {
                    opcode: "setTimerMode",
                    text: "Set frame timing method to [TIMER]",
                    blockType: BlockType.COMMAND,
                    arguments: {
                        TIMER: {
                            type: ArgumentType.STRING,
                            menu: "timer",
                        }
                    }
                },
                "---", {
                    opcode: "pressButton",
                    text: "Press button [BUTTON]",
                    blockType: BlockType.COMMAND,
                    arguments: {
                        BUTTON: {
                            type: ArgumentType.STRING,
                            menu: "controller",
                        }
                    }
                }, {
                    opcode: "releaseButton",
                    text: "Release buttton [BUTTON]",
                    blockType: BlockType.COMMAND,
                    arguments: {
                        BUTTON: {
                            type: ArgumentType.STRING,
                            menu: "controller",
                        }
                    }
                },
                "---", {
                    opcode: "setVolume",
                    text: "Set volume to [VOLUME]%",
                    blockType: BlockType.COMMAND,
                    arguments: {
                        VOLUME: {
                            defaultValue: 50,
                            type: ArgumentType.NUMBER,
                        }
                    }
                }, {
                    opcode: "getVolume",
                    text: "NES Volume",
                    blockType: BlockType.REPORTER,
                    arguments: {}
                },
                "---", {
                    opcode: "saveState",
                    text: "Get current state.",
                    blockType: BlockType.REPORTER,
                    arguments: {}
                }, {
                    opcode: "loadState",
                    text: "Load current state [DATA]",
                    blockType: BlockType.COMMAND,
                    arguments: {
                        DATA: {
                            type: ArgumentType.STRING
                        }
                    }
                },
                "---", {
                    opcode: "catchedErrors",
                    text: "Latest error",
                    blockType: BlockType.REPORTER,
                    arguments: {}
                }, {
                    opcode: "clearCatchedErrors",
                    text: "Clear latest error",
                    blockType: BlockType.COMMAND,
                    arguments: {}
                }
            ],
            menus: {
                targets: this.getTargetsMenu(),
                controller: this.getGameControllerMenu(),
                timer: this.getTimeMethodsMenu()
            },
        };
    }

    setError(error) {
        this.latestError = error.toString();
    }

    clearCatchedErrors() {
        this.latestError = "";
    }

    catchedErrors() {
        return this.latestError.toString();
    }

    saveState() {
        try {
            return JSON.stringify(nes.toJSON());
        } catch (e) {
            this.setError(e);
            return "";
        }
    }

    loadState(args) {
        var data = Cast.toString(args.DATA);
        try {
            nes.fromJSON(JSON.parse(data));
        } catch (e) {
            this.setError(e);
        }
    }

    getTargetsMenu() {
        return {
            acceptReporters: true,
            items: "_getTargets",
        };
    }

    getGameControllerMenu() {
        var cnt = constants.controller;
        var cnt2 = constants.controllerP2;
        return {
            acceptReporters: true,
            items: [{
                    text: "(Player 1) Depad Up",
                    value: cnt.up,
                }, {
                    text: "(Player 1) Depad Down",
                    value: cnt.down,
                }, {
                    text: "(Player 1) Depad Left",
                    value: cnt.left,
                }, {
                    text: "(Player 1) Depad Right",
                    value: cnt.right,
                }, {
                    text: "(Player 1) Start",
                    value: cnt.start,
                }, {
                    text: "(Player 1) Select",
                    value: cnt.select,
                }, {
                    text: "(Player 1) A",
                    value: cnt.a,
                }, {
                    text: "(Player 1) B",
                    value: cnt.b,
                }, {
                    text: "(Player 2) Depad Up",
                    value: cnt2.up,
                }, {
                    text: "(Player 2) Depad Down",
                    value: cnt2.down,
                }, {
                    text: "(Player 2) Depad Left",
                    value: cnt2.left,
                }, {
                    text: "(Player 2) Depad Right",
                    value: cnt2.right,
                }, {
                    text: "(Player 2) Start",
                    value: cnt2.start,
                }, {
                    text: "(Player 2) Select",
                    value: cnt2.select,
                }, {
                    text: "(Player 2) A",
                    value: cnt2.a,
                }, {
                    text: "(Player 2) B",
                    value: cnt2.b,
                }
            ],
        };
    }

    getNesPadMap(btn) {
        var cnt = constants.controller;
        var cnt2 = constants.controllerP2;

        var output = {
            player: null,
            button: null
        };

        //Player 1 Buttons.

        if (btn == cnt.up) {
            output.player = 1;
            output.button = jsnes.Controller.BUTTON_UP;
        }
        if (btn == cnt.down) {
            output.player = 1;
            output.button = jsnes.Controller.BUTTON_DOWN;
        }
        if (btn == cnt.left) {
            output.player = 1;
            output.button = jsnes.Controller.BUTTON_LEFT;
        }
        if (btn == cnt.right) {
            output.player = 1;
            output.button = jsnes.Controller.BUTTON_RIGHT;
        }

        if (btn == cnt.a) {
            output.player = 1;
            output.button = jsnes.Controller.BUTTON_A;
        }
        if (btn == cnt.b) {
            output.player = 1;
            output.button = jsnes.Controller.BUTTON_B;
        }

        if (btn == cnt.start) {
            output.player = 1;
            output.button = jsnes.Controller.BUTTON_START;
        }
        if (btn == cnt.select) {
            output.player = 1;
            output.button = jsnes.Controller.BUTTON_SELECT;
        }

        //Player 2 Buttons.

        if (btn == cnt2.up) {
            output.player = 2;
            output.button = jsnes.Controller.BUTTON_UP;
        }
        if (btn == cnt2.down) {
            output.player = 2;
            output.button = jsnes.Controller.BUTTON_DOWN;
        }
        if (btn == cnt2.left) {
            output.player = 2;
            output.button = jsnes.Controller.BUTTON_LEFT;
        }
        if (btn == cnt2.right) {
            output.player = 2;
            output.button = jsnes.Controller.BUTTON_RIGHT;
        }

        if (btn == cnt2.a) {
            output.player = 2;
            output.button = jsnes.Controller.BUTTON_A;
        }
        if (btn == cnt2.b) {
            output.player = 2;
            output.button = jsnes.Controller.BUTTON_B;
        }

        if (btn == cnt2.start) {
            output.player = 2;
            output.button = jsnes.Controller.BUTTON_START;
        }
        if (btn == cnt2.select) {
            output.player = 2;
            output.button = jsnes.Controller.BUTTON_SELECT;
        }

        return output;
    }

    pressButton(args) {
        var buttonItem = args.BUTTON;
        var realBTN = this.getNesPadMap(buttonItem);
        if (realBTN.player) {
            nes.buttonDown(realBTN.player, realBTN.button);
        }
    }

    releaseButton(args) {
        var buttonItem = args.BUTTON;
        var realBTN = this.getNesPadMap(buttonItem);
        if (realBTN.player) {
            nes.buttonUp(realBTN.player, realBTN.button);
        }
    }

    showScreen(args, util) {
        const targetName = Cast.toString(args.TARGET);
        const target = this._getTargetFromMenu(targetName, util);
        if (!target) {
            return;
        }
        vm.renderer.updateDrawableSkinId(target.drawableID, nesSkin._id);
        nesSkin.markVideoDirty();
    }
    stopShowingScreen(args, util) {
        const targetName = Cast.toString(args.TARGET);
        const target = this._getTargetFromMenu(targetName, util);
        if (!target) {
            return;
        }
        target.setCostume(target.currentCostume);
    }

    _getTargetFromMenu(targetName, util) {
        if (targetName === "_myself_")
            return util.target;
        if (targetName === "_stage_")
            return runtime.getTargetForStage();
        return this.runtime.getSpriteTargetByName(targetName);
    }

    _getTargets() {
        let spriteNames = [{
                text: "myself",
                value: "_myself_"
            }, {
                text: "Stage",
                value: "_stage_"
            },
        ];
        const targets = this.runtime.targets
            .filter((target) => target.isOriginal && !target.isStage)
            .map((target) => target.getName());
        spriteNames = spriteNames.concat(targets);
        return spriteNames;
    }

}

module.exports = NesEmulator;
