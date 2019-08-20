const nunjucks = require('nunjucks');

nunjucks.configure('./views', {
  watch: true
});

module.exports = {
  data: () => ({
    title: 'Attics'
  }),
  models: {},
  compiler: (template, data) => (nunjucks.renderString(template, data))
}