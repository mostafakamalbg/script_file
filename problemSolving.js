/***********************************************
                   problem-1
**********************************************/
// let numbers=[4,2,7,1,8];
// let smallestNumber=numbers[0];
// for(let i=1; i<numbers.length; i++){
//     if(numbers[i]<smallestNumber){
//         smallestNumber=numbers[i];
//     }
// }
// console.log(smallestNumber);

/***********************************************
                   problem-2
**********************************************/
// let numbers=[1,2,3,4,5];
// let largestNumber=numbers[0];
// for(let i=1; i<numbers.length; i++){
//     if(numbers[i]>largestNumber){
//         largestNumber=numbers[i];
//     }
// }
// console.log(largestNumber);

/***********************************************
                   problem-3
**********************************************/

// let numbers=[1,2,3,4,5];
// let sum=0;
// for(let i=0; i<numbers.length; i++){
//     sum+=numbers[i];
// }
// console.log(sum);
/***********************************************
                   problem-4
**********************************************/
// const strings = ['hello','world','food','eating' ];
//     const firstLetters = [ ];
//     for(let i=0; i<strings.length; i++){
//         firstLetters.push(strings[i][0]);
//     }
//     console.log(firstLetters);
/***********************************************
                   problem-5
**********************************************/
// const numbers = [1,2,3,4,5, ];
//     const evens = [ ];
//     for(let i=0; i<numbers.length; i++){
//         if(numbers[i]%2===0){
//             evens.push(numbers[i]);  
//         }
//     }
//     console.log(evens);   
/***********************************************
                   problem-6
**********************************************/
// const strings = ['hello','world','food','eating' ];
//     const longerString = strings[ 0];
//     for(let i=1; i<strings.length; i++){
//         if(strings.length>longerString.length){
//            longerString=strings[1];
//             }
//     }
//     console.log(longerString);

/***********************************************
                   problem-7
**********************************************/
// const numbers=[1,2,3,4,5,6,];
// let sum=0;
// for(let i=0; i<numbers.length; i++){
//     sum+=numbers[i];
// }
// const average=sum/numbers.length;
// console.log(average);
/***********************************************
                   problem-8
**********************************************/
// const strings = ['hello','world','food','eating' ];
// console.log(strings.sort()); //alpha betiCal sajano hoy

//  const strings = [1,2,3,4,5,6,7,8,9,10 ];
//  console.log(strings.sort()); //chrome anusare  sajano hoy
/***********************************************
                   problem-9
**********************************************/
//  const numbers = [1,2,3,2,4,3 ];
//  const uniqNumbers = [...new Set(numbers)];
//  console.log(uniqNumbers); 
/***********************************************
                   problem-10
**********************************************/
//  const numbers = [2,7,11,15];
//  const target = 9;
//  for (let i=0; i<numbers.length; i++){
//     for(let j=i+1; j<numbers.length; i++){
//         if(numbers[i]+numbers[j]===target){
//             console.log(numbers[i],numbers[j]); 
//         }
//     }
//  }
/***********************************************
                   problem-11
**********************************************/
// const menuItems=[
//     {name:"burger", price:5.99},
//     {name:"fries", price:2.99},
//     {name:"soda", price:1.99},
//     {name:"pizza", price:10.99},
// ]
// menuItems.sort((a,b)=> a.price - b.price);
// console.log(menuItems);
/***********************************************
                   problem-12
**********************************************/
// const userPosts=[
//     "just went for a #run #fitness",
//     "enjoying the  #weekend #friends",
//     "can't wait for the #vacation #beach",
// ];
// const hashtags=new Set();
// for( let post of userPosts){
//     const words=post.split(" ");
//     for(let word of words){
//       if(word.startsWith("#")){
//         hashtags.add(word.slice(1));
//       }  
//     }
// }
// console.log(hashtags); //out put Set(6) { 'run', 'fitness', 'weekend', 'friends', 'vacation', 'beach' }

/***********************************************
                   problem-13
**********************************************/
// const temperatures=[12,25,8,19,3];
// const formettedTemperatures=temperatures.map((temp)=>{
//     const fahrenheit=temp*1.8+32;
//     return `${temp}°C(${fahrenheit.toFixed(1)}°F)`;
// });
// console.log(formettedTemperatures); //output ['12°C(53.6°F)','25°C(77.0°F)','8°C(46.4°F)','19°C(66.2°F)','3°C(37.4°F)' ]

/***********************************************
                   problem-14
**********************************************/
// const videos=[
//     {
//         id:"abc123",
//         title:"how to code a react app",
//         views:1000,
//         likes:50,
//         Comments:[
//             {id:"c1", text:"great tutorial"},
//             {id:"c2", text:"thanks for sheraning"},
//         ]

//     },
//     {
//         id:"def456",
//         title:"building a rest appi with node.js",
//         views:500,
//         likes:25,
//         Comments:[
//             {id:"c3", text:" very helpfull thanks"},
//             {id:"c4", text:"can't wait to try this out"},
// //         ]

