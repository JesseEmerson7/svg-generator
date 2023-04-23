const inquirer = require("inquirer");
const { Circle } = require("./shapes");
const { Triangle } = require("./shapes");
const { Square } = require("./shapes");

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
        console.log(answers);
        if (answers.text.length > 3) {
          console.log("Sorry text was too long please try again");
          return;
        }
        const textAndColor = [answers.text, answers.textColor];

        let selectedShape = answers.shape;
        switch (answers.shape) {
          case "circle":
            console.log("circle selected");
            selectedShape = new Circle(answers.shapeColor);
            console.log(selectedShape);
            break;
          case "square":
            console.log("square selected");
            selectedShape = new Square(answers.shapeColor);
            console.log(selectedShape);
            break;
          case "triangle":
            console.log("triangle selected");
            selectedShape = new Triangle(answers.shapeColor);
            console.log(selectedShape);
            break;

          default:
            break;
        }
        const shapeElement = selectedShape.render();
        console.log(shapeElement);
        console.log(textAndColor);
      });
  }
}

module.exports = CLI;
