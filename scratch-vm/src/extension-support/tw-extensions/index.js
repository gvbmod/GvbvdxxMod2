
//I know, I should have used TW-Unsandboxed-extension-runner.js.
//But this is better for me, since I know a little more of what this code means.

var createTranslate = require('../tw-l10n');
var createScratchX = require('../tw-scratchx-compatibility-layer');

class ScratchConstructor {
	constructor () {
		var ArgumentType = require('../argument-type');
		var BlockType = require('../block-type');
		var Cast = require('../../util/cast');
		var TargetType = require('../target-type');
		var vm = window.vm || window.LatestVirtualMachine;
		var log = require('../../util/log');
		
		this.log = log;
		this.vm = vm;
		this.renderer = vm.runtime.renderer;
		this.storage = vm.runtime.storage;
		this.audio = vm.runtime.audioEngine;
		this.audioEngine = vm.runtime.audioEngine;
		this.fetch = window.fetch;
		this.ArgumentType = ArgumentType;
		this.BlockType = BlockType;
		this.Cast = Cast;
		this.TargetType = TargetType;
		this._extensionConstructor = null;
		this._extensionPrecreated = null;
		this.extensions = {
			unsandboxed:true, //Some extensions require this.
			register: this.register.bind(this)
		};
		this.translate = createTranslate(vm);
		this.ScratchExtensions = createScratchX(this);
	}
	register (ext) {
		this.vm.extensionManager.GM2RegisterExtension(ext);
	}
	//This may be unsecure in some way, but its easier to code this than setting up dialogs.
	async canEmbed () {
		return true;
	}
	async canFetch () {
		return true;
	}
	async canNotify () {
		return true;
	}
	async canOpenWindow () {
		return true;
	}
	async canRedirect () {
		return true;
	}
	async canRecordAudio () {
		return true;
	}
	async canRecordVideo () {
		return true;
	}
	async canReadClipboard () {
		return true;
	}
	//Some parts of this code is from TurboWarp themselfs.
	async fetch (url, options) {
        const actualURL = url instanceof Request ? url.url : url;
        return fetch(url, options);
    }
	async openWindow (url, features) {
        // Use noreferrer to prevent new tab from accessing `window.opener`
        const baseFeatures = 'noreferrer';
        features = features ? `${baseFeatures},${features}` : baseFeatures;
        return window.open(url, '_blank', features);
    }
	async redirect (url) {
        location.href = url;
    }
}

function runExtensionSync (extensionJavascript) {
	//not sure if this is a promise related system, but im going for sync it anyways!
	var Scratch = new ScratchConstructor();
	var globalThis = {//HMM, idk what this is for, some sort of "object"? need to see what this is in turbowarp.
		Scratch:Scratch
	};
	//Not sure if this is safe or not :/
	eval(extensionJavascript);
	
	return; //Return undefined, extension-manager should automaticly handle undefined responses.
}

module.exports = {
	ScratchConstructor:ScratchConstructor,
	runExtensionSync:runExtensionSync
}