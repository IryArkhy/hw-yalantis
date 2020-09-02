const loadingReducer = (state = false, { type }) => {
  const matches = /(.*)_(START)/.exec(type);
  if (matches) return true;
  return false;
};

export default loadingReducer;
