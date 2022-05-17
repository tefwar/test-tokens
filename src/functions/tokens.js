const MainColor = () => {
  let json = require("../data/tokens.json");
  return json.global.main.value;
};

export default MainColor;
