// Promise: Best video on promises
// -resolve
// -reject
// -pending

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = false;
            if (!error) {
                console.log('Function: Your promise has been resolved')
                resolve();
            }
            else {
                console.log(' Your promise has not been resolved')
                reject('Sorry not fulfilled');
            }
        }, 2000);
    })
}
func1().then(function(){console.log("Thanks Soham Bro")}).catch(function(error){console.log("Very Bad Bro. Reason:"+error)})
