const user = {
    name: "Ali",
    age: 30,
    
    
    setAge(newAge) {
      this.age = newAge;
    },
    
    getYearsBeforeRetirement(retirementAge = 65) {
      if (this.age >= retirementAge) {
        return "Artıq pensiyadadır!";
      }
      return retirementAge - this.age;
    }
  };
  
  
  console.log("İlkin yaş:", user.age); 
  
  
  user.setAge(40);
  console.log("Dəyişdirilmiş yaş:", user.age); 
  
  
  const yearsLeft = user.getYearsBeforeRetirement();
  console.log("Pensiyaya qədər qalan illər:", yearsLeft); 