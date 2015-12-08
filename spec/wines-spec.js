var request = require('request')
var url = "http://www.google.com"

describe("Testing to see if I can get a 200 Status Code", function(){
    it("Should return 200", function(done){
        request.get(url, function(error, response, body){
        console.log(response.statusCode)
        expect(response.statusCode).toBe(200)
        done();
    })
    
    it("Should return title of wine", function(done){
        request.get(url, function(error, response,body){
            var parse = JSON.parse(body)
            const wines = json.wines.map(function(element) {
                return {wines:element.name}
            })
            expect(wines).toEqual([ {wines: 'Guigal Cotes Rouge' }])
            done();
        })
    })
    })
})