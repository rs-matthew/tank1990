import "phaser";
import { GameOverScene } from "./scenes/gameover-scene";
import { ScoresScene } from "./scenes/scores-scene";
import { StageScene } from "./scenes/stage-scene";
import { StageNumberScene } from "./scenes/stagenumber-scene";
import { WelcomeScene } from "./scenes/welcome-scene";
import VirtualJoystickPlugin from 'phaser3-rex-plugins/plugins/virtualjoystick-plugin.js';

const defaultConfig: Phaser.Types.Core.GameConfig = {
  backgroundColor: "000000",
  parent: "game",
  physics: {
    arcade: {
      debug: false,
      gravity: { x: 0, y: 0 },
    },
    default: "arcade",
  },
  plugins: {
    global: [{
      key: 'rexVirtualJoystick',
      plugin: VirtualJoystickPlugin,
      start: true
    },
    ]
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  render: { pixelArt: true, antialias: false },
  scene: [WelcomeScene, GameOverScene, ScoresScene, StageScene, StageNumberScene],
  title: "Mini Battle City",
  type: Phaser.AUTO,
  height: 720,
  width: 1280,
};


export class BattleCityGame extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}

window.onload = () => {
  const game = new BattleCityGame(defaultConfig);
};