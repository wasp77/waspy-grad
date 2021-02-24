//const testData = require("./house-test-data.json");
//console.log(testData);
// hypothesis = theta transposed * x vector
const matrixLib = require("./matrix");

const trainWeights = (weights, features, labels, learningRate) => {
  trainedWeights = weights.columns.map((column, index) => {
    const feature = features.columns[index];
    const featureMatrix = new matrixLib.Matrix(feature);
    const columnMatrix = new matrixLib.Matrix(column);
    return column.map((weight, weightIndex) => {
      const deriv =
        (columnMatrix.multiply(featureMatrix.transpose()) - labels[index]) *
        feature[weightIndex];
      console.log(`${deriv}`);
      return (weight - deriv * learningRate) / feature.length;
    });
  });
  return trainedWeights;
};

const testWeights = new matrixLib.Matrix().ones([4, 1]);
const features = new matrixLib.Matrix([1], [2], [3], [4]);
const testLabels = [5, 6, 7, 8];
const testTrain = trainWeights(testWeights, features, testLabels, 0.01);
console.log(testTrain);
const testFeatures = new matrixLib.Matrix([1], [2], [3], [4]);
/**
 * This may be working got to remeber that this is really solving for the first label.
 * I think scaling the features may be a useful next implementation.
 */
