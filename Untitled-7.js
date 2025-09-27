// ...existing code...
document.addEventListener('DOMContentLoaded',()=>{

  // video play -> open modal, play fullscreen-like
  const modal = document.getElementById('video-modal');
  const modalVideo = document.getElementById('modal-video');
  const closeBtn = document.getElementById('video-close');

  document.querySelectorAll('.play-video').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const src = btn.dataset.src;
      if(!src) return;
      modalVideo.src = src;
      modal.style.display = 'flex';
      modalVideo.play().catch(()=>{});
      // attempt fullscreen
      const req = modalVideo.requestFullscreen || modalVideo.webkitRequestFullscreen || modalVideo.msRequestFullscreen;
      if(req) req.call(modalVideo).catch(()=>{});
    });
  });

  closeBtn?.addEventListener('click',()=>{
    if(document.fullscreenElement){
      document.exitFullscreen().catch(()=>{});
    }
    modalVideo.pause();
    modalVideo.src = '';
    modal.style.display = 'none';
  });

  // keyboard ESC closes modal
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape' && modal.style.display==='flex'){
      closeBtn?.click();
    }
  });
});
// ...existing code...