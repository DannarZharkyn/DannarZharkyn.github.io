for(var q=0; q<questions.length; ++q) {
    var question = questions[q];
    var idx = 1 + q;
    document.writeln('<li><span class="quest">' + question.text + '</span><br/>');
    for(var i in question.answers) {
    document.writeln('<input type=radio name="q' + idx + '" value="' + i +
    '" onClick="Engine(' + q + ', this.value)">' + question.answers[i] + '<br/>');
 }
 }