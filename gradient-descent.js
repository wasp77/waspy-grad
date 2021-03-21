const matrixLib = require("./matrix");

const hypothesis = (features, weights) => features.multiply(weights);

const trainWeightsVector = (weights, features, labels, learningRate) => {
  const cost = hypothesis(features, weights).subtract(labels);
  return features
    .transpose()
    .multiply(cost)
    .scalarMultiply(learningRate / features.rows.length);
};

// m = number of training samples
// n = number of features
// X = matrix of the features m X n
// theta = matrix of the weights n X 1
// y = labels m X 1

const theta = new matrixLib.Matrix().ones([2, 1]);
const x = new matrixLib.Matrix([1, 1], [2, 2], [3, 3], [4, 4]);
const y = new matrixLib.Matrix([5], [5], [5], [5]);
const testTrain = trainWeightsVector(theta, x, y, 0.01);
console.log(testTrain.toString());
/**
 * I think scaling the features may be a useful next implementation.
 */
