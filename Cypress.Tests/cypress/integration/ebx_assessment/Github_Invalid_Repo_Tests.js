import requests from "/cypress/integration/ebx_assessment/requests";


/*
Scenario:
Given a GitHub owner or repo that does not exist on GitHub
When requesting GET /api/v1/{owner}/{repo}/contributors
Then return HTTP 404
And a message in the body reading “Either owner or repo does not exist on GitHub”
*/


describe("Tests that an invalid response returns 404", function() {

	it('Should retrun the correct response message', function () {

        requests.getContributorsV2("dummy**owner","dummy**repo").then((response) =>{

         expect(JSON.stringify(response.body.message)).to.include("Either owner or repo does not exist on GitHub");
        })  
});

	it('Should have a status code of 404', function () {

        requests.getContributorsV2("dummy**owner", "dummy**repo").then((response) =>{
            expect(response.status).to.eq(404);
        })  
    });

});

