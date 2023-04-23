class SVG {
    constructor(text,shape){
        this.textElement = text;
        this.ShapeElement = shape;
    }
    render(textElement,ShapeElement){
       return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

       ${ShapeElement}
     
       <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textElement[1]}">${textElement[0]}</text>
     
     </svg>`
    
}
};