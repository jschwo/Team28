var app = new Vue({
  el: '#memberPage',
  data: {
    memberList: [],
    updateMemberID:'',
    memberCertID:'',
    newPtForm: {},
    certifications: [],
    updateMode: false

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
      if (this.updateMode) { /// ARe we trying to update or create?
        this.updateNewMember();
        return;
      }

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
      this.updateMode = false;
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
    setUpdateMember(mem){
      this.newPtForm = mem;
      this.updateMode = true;
      console.log('Getting r3eady to update ', mem.memberID);

    },

    // Not sure if the below method is right
    updateNewMember() {
      fetch('api/members/updateMem.php', {
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
    if(!confirm("are you sure?")){return}
    console.log('memID',memID);
    fetch('api/members/deleteMem.php', {
      method:'POST',
      body: JSON.stringify({"memberID":memID}),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then( response => response.json() )
    .then( json => {
      this.memberList=json;
      console.log(this.memberList);
    });
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
      this.newPtForm = this.newMemberData();
      this.fetchUser();
      this.fetchCertMembers();
    }


});
