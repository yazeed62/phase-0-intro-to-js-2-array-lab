let cats =["Milo", "Otis", "Garfield"];
function destructivelyAppendCat (name){
    cats.push ('Ralph')
}

function destructivelyPrependCat (name){
    cats.unshift ("Bob")
}
 
function destructivelyRemoveLastCat (name){
    cats.pop ('Garfield')
}

function destructivelyRemoveFirstCat (name){
    cats.shift ("Milo")
}



    function prependCat(name){
        const catArr = [name, ...cats]
        return catArr
    }
    prependCat('Arnold')

    function removeFirstCat(){
        const firstItem = cats.slice(1)
        return firstItem
    }
    removeFirstCat()

    function removeLastCat(){
        const lastItem = cats.slice(0,2)
        return lastItem
    }
    removeLastCat()




