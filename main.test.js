const application = require('./main');
var app;
app = application();

describe('Calculator', function(){
    var number;

    it('checks if value is a number, not a string', function(){
    expect(app.start(number)).toBe(3);
    });
});


