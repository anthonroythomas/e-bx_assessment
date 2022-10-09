class requests {

getContributorsReq() {

   const response = cy.request({
            method : 'GET',
            failOnStatusCode: false,
            url: "https://api.github.com/repos/DFE-Digital/technical-guidance/contributors?per_page=30",
            headers: {
                "Content-type" : "application/json"
            }
	});

    return response;
}

getContributorsV2(owner,repo) {

    const response = cy.request({
             method : 'GET',
             failOnStatusCode: false,
             url: "https://api.github.com/repos/"+owner+"//"+repo+"/contributors?per_page=30",
             headers: {
                 "Content-type" : "application/json",
             }
     });
 
     return response;
 }

 getTFL(owner,repo) {

    const response = cy.request({
             method : 'GET',
             failOnStatusCode: false,
             url: " https://api.tfl.gov.uk/BikePoint/"+owner+"//"+repo+"/contributors?per_page=30",
             headers: {
                 "Content-type" : "application/json",
             }
     });
 
     return response;
 }
 

}
    export default new requests();