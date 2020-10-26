// var app = new Vue({
//   el: '#memberPage',
//   data: {
//     ptList: [],
//     visitList: [],
//     activePt: null,
//     triageForm: {
//       priority: null,
//       symptoms: ''
//     },
//     newMemForm: {}
//   },
//   computed: {
//     activePtName() {
//       return this.activePt ? this.activePt.lastName + ', ' + this.activePt.firstName : ''
//     }
//   },
//   methods: {
//     newPtData() {
//       return {
//         firstName: "",
//         lastName: "",
//         dob: "",
//         gender: "",
//         street: "",
//         city: "",
//         state: "",
//         zip: "",
//         mobile: "",
//         home: "",
//         other: "",
//         startDate: "",
//         radio: "",
//         station: "",
//         active: ""
//
//       }
//     },
//     handleNewMemForm( evt ) {
//       // evt.preventDefault();  // Redundant w/ Vue's submit.prevent
//
//       // TODO: Validate the data!
//       console.log("reach"+this.newPtForm);
//       fetch('api/members/create.php', {
//         method:'POST',
//         body: JSON.stringify(this.newPtForm),
//         headers: {
//           "Content-Type": "application/json; charset=utf-8"
//         }
//       })
//       .then( response => response.json() )
//       .then( json => {
//         console.log("Returned from post:", json);
//         // TODO: test a result was returned!
//         this.ptList.push(json[0]);
//       });
//
//       console.log("Creating (POSTing)...!");
//       console.log(this.newPtForm);
//
//       this.newPtForm = this.newPtData();
//     },
//     handleUpdateForm( evt ) {
//       console.log("Form submitted!");
//
//       this.triageForm.pt = this.activePt;
//       console.log(this.triageForm);
//
//     }
//   },
//   created() {
//     fetch("api/records/")
//     .then( response => response.json() )
//     .then( json => {
//       this.ptList = json;
//
//       console.log(json)}
//     );
//
//     fetch("api/currentMembers/")
//     .then( response => response.json() )
//     .then( json => {
//       this.visitList = json;
//
//       console.log(json)}
//     );
//     this.newPtForm = this.newPtData();
//   }
// })
