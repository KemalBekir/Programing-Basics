function sequence2k(input) {
    let n = Number(input[0]);
    let count = 1;

    while (count <= n) {
        console.log(count);
        count = 2 * count + 1;
    }

}

sequence2k(["3"])
sequence2k(["8"])
sequence2k(["17"])
