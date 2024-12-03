export default class LoginController{

    static currentUserData = null;

    static async login(user){
        let response = null;
        try{

            // response = await ...

        }catch (e){
            console.error(e);
        }
        console.log('Email:', user.email, 'Password:', user.password);
        return response;
    }

    static async register(user){
        let response = null;
        try{

            // response = await ...

        }catch (e){
            console.error(e);
        }
        console.log('Email:', user.email, 'Password:', user.password);
        return response;
    }

    static async forgotPassword(email){
        let response = null;
        try{

            // response = await ...

        }catch (e){
            console.error(e);
        }
        console.log('Email:', email);
        return response;
    }

}