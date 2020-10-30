certificationApp = new Vue({
  el: '#generateCert',
  data: {
    Cert: [{
      certificationID: '',
      certName: '',
      certAgency: '',
      expPeriod: ''
    }],
    newCert: {
      certName: '',
      certAgency: '',
      expPeriod: ''
    },
    members:[]
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





  createCert(){

      fetch('api/certifications/postCerts.php', {
      method: 'POST',
      body: JSON.stringify(this.newCert),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then( response => response.json() )
    .then( json => {
      console.log("Returned from post:", json);
      this.Cert=json;
      this.newCert = this.newCertData();
    });
    console.log("Creating (POSTing)...!");
    console.log(this.newCert);
  },
  newCertData() {
    return {
      certName: '',
      certAgency: '',
      expPeriod: ''
      }
    }
  },
  created(){
    this.fetchCert();
    this.fetchCertMembers();
  }
});
