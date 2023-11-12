function hardWord(arr){
    let [letter, words] = arr;
    
    let emptySpaces = letter.split(' ').filter(word => word.includes('_'));
    
    for(let space of emptySpaces){
        if(!space.endsWith('_')){
            space = space.slice(0, space.length - 1);
        }
        let currWord = words.find(word => word.length == space.length);
        letter = letter.replace(space, currWord);
    }

    console.log(letter);
}

hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',

['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);