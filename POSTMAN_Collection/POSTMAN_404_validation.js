/*
Scenario:
Given a GitHub owner or repo that does not exist on GitHub
When requesting GET /api/v1/{owner}/{repo}/contributors
Then return HTTP 404
And a message in the body reading “Either owner or repo does not exist on GitHub”
*/

// Load Postman BDD
eval(globals.postmanBDD);

describe("Tests that an invalid response returns 404", function() {
    it('Should retrun the correct response message', () => {
       pm.expect(pm.response.text()).to.include("Either owner or repo does not exist on GitHub");
	});

    it('Should have a status code of 404', () => {
       pm.expect(pm.response.code).to.be.oneOf([404]);
	});

});