const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./shapes");
const SVG = require('./svg')
const fs = require('fs/promises');
const { error } = require("console");

//cli .run method starts here and begins the inquirer questions
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
        //if the svg text is greater than 3 the code is stopped and a message is logged
        if (answers.text.length > 3) {
          console.log("Sorry text was too long please try again");
          return;
        }
        const textAndColor = [answers.text, answers.textColor];

        //switch to set the class of shape based on shape selected in cli
        switch (answers.shape) {
          case "circle":
            var selectedShape = new Circle(answers.shapeColor);
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
        //uses the shape render method to generate the correct input for the svg
        const shapeElement = selectedShape.render();
        //svg class is created using the values entered plus the shape render method and that file is written using the newSvg.render method from the svg class that was imported 
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
