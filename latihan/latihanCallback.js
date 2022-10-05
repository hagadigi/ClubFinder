//callback function

const getCake = callback => {
    let cake = null;
    console.log('Sedang membuat kue, silahkan menunggu...');

    setTimeout(() => {
        cake = 'kue selesai dibuat!';
        callback(cake);
    }, 3000);
}

getCake(cake =>{
    console.log(cake);
});