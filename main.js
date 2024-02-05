const img1 = 'https://res.cloudinary.com/dddvuoz7c/image/upload/v1704393391/2_ikwc5m.png';
        const img2 = 'https://res.cloudinary.com/dddvuoz7c/image/upload/v1706734607/Texto_do_seu_par%C3%A1grafo_lqab7k.png';
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        const frames = [img1, img2];
    
        let currentFrame = 0;
    
        function drawFrame() {
          const img = new Image();
          img.src = frames[currentFrame];
          img.onload = function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    
            // Increment the frame index
            currentFrame = (currentFrame + 1) % frames.length;
    
            // Schedule the next frame
            setTimeout(drawFrame, 1300); // 100 milliseconds delay between frames
          };
        }
    
        // Start the animation
        drawFrame();
