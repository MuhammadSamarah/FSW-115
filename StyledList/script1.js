var code = [
    {
       "title":"molestiae",
       "issue_url":"http://braunhilpert.org/hardy",
       "repo_name":"fugiat",
       "body":"Velit dicta ratione maxime rerum qui aut neque.",
       "created_at":"2013-11-25T17:47:32.249Z"
    },
    {
       "title":"eveniet",
       "issue_url":"http://jacobshagenes.name/alba_hintz",
       "repo_name":"maiores",
       "body":"Assumenda quo veritatis non vero fugiat voluptatem rerum.",
       "created_at":"2013-11-26T17:47:32.244Z"
    },
    {
       "title":"et",
       "issue_url":"http://hane.info/dameon",
       "repo_name":"ipsam",
       "body":"Omnis temporibus quia nobis quia labore officiis.",
       "created_at":"2013-11-27T17:47:32.239Z"
    },
    {
       "title":"eos",
       "issue_url":"http://glover.info/zella_erdman",
       "repo_name":"tenetur",
       "body":"Quibusdam quia autem ipsam. Maiores dolor dolorem rerum sunt.",
       "created_at":"2013-11-28T17:47:32.234Z"
    }]

 for (i = 0; i < code.length; i++) {
    var x = document.createElement("li");
    var y = document.createTextNode(code[i].title);
    x.appendChild(y);
    document.getElementById("list").appendChild(x).style.background = 'green';
}
