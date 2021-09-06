document.addEventListener('DOMContentLoaded', () => {

    'use strict';


//===========================================================================================================
                                                // СТАРЫЙ МЕТОД КЛАССА
//===========================================================================================================


    // function User(sex, name, id, merried) {

    //     this.sex = sex;
    //     this.name = name;
    //     this.id = id;
    //     this.merried = merried;

    //     this.about = function () {
    //         console.log(` My name is ${this.name}, i am ${sex}, my id is ${this.id} `);
    //     }

    // }


    // const person1 = new User('male', 'erbol', 1, false);
    // const person2 = new User('male', 'meerimbek', 2, false);
    // const person3 = new User('male', 'bilol', 3, false);

    // console.log(person2.name);

//===========================================================================================================
                                        // НОВЫЙ МЕТОД
//===========================================================================================================



    // class User {
    //     constructor(sex, name, id, merried) {
    //     this.sex = sex;
    //     this.name = name;
    //     this.id = id;
    //     this.merried = merried;
    //     }
    //     about() {
    //         console.log(` My name is ${this.name}, i am ${sex}, my id is ${this.id} `);
    //     }
    // }


//===========================================================================================================
                                
//===========================================================================================================

    let img = document.querySelectorAll('img');
    
        img.forEach((item)=> {
            item.addEventListener('click', ()=> {
                let x = new Audio(`../sounds/${item.dataset.name}.mp3`)
                x.play();
            })
        });

    document.addEventListener('keypress', (e)=> {
        if (e.key == 'q') {
            let kick = new Audio('../sounds/kick.mp3');
            kick.play();
            return
        } else if (e.key == 'w') {
            let crash = new Audio('../sounds/crash.mp3');
            crash.play();
        } else if (e.key == 'e') {
            let snare = new Audio('../sounds/snare.mp3');
            snare.play();
        } else if (e.key == 'r') {
            let tom1 = new Audio('../sounds/tom1.mp3');
            tom1.play();
        } else if (e.key == 't') {
            let tom2 = new Audio('../sounds/tom2.mp3');
            tom2.play();
        } else if (e.key == 'y') {
            let tom3 = new Audio('../sounds/tom3.mp3');
            tom3.play();
        } else if (e.key == 'u') {
            let tom4 = new Audio('../sounds/tom4.mp3');
            tom4.play();
        } else {
            console.log(e.key);
        }
    });


//===========================================================================================================
                                
//===========================================================================================================



});