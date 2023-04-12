fetch('https://test20230315-aaas.onrender.com/data')
      .then(response => response.json())
      .then(json => console.log(json))