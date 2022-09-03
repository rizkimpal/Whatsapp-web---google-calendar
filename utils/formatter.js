const formatter = function (number) {
  //delete if not number
  let formatted = number.replace(/\D/g, ``);
  // change start using 0 to 62
  if (formatted.startsWith("0")) {
    formatted = "62" + formatted.substr(1);
  }
  if (!formatted.endsWith("@c.us")) {
    formatted += "@c.us";
  }

  return formatted;
};

module.exports = { formatter };
