const { Spectral } = require('@stoplight/spectral');
const { oas2Functions, oas2Rules } = require('@stoplight/spectral/rulesets/oas2');
import validationHelper from "../helpers/validationHelper"

export default function(object){ 

  /* Spectral validation stuff */
  const spectral = new Spectral();
  spectral.addFunctions(oas2Functions());
  spectral.addRules(oas2Rules());
  const resultsFromSpectral = spectral.run(object, { resolvedTarget: object});

  /* Call validation helper */
  return(validationHelper(resultsFromSpectral, object));
}
