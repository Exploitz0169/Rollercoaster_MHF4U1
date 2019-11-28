const linearFunction = x => 3 * x;
const sineFunction = x => 3 * Math.sin(x - 10) + 30;

const iroc = (points, equation) => {
  const firstX = points[0][0];
  const firstY = points[0][1] || equation(firstX);

  const secondX = points[1][0];
  const secondY = points[1][1] || equation(secondX);

  return (secondY - firstY) / (secondX - firstX);
};

const range = (start, end) => Array(end - start + 1).fill().map((_, index) => start + index);

const createRationalEquation = (x, y, v) => (X) => (((x - v) * y) * 10) / (10 * X - (v * 10));

const sineIroc = iroc([[25.71, 30], [25.709]], sineFunction);

const possibleEquations = [];
for(const VA of range(15, 25)) {
    
    const func = createRationalEquation(25.71, 30, VA);

    const rationalIroc = iroc([[25.71, 30], [25.711]], func);
    const percent = Math.abs(sineIroc / rationalIroc * 100);

    if(percent > 89 && percent < 101) possibleEquations.push(VA);

}

const func = createRationalEquation(25.71, 30, 16.1);
const rationalIroc = iroc([[25.71, 30], [25.711]], func);

console.log(sineIroc / rationalIroc * 100);




