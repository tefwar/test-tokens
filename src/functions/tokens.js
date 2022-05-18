const getJson = () => {
  let json = require("../data/tokens.json");
  return json;
};

const BGColor = () => {
  return getJson().global.secondarybg.value;
};

const MainColor = () => {
  return getJson().global.primarycolor.value;
};

const PositiveColor = () => {
  return getJson().global.positivecolor.value;
};

const NegativeColor = () => {
  return getJson().global.negativecolor.value;
};

const WarningColor = () => {
  return getJson().global.warningcolor.value;
};

const UiBorder = () => {
  return getJson().global.uiborder.value;
};

const PrimaryText = () => {
  return getJson().global.primarytext.value;
};

const SecondaryText = () => {
  return getJson().global.secondarytext.value;
};

const BorderRadius = () => {
  return getJson().global.primarybordersm.value;
};


export {getJson, BGColor, MainColor, PositiveColor, NegativeColor, WarningColor, UiBorder, PrimaryText, SecondaryText, BorderRadius};


