let ans = prompt(`число больше 100`)
ans >= 100 ? alert(`good`) : alert(`bad`)



let arr = [4, 16, 19, 22, 11, 144, 967, 19124]
let even = []
let odd = []

arr.filter(item => {
    if (item % 2) {
        even.push(item)
    } else {
        odd.push(item)
    }
})