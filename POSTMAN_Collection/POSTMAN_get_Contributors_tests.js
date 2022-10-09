/*
Scenario:
Given a GitHub owner and repo
When requesting GET /api/v1/{owner}/{repo}/contributors
Then return the authors of the last 30 commits in the given repo
*/

// Load Postman BDD
eval(globals.postmanBDD);

describe("Tests the Github contributors api", function() {
    it('Should have a login string found in the response', () => {
       pm.expect(pm.response.text()).to.include("login");
	});

    it('Should have a correct content type header', () => {
       pm.expect(pm.response).to.have.header('content-type', 'application/json; charset=utf-8');
	});

    it('Should display a successful request status code range', () => {
       pm.expect(pm.response.code).to.be.oneOf([200, 201, 202]);
	});

    it('Should contain the property login and not be null', () => {
       const jsdonData = pm.response.json();
      //pm.expect( jsdonData[0].login).to.eql('himal-mandalia');//removed assertion as this assumes the user is always be present, better  to test not null
       pm.expect(jsdonData[0].login).to.not.be.oneOf([null, ""])
	});


});
