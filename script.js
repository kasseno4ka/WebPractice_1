$(document).ready(function() {
    const paragraph = $("#paragraph");

    //Highlight words over 8 characters
    const words = paragraph.text().split(/\s+/);
    words.forEach(function(word) {
        if (word.length > 8) {
            paragraph.html(paragraph.html().replace(word, '<span style="background-color: yellow;">' + word + '</span>'));
        }
    });

    //Split each sentence onto separate lines
    const sentences = paragraph.text().split(/\.\s+/);
    paragraph.html("");
    sentences.forEach(function(sentence) {
        paragraph.append(sentence + ".<br>");
    });

    //Count the number of words and display the count
    const wordCount = paragraph.text().split(/\s+/).length;
    $("h1").append(` ${wordCount} words`);

    //Replace question marks and exclamation marks
    const newText = paragraph.text().replace(/\?/g, "🤔").replace(/!/g, "😲");
    paragraph.text(newText);
});
