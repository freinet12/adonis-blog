'use strict'

const Post = use('App/Models/Post');

class HomeController {
    async index({view}) {

        const posts = await Post.all();
        return view.render('home', {
            posts: posts.toJSON()
        });
    }
}

module.exports = HomeController
