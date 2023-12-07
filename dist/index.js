const methodDecorators = require("./js/methods/index")
const baseModel = require("./js/models/base.model")
const baseAttributes = require("./js/models/base.attributes")
const baseExternalModel = require("./js/models/base_external.model")
const baseExternalAttributes = require("./js/models/base_external.attributes")

module.exports.Transactional = methodDecorators.Transactional
module.exports.SpringifyModel = baseModel
module.exports.SpringifyExternalModel = baseExternalModel
module.exports.SpringifyAttributes = baseAttributes
module.exports.SpringifyExternakAttributes = baseExternalAttributes