function superbowlWin(wins) {
    let result = wins.find(element => element['result'] == "W")
    if(result === undefined) {
        return result
    }
    else {
        return result.year
    }
}

let wins = [
    {"year" : 2015, "result" : "W"},
    {'year' : 2010, "result" : "L"}
]
superbowlWin(wins)