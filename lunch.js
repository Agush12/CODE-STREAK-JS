function whosPaying(names) {
    

    var ranNum = Math.floor(Math.random()*names.length);
    
    
     var tempNames =(names[ranNum]);
        
        return tempNames +" is going to buy lunch today!";
        
        
        
        
    
    
      
    }
    
    console.log (whosPaying(["Agush", "Vaibhav", "kaif", "yash", "raghav"]) );