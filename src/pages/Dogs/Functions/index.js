export function az(a,b){
    let nameA = a.name.toLowerCase()
    let nameB = b.name.toLowerCase()
    if(nameA < nameB){
        return -1
    }
    if(nameA > nameB){
        return 1
    }
    return 0
}

export function za(a,b){
    let nameA = a.name.toLowerCase()
    let nameB = b.name.toLowerCase()
    if(nameA > nameB){
        return -1
    }
    if(nameA < nameB){
        return 1
    }
    return 0
}

function averageWeight(weight){
    let numbers = String(weight).match(/\d+(\.\d+)?/g)
    if(!numbers){
        return NaN
    }
    return numbers.reduce((acc, n) => acc + Number(n), 0) / numbers.length
}

export function MayMen(a,b){
    let sumA = averageWeight(a.weight)
    let sumB = averageWeight(b.weight)

    if(sumA > sumB){
        return 1
    }
    if(sumA < sumB){
        return -1
    }
    return 0
}

export function MenMay(a,b){
    let sumA = averageWeight(a.weight)
    let sumB = averageWeight(b.weight)

    if(sumA > sumB){
        return -1
    }
    if(sumA < sumB){
        return 1
    }
    return 0
}
