/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const replace = path.replace("//", "/");
  const routes = replace.split("/");
  const routesStack = [];

  routes.forEach(ch => {
    if (ch == "..") {
      routesStack.pop();
    } else {
      if (ch !== "" && ch != ".") {
        routesStack.push(ch);
      }
    }
  });

  let simlifyPath = routesStack.join("/");

  if (simlifyPath.endsWith("/")) {
    simlifyPath = simlifyPath.slice(0, -1);
  }

  return "/" + simlifyPath;
};

export default simplifyPath;
