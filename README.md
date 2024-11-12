<div align="center">
  <h1>DDLC-PS2</h1>
</div>

- **DDLC-PS2** is a Doki Doki Literature Club port programmed in Javascript for the **Playstation 2**
- **This port is unofficial and is not affiliated with Team Salvato. Please support the official game. You can download Doki Doki Literature Club at: https://ddlc.moe**
- **For the full experience of the game on the PC, Switch, and other consoles, please support Team Salvato and buy Doki Doki Literature Club Plus! Get the official console versions at: https://ddlc.plus**

## Usage:

### ELF Version ###
1. Download the `.zip`.
2. Extract all files to a USB drive in FAT32 format and insert it into the Playstation 2 (modded with FreeMcBoot or Funtuna).
3. Use **UlaunchElf** (included in FreeMCBoot/Funtuna) to find the DDLC.elf file in the "mass:/" drive to start the game.

Note for emulators: 
* In PCSX2 activate the **Enable Host Filesystem** option in Settings->Emulation, and find the DDLC.elf file.
* AetherSX2 does not allow loading Elf files.

### ISO Version ###
1. Download the `.zip`.
2. Extract all files to a USB drive in FAT32 format and insert it into the Playstation 2 (modded with FreeMcBoot or Funtuna).
3. Use **OPL** and select the game named "Doki Doki LC", Enable the **Mode 6** (disable IGR) in the settings of the game.

Note for emulators: 
* In PCSX2 the loading times are very long, use the ISO only if you are not able to use the ELF version.

## Script/Dialogue Modification

The script files can be modified using a RenPy-like way, these files are located in the **DDLC/src/scripts/{Language}/** folder.


## What is done?

- Language Selector
- On Screen Keyboard
- Dialog System
- First Chapter

## TODO:

- Complete the Title Screen
- Background and Scene Transitions
- Save System
- History System
- Poem Game
- The rest of the chapters

## Credits:

- [AthenaEnv](https://github.com/DanielSant0s/AthenaEnv) by Daniel Santos: A complete Javascript environment for creating homebrew applications and games on PlayStation 2.
- [DDLC-Love(PSP)](https://github.com/LukeZGD/DDLC-LOVE/) by LukeZGD. This port was the inspiration to develop my version (I also extracted the dialogues from here)
- [FontOutline](https://github.com/PauloDevv/Outline-in-Text-for-AthenaENV-PS2) by PauloDev: A class that adds an outline to texts in AthenaENV.