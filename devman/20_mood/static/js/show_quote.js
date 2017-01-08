$(function() {
    var quotes_json = JSON.parse($("#quotes_json").html());
    var phrase_id = Math.floor(Math.random() * quotes_json.length);
    $('.phrase').text(quotes_json[phrase_id].phrase);
    $('.signature').text(quotes_json[phrase_id].signature || '');
});
