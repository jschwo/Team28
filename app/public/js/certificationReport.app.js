var certificationReport = new Vue({
  el: '#certificationReport',
  data: {
    expirations: []
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
