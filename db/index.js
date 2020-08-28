const { Post } = require('./models/post');
const { seed } = require('./seed');

module.exports = { 
    async createPost(seed) {
        try {
        
            const result = await Post.create(post);
            console.log(result);
        } catch (err) {
            console.log(err);
        }
    }    
}