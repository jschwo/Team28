var app = new Vue({
  el: '#memberPage',
  data: {
    memberList: [{
      memberID: '',
      firstName: '',
      lastName: '',
      dob: "",
      gender: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      mobile: "",
      home: "",
      other: "",
      startDate: "",
      radio: "",
      station: "",
      active: ""

    }],

    newPtForm: {
      memberID: '',
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      mobile: "",
      home: "",
      other: "",
      startDate: "",
      radio: "",
      station: "",
      active: ""
    }
  },

    methods:{
      fetchUser(){
        fetch('api/members/')
        .then( response => response.json() )
        .then( json => {
          this.memberList=json;
          console.log(this.memberList);
        });
      },

    handleNewMemForm() {
    //  this.newComment.id = (this.newComment.commentText.substring(0,1)).toLowerCase();
      // TODO: Validate the data!
      fetch('api/members/create.php', {
        method:'POST',
        body: JSON.stringify(this.newPtForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        // TODO: test a result was returned!
        this.memberList=json;
        this.newPtForm = this.newMemberData();
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newPtForm);

    },
    newMemberData() {
      return {
        memberID: '',
        firstName:'',
        lastName:'',
        dob: "",
        gender: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        mobile: "",
        home: "",
        other: "",
        startDate: "",
        radio: "",
        station: "",
        active: ""
      }
    }

    },

    created(){
      this.fetchUser();
    }


});
