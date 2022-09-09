const obj = {
    algo: ['marcos','mundo','mañi'],
    boolean: false,
    algos: ['eppi','dolly','amor']
};

const source = document.getElementById('templateHB').innerHTML;

const compileTemplate = Handlebars.compile(source);

const compiledHtml = compileTemplate(obj);

document.getElementById('container').innerHTML = compiledHtml;
