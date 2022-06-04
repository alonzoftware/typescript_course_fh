(()=>{
    const msg : string = "Hello World";
    console.log(msg);
    
    const hero = {
        name : 'Iron Man',
        age : 50,
    }
    
    // hero.age = '25';
    console.log(hero.age +1);
    // Assign Types
    const a = 10; //Infered 10 not change
    let b = 25; //Intered Number can change
    
    const c : Number = 10 ; //Recommended Assign Type Number
    let d; //by default is any - Not Recommended
    d = ""
    d = {}
    d = 1
    d = []
})()



