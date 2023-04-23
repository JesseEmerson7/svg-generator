const SVG = require("../lib/svg");

describe("SVG", () => {
  test("should return rendered circle SVG", () => {
    const testSvg = new SVG("svg","black",`<circle cx="150" cy="100" r="80" fill="blue" />`);
    const expectedString=`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="blue" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">svg</text>
  </svg>`;
    expect(testSvg.render()).toEqual(expectedString);
  });

  test("should return rendered Square SVG", () => {
    const testSvg = new SVG("svg","black",`<rect x="90" y="40" width="120" height="120" fill="blue" />`);
    const expectedString=`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="90" y="40" width="120" height="120" fill="blue" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">svg</text>
  </svg>`;
    expect(testSvg.render()).toEqual(expectedString);
  });

  test("should return rendered Triangle SVG", () => {
    const testSvg = new SVG("svg","black",`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`);
    const expectedString=`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="blue" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">svg</text>
  </svg>`;
    expect(testSvg.render()).toEqual(expectedString);
  });
  
});
