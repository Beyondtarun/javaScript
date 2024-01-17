 /**
  * FUNCTION AND METHODS
  * Block of code
  * funtion defination
  * function name(paramenters){
  * //logic
  * return  //last executable line
  * }
  * 
  * ADVANTAGE
  * reduce redundancy
  */
  function display(msg){
    console.log(msg);
  }

  display("taurn");

  function sum(a,b,c){
    //local varibale -> a,b,c
    return a+b+c;
  }

  sum = sum(10,20,30);
  display(sum);

  /**
   * ARROW FUNCTIONS
   * const name = (paramneter) => {
   * //logic
   * }
   */
 
  const sums = (a ,b)=>{
    return a+b
  }
  display(sums(10,20))