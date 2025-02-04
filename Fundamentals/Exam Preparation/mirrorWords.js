function mirrorWords([arr]){
    let pattern = /(#|@)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/gi;

    let match = pattern.exec(arr);

    let count = 0;
    let maches = [];

    while(match){
        count++;

        let first = match[2];
        let second = match[3];

        if(first == second.split('').reverse().join('')){
            maches.push(`${first} <=> ${second}`);
        }

        match = pattern.exec(arr);  
    }

    if (count == 0){
        console.log("No word pairs found!");
    }else{
        console.log(`${count} word pairs found!`);
    }

    if(maches.length == 0){
        console.log("No mirror words!");
    }else{
        console.log("The mirror words are:");
        console.log(maches.join(', '));
    }
}

mirrorWords([

    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    
    ])