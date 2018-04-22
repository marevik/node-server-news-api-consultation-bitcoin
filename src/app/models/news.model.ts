export class News{
    title:string;
    description:string;
    urlToImage: string;

    constructor(title, description, urlToImage){
        this.title= title;
        this.description= description;
        this.urlToImage= urlToImage;
    }
}