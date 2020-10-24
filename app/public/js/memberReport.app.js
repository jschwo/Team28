var memberReport = new Vue({
  el: '#memberReport',
  data: {
    Member: [{
      firstName: '',
      lastName: '',
      stationNumber: '',
      radioNumber: '',
      email: ''
    }]
  },
  methods: {
    fetchMember(){
      fetch('api/memberReport/')
      .then(response => response.json())
      .then(json => {
        this.Member=json;
        console.log(this.Member);
      });
    },
  created() {
    this.fetchMember();
  }
}});
