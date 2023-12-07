const methodDecorators = require("./js/src/main/decorators/methods/transactionan.decorator")
const baseModel = require("./js/src/main/models/base.model")
const baseAttributes = require("./js/src/main/models/base.attributes")
const baseExternalModel = require("./js/src/main/models/base_external.model")
const baseExternalAttributes = require("./js/src/main/models/base_external.attributes")
const baseDAO = require("./js/src/main/modules/data/base.dao")

module.exports.Transactional = methodDecorators.Transactional
module.exports.SpringifyModel = baseModel
module.exports.SpringifyExternalModel = baseExternalModel
module.exports.SpringifyAttributes = baseAttributes
module.exports.SpringifyExternakAttributes = baseExternalAttributes

module.exports.SpringifyDAO = baseDAO.default