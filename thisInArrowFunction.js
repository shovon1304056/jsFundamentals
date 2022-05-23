
let obj = {
    "name" : "Shovon",
    "language" : ["PHP","JS","GO"],
    "process" : function(){
        
        // for(let i = 0 ; i< this.language.length; i++){
        //     let p = `${this.name} loves ${this.language[i]}`;
        //     console.log(p)
        // }
        // this.language.forEach(function(l) {
        //     let p = `${this.name} works in ${l}`;
        //     console.log(p)
        // })
        
        this.language.forEach((language) => {
            let p = `${this.name} works on ${language}`;
            console.log(p)
        })
    }
};

obj.process()



