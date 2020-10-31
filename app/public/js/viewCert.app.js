certificationApp = new Vue({
  el: '#generateCert',
  data: {
    Cert: [{
      certName: '',
      certAgency: '',
      expPeriod: '',
      certificationID: ''
    }],
    newCert: {
      certName: '',
      certAgency: '',
      expPeriod: ''
    },
    members:[],

    updateMode: false
  },

  methods:{
    fetchCert(){
      fetch('api/certifications/getCerts.php')
      .then(response => response.json())
      .then(json => {
        this.Cert=json;
        console.log(this.Cert);
      });
  },
 // Aidan I made this function for the certification List page
  fetchCertMembers(){
    fetch('api/memberCert/getMemberCerts.php')
    .then(response => response.json())
    .then(json => {
      this.members=json;
      console.log(this.members);
    });
  },



  handleNewCertForm() {
    if (this.updateMode) { /// ARe we trying to update or create?
      this.updateNewCert();
      return;
    }

    fetch('api/certifications/postCerts.php', {
      method:'POST',
      body: JSON.stringify(this.newCert),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then( response => response.json() )
    .then( json => {
      console.log("Returned from post:", json);
      // TODO: test a result was returned!
      this.Cert=json;
      this.newCert = this.newCertData();
    });

    console.log("Creating (POSTing)...!");
    console.log(this.newCert);

  },

  newCertData() {
    this.updateMode = false;
    return {
      certName: '',
      certAgency: '',
      expPeriod: ''
      }
    },

  setUpdateCert(cert){
    this.newCert = cert;
    this.updateMode = true;
    console.log('Getting r3eady to update ', cert.certificationID);

  },


  updateNewCert() {
    fetch('api/certifications/updateCert.php', {
      method:'POST',
      body: JSON.stringify(this.newCert),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
              }
            })
    .then( response => response.json() )
    .then( json => {
      console.log("Returned from post:", json);
      // TODO: test a result was returned!
      this.Cert=json;
      this.newCert = this.newCertData();
          });
    },

  deleteCert(certID){
    if(!confirm("Are you sure you want to delete this certification?")){return}
    console.log('certID', certID);
    fetch('api/certifications/deleteCert.php', {
      method:'POST',
      body: JSON.stringify({"certificationID":certID}),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then( response => response.json() )
    .then( json => {
      this.Cert=json;
      console.log(this.Cert);
    });
  }
  },


  created(){
    this.newCert = this.newCertData();
    this.fetchCert();
    this.fetchCertMembers();
    }
});
