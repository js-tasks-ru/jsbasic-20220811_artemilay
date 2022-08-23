function sumSalary(salaries) {
  let res = 0;
  for(k in salaries) {
    if (typeof salaries[k] === 'number' && isFinite(salaries[k])) {
      res+=salaries[k];

    }
    
  }
  return res;
}
