const historical_places = {
  "Taj Mahal":
    "https://assets-news.housing.com/news/wp-content/uploads/2022/07/20204648/10-famous-historical-places-in-India-04.jpg",
  "Qutub Minar":
    "https://assets-news.housing.com/news/wp-content/uploads/2022/07/20204731/10-famous-historical-places-in-India-05.jpg",
  "Amer Fort":
    "https://assets-news.housing.com/news/wp-content/uploads/2022/07/20204813/10-famous-historical-places-in-India-06.jpg",
  "Ajanta and Ellora Caves":
    "https://assets-news.housing.com/news/wp-content/uploads/2022/07/20204931/10-famous-historical-places-in-India-08.jpg",
  "Konark Temple":
    "https://assets-news.housing.com/news/wp-content/uploads/2022/07/20205049/10-famous-historical-places-in-India-10.jpg",
  "Sanchi Stupa":
    "https://assets-news.housing.com/news/wp-content/uploads/2022/07/20205240/10-famous-historical-places-in-India-12.jpg",
  "Gateway of India":
    "https://assets-news.housing.com/news/wp-content/uploads/2022/07/20205359/10-famous-historical-places-in-India-14.jpg",
  "Monuments in Hampi":
    "https://assets-news.housing.com/news/wp-content/uploads/2022/07/20205526/10-famous-historical-places-in-India-16.jpg",
};
const e= document.getElementById("e") 
Object.entries(historical_places).map(([a, s]) => {
  var img = document.createElement("img");
  var des = document.createElement("h3");
  des.innerText= a
  img.src = `${s}`;
  e.appendChild(img);
  e.appendChild(des);
});
