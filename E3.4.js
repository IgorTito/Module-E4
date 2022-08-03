const num = (a, b) => {
    setInterval(() => {
        if (a <= b)
        {
            console.log(a);
            a++;
        }
        else
            return;

    },1000)
}
num(5,15);