const axios     = require('axios').default;
const DOMParser = require('dom-parser');

function bob() {
    return new Promise((resolve, reject) => {
        axios.get('https://www.bobdylan.com/songs/')
            .then(res => {
                const parser = new DOMParser();
                const dom = parser.parseFromString(res.data);
                console.log(dom);
                let song     = dom.getElementsByClassName('.line_detail');
                // querySelectorAll('.line_detail')

                console.log("HI: ", song);
                resolve(res);
            })
            .catch(err => {
                console.log("BOB error: ", err);
                reject(err);
            })      
    })
}

module.exports = { bob }