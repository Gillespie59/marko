var expect = require('chai').expect;

module.exports = function(helpers) {
    var component = helpers.mount(require('./index'), { });
    component.state.count = 1;
    component.update();
};
