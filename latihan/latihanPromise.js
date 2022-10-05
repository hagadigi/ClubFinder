const state = {
    isCoffeeMakerReady: true,
    seedStocks: {
        arabica: 80,
        robusta: 60,
        liberica: 200,
    },
};

const getSeeds = (type, miligrams) => {
    return new Promise((resolve, reject) => {
        if(state.seedStocks[type] >= miligrams){
            state.seedStocks[type] -= miligrams;
            resolve('Biji kopi didapatkan');
        } else{
            reject('maaf stock kopi habis!')
        }
    });
};

const makeCoffee = seeds => {
    return new Promise((resolve, reject) =>{
        if(state.isCoffeeMakerReady){
            resolve('kopi berhasil dibuat');
        } else{
            reject('mesin pembuat kopi sedang tidak bisa digunakan');
        }
    });
};

const servingToTable = coffee =>{
    return new Promise(resolve =>{
        resolve('pesanan kopi sudah selesai');
    });
};

async function reserveACoffee(type, miligrams){
    try{
        const seeds = await getSeeds(type, miligrams);
        const coffee = await makeCoffee(seeds);
        const result = await servingToTable(coffee);
        console.log(result);
    } catch(rejectionReason){
        console.log(rejectionReason);
    }
}

reserveACoffee('liberica', 80);

// PENERAPAN ASYNC/AWAIT
// async function makeCoffe(){
//     try{
//         const coffee = await getCoffee();
//         console.log(coffee);
//     } catch (rejectedReason){
//         console.log(rejectedReason);
//     }
// }

// makeCoffe();