const chunkArray = (arr, len) => {
    //cach 1:
    // const chunkedArr = [];
    // arr.forEach(val => {
    //     const last = chunkedArr[chunkedArr.length - 1];
    //     if (!last || last.length === len) {
    //         chunkedArr.push([val]);
    //     } else {
    //         last.push(val);
    //     }
    // }
    // );
    // return chunkedArr;

    const chunkedArr = [];
    let i = 0;
    while (i < arr.length) {
        chunkedArr.push(arr.slice(i, i + len));
        i += len;
    }
// slice() se return cac element dc chon trong mang tao thanh 1 mang moi
    return chunkedArr;
}

module.exports = chunkArray;