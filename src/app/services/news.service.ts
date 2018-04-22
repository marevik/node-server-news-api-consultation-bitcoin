import { Http, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
@Injectable()
export class NewsService{
    
    private endpoints = environment.local;
    constructor(private http : Http){
        
    }

    addHeaders(headers: Headers){
        // headers.append('Accept', 'application/json');
        // headers.append('Acces-Control-Allow-Origin','*')
    }

    getNews(){
        let headers = new Headers();
        this.addHeaders(headers);
        return this.http.get(this.endpoints.news,{headers : headers});
    }

    saveNews(news){
        let headers = new Headers();
        this.addHeaders(headers);
        return this.http.post(this.endpoints.saveNews,news,{headers:headers});
    }


}