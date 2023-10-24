$(document).ready(function () {
    //Highlight words over 8 characters with a yellow background.
    $('#paragraph').html(function (i, text) {
        return text.replace(/\b\w{9,}\b/g, '<span style="background-color: yellow;">$&</span>');
    });
    
    //Add a link back to the source of the text.
    $('#paragraph').after('<a href="https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-job-interview-questions-and-how-great-job-candidates-answer-them.html">Source</a>');

    //Split each sentence on a separate line.
    $('#paragraph').html(function (i, text) {
        return text.replace(/\.\s+/g, '.<br>');
    });

    //Count the number of words and display the count.
    var words = $('#paragraph').text().split(' ').length;
    $('#paragraph').before('<h2>Word Count: ' + words + '</h2>');

    //Replace question marks and exclamation marks with emojis.
    $('#paragraph').html(function (i, text) {
        text = text.replace(/\?/g, '🤔');
        text = text.replace(/!/g, '😲');
        return text;
    });
});
