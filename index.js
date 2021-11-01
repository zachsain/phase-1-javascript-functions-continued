// Your code here

function saturdayFun(pass1 = "roller-skate") {
    return `This Saturday, I want to ${pass1}!`
}

saturdayFun()

function mondayWork(pass1 = "go to the office") {
    return `This Monday, I will ${pass1}.`;
}

function wrapAdjective(p1 = "*") {
    return function(spec = "special") {
        return `You are ${p1}${spec}${p1}!`
    } 
}

wrapAdjective("*")("not good at this");