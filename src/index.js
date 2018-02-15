module.exports =  function check(str, bracketsConfig) {  //
  // your solution
  if(str.length == 0 || str.length == 1) return false;

  var buffer = [];

    for(var  i = 0; i < str.length; i++){       //iterate over char in str
      for(var y = 0; y < bracketsConfig.length; y++){   //iterate over brackets in bracketsConfig
         //finding current kind of brackets
        if(str[i] == bracketsConfig[y][0] || str[i] == bracketsConfig[y][1])  { 
          if(bracketsConfig[y][0] == bracketsConfig[y][1]){ //special case for the same brackets
            if(buffer[buffer.length - 1] == bracketsConfig[y][0]){
              buffer.pop();
              break;
            } 
            buffer.push(str[i]);
            break;
          }
          
           if(str[i] == bracketsConfig[y][0]) { //push open bracket in the stack
            buffer.push(str[i])   
            break;  
              
          }         
          if(buffer[buffer.length - 1] != bracketsConfig[y][0] || buffer.length == 0)   //case for incorrect sequence of brackets
              return false;

          buffer.pop();  //pop closed bracket
          break;                
        }      
    }
  }
    if(buffer.length == 0) return true;
    
    return false;
}