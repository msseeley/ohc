const renameKey = (obj, initial, rename) => {
  const newObj = { ...obj };
  newObj[rename] = newObj[initial];
  delete newObj[initial];
  return newObj;
};

module.exports = renameKey;