//             }
//         ]; //------------------views count--------------------------------
//         function incrementViewCount(videoId){
//             const video=videos.find((v)=>v.id===videoId);
//             videos.views+=1;
//             console.log(`view count for video ${videoId}:${videos.views}`);
//         }//----------------------comment-------------
//         function addComment(videoId,comment){
//             const video=videos.find((v)=>v.id===videoId);
//             video.comment.push(comment);
//             console.log(`view count for video ${videoId}:,${videos.Comments}`);
//         }
//         incrementViewCount();
//         addComment("def456", {id:"c4", text:"this is the problem"});

/***********************************************
                   problem-15
**********************************************/
// // initialize object to track reactions
//         const posts = [
//             {
//                 id:"_1",
//                 author:"Mostafa Kamal",
//                 content:"javaScript 100 Basic Problems! ",
//                 reactions:{
//                 like: 50,
//                 love: 20,
//                 haha: 5,
//                 wow: 2,
//                 sad: 1,
//                 angry: 0,
//                 },
//             },
//             {
//                 id:"_2",
//                 author:"BGSM",
//                 content:"just finished my first hack! ",
//                 reactions:{
//                 like: 100,
//                 love: 75,
//                 haha: 10,
//                 wow: 3,
//                 sad: 0,
//                 angry:1,
//                 },
//             },
//         ];
//         // function increment reactions------for a post---
//         function increamentReactionCount(postId, reactionType) {
//                 post=posts.find((p) => p.id === postId);
//                 post.reactions[reactionType] +=1;
//                 console.log(` increamented ${reactionType} reaction count for post ${postId}`);
//         }
//         // ---increamentReactionCount-----
//         increamentReactionCount("_1","like"); //increament like reaction count---
//         increamentReactionCount("_2","haha"); //increament haha reaction count---
//          console.log(posts);
/***********************************************
                   problem-16
**********************************************/
//             const purchases=[1,2,3,4,5,1,3,5,6,7,2,4,8,9,9];
//             const target=10;
//             const pairs=[];
//             for (let i=0; i<purchases.length; i++){
//                 for(let j=i+1; j<purchases.length; j++){
//                     if(purchases[i]+purchases[j]===target){
//                         pairs.push([purchases[i],purchases[j]]);
//                     }
//                 }
//             }
//             console.log(pairs);
/***********************************************
                   problem-17
**********************************************/
//             const ingredients=[
//                 {name:"dough", inventory: 10 },
//                 {name:"tomato sauce", inventory: 8 },
//                 {name:"mozzalella chees", inventory: 6 },
//                 {name:"pepper oni", inventory: 4 },
//                 {name:"mushrooms", inventory: 3 },
//             ];
//             function updateInventory(name, quantity) {
//                   const  ingredient=ingredients.find((i) => i.name === name);
//                     if(ingredient){
//                         ingredient.inventory -=quantity;//this paramiter push and minus figure
//                         console.log(`inventory update for ${name}: ${ingredient.inventory} remaining`);
//                     }else{
//                         console.log(
//                             `ingredient ${name}: not found`);
//                     }
//             }
//             updateInventory("dough",2); //this paramiter push and minus figure
//             updateInventory("tomato sauce",3);
//             updateInventory("mushrooms",1);
/***********************************************
                   problem-18
**********************************************/
//             const products=[
//                 {name:"iphone 13", price: 999 },
//                 {name:"pixel 6", price: 749 },
//                 {name:"Galaxy S21", price: 699 },
//                 {name:"oneplus 9pro ", price: 969 },
//             ];
//             //sort product by price lowest rto highest---
//             products.sort((a,b)=>a.price-b.price);
//             console.log(products);
//result it-----execellent result
//             // [
//             //     { name: 'Galaxy S21', price: 699 },
//             //     { name: 'pixel 6', price: 749 },
//             //     { name: 'oneplus 9pro ', price: 969 },
//             //     { name: 'iphone 13', price: 999 }
//             //   ]
/***********************************************
                   problem-19
// **********************************************/
//             const people=[
//                 {name:"abul hosen", age: 25 },
//                 {name:"kalam", age: 17 },
//                 {name:"mokbul", age: 21 },
//                 {name:"zamil", age: 14 },
//             ];
//             // const adults=people.filter(person=>person.age>=18);// awesome sob filter function---and condition---
//             const adults=people.filter(person=>person.age<=18);
//             console.log(adults);
// // awesome sob filter function---and condition
 /***********************************************
                   problem-20
  **********************************************/
//             const product=[
//                 {name:"iphone", price: 999 },
//                 {name:"macBook", price: 1499 },
//                 {name:"airPods", price: 249 },
//                 {name:"iTabprice", price: 499 },
//             ];
//             const currencyExcengeRate=0.85;
//             const currencySymbol='€';
//             const productInEuros= product.map(product =>({
//                 name:product.name,
//                 price:product.price*currencyExcengeRate,
//                 formattedPrice:`${currencySymbol}${(product.price*currencyExcengeRate).toFixed(2)}`
//             }));
//             console.log(productInEuros);
/***********************************************
       End all problem/date :08.04.2023
// **********************************************/