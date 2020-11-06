let btns = document.querySelectorAll('div[role="button"] [data-testid]')
let followBtns = Array.from(btns).filter(btn => {
    return btn.innerText == 'Follow'
})

var max = (followBtns.length > 100 ? followBtns.length : 100);

for (let i = 0; i <= max; i++) {
    setTimeout(() => {
        followBtns[i].click()
        console.log("Followed "+ i);
    }, (Math.floor(Math.random() * (4500 - 1000) ) + 1000) * i+1);
}
