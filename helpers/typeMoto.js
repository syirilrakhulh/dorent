
function type(data){
    let list = []
    for (let i = 0; i < data.length; i++){
        list.push(data[i].type)
    }
    return list
}

module.exports = type