function alienLanguage(str) {
    return str.split(" ").map(x = > x.slice(0, -1).toUpperCase() + x.slice(-1).toLowerCase()
}
