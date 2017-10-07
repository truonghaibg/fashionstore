# fashionstore
AngularJS, ReactJS, NodeJS, MongoDB
Auth: jwt

#----------------------------------------
list api
    auth api: /api/auth
        login:          /login      post
        logout:         /logout     get
        register:       /register   post
        get user info:  /me         post
    user api: /api/users
        create user:    /           post
        get all user    /           get
        get user by id  /:id        get
        delete user     /:id        delete
        update user     /:id        put
