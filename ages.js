    const    data  = require("./data/hotVodAges.json");
  
   module.exports = { 
  cheakAges(age_id)  {      
    let foundAge = false;
    for(let i in data.ages){
      var age = data.ages[i];
      if(age.id == age_id){
        console.log(age.type);
        foundAge = true;
        return age.type;
      }
    }
         if (!foundAge)
            return ({"err":"age not found"});
  },
  cheakIdAndMovie(age_id,movie) {
    let foundAge = false;
    for(let i in data.ages){
      var age = data.ages[i];
      if(age.id == age_id){
        console.log(age.id);
        for(let j in age.movies){
          var movie1 = age.movies[j];
          if(movie1.name == movie){
            console.log(movie1.name);
            foundAge = true;
            return age;
          }
        }
      }
    }
    if (!foundAge)
      return ({"err":"age not found"});
  }
};