/**
 * SomeLib
 */
const MiaJs = {
    Logger: {},
    Shared: {
        models: () => {
        }
    },
    Cached: {}
};

var Logger = MiaJs.Logger
    , Shared = MiaJs.Shared
    , Cached = MiaJs.Cached
    , SomeModel = Shared.models('SomeModel');

function thisModule() {
    var self = this;

    self.identity = 'SomeLib';
    self.version = '1.0';

    return self;
}

module.exports = new thisModule();
