export class Piece {
  constructor(config) {
    this.position = config.position;
    this.color = config.color;
  }

  move(targetPosition) {
    console.log("Method not implemeted by: " + typeof this);
  }

}
