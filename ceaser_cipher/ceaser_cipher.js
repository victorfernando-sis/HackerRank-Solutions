https://www.hackerrank.com/challenges/three-month-preparation-kit-caesar-cipher-1/problem?

function caesarCipher(s, k) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const rotatedAlph = alphabet.substr(k%26) + alphabet.substr(0, k%26)

    const encrypted = [...s].map(char => {
        if (!/^[A-Za-z]*$/.test(char)) return char
        const index_in_alph = alphabet.indexOf(char.toLowerCase())
        return (char == char.toLowerCase()) ?
            rotatedAlph[index_in_alph].toLowerCase() :
            rotatedAlph[index_in_alph].toUpperCase()
    })

    return encrypted.join('')
}