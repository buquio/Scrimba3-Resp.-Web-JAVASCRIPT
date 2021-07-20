
// xxxx FOR ALL CODE BELOW REFER TO DOM.html, copy and paste code into script-tag & VIEW IN CONSOLE-BROWSER

 //1
 const el = document.getElementById('home')
 console.log(el)
 // ans:<a href="/" id="home">
 
   //2
   const links = document.querySelectorAll('a');
 console.log(links);
 // ans:	<NodeList length="3"></NodeList>

 //3
   const links = document.querySelectorAll('a');
     links.forEach(link => {
      console.log(link);  
 })
 // ans:<a href="/" id="home">
 // ><a href="/login">
 // ><a href="/signup">
 //4
 const links = document.querySelectorAll('a');
     links.forEach(link => { //from all the links, find a link.
        link.matches('a[href="/login"]') //returns true 
           console.log(link);  
 //or
   if (link.matches('a[href="/login"]')) {//if the link matches a[href="/login
     const loginLink = link; //store the link in a const loginLink
     console.log(loginLink);   //log it out.
   }
 })
 //	5 no more in use
 const divs = document.getElementsByTagName('div')
  console.log(divs);
 
 //6
 const newPost = document.createElement('div');
 newPost.className = 'top-post';
 newPost.innerHTML = "<strong>This is a new post</strong>"
 
 document.body.append(newPost);
 document.body.prepend(newPost);
     
 //7 to set the newPost above the 1st post
 const post = document.querySelector('.post');
 post.prepend(newPost);
 
 
 //8 xxx apply to all class post
 const post = document.querySelector(".post");
 post.style.backgroundColor = 'orange';
 
 // 9
 const post = document.querySelector(".post");
  post.style.margin = '30px';
 post.classList.toggle('post');
 // or 
 post.classList.add('post');
     
 // 10 only apply to the first class post
 const post = document.querySelector(".post");
 post.addEventListener('click', event => {
   console.log(event.target);
 //    or
   console.log('Do you want to edit this post?')
 });
      
 //11 to apply to all post you can't use querySelectorAll,then posts.addeventlistner.
 const posts = document.querySelectorAll(".post");
 posts.forEach(post => {  
   post.addEventListener('click', event => {
   //   console.log(event.target);  
     console.log('Do you want to edit this post?')
   });
 })
 
 //12 you can do the above by adding eventlistener to the whole body-document, therefore
//  clicking any where on a post but not ok becos it aplly to all the body not post,you then add if statement.
 document.body.addEventListener('click', event => { 
     if (!event.target.closest('.post')) return;
   
   console.log('Do you want to edit this post?')  
 })
 
 // 13 clicking any where on the textcontent of a body not just the post
 document.body.addEventListener('click', event => {
  console.log('event.target.textcontent')
 })
 
 // 14using mouseover 
 document.body.addEventListener('mouseover', event => {
   if (!event.target.closest('.post')) return;
   
   console.log('Do you want to edit this post?')  
 })        