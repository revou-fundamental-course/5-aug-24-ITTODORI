document.querySelectorAll('.nav-tabs li').forEach((item) => {
    item.addEventListener('click', function(event){
        event.preventDefault(); // Untuk mencegah scroll ke top
  
        let lastActive = document.querySelector('.nav-tabs li.active');
        let newActive = this;
        
        if (lastActive !== newActive) {
            lastActive.classList.remove('active');
            newActive.classList.add('active');
  
            let lastActiveContent = document.querySelector('.content-tabs .tab.active');
            let newActiveContent = document.querySelector(newActive.querySelector('a').getAttribute('href'));
            
            if (lastActiveContent) {
                lastActiveContent.classList.remove('active');
            }
            if (newActiveContent) {
                newActiveContent.classList.add('active');
            }
        }
    });
  });
  