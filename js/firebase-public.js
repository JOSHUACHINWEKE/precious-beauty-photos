// Enhances the existing static site with published Firebase content.
// The original local images remain in place; Firebase items are appended.
import {firebaseConfig,configured} from './firebase-config.js';
if(configured){
  const {initializeApp}=await import('https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js');
  const {getFirestore,collection,getDocs,doc,getDoc,query,where}=await import('https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js');
  const app=initializeApp(firebaseConfig),db=getFirestore(app);
  try{
    const [photos,services,booking]=await Promise.all([getDocs(query(collection(db,'portfolio'),where('published','==',true))),getDocs(query(collection(db,'services'),where('published','==',true))),getDoc(doc(db,'settings','booking'))]);
    services.forEach(s=>{const v=s.data();if(v.published===true&&typeof SITE_CONFIG!=='undefined')SITE_CONFIG.servicePrices[s.id]=v.price??null;});
    if(booking.exists()&&typeof booking.data().url==='string'&&/^https:\/\//.test(booking.data().url)&&typeof SITE_CONFIG!=='undefined')SITE_CONFIG.bookingUrl=booking.data().url;
    const grid=document.getElementById('portfolioGrid');
    if(grid){let n=0;photos.forEach(s=>{const v=s.data();if(v.published!==true||v.type!=='image'||typeof v.url!=='string'||!/^https:\/\//.test(v.url))return;const card=document.createElement('div');card.className='frame g-square';card.dataset.cat=v.category||'portrait';const img=document.createElement('img');img.className='frame-photo';img.src=v.url;img.alt=v.title||'Photography portfolio';img.loading='lazy';const cap=document.createElement('div');cap.className='cap';const title=document.createElement('b');title.textContent=v.title||'Photography';cap.append(title);card.append(img,cap);grid.append(card);n++;});if(n){const el=document.getElementById('portfolioCount');if(el)el.textContent=`${grid.querySelectorAll('.frame').length} projects in the collection.`;}}
  }catch(err){console.warn('Firebase content not loaded:',err.message);}
}
