document.getElementById('downloadBtn').addEventListener('click', function() {
  var url = document.getElementById('url').value;
  fetch('http://localhost:5000/download', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'url=' + encodeURIComponent(url)
  }).then(response => response.blob())
    .then(blob => {
      var link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'video.mp4';
      link.click();
    });
});
