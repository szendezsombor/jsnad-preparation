function a() {
    var apple = 'apple';
    var somethingElse = 'something else';

    function b() {
        // Itt csak azokhoz férünk hozzá amit leírtunk korábban, de amúgy a scopeja a global
        console.log(this)
        console.log(apple)
        console.log(somethingElse)
    }

    const c = () => {
        // Itt hozzá férünk minden változóhoz anélkül, hogy deklaránánk, nem veszi át. Ennek a scopeja az a függvény
        console.log(apple)
    }
    c();
    b();
}

a();