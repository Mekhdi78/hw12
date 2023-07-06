function roman(num) {
    const map = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    let result = ''
    for (let i in map) {
        while (num >= map[i]) {
            result += i
            num -= map[i]
        }
    }
    alert(result)
}
roman(prompt())

