let sectionname = "section";
let section = 1;

var element = document.querySelector(".section1");
element.scrollIntoView({ behavior: "smooth" });

let str1 = str2 = "";
document.querySelector('.next').addEventListener('click', () => {
    if (section < 8) {
        str1 = "." + sectionname + (++section);
    }
    var element = document.querySelector(str1);
    element.scrollIntoView({ behavior: "smooth" });
});
document.querySelector('.prev').addEventListener('click', () => {
    if (section > 1) {
        str2 = "." + sectionname + (--section);
    }
    var element = document.querySelector(str2);
    element.scrollIntoView({ behavior: "smooth" });
});



let waitForPressResolve;

function waitForPress() {
    return new Promise(resolve => waitForPressResolve = resolve);
}
function btnResolver() {
    if (waitForPressResolve) waitForPressResolve();
}

document.querySelector('.btn-action').addEventListener('click', btnResolver);




async function sort(arr) {
    let n = arr.length;
    lengthelement.innerHTML = n;
    let y =-1;
    for (let gap = Math.floor(n / 2); gapelement.innerHTML = gap, gap > 0; gap = Math.floor(gap / 2),await waitForPress()) {
        for (let i = gap; jelement.innerHTML = i, i < n,indexrem(),(y!=-1)?indexelements[y].innerHTML = "j":null,(i<n)?indexelements[i].innerHTML = "i":null; i += 1,await waitForPress()) {
            await waitForPress()
            let temp = arr[i];
            tempelement.innerHTML = temp;
            let j;
            for (j = i; ielement.innerHTML = j,indexrem(),indexelements[j].innerHTML = "j",(i==j)?indexelements[j].innerHTML = "j i":indexelements[i].innerHTML = 'i',(arr[j - gap] == undefined)?arrgap.innerHTML = "":arrgap.innerHTML = arr[j - gap], j >= gap && arr[j - gap] > temp; j -= gap,await waitForPress()) {
                await waitForPress()
                arr[j] = arr[j - gap];
                for (let i = 0; i < arr.length; i++) {
                    dummyelements[i].innerHTML = arr[i]
                }
            }
            arr[j] = temp;
            for (let i = 0; i < arr.length; i++) {
                dummyelements[i].innerHTML = arr[i]
            }
            y=j;
        }
    }
    document.querySelector('.running').innerHTML = "Completed";
    document.querySelector('.running').classList.remove("running");
    let elements = document.querySelectorAll('.out');
    for (let i = 0; i < arr.length; i++) {
        elements[i].innerHTML = arr[i]
    }
    return arr;
}

function indexrem(){
    for (let i = 0; i < indexelements.length; i++) {
        indexelements[i].innerHTML = "";
    }
}

let arr = [8, 13, 40, 3, 5];
let lengthelement = document.querySelectorAll(".store-box")[0];
let gapelement = document.querySelectorAll(".store-box")[1];
let tempelement = document.querySelectorAll(".store-box")[2];
let ielement = document.querySelectorAll(".store-box")[3];
let jelement = document.querySelectorAll(".store-box")[4];
let dummyelements = document.querySelectorAll('.dummy');
let indexelements = document.querySelectorAll('.index');
let arrgap = document.querySelectorAll(".store-box")[5];

let btn = document.querySelector('.start');
btn.addEventListener("click", () => {
    if(btn!=null){
        btn.classList.add("running");
        btn.innerHTML = "Continue";
        btn.classList.remove("start");
        btn = null;
        arr = sort(arr);
    }
});