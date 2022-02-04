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

export function MayMen(a,b){
    let weightA = a.weight.split(' - ')
    let weightB = b.weight.split(' - ')

    let sumA = (Number(weightA[0]) + Number(weightA[1]))/2
    let sumB = (Number(weightB[0]) + Number(weightB[1]))/2

    if(sumA > sumB){
        return 1
    }
    if(sumA < sumB){
        return -1
    }
    return 0
}

export function MenMay(a,b){
    let weightA = a.weight.split(' - ')
    let weightB = b.weight.split(' - ')

    let sumA = (Number(weightA[0]) + Number(weightA[1]))/2
    let sumB = (Number(weightB[0]) + Number(weightB[1]))/2

    if(sumA > sumB){
        return -1
    }
    if(sumA < sumB){
        return 1
    }
    return 0
}