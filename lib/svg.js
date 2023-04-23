class SVG {
    constructor(text,textColor,shape){
        this.textElement = text;
        this.ShapeElement = shape;
        this.textColor = textColor;
    }
    render(){
       return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${this.ShapeElement}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textElement}</text>
  </svg>`
       
}
};

module.exports = SVG