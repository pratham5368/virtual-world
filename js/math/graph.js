class Graph {
    constructor(points = [], segments = []){
        this.points = points;
        this.segments = segments;
    }
    
    draw(ctx){
        for(const seg of this.segments){
            seg.points.draw(ctx);
        }

        for(const point of this.points){
            point.draw(ctx);
        }
}

}