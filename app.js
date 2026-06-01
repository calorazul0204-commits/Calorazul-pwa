const phone='351917579808';
const form=document.getElementById('serviceForm');
form?.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const msg=`Olá CALORAZUL, quero pedir assistência técnica.%0A%0ANome: ${d.get('nome')}%0ATelefone: ${d.get('telefone')}%0AMorada: ${d.get('morada')}%0AEquipamento: ${d.get('equipamento')}%0ADescrição: ${d.get('descricao')}`;window.location.href=`https://wa.me/${phone}?text=${msg}`});
if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js')}
let deferredPrompt;const btn=document.getElementById('installBtn');
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;btn.hidden=false});
btn?.addEventListener('click',async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;btn.hidden=true});
