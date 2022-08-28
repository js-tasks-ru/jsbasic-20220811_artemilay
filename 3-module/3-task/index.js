function camelize(str) {
  return str.replace(/-(.?)/g, function (m, ch) {
    return ch ? ch.toUpperCase() : "";
  });
}

