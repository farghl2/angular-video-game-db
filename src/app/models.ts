export interface Game{
  id:number,
  background_image:string,
  name:string,
  released:string,
  metacritic_url:string,
  website:string,
  description:string,
  metacritic:number;
  genres:Array<Genre>;
  parent_platforms:Array<ParantPlatforms>;
  publishers:Array<Publishers>;
  rating:Array<Rating>;
  screenshots:Array<ScreenShots>;
  trailers:Array<Trailer>;
}


export interface APIResponse<T> {
  results:Array<T>
}

interface Genre {
  name:string;
}

interface ParantPlatforms {
  platform:{
    slug:string;

  }

}

interface Publishers {
  name:string;
}

interface Rating {
  id:number;
  count:number;
  title:string;
}

interface ScreenShots {
  image:string;
}

interface Trailer {
  data: {
    max:string;
  };
}
