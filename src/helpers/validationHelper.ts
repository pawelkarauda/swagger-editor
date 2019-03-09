
export default function(resultsFromSpectral, object){


  /* Change object values after adding warns and errors */
  let setObjectValue = (array, value, obj) => {
    if (array.length > 1) {
      if (!obj.hasOwnProperty(array[0]) || typeof obj[array[0]] !== "object") obj[array[0]] = {}
      return setObjectValue(array.slice(1), value, obj[array[0]]);
    } else {
      obj[array[0]] = value;
      return true;
    }  
  }


  /* Define helper */
  let trial;

  /* Loop through warns and errors to get path, set errors and call setObjectValue() */
  for(let i = 0; i < resultsFromSpectral.results.length; i++){

    let results = resultsFromSpectral.results[i];    
    trial = object;
    let pathToChange = [];

    results.path.map((field) => {
      pathToChange.push(field);
      trial = trial[field];

      if(Array.isArray(trial)){
        results.severityLabel === 'warn' ? trial.push("warn") : false;  
        results.severityLabel === 'error' ? trial.push("error") : false;
      } else { 
        results.severityLabel === 'warn' && trial !== '' && trial !== String && trial !== undefined ? trial.warn = true : false;        
        results.severityLabel === 'error' && trial !== '' && trial !== String && trial !== undefined ? trial.error = true : false;
      }
        
      setObjectValue(pathToChange, trial, object);
    });
  }

  return(object);
}