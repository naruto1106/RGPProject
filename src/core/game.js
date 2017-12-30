import player from '../tempdb/player';
import Map from './map';
import Player from './player';

import bus from '../core/utilities/bus';

class Game {
  constructor(assets) {
    this.assets = assets.reverse();

    bus.$on('DRAW:MOUSE', (data) => {
      this.map.data.player.x = this.player.x;
      this.map.data.player.y = this.player.y;
      this.map.drawMouseSelection(data.x, data.y);
    });
  }

  async start() {
    // Load images and data
    const { images, data } = await this.init();

    // Load map data
    this.map = new Map('surface', images, data);
    this.board = await this.map.load();
    this.map.build(this.board);

    // Create player
    this.player = new Player(data.player);
  }

  /**
   * Initiate game by loading assets and data
   *
   * @return {object}
   */
  async init() {
    const promisedData = {
      // Images from players, monsters, tileset and more
      images: await Promise.all(this.loadAssets()),

      // Load player and world data
      data: await this.constructor.loadData(),
    };

    return promisedData;
  }

  /**
   * Load assets by passing them through
   * a new instance of Image() and resolve the array
   *
   * @return {array}
   */
  loadAssets() {
    const images = this.assets.map(asset =>
      this.constructor.uploadImage(asset),
    );

    return images;
  }

  /**
   * Resolve data through for various channels
   *
   * @return {array}
   */
  static loadData() {
    const data = new Promise((resolve) => {
      const block = {
        map: Map,
        player,
      };

      resolve(block);
    });

    return data;
  }

  /**
   * New up an Image() and sets the source to image
   *
   * @param {string} path The path of the asset
   */
  static uploadImage(path) {
    const asset = new Promise((resolve) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => resolve(403);
      image.src = path;
    });

    return asset;
  }

  move(direction) {
    this.player.move(direction, this.map);
  }
}

export default Game;
