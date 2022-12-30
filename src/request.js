const key='821f7c0663a70d3605f5a7f2504c4f69';

const requests={
    requestToprated:` https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestPopular:` https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestUpcoming:` https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestlatest:`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=action&page=1&include_adult=false`,
    requesthorror:`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
    

}
export default requests;