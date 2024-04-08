import TWExtensions from './tw-extensions.json';


import React from 'react';
import {FormattedMessage} from 'react-intl';

import musicIconURL from './music/music.png';
import musicInsetIconURL from './music/music-small.svg';

import penIconURL from './pen/pen.png';
import penInsetIconURL from './pen/pen-small.svg';

import videoSensingIconURL from './videoSensing/video-sensing.png';
import videoSensingInsetIconURL from './videoSensing/video-sensing-small.svg';

import text2speechIconURL from './text2speech/text2speech.png';
import text2speechInsetIconURL from './text2speech/text2speech-small.svg';

import translateIconURL from './translate/translate.png';
import translateInsetIconURL from './translate/translate-small.png';

import makeymakeyIconURL from './makeymakey/makeymakey.png';
import makeymakeyInsetIconURL from './makeymakey/makeymakey-small.svg';

import microbitIconURL from './microbit/microbit.png';
import microbitInsetIconURL from './microbit/microbit-small.svg';
import microbitConnectionIconURL from './microbit/microbit-illustration.svg';
import microbitConnectionSmallIconURL from './microbit/microbit-small.svg';

import ev3IconURL from './ev3/ev3.png';
import ev3InsetIconURL from './ev3/ev3-small.svg';
import ev3ConnectionIconURL from './ev3/ev3-hub-illustration.svg';
import ev3ConnectionSmallIconURL from './ev3/ev3-small.svg';

import wedo2IconURL from './wedo2/wedo.png'; // TODO: Rename file names to match variable/prop names?
import wedo2InsetIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionIconURL from './wedo2/wedo-illustration.svg';
import wedo2ConnectionSmallIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

import boostIconURL from './boost/boost.png';
import boostInsetIconURL from './boost/boost-small.svg';
import boostConnectionIconURL from './boost/boost-illustration.svg';
import boostConnectionSmallIconURL from './boost/boost-small.svg';
import boostConnectionTipIconURL from './boost/boost-button-illustration.svg';

import gdxforIconURL from './gdxfor/gdxfor.png';
import gdxforInsetIconURL from './gdxfor/gdxfor-small.svg';
import gdxforConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
import gdxforConnectionSmallIconURL from './gdxfor/gdxfor-small.svg';

import twIcon from './tw/tw.svg';

import customExtensionIcon from './custom/custom-gm2.svg';

import jsDialogsBigIcon from './dialog/dialogs.png';
import jsDialogsSmallIcon from './dialog/small.png';
import speech4pcDialogsBigIcon from './speech4pc/speech.png';
import speech4pcDialogsSmallIcon from './speech4pc/small.png';
import websitesBigIcon from './websites/websites.png';
import websitesSmallIcon from './websites/small.png';
import scratchBigIcon from './control/scratch.png';
import scratchSmallIcon from './control/small.png';
import betteraudioBigIcon from './better_audio/big.png';
import betteraudioSmallIcon from './better_audio/small.png';
import speech2textIconURL from './speech2text/speech.png';
import gamepadbig from './gamepad/big.png';
import gamepadsmall from './gamepad/small.png';
import webmidismall from './webmidi/small.png';
import webmidibig from './webmidi/big.png';
import beepboxsmall from './beepbox_synth/small.png';
import beepboxbig from './beepbox_synth/big.png';
import wssmall from './websockets/small.png';
import wsbig from './websockets/big.png';
import audioctxsmall from './audio_context/small.png';
import audioctxbig from './audio_context/big.png';
import userdatasmall from './userdata/small.png';
import userdatabig from './userdata/big.png';
import rokusmall from './roku/small.png';
import rokubig from './roku/big.png';

import returnIcon from './returnicon.svg';

import sndanalyserBig from './sound_analyser/big.svg';

import nessmall from './nes_emulator/nes-small.svg';
import nesbig from './nes_emulator/nes.svg';

import gm2HTML5Small from './html5/small.svg';
import gm2HTML5Large from './html5/large.svg';

import twExtsIcon from './tw/tw-icon.svg';

