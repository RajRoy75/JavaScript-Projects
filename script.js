const inputColor = document.querySelectorAll('.color input');
const showColor = document.querySelector('.gradiant-box');
const select = document.querySelector('.select');
const refreshColor = document.querySelector('.refresh');
const copyBtn = document.querySelector('.code');
const textarea = document.querySelector('textarea');

function randomColorGenerator(){
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`
}

function genarateGradiant(e) {
    if(e){
        inputColor[0].value = randomColorGenerator();
        inputColor[1].value = randomColorGenerator();
    }
    const val = select.value;
    const gradiant = `linear-gradient(${val}, ${inputColor[0].value}, ${inputColor[1].value})`;
    showColor.style.background = gradiant;
    textarea.value = `backgroud:${gradiant}`;
}

const copyCode = ()=>{
    navigator.clipboard.writeText(textarea.value);
    // console.log()
    copyBtn.innerText = 'code copied';
    setTimeout(() => {
        copyBtn.innerText = 'copy code'
    }, 1600);
}

inputColor.forEach((e) => {
    e.addEventListener('input', ()=>{genarateGradiant(false)});
})

select.addEventListener('change',()=>{genarateGradiant(false)});

// console.log(randomColorGenerator());
refreshColor.addEventListener('click', ()=>{genarateGradiant(true)});

copyBtn.addEventListener('click', copyCode);