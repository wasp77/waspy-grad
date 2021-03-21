/**
 * features --> 2d array of features with their values
 */
const scaleFeature = (feature) => {
  const max = Math.max(...feature);
  const min = Math.min(...feature);
  const range = max - min;
  return feature.map((featureVal) => featureVal / range);
};

const normalize = (features) =>
  features.map((featureArr) => scaleFeature(featureArr));

module.exports = {
  normalize: normalize,
};
