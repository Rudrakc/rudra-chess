export class Piece {
  constructor(config) {
    this.position = config.position;
    this.color = config.color;
  }

  validateMove(targetPosition) {
    console.log("Method not implemeted by: " + typeof this);
  }

}
