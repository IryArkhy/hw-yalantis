const loadingReducer = (state = false, { type }) => {
  const matches = /(.*)_(SUCCESS|FAILURE)/.exec(type);
  if (!matches) return true;
  return false;
};

export default loadingReducer;
