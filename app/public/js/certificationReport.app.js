var certificationReport = new Vue({
  el: '#certificationReport',
  data: {
    expirations: [{
      firstName: '',
      lastName: '',
      certName: '',
      expDate:''
    }]
  },
  methods: {
    fetchExpiration(){
      fetch('api/certificationReport/')
      .then(response => response.json())
      .then(json => {
        this.expirations=json;
        console.log(this.expirations);
      });
    }
  },
  created() {
    this.fetchExpiration();
  }
});
