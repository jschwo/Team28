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
    }
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
  }
});
