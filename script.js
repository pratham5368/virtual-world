myCanvas.width = 600;
myCanvas.height = 600;

const ctx = myCanvas.getContent("2d");

const graph = new Graph();
graph.draw(ctx);