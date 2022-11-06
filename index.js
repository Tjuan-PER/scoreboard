let homeScoreEl = document.getElementById("home-score-el")
let homeFoulsEl = document.getElementById("home-fouls-el")
let homeScore = 0
let homeFouls = 0

let awayScoreEl = document.getElementById("away-score-el")
let awayFoulsEl = document.getElementById("away-fouls-el")
let awayScore = 0
let awayFouls = 0

let periodEl = document.getElementById("period-el")
let period = 0


function add(n, what, team){
    if (team == "home") {
        if(what == "score"){
            for(i=0; i < n; i++){
                homeScore += 1
            }
            homeScoreEl.textContent = homeScore
        } else {
            homeFouls += 1
            homeFoulsEl.textContent = homeFouls
        }
    } else {
        if(what == "score"){
            for(i=0; i < n; i++){
                awayScore += 1
                awayScoreEl.textContent = awayScore
            }
        } else {
            awayFouls += 1
            awayFoulsEl.textContent = awayFouls
        }
    }
}

function addPeriod() {
    period += 1
    periodEl.textContent = period
}

function subtractPeriod() {
    if(period < 1) {return}
    period -= 1
    periodEl.textContent = period
}


function subtract(n, what, team){
    if (team == "home") {
        if(what == "score"){
            if(homeScore < 1) {return}
            for(i=0; i < n; i++){
                homeScore -= 1
            }
            homeScoreEl.textContent = homeScore
        } else {
            if(homeFouls < 1) {return}
            homeFouls -= 1
            homeFoulsEl.textContent = homeFouls
        }
    } else {
        if(what == "score"){
            if(awayScore < 1) {return}
            for(i=0; i < n; i++){
                awayScore -= 1
                awayScoreEl.textContent = awayScore
            }
        } else {
            if(awayFouls < 1) {return}
            awayFouls -= 1
            awayFoulsEl.textContent = awayFouls
        }
    }
}

function newGame() {
    homeScore = 0
    homeFouls = 0
    awayScore = 0
    awayFouls = 0
    period = 0

    homeScoreEl.textContent = homeScore
    homeFoulsEl.textContent = homeFouls
    awayScoreEl.textContent = awayScore
    awayFoulsEl.textContent = awayFouls
    periodEl.textContent = period
}