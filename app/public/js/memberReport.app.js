var memberReport = new Vue({
  el: '#memberReport',
  data: {
    members: [{
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
        this.members=json;
        console.log(this.members);
      });
    },
  created() {
    this.fetchMember();
  }
}});
