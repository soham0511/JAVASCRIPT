let name="Soham"
let greetings="Good Morning";
console.log(name+' '+greetings)

let html;
html='<h1> this is heading </h1>'+
      '<p>this is my para</p1>'
      console.log(html);
      // html=html.concat('this','str2');
      // console.log(html);
      // console.log(html.toUpperCase());
      // console.log(html[6]);
      // console.log(html.indexOf('this'))
      // console.log(html.lastIndexOf('this'))
      // console.log(html.charAt(3))
      // console.log(html.endsWith('</p1>'))
      // console.log(html.endsWith('wwq'))
      // console.log(html.includes(' this'))
      // console.log(html.includes(' webk'))
      // console.log(html.substring(0,6))
      // console.log(html.slice(-2))
      // console.log(html.slice(0,2))
      // console.log(html.split(' '))
      // console.log(html.replace('this','it'))
let fruit1='orange'
let fruit2='apple'
let   myhtml=`Hello${name}
     <h1> This is heading</h1>
     <p>You like ${fruit1} and ${fruit2}`;

     document.body.innerHTML=myhtml;      
