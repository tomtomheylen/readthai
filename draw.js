      // Get canvas element and 2D context
      const canvas = document.getElementById('canvasDraw');
      const context = canvas.getContext('2d');

      // Variables to keep track of the drawing state
      let isDrawing = false;
      let lastX = 0;
      let lastY = 0;

     // Variables for the popup
      const popup = document.getElementById('popupDraw');
      const closeButton = document.getElementById('close-buttonDraw');

      // Open the popup and display the canvas and image
      function openPopupDraw() {
        popup.style.display = 'block';

        // Get the computed style of the canvas
        const style = window.getComputedStyle(canvas);

        // Set the canvas size to match its display size
        canvas.width = parseInt(style.width);
        canvas.height = parseInt(style.height);

      }



      // Close the popup and clear the canvas
      function closePopupDraw() {
        popup.style.display = 'none';
        clearCanvas();
      }

      // Event listeners for mouse and touch events
      canvas.addEventListener('mousedown', startDrawing);
      canvas.addEventListener('touchstart', startDrawing);

      canvas.addEventListener('mousemove', draw);
      canvas.addEventListener('touchmove', draw);

      canvas.addEventListener('mouseup', stopDrawing);
      canvas.addEventListener('touchend', stopDrawing);

      // Clear the canvas
      function clearCanvas() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
      }

      // Functions to handle drawing
      function startDrawing(e) {
        e.preventDefault();
        isDrawing = true;
        [lastX, lastY] = getPosition(e);
      }



// Array to store points for smoothing
let points = [];

// Adjust the tolerance value as needed (lower value = smoother lines)
const tolerance = 3;

function draw(e) {
  if (!isDrawing) return;
  e.preventDefault();
  const [x, y] = getPosition(e);

  // Add the current point to the points array
  points.push({ x, y });

  // Set drawing styles
  context.strokeStyle = 'red';
  context.lineWidth = 5;
  context.lineCap = 'round';

  // Draw a line segment between the last two points
  if (points.length >= 2) {
    context.beginPath();
    context.moveTo(points[points.length - 2].x, points[points.length - 2].y);
    context.lineTo(x, y);
    context.stroke();
  }

  // Smooth out the line using curve simplification (Ramer-Douglas-Peucker algorithm)
  if (points.length >= 4) {
    const simplifiedPoints = simplify(points, tolerance);

    context.beginPath();
    context.moveTo(simplifiedPoints[0].x, simplifiedPoints[0].y);

    for (let i = 1; i < simplifiedPoints.length; i++) {
      context.lineTo(simplifiedPoints[i].x, simplifiedPoints[i].y);
    }

    context.stroke();
  }

  [lastX, lastY] = [x, y];
}

// Ramer-Douglas-Peucker algorithm for curve simplification
function simplify(points, tolerance) {
  const firstPoint = points[0];
  const lastPoint = points[points.length - 1];

  const simplifiedPoints = [firstPoint];
  simplifyRecursive(points, 0, points.length - 1, tolerance, simplifiedPoints);
  simplifiedPoints.push(lastPoint);

  return simplifiedPoints;
}

function simplifyRecursive(points, startIndex, endIndex, tolerance, simplifiedPoints) {
  let maxDistance = 0;
  let maxDistanceIndex = 0;

  for (let i = startIndex + 1; i < endIndex; i++) {
    const distance = getPerpendicularDistance(points[i], points[startIndex], points[endIndex]);

    if (distance > maxDistance) {
      maxDistance = distance;
      maxDistanceIndex = i;
    }
  }

  if (maxDistance > tolerance) {
    simplifyRecursive(points, startIndex, maxDistanceIndex, tolerance, simplifiedPoints);
    simplifiedPoints.push(points[maxDistanceIndex]);
    simplifyRecursive(points, maxDistanceIndex, endIndex, tolerance, simplifiedPoints);
  }
}

function getPerpendicularDistance(point, lineStart, lineEnd) {
  const { x: startX, y: startY } = lineStart;
  const { x: endX, y: endY } = lineEnd;
  const { x, y } = point;

  const lineLength = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
  const distance = Math.abs((endX - startX) * (startY - y) - (startX - x) * (endY - startY)) / lineLength;

  return distance;
}



function stopDrawing() {
  isDrawing = false;

  // Clear the points array
  points = [];
}



// Helper function to get the position relative to the canvas
// function getPosition(e) {
//   let x, y;
//   if (e.touches) {
//     // Touch events
//     const touch = e.touches[0];
//     const rect = canvas.getBoundingClientRect();
//     x = touch.clientX - rect.left;
//     y = touch.clientY - rect.top;
//   } else {
//     // Mouse events
//     const rect = canvas.getBoundingClientRect();
//     x = e.clientX - rect.left;
//     y = e.clientY - rect.top;
//   }
//   return [x, y];
// }


function getPosition(e) {
  let x, y;
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;    // relationship bitmap vs. element for X
  const scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for Y
  
  if (e.touches) {
    // Touch events
    const touch = e.touches[0];
    x = (touch.clientX - rect.left) * scaleX;
    y = (touch.clientY - rect.top) * scaleY;
  } else {
    // Mouse events
    x = (e.clientX - rect.left) * scaleX;
    y = (e.clientY - rect.top) * scaleY;
  }
  
  return [x, y];
}


