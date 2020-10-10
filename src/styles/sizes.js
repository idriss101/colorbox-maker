export default {
  up() {},
  down(size) {
    const sizes = {
      xs: "575.98px",
      s: "767.98",
      md: "991.98px",
      lg: "1199.98px",
      xl: "1600px"
    };

    return `@media (max-width: ${sizes[size]})`;
  }
};
