![bandicam 2023-07-11 20-31-24-775](https://github.com/gvbvdxx-test/GvbvdxxMod2/assets/123641869/a99ee0fc-04b5-4d20-bfaa-b6ab0f418192)
# Gvbvdxx Mod 2

Gvbvdxx Mod 2 is designed to make more powerful games without the need to type any actual code, and is 100% backwards compadible with Scratch and it's older versions.

Currently the latest version of gvbvdxx mod 2.

# Source building issues?

Don't use NPM, use Yarn (It works better with Yarn, at least for me).
Make sure you link the modules correctly. Follow the module link guides below.
Use Node.JS 16.3.0.

# Module Link Guide (Work in Progress)
Please update this if any of this stuff is not accurate.
## Required module links for scratch-gui

* scratch-vm (Runtime for scratch)
* scratch-paint (Paint editor for scratch)
* Most other modules from scratch-vm.

## Required module links for scratch-vm

* scratch-render (To display the screen over WebGL and do screen related math)
* scratch-storage (To load scratch projects)
* scratch-render-fonts (Fonts for scratch. Not 100% sure this is supposed to be in the vm, so link it as well with scratch-render).
* scratch-audio (To play audio for scratch).

## Required module links for scratch-render

* scratch-render-fonts (Fonts for scratch. I'm pretty sure it goes here, but if it fails, then link it to the vm as well.)

## Required module links for gm2-player (For "packaging" projects)

* scratch-vm (All modules will be shared through scratch-vm, no link is required with the others.)
