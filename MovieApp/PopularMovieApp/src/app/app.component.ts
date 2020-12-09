import { Component } from '@angular/core';
import { HttpservicesService } from './Services/httpservices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PopularMovieApp';
  public movies:any;
  searchTerm:any;
  orignalList:any;
  isShown=true;
  constructor(private httpService: HttpservicesService){}

  ngOnInit(): void {
  this.getMovies();
   
  }
 
  serchByTitleAttribute(event) {   
    if(event.length >= 3) 
    {
 
      this.movies =this.orignalList.filter(element => element.title.trim().toLowerCase().includes(event.trim().toLowerCase() ) );//as Movie[];
   if(this.movies.length==0)
   {
     this.isShown=false;
   }
    }
    else
    {
      this.isShown=true;
      this.movies =this.orignalList.slice(0, 30);;
    }
   }
  
   SortData(value:string)
   {
debugger;
if(value="sortByYearDescending")
{
//this.movies=this.orignalList.sort((a,b) => 0 - (a.releaseYear> b.releaseYear ? -1 : 1)).slice(0, 30);

this.movies=this.orignalList.filter(item => typeof item["releaseYear"] === 'number').sort((a, b) => a["releaseYear"] - b["releaseYear"]);
      // stringArray = value
      //   .filter(item => typeof item["releaseYear"] === 'string')
      //   .sort((a, b) => {
      //     if (a[sortKey] < b[sortKey]) return -1;
      //     else if (a[sortKey] > b[sortKey]) return 1;
      //     else return 0;
      //   });


}
else if(value="sortByYearAscending")
{
// Ascending
this.movies=this.orignalList.sort((a,b) => 0 - (a.releaseYear> b.releaseYear ? -1 : 1)).slice(0, 30);
}
else if(value="sortByTitleDescending")
{
  // Descending
  this.movies=this.orignalList.sort((a,b) => 0 - (a.title> b.title ? -1 : 1)).slice(0, 30);
}
 else if(value="sortByTitleAscending")
{
   // Ascending
   this.movies=this.orignalList.sort((a,b) => 0 - (a.title> b.title ? -1 : 1)).slice(0, 30);
}
else
{
  this.movies=this.orignalList
}
   }


   public getMovies = () => {
    let route: string = 'http://localhost:55478/api/Movies';
    this.httpService.getData(route)
    .subscribe((result) => {
      var response=result["entries"].filter(element => element.releaseYear >= 2010);
      this.orignalList=response;
      this.movies = response.slice(0, 30);
    
    },
    (error) => {
      console.error(error);
    });
  }
}


