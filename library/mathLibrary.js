function sum(...args) {
    return args.reduce((acc, value) =>
        typeof acc === 'number' && typeof value === 'number' ? acc + value : 'Erro');
}

function sub(...args) {
    return args.reduce((acc, value) =>
        typeof acc === 'number' && typeof value === 'number' ? acc - value : 'Erro')
}

function mult(...args) {
    return args.reduce((acc, value) =>
        typeof acc === 'number' && typeof value === 'number' ? acc * value : 'Erro')
}

function div(...args) {
    return args.reduce((acc, value) =>
        typeof acc === 'number' && typeof value === 'number' ? acc / value : 'Erro')
}

export { sum, sub, mult, div }