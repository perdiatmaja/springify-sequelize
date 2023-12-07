const methodDecorators = require("./js/src/methods/index")
const baseModel = require("./js/src/models/base.model")
const baseAttributes = require("./js/src/models/base.attributes")
const baseExternalModel = require("./js/src/models/base_external.model")
const baseExternalAttributes = require("./js/src/models/base_external.attributes")

module.exports.Transactional = methodDecorators.Transactional
module.exports.SpringifyModel = baseModel
module.exports.SpringifyExternalModel = baseExternalModel
module.exports.SpringifyAttributes = baseAttributes
module.exports.SpringifyExternakAttributes = baseExternalAttributes