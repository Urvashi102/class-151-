//Registering components in box-components.js
AFRAME.registerComponent("move-box", {
  scheme: {
    moveX: { type: "number", default: 1},
  },

  tick: function () {

    this.date.moveX = this.data.moveX + 0.01;

    var pos = this.el.getAttribute("position");

    pos.x = this.data.moveX;

    this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});
    
  }
});