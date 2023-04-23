const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./shapes");
const SVG = require('./svg')
const fs = require('fs/promises');
const { error } = require("console");
// const { Triangle } = require("./shapes");
// const { Square } = require("./shapes");

class CLI {
  run() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "text",
          message: "Enter your logo title (Max length of 3)",
        },
        {
          type: "input",
          name: "textColor",
          message: "Enter logo text color",
        },
        {
          type: "list",
          name: "shape",
          message: "Select a logo shape",
          choices: ["triangle", "circle", "square"],
        },
        {
          type: "input",
          name: "shapeColor",
          message: "Enter logo background color",
        },
      ])
      .then((answers) => {
        if (answers.text.length > 3) {
          console.log("Sorry text was too long please try again");
          return;
        }
        const textAndColor = [answers.text, answers.textColor];

        let selectedShape = answers.shape;
        switch (answers.shape) {
          case "circle":
            selectedShape = new Circle(answers.shapeColor);
            break;
          case "square":
            selectedShape = new Square(answers.shapeColor);
            break;
          case "triangle":
            selectedShape = new Triangle(answers.shapeColor);
            break;

          default:
            break;
        }
        const shapeElement = selectedShape.render();
        const newSvg = new SVG(textAndColor[0],textAndColor[1],shapeElement)
        console.log('Your logo.svg file has been created!')
        return fs.writeFile('logo.svg',newSvg.render());
        
      })
      .catch((err)=>{
        console.log(err);
      })
  }
}

module.exports = CLI;
