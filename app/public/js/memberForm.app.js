var app = new Vue({
  el: '#memberPage',
  data: {
    memberList: [{
      memberID: '',
      firstName: '',
      lastName: '',
      dob: "",
      gender: "",
      email: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      phoneNum1: "",
      phoneNum2: "",
      phoneNum3: "",
      startDate: "",
      position: "",
      radioNumber: "",
      stationNumber: "",
      isActive: ""

    }],
    updateMemberID:'',

    memberCertID:'',

    newPtForm: {
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      email: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      phoneNum1: "",
      phoneNum2: "",
      phoneNum3: "",
      startDate: "",
      position: "",
      radioNumber: "",
      stationNumber: "",
      isActive: ""
    },

    certifications: [{
      firstName: '',
      lastName: '',
      certName: '',
      certAgency: '',
      expDate: ''

    }]

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


      // Not sure if this is how you do it to reference a specific memberID
      // fetchCertMembers(memID){
      //   this.memberCertID=memID;
      //   console.log('memID: '+this.memberCertID);
      //   fetch('api/memberCert/getMemberCerts.php?memberID='+memID)
      //   .then(response => response.json())
      //   .then(json => {
      //     this.certifications=json[0];
      //     console.log(this.certifications);
      //   });
      // },

      fetchCertMembers(){
        fetch('api/memberCert/getMemberCerts.php')
        .then(response => response.json())
        .then(json => {
          this.certifications=json;
          console.log(this.certifications);
        });
      },

    handleNewMemForm() {
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
        email: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        phoneNum1: "",
        phoneNum2: "",
        phoneNum3: "",
        startDate: "",
        position: "",
        radioNumber: "",
        stationNumber: "",
        isActive: ""
      }

    },
    updateMember(memID){
      this.updateMemberID=memID;
      console.log('memID: '+this.updateMemberID);
      fetch('api/members/index.php?memberID='+memID)
      .then( response => response.json() )
      .then( json => {
        this.newPtForm=json[0];
      });
    },

    // Not sure if the below method is right
    updateNewMember(memID) {
      this.updateNewMemberID=memID;
      fetch('api/members/updateMem.php?memberID='+memID, {
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
  },

  deleteMember(memID){
    this.deleteMemberID=memID;
    console.log('memID: '+this.deleteMemberID);
    fetch('api/members/deleteMem.php?memberID='+memID)
    .then( response => response.json() );
    // .then( json => {
    //   this.newPtForm=json[0];
    }

  },


    // handleUpdateForm() {
    //   fetch('api/members/updateMem.php', {
    //     method:'POST',
    //     body: JSON.stringify(this.updateForm),
    //     headers: {
    //       "Content-Type": "application/json; charset=utf-8"
    //     }
    // })
    // .then( response => response.json() )
    //
    // },

    created(){
      this.fetchUser();
      this.fetchCertMembers();
    }


});
