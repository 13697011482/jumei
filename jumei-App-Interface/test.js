var infos='haha'
var axios=require('axios')
var HotMovieModel=require('./model/before/hotMovie');
var PreMovieModel=require('./model/before/preMovie');
var CinemaModel=require('./model/before/cinema');
var HotDetailModel=require('./model/before/hotDetail');
var PreDetailModel=require('./model/before/preDetail');



// 热映电影的影片详情
// axios.get('https://movie.miguvideo.com/mgw/program4mv/v1/cont/content-info/692183542').then((res)=>{
//     var movieList=res.data.body.data;
//     var movies={
//         actor:movieList.actor,
//         area:movieList.area,
//         director:movieList.director,
//         contentStyle:movieList.contentStyle,
//         detail:movieList.detail,
//         name:movieList.name,
//         score:movieList.score,
//         movieImg:movieList.pics.lowResolutionV,
//         filmId:movieList.filmId,
//         showTime:movieList.showTime,
//         movieStills:movieList.movieStills,
//         showLength:movieList.showLength,
//         keywords:movieList.KEYWORDS,
//         showTimeDesc:movieList.showTimeDesc,
//         isplay:1,
//         playUrl:'https://vod.pipi.cn/fec9203cvodtransbj1251246104/657560575285890809034337987/v.f42906.mp4',
//         backImg:''
//     }
//     console.log(movies);
//     //  infos=movies;
//     HotDetailModel(movies).save().then((info)=>{
//         // console.log(movies);
//         if(info){
//             console.log('添加影片成功');
//         }else{
//             console.log('添加影片失败');
//         }
//     }).catch((err)=>{
//         console.log(err);
//     })
// })
// 即将上映电影详情
axios.get('https://movie.miguvideo.com/mgw/program4mv/v1/cont/content-info/682216713').then((res)=>{
    var movieList=res.data.body.data;
    var movies={
        actor:movieList.actor,
        area:movieList.area,
        director:movieList.director,
        contentStyle:movieList.contentStyle,
        detail:movieList.detail,
        name:movieList.name,
        score:movieList.score,
        movieImg:movieList.pics.lowResolutionV,
        filmId:movieList.assetID,
        showTime:movieList.showTime,
        movieStills:movieList.movieStills,
        showLength:movieList.showLength,
        keywords:movieList.KEYWORDS,
        showTimeDesc:movieList.showTimeDesc,
        isplay:0,
        playUrl:'',
        backImg:'movieList.pics.lowResolutionV'
    }
    console.log(movies);
    //  infos=movies;
    PreDetailModel(movies).save().then((info)=>{
        // console.log(movies);
        if(info){
            console.log('添加影片成功');
        }else{
            console.log('添加影片失败');
        }
    }).catch((err)=>{
        console.log(err);
    })
})


// 即将上映电影数据
// axios.get('https://movie.miguvideo.com/mgw/bsdata4mv/v2/movieListPreview?pageNo=3&pageSize=10').then((res)=>{
//     preMovies=res.data.body.movieList;
//     console.log(preMovies);
//     preMovies.forEach(item=>{
//         // console.log(item);
//         var MovieList={
//             filmId:item.assetID,
//             filmName:item.filmName,
//             director:item.director,
//             actor:item.actor,
//             openingDate:item.openingDate,
//             movieImg:item.pics.lowResolutionV,
//             seeNumber:item.num,
//             isPreSale:item.isPreSale
//         }
//         PreMovieModel(MovieList).save().then((info)=>{
//          if(info){
//             console.log('添加影片成功');
//         }else{
//             console.log('添加影片失败');

//         }

//         })
//     })

// })
// 影院的详情
// axios.get('https://movie.miguvideo.com/mgw/bsdata4mv/v1/validCinemaList/4900?pageNum=0&pageSize=20&regionId=&investmentName=&feature=&showDate=&filmId=&orderType=1&longitude=114.02597366&latitude=22.54605355&cinemaCompany=&searchDate=&businessCenterName=').then((res)=>{
//     var cinema=res.data.body.cinemaes;
//     // console.log(cinema);
//     cinema.forEach(item=>{
//         var cinemaList={
//             cinemaId:item.cinemaId,
//             cinemaName:item.cinemaName,
//             accessorId:item.accessorId,
//             cinemaAdd:item.cinemaAdd,
//             cinemaTel:item.cinemaTel,
//             distance:item.distance,
//             longitude:item.longitude,
//             latitude:item.latitude,
//             provinceName:item.provinceName,
//             cinemaCompany:item.cinemaCompany,
//             systemProviders:item.systemProviders,
//             cinemaScore:item.cinemaScore,
//             specialHall:item.specialHall,
//             sale:item.sale,
//             glasses3D:item.glasses3D,
//             childrenDiscount:item.childrenDiscount,
//             parkingInfo:item.parkingInfo,
//             wifi:item.wifi,
//             lowestTicketPrice:item.lowestTicketPrice,
//             businessCenter:item.businessCenter,
//             cinemaInvestmentName:item.cinemaInvestmentName,
//             allowCard:item.allowCard,
//             showTimeList:item.showTimeList,
//             cinemaId:item.cinemaId,
//             collections:item.collection,

//         }
//         // console.log(cinemaList);
//         CinemaModel(cinemaList).save().then((info)=>{
//          if(info){
//             console.log('添加影片成功');
//         }else{
//             console.log('添加影片失败');

//         }

//         })
//     })
// })

// 热映电影的影片详情
// axios.get('https://movie.miguvideo.com/mgw/bsdata4mv/v2/movieListShow/4900').then((res)=>{
//     var movieList=res.data.body.movieList;
//     var movies= movieList.filter((item,index)=>{
//         return index>=14  
//     })
//     // console.log(movies);
//     movies.forEach(item=>{
//         // console.log(item);
//         var list={
//             filmId:item.filmId,
//             filmName:item.filmName,
//             actor:item.actor,
//             director:item.director,
//             topicName:"",
//             movieImg:item.pics.lowResolutionV,
//             score:item.score
//         }
//         console.log(list);
//          HotMovieModel(list).save().then((info)=>{
//         if(info){
//             console.log('添加影片成功');
//         }else{
//             console.log('添加影片失败');
//         }
//     })
//     })
// })
module.exports={infos}





