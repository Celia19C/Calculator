const application = require('./main');
var app;
app = application();

describe('Calculator', function(){

    it('checks if value is a number, not a string', function(){
    expect(app.start(typeof 3)).toBe('number');
    });

    it('sum a and b', function(){
    expect(app.sum(2, 3)).toBe(5);
    });

    it('subtrack a and b', function(){
    expect(app.subtrack(2, 3)).toBe(-1);
    });

    it('multiply a and b', function(){
    expect(app.multiply(2, 3)).toBe(6);
    });

    it('division a and b', function(){
    expect(app.division(6, 3)).toBe(2);
    });

});

