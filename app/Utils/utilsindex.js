// Author : Eman Shalabi
// Student ID : 301248910

// Export function for collection
export function UserDisplayName(req){
    if(req.user){
        return req.user.displayName;
    }
    return '';
}

// Export function for authentication
export function AuthGuard(req, res, next){
    if(!req.isAuthenticated()){
        return res.redirect('/login')
    }
    next();
}