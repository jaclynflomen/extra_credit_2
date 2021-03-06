(() => {
const vm = new Vue({
    el : "#app",

    data : {
        modelname : "",
        modelpricing : "",
        modeldetails : "",

        videosource : "",
        carIMG : "",

        cardata : [],
        singledata : [],

        showDetails : false 
    },

    created : function() {
        //get all of the movie data ib the oage load
        this.fetchCarData(null); //this is where we would fetch PHP stuff
    },

    mounted : function(){
        console.log('vue is ready to go on the page');
        //trigger an ajax call with a mocked click event
        document.querySelector('#F55').click();
    },


    methods : {
        fetchSingle(e) {
            //debugger;
            this.fetchCarData(e.currentTarget.dataset.id);

        },
        

        loadCar(e) { //use to open lightbox in portfolio
            //debugger;
            e.preventDefault(); //block a page reload (anchor tag default behaviour)
            
            dataKey = e.currentTarget.getAttribute('href');
            currentData = this.cardata.filter(video => video.path === dataKey);
    
            this.modelname = currentData[0].modelName;
            this.modelpricing = currentData[0].pricing;
            this.modeldetails = currentData[0].modelDetails;
            this.carIMG = currentData[0].imgPath;
            this.videosource = dataKey;

            this.showDetails = true;
    
        },

        fetchCarData(id) {
            let url = id ?`./includes/index.php?id=${id}` : './includes/index.php'; 
             //this is a ternary statement, shorthand if else statement. left of : is true, right is false
         
             fetch(url)
             .then(res => res.json())
             .then(data => {
                 console.log(data);

                 if (id) {
                     //store data in the single result above
                     this.singledata = data;
                 } else {
                     //initial data grab, store in the videodata array
                     this.cardata = data;
                 }
             })

             .catch(function(error){
                 console.log(error);
             });

         }
    }
});
})();