var twExtensionList = [];

for (var ext of TWExtensions.extensions) {
	if (!(ext.id.toLowerCase() == "gamepad")) {
		var extraText = "";
		if (ext.by) {
			var tmpArray = [].concat(ext.by);
			extraText += "By: ";
			for (var user of tmpArray) {
				extraText += user.name+" ";
			}
		}
		var extraText2 = "";
		if (ext.original) {
			var tmpArray = [].concat(ext.original);
			extraText2 += "Original: ";
			for (var user of tmpArray) {
				extraText2 += user.name+" ";
			}
			
		}
		var iconURL = "";
		if (ext.image) {
			iconURL = require("./tw-extensions/"+ext.image);
		} else {
			iconURL = require("./unknown.svg");
		}
		var extDescription = ext.description + " " + extraText + "" + extraText2;
		twExtensionList.push({
			name: ext.name,
			extensionId: ext.id,
			iconURL: iconURL,
			insetIconURL: twExtsIcon,
			description: (
				<div>
					<span>
						{extDescription}
					</span>
					<br/>
					<span>From <a href="https://extensions.turbowarp.org/" target="_blank">TurboWarp Extensions</a>.</span>
				</div>
			),
			featured: true,
			disabled: false,
			internetConnectionRequired: false,
			bluetoothRequired: false,
			helpLink: '',
			tags: [
				"tw"
			]
		});
	}
}
var gm2otherext = [];
if (window.GvbvdxxMod2AddedExtensionInfo) {
	for (var ext of window.GvbvdxxMod2AddedExtensionInfo) {
		var helpLink = "";
		if (ext.gui.helpLink) {
			helpLink = ext.gui.helpLink;
		}
		gm2otherext.push({
			name: ext.gui.name,
			extensionId: ext.id,
			iconURL: ext.gui.imageURL,
			description: (
				<div>
					<span>
						{ext.gui.discription}
					</span>
				</div>
			),
			featured: true,
			disabled: false,
			internetConnectionRequired: false,
			bluetoothRequired: false,
			helpLink: helpLink,
			tags: [
				"other"
			]
		});
	}
}
export default [
	{
        name: (
            <FormattedMessage
                defaultMessage="Custom Extension"
                description="Name of custom extension category"
                id="tw.customExtension.name"
            />
        ),
        extensionId: '',
        iconURL: customExtensionIcon,
        description: (
            <FormattedMessage
                defaultMessage="Load custom extensions, without modifing the source code. This supports the new TurboWarp extension libary."
                description=""
                id="tw.customExtension.description"
            />
        ),
        featured: true,
		tags: [
			"gm2",
			"tw"
		]
    },
	{
        name: (
            <FormattedMessage
                defaultMessage="NES Emulator"
                description=""
                id="gm2.nes.name"
            />
        ),
        extensionId: 'nesemulator',
		insetIconURL: nessmall,
        iconURL: nesbig,
        description: (
            <FormattedMessage
                defaultMessage="Run Nintendo Entertainment System games, and play them."
                description=""
                id="gm2.nes.description"
            />
        ),
        featured: true,
		tags: [
			"gm2"
		]
    },
	{
        name: (
            <FormattedMessage
                defaultMessage="Sound Analyser"
                description=""
                id="gm2.sndanalyser.name"
            />
        ),
        extensionId: 'sndanalyser',
        iconURL: sndanalyserBig,
        description: (
            <FormattedMessage
                defaultMessage="Read the information about sounds playing from the project."
                description=""
                id="gm2.sndanalyser.description"
            />
        ),
        featured: true,
		tags: [
			"gm2"
		]
    },
	{
        name: (
            <FormattedMessage
                defaultMessage="HTML5 Elements"
                description=""
                id="tw.html5.name"
            />
        ),
        extensionId: 'html5',
		insetIconURL: gm2HTML5Small,
        iconURL: gm2HTML5Large,
        description: (
            <FormattedMessage
                defaultMessage="Create HTMl5 elements. Display sprite costumes out of the stage!"
                description=""
                id="tw.html5.description"
            />
        ),
        featured: true,
		tags: [
			"gm2"
		]
    },
	{
        name: 'Roku',
        extensionId: 'roku',
        iconURL: rokubig,
        insetIconURL: rokusmall,
        description: (
            <FormattedMessage
                defaultMessage="Control your roku tv, player, and more, with this extension."
                description=""
                id="gui.extension.roku.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: '',
		softwareRequired: true,
		tags: [
			"gm2"
		]
	},
	{
        name: 'User Data',
        extensionId: 'userdata',
        iconURL: userdatabig,
        insetIconURL: userdatasmall,
        description: (
            <FormattedMessage
                defaultMessage="Get The User's Data"
                description=""
                id="gui.extension.userdata.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: false,
        bluetoothRequired: false,
        helpLink: '',
		tags: [
			"gm2"
		]
	},
	{
        name: 'Extra',
        extensionId: 'extra',
        iconURL: audioctxbig,
        insetIconURL: audioctxsmall,
        description: (
            <FormattedMessage
                defaultMessage="Gvbvdxx Mod Helper App, Unfinished."
                description=""
                id="gui.extension.extra.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: false,
        bluetoothRequired: false,
        helpLink: '',
		tags: [
			"gm2"
		]
	},
    {
        name: 'Audio Context',
        extensionId: 'audioctx',
        iconURL: audioctxbig,
        insetIconURL: audioctxsmall,
        description: (
            <FormattedMessage
                defaultMessage="Play 8-bit sounds"
                description=""
                id="gui.extension.audioctx.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: false,
        bluetoothRequired: false,
        helpLink: '',
		tags: [
			"gm2"
		]
	},
    {
        name: 'Websockets',
        extensionId: 'websocket',
        iconURL: wsbig,
        insetIconURL: wssmall,
        description: (
            <FormattedMessage
                defaultMessage="Connect to servers!"
                description=""
                id="gui.extension.websocket.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: false,
        bluetoothRequired: false,
        helpLink: '',
		tags: [
			"gm2"
		]
	},
    {
        name: 'Beepbox',
        extensionId: 'beepboxsynth',
        iconURL: beepboxbig,
        insetIconURL: beepboxsmall,
        description: (
            <FormattedMessage
                defaultMessage="Play beepbox songs"
                description=""
                id="gui.extension.beepboxsynth.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: false,
        bluetoothRequired: false,
        helpLink: '',
		tags: [
			"gm2"
		]
	},
{
        name: (
            <FormattedMessage
                defaultMessage="WebMIDI"
                description="Name for the 'WebMIDI' extension"
                id="gui.extension.webmidi.name"
            />
        ),
        extensionId: 'webmidi',
        iconURL: webmidibig,
        insetIconURL: webmidismall,
        description: (
            <FormattedMessage
                defaultMessage="Web MIDI for Musical Instrument"
                description="Description for the 'WebMIDI' extension"
                id="gui.extension.webmidi.description"
            />
        ),
        featured: true,
		tags: [
			"gm2"
		]
    },
    {
        name: 'Gamepad',
        extensionId: 'gamepad',
        iconURL: gamepadbig,
        insetIconURL: gamepadsmall,
        description: (
            <FormattedMessage
                defaultMessage="Gamepad Support For Scratch"
                description=""
                id="gui.extension.gamepad.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: false,
        bluetoothRequired: false,
        helpLink: '',
		tags: [
			"gm2"
		]
	},
    {
        name: 'Better Audio',
        extensionId: 'betteraudio',
        iconURL: betteraudioBigIcon,
        insetIconURL: betteraudioSmallIcon,
        description: (
            <FormattedMessage
                defaultMessage="Better Audio"
                description="Better Audio For Scratch"
                id="gui.extension.betteraudio.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: false,
        bluetoothRequired: false,
        helpLink: '',
		tags: [
			"gm2"
		]
	},
/**    {
        name: 'Scratch Control',
        extensionId: 'scratch',
        collaborator: 'gvbvdxx',
        iconURL: scratchBigIcon,
        insetIconURL: scratchSmallIcon,
        description: (
            <FormattedMessage
                defaultMessage="Scratch Control"
                description="Control Scratch Stuff"
                id="gui.extension.scratchcontrol.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: false,
        bluetoothRequired: false,
        helpLink: ''
	},*/
    {
        name: 'Website API',
        extensionId: 'websites',
        iconURL: websitesBigIcon,
        insetIconURL: websitesSmallIcon,
        description: (
            <FormattedMessage
                defaultMessage="Website API"
                description="Website API"
                id="gui.extension.websites.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: false,
        bluetoothRequired: false,
        helpLink: '',
		tags: [
			"gm2"
		]
	},
    {
        name: 'JS',
        extensionId: 'dialogs',
        iconURL: jsDialogsBigIcon,
        insetIconURL: jsDialogsSmallIcon,
        description: (
            <FormattedMessage
                defaultMessage="JS"
                description="JS Blocks"
                id="gui.extension.newblocks.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: false,
        bluetoothRequired: false,
        helpLink: '',
		tags: [
			"gm2"
		]
	},
    {
        name: 'speech4pc',
        extensionId: 'speech4pc',
        iconURL: speech4pcDialogsBigIcon,
        insetIconURL: speech4pcDialogsSmallIcon,
        description: (
            <FormattedMessage
                defaultMessage="Pc Version Of Text To Speech."
                description="Pc Version Of Text To Speech."
                id="gui.extension.speech4pc.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: false,
        bluetoothRequired: false,
        helpLink: '',
		tags: [
			"gm2"
		]
	},
    {
        name: (
            <FormattedMessage
                defaultMessage="Music"
                description="Name for the 'Music' extension"
                id="gui.extension.music.name"
            />
        ),
        extensionId: 'music',
        iconURL: musicIconURL,
        insetIconURL: musicInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Play instruments and drums."
                description="Description for the 'Music' extension"
                id="gui.extension.music.description"
            />
        ),
        featured: true,
		tags: [
			"scratch",
			"gm2"
		]
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pen"
                description="Name for the 'Pen' extension"
                id="gui.extension.pen.name"
            />
        ),
        extensionId: 'pen',
        iconURL: penIconURL,
        insetIconURL: penInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Draw with your sprites."
                description="Description for the 'Pen' extension"
                id="gui.extension.pen.description"
            />
        ),
        featured: true,
		tags: [
			"scratch"
		]
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Video Sensing"
                description="Name for the 'Video Sensing' extension"
                id="gui.extension.videosensing.name"
            />
        ),
        extensionId: 'videoSensing',
        iconURL: videoSensingIconURL,
        insetIconURL: videoSensingInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense motion with the camera."
                description="Description for the 'Video Sensing' extension"
                id="gui.extension.videosensing.description"
            />
        ),
        featured: true,
		tags: [
			"scratch"
		]
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Text to Speech"
                description="Name for the Text to Speech extension"
                id="gui.extension.text2speech.name"
            />
        ),
        extensionId: 'text2speech',
        collaborator: 'Amazon Web Services',
        iconURL: text2speechIconURL,
        insetIconURL: text2speechInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make your projects talk."
                description="Description for the Text to speech extension"
                id="gui.extension.text2speech.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true,
		tags: [
			"scratch"
		]
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Translate"
                description="Name for the Translate extension"
                id="gui.extension.translate.name"
            />
        ),
        extensionId: 'translate',
        collaborator: 'Google',
        iconURL: translateIconURL,
        insetIconURL: translateInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Translate text into many languages."
                description="Description for the Translate extension"
                id="gui.extension.translate.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true,
		tags: [
			"scratch"
		]
    },
    {
        name: 'Makey Makey',
        extensionId: 'makeymakey',
        collaborator: 'JoyLabz',
        iconURL: makeymakeyIconURL,
        insetIconURL: makeymakeyInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make anything into a key."
                description="Description for the 'Makey Makey' extension"
                id="gui.extension.makeymakey.description"
            />
        ),
        featured: true,
		tags: [
			"scratch"
		]
    },
    {
        name: 'micro:bit',
        extensionId: 'microbit',
        collaborator: 'micro:bit',
        iconURL: microbitIconURL,
        insetIconURL: microbitInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the world."
                description="Description for the 'micro:bit' extension"
                id="gui.extension.microbit.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: microbitConnectionIconURL,
        connectionSmallIconURL: microbitConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their micro:bit."
                id="gui.extension.microbit.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/microbit',
		tags: [
			"scratch"
		]
    },
    {
        name: 'LEGO MINDSTORMS EV3',
        extensionId: 'ev3',
        collaborator: 'LEGO',
        iconURL: ev3IconURL,
        insetIconURL: ev3InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build interactive robots and more."
                description="Description for the 'LEGO MINDSTORMS EV3' extension"
                id="gui.extension.ev3.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: ev3ConnectionIconURL,
        connectionSmallIconURL: ev3ConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting. Make sure the pin on your EV3 is set to 1234."
                description="Message to help people connect to their EV3. Must note the PIN should be 1234."
                id="gui.extension.ev3.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/ev3',
		tags: [
			"scratch"
		]
    },
    {
        name: 'LEGO BOOST',
        extensionId: 'boost',
        collaborator: 'LEGO',
        iconURL: boostIconURL,
        insetIconURL: boostInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Bring robotic creations to life."
                description="Description for the 'LEGO BOOST' extension"
                id="gui.extension.boost.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: boostConnectionIconURL,
        connectionSmallIconURL: boostConnectionSmallIconURL,
        connectionTipIconURL: boostConnectionTipIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their BOOST."
                id="gui.extension.boost.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/boost',
		tags: [
			"scratch"
		]
    },
    {
        name: 'LEGO Education WeDo 2.0',
        extensionId: 'wedo2',
        collaborator: 'LEGO',
        iconURL: wedo2IconURL,
        insetIconURL: wedo2InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build with motors and sensors."
                description="Description for the 'LEGO WeDo 2.0' extension"
                id="gui.extension.wedo2.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: wedo2ConnectionIconURL,
        connectionSmallIconURL: wedo2ConnectionSmallIconURL,
        connectionTipIconURL: wedo2ConnectionTipIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their WeDo."
                id="gui.extension.wedo2.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/wedo',
		tags: [
			"scratch"
		]
    },
    {
        name: 'Go Direct Force & Acceleration',
        extensionId: 'gdxfor',
        collaborator: 'Vernier',
        iconURL: gdxforIconURL,
        insetIconURL: gdxforInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense push, pull, motion, and spin."
                description="Description for the Vernier Go Direct Force and Acceleration sensor extension"
                id="gui.extension.gdxfor.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: gdxforConnectionIconURL,
        connectionSmallIconURL: gdxforConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their force and acceleration sensor."
                id="gui.extension.gdxfor.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/vernier',
		tags: [
			"scratch"
		]
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="TurboWarp Blocks"
                description="Name of TW extension"
                id="tw.twExtension.name"
            />
        ),
        extensionId: 'tw',
        iconURL: twIcon,
        description: (
            <FormattedMessage
                defaultMessage="Weird new blocks. Not compatible with Scratch."
                description="Description of TW extension"
                id="tw.twExtension.description"
            />
        ),
        featured: true,
        incompatibleWithScratch: true,
		tags: [
			"tw"
		]
    },
	{
        // not really an extension, but it's easiest to present it as one
        name: (
            <FormattedMessage
                defaultMessage="Custom Reporters"
                description="Name of custom reporters extension"
                id="tw.customReporters.name"
            />
        ),
        extensionId: 'procedures_enable_return',
        iconURL: returnIcon,
        description: (
            <FormattedMessage
                defaultMessage="Allow custom blocks to output values and be used as inputs."
                description="Description of custom reporters extension"
                id="tw.customReporters.description"
            />
        ),
        tags: ['tw'],
        incompatibleWithScratch: true,
        featured: true
    }
].concat(gm2otherext).concat(twExtensionList);
