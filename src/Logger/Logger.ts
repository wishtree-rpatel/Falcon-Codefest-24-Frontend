const queryString = window.location.search;
const params = new URLSearchParams(queryString);

const paramDebug = params.get("debug");
export const Logger = {
  debug(value: any) {
    if (paramDebug === "1") {
      console.log(value);
    } else {
      console.log = () => {};
    }
  },

  info(value: any) {
    if (queryString === "?debug=1" || queryString === "?info=1") {
      console.info(value);
    } else {
      console.info = () => {};
    }
  },

  error(value: any) {
    if (
      queryString === "?debug=1" ||
      queryString === "?info=1" ||
      queryString === "?error=1"
    ) {
      console.error(value);
    } else {
      console.error = () => {};
    }
  },
};
