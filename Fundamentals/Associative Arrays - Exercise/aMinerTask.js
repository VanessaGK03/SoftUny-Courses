function aMinerTask(arr){
    let resources = {};

    for(let i = 0; i < arr.length; i+=2){
        let resource = arr[i];
        let qty = Number(arr[i + 1]);

        if(resources.hasOwnProperty(resource)){
            resources[resource] += qty;
        }else{
            resources[resource] = qty;
        }
    }

    for(let [key, value] of Object.entries(resources)){
        console.log(key, '->', value);
    }
}

aMinerTask([

    'Gold',
    
    '155',
    
    'Silver',
    
    '10',
    
    'Copper',
    
    '17'
    
    ]);