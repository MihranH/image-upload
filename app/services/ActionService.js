class ActionService {
    static handleAction(type, params, url) {
        switch(type){
            case 'resize':
                this.resize(params, url);
                break;
            case 'crop':
                this.crop(params, url);
                break;
            case 'blur':
                this.blur(params, url);
                break;
            default:
                break;
        }
    }

    static resize(params, url){
        // resize the image
    }

    static crop(params, url){
        // crop the image
    }

    static blur(params, url){
        // blur the image
    }
}

module.exports = ActionService;