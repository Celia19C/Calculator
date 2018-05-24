const application = function(){
'use strict'

        function start() {
            
        }


        function numberNotString(number){
            if (!typeof number == 'number'){
                return '¡Introduce un número!';
            }
            else {
                return number
            }
        }

        function sumNumber(a, b) {
            return a + b
        }

        function subtrackNumber(a, b) {
            return a - b
        }

        function multiplyNumber(a, b) {
            return a * b
        }

        function divisionNumber(a, b) {
            return a / b
        }


    










    return {
        start: numberNotString, 
        sum: sumNumber,
        subtrack: subtrackNumber,
        multiply: multiplyNumber,
        division: divisionNumber
    }
}



if (typeof(module) != 'undefined') { //Esto lo haces por buenas prácticas y seguridad
    module.exports = application; //Esto lo haces por utilizar jest
};