// Replace YOUR_API_KEY with your actual API key
var apiKey = 'AIzaSyACEeMkAF2kq1w14nCFttKZBKVUrY9C3NE';

// The target language code
var targetLanguage = 'fr'; // French

// Function to translate the text using the Translation API
function translateText(text, callback) {
  // Make an AJAX request to the Translation API
  $.ajax({
    url: 'https://translation.googleapis.com/language/translate/v2?key=' + apiKey,
    type: 'POST',
    data: {
      q: text,
      target: targetLanguage
    },
    dataType: 'json',
    success: function(response) {
      // Handle the response
      var translatedText = response.data.translations[0].translatedText;
      callback(null, translatedText);
    },
    error: function(error) {
      callback(error);
    }
  });
}

// Function to translate the entire web page
function translatePage() {
  // Get all text elements in the web page
  var elements = document.querySelectorAll('body *:not(script)');
  
  // Translate each text element
  elements.forEach(function(element) {
    var text = element.textContent;
    
    // Skip empty elements
    if (text.trim() !== '') {
      translateText(text, function(err, translatedText) {
        if (!err) {
          element.textContent = translatedText;
        } else {
          console.log('Error translating text:', err);
        }
      });
    }
  });
}

// Run the translation function when the page finishes loading
window.addEventListener('load', translatePage);
