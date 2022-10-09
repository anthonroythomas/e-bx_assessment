import requests from "/cypress/integration/ebx_assessment/requests";

/*
Scenario:
Given a GitHub owner and repo
When requesting GET /api/v1/{owner}/{repo}/contributors
Then return the authors of the last 30 commits in the given repo
*/

describe("Tests the Github contributors api", function() {

	it('Should display a successful request status code range', function () {
        requests.getContributorsReq().then((response) =>{
            expect(response.status).to.eq(200, 201, 202);
        })  
    });

   it('Should have the property login within in the response', () => {
    requests.getContributorsReq().then((response) =>{
       cy.log(JSON.stringify(response.body,'',1)).then((resp) =>{

            expect(resp.body[0]).to.have.property('login');      
            })  
        });
    });

   it('Should have the property login within in the response', () => {
        requests.getContributorsReq().then((response) =>{
            expect(response.body[0]).property('login').to.not.be.oneOf([null, ""]);
        });
    });

   it('Should have the property id within in the response', () => {

        requests.getContributorsReq().then((response) =>{
            expect(response.body[0]).property('id').to.not.be.oneOf([null, ""]);
        });
    });

   it('Should have a contributor array count of 30', () => {
       requests.getContributorsReq().then((response) =>{
        expect(response.body).to.have.length(30);
       })  
    });

    it('Should have the correct content type header', () => {
        requests.getContributorsReq().its('headers').its('content-type').should('include', 'application/json; charset=utf-8');
     });

});
