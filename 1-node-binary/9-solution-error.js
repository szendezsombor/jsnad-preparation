function f (n = 999) {
    if (n === 0) throw Error()
    f(n - 1)
}
f()