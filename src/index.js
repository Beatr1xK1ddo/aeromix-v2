import Post from '@js/Post'
import '@css/index.css'
import logo from '@img/navbar'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'


const newPost = new Post('this is new post!!', logo)
console.log(newPost.toStrting())

