const app = {
    data() {
        return {
            msg: 'Hello, Vue3',
            shown: true,
            url:'https://www.kmutt.ac.th',
            name:'Patipan Mankhong',
            position:'2nd year Student',
            studentid:'62130500050',
            img:'./images/myprofile.jpg',
            artNum:'1',
            followerNum:'11',
            rating:'10',
            contact:'https://www.facebook.com/wavemoroc',
            leave:'https://www.google.co.th/'

        }
    },
    created(){
        console.log("I was born Hell year" + this.msg);
    },
    updated() {
        console.log("Has been updated!!")
    }
}
var mountedApp = Vue.createApp(app).mount('#app')
