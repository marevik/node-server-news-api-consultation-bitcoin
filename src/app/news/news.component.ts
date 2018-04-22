import { Component, OnInit } from '@angular/core';
import { News } from '../models/news.model';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  arrayNews: News[]=[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getNews();
  }


  getNews(){
      this.newsService.getNews().subscribe(
        res =>{
          let array: any[]= res.json().articles;
          // console.log(array);
          let article: News;
          for (let el of array){
            article= new News(el.title, el.description, el.urlToImage) 
            console.log(article);
            this.arrayNews.push(article);
          }
        }
      )
  }


  saveArticle(article){
    console.log(article);
    this.newsService.saveNews(article).subscribe(
      res=>{
        alert("Articles was saved");
      }
    )
  }

}
