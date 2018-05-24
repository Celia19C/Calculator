const application = function(){

    function getValue(){
        var number = 3;
        return number
        console.log(number);
    }

    return {
        start: getValue
    }
}


if (typeof(module) != 'undefined') { //Esto lo haces por buenas prácticas y seguridad
    module.exports = application; //Esto lo haces por utilizar jest
};