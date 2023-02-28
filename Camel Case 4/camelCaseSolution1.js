// https://www.hackerrank.com/challenges/three-month-preparation-kit-camel-case/problem



function processData(input) {
    const arrInput = input.split("\n")
    const split = (text) => {
        return text.replace('()', '')
            .split(/(?=[A-Z])/g)
            .join(" ")
            .toLowerCase()
    }
    const camelCase = (text) => {
        return text.split(' ').map(word =>
            word[0].toUpperCase() + word.substring(1)).join(' ')
    }

    const combine = (text) => text.split(' ').join('')
    const firstLower = (text) => text[0].toLowerCase() + text.substring(1)
    const addBrakets = (text) => text.slice(-2) == '()' ? text : `${text}() `
    const variable = (text) => firstLower(camelCase(text))
    const method = (text) => addBrakets(firstLower(camelCase(text)))

    let result = []
    arrInput.forEach(input => {
        const operation = input.slice(0, 1)
        const type = input.slice(2, 3)
        const target = input.slice(4).replace('\r', '')

        if (operation == 'S') return result.push(split(target))
        if (type == 'M') return result.push(combine(method(target)))
        if (type == 'V') return result.push(combine(variable(target)))
        if (type == 'C') return result.push(combine(camelCase(target)))
    })
        console.log(result.join('\r\n'))
}