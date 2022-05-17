const MainColor = () => {
  let json = require("../data/tokens.json");
  return json.global.red.value;
};

export default MainColor;
