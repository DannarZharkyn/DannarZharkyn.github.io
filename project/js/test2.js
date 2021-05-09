var questions=[
    {
        text: "Төмендегі әдістердің қайсысы JavaScript терезесін ашуда қолданылады?",
        answers: [" myWindow = window.open (&quot;http://www.w3schools.com&quot;);",
             " myWindow = window.new (&quot;http://www.w3schools.com&quot;);",
              " myWindow = New window(&quot;http://www.w3schools.com&quot&quot;);",
                      " Window = New window(&quot;http://www.w3schools.com&quot&quot;);"],
        correctAnswer: 0 // нумерация ответов с нуля!
    },
    {
        text: "IF операторын JavaScript-те дұрыс қолдану әдісі қандай?",
        answers: ["if i = 2",
              "if i == 2 then",
              "if i = 2 then",
                      "if (i == 2)"],
        correctAnswer: 3
    },
    {
        text: "Шартты қалай дұрыс жазуға болады, егер “ i ” 2-ден өзгеше болса?",
        answers: ["if (i <> 2)",
              "if (i != 2) ",
              "if i != 2 then",
                      "if i <> 2"],
        correctAnswer: 1
    },
    {
        text: "3.14 санын бүтін санға қалай айналдыруға болады?",
        answers: ["rnd(3.14)",
              "round(3.14)",
              "Math.rnd(3.14) ",
                      "Math.round(3.14)"],
        correctAnswer: 3
    },
    {
        text: "JavaScript-те айнымалыны қалай жариялайды?",
        answers: ["var ",
             "head",
              "script",
                      "title"],
        correctAnswer: 0
    },
    {
        text: "JavaScript арқылы клиент браузерінің атауын қалай алуға болады?",
            answers: ["browser.name",
              "client.navName",
              "navigator.appName",
                      "var.name"],
        correctAnswer: 2
    },
    {
        text: "Функцияны аргумент ретінде басқа функцияға беруге бола ма?",
        answers: ["иә",
              "жоқ",
              "кейбір жағдайларда иә",
                      "дұрыс жауап жоқ"],
        correctAnswer: 0
    },
    {
        text: "'a' и 'b' Кодтың қай нұсқасында екі элементтен тұратын массив жасалмайды?",
        answers: ["var a = 'a,b'.split(',');",
              "var a = {‘a’,’b’}",
              "var a = [ ‘a’, ’b’ ];",
                      "var a = new Array('a', 'b');"],
        correctAnswer: 1
    },
    {
        text: "Келесі код үзіндісінде қандай нәтиже береді? console.log(new Number(1) === 1);",
        answers: ["true",
              "null",
              "false",
                      "undefined"],
        correctAnswer: 2
    },
    {
        text: "IF конструкциясын JavaScript-те қалай дұрыс жазуға болады?",
        answers: ["if i == 5 then",
              "if i = 5",
              "if i = 5 then",
                      "if (i == 5)"],
        correctAnswer: 3
    },
    {
        text: "Қандай функция көбінесе Json мәліметтеріне қолданылады?",
        answers: ["eval();",
             " test();",
              "exec();",
                      "run();"],
        correctAnswer: 0 // нумерация ответов с нуля!
    },
    {
        text: "JavaScript арқылы парақта жоқ JS-файлын қосуға болады ма?",
        answers: ["Иә, тек бір рет қана",
              "Иә, парақтың жүктелуіне дейін",
                      "Иә, қанша файл қажет болса сонша",
              "Жоқ, болмайды"],
                      
        correctAnswer: 2
    },
    {
        text: "Осы технологиялардың қайсысы AJAX-та қолданылмайды?",
        answers: ["XML",
              "Flash ",
              "DOM",
                      "CSS"],
        correctAnswer: 1
    },
    {
        text: "Осы тегтердің қайсысы HTML (strict) стандартына сәйкес келеді?",
        answers: ["&lt;script type=”text/javascript”&gt;",
              "&lt;script language=”javascript”&gt;",
              "&lt;script&gt;",
                      "&lt;script language=”javascript” type=”text/javascript”&gt;"],
        correctAnswer: 0
    },
    {
        text: "null == underfined дұрыс па?",
        answers: ["Иә ",
             "Жоқ",
             "Иә, тек бір жағдайда",
                     "Кодта қате бар"],
        correctAnswer: 0
    },
    {
        text: "Осы тізімдегі операторлардың қайсысы JavaScript-те жоқ?",
        answers: ["#;",
             " *;",
              ">>;",
                      "&;"],
        correctAnswer: 0
    },
    {
        text: "Қандай арифметикалық операция  JavaScript-те қате әкеледі?",
        answers: ["нөлге бөлу",
              "жолды санға көбейту",
                      "теріс санның түбірі",
              "жоғарыда айтылғандардың ешқайсысы"],
                      
        correctAnswer: 3
    },
    {
        text: "JavaScript-те циклдарға арналған қандай конструкциялар бар?",
        answers: ["тек қана: for және while",
              "тек: for",
              "for, while және do…while",
                      "тек: while"],
        correctAnswer: 2
    },
    {
        text: "Бұл код не береді: alert (  “1”[0] );",
            answers: ["2",
              "1",
              "0",
                      "underfined"],
        correctAnswer: 1
    },
    {
        text: "Бұл код не істейді: break me?",
        answers: ["JavaScript интерпретаторын бұзады",
              "Цикл ағымындағы блоктан шыкпайды",
              "Цикл ағымындағы блогынан шығады немесе switch - <<me>> белгісіне",
                      "Қате шығады"],
        correctAnswer: 2
    },
    {
        text: "Функцияға қанша параметр жіберуге болады?",
        answers: ["Дәл функция анықтамасында көрсетілгендей",
              "Функция анықтамасында көрсетілгендей немесе одан аз",
              "Функция анықтамасында көрсетілгендей немесе одан көп",
                      "Кез келген мөлшер"],
        correctAnswer: 3
    },
    {
        text: "Мұндай өрнек неге тең: [] + false – null + true ?",
        answers: ["0;",
             " NAN;",
              "Underfined;",
                      "1;"],
        correctAnswer: 1
    },
    {
        text: "Async атрибуты &lt;script&gt; тегінде нені білдіреді?",
        answers: ["Ондай атрибут жоқ",
             "Парақ скриптің жүктелуін және орындалуын күтпейді, скрипт толығымен жүктелген бойда орындалады",
              "Скрипт толығымен жүктелгенін қажет етпейді",
                      "Ештеңе өзгермейді"],
        correctAnswer: 1
    },
    {
        text: "Тізімдегі көрсетілген жағдайлардың қайсысында JavaScript өңделмейді?",
            answers: ["Егер парақ жергілікті түрде қаралса, н.е Offline",
              "Егер ол пайда болған кезде, басқа оқиға өңделсе",
              "JavaScript өшірілген жағдайда ғана",
                      "JavaScript қосылған жағдайда ғана"],
        correctAnswer: 2
    },
    {
    text: "= = = операторы не істейді?",
        answers: ["Мәні бойынша емес, сілтеме бойынша салыстырады",
              "Мысал келтірмей салыстырады",
              "Ондай оператор жоқ",
                      "Мәндерді теңестіреді"],
        correctAnswer: 1
    },
    {
        text: "Async атрибуты &lt;printedby&gt; тегінде нені білдіреді?",
        answers: ["Ондай атрибут жоқ",
             "Жауабын экранға шығарады",
              "Жауабын өшіреді",
                      "Ештеңе өзгермейді"],
        correctAnswer: 0
    },
    {
        text: " JavaScript тілінде қандай циклдер жоқ?",
        answers: ["for",
              " while",
                      " gethim",
              " do while "],
                      
        correctAnswer: 0
    },
    {
        text: "Math.pow(number,2) не істейді?",
        answers: ["Санды екі еселейді",
              "Мысал келтірмей салыстырады",
              "Санды жұптылыққа зерттейді",
                      "Мәндерді теңестіреді"],
        correctAnswer: 1
    },
    {
        text: " throw командасы не істейді?",
        answers: ["Мәліметтер базасымен жұмыс жасайды",
              " Код бөлімдерін қателіктерге тексеруге мүмкіндік береді",
              " Мүмкін болатын қателіктерге, өзіндік түсініктеме жасайды",
                      " Клиенттік функцияларға жауапты"],
        correctAnswer: 2
    },
    {
        text: "JavaScript файлды келушінің компьютеріне жаза ала ма ?",
        answers: ["Opera-да, егер javascript жергілікті жерде жұмыс жасаса",
              "Firefox немесе IE-де, браузердің қосымша қауіпсіздік параметрлерімен",
              "Жоқ, ешқандай жағдайда ",
                      "Барлығына жаза алады"],
        correctAnswer: 1
    },
    {
        text: "Қандай арифметикалық операция нәтижесінде JavaScript қатесі пайда болады?",
        answers: ["нөлге бөлу ",
             "Санды жолға көбейту",
              "Теріс санның түбірі",
                      "Жоғарыда айтылғандардың ешқайсысы"],
        correctAnswer: 3
    },
    {
        text: " JDK стандартына сәйкес келетін Java дизассемблерін атаңыз",
        answers: ["Java",
             " Javac",
              " javap",
                      " javah"],
        correctAnswer: 2
    },
    {
        text: "Бұл код нені шығарады: alert ( +”Infinity” ) ?",
        answers: ["Қате шығады",
              "0",
              "NAN",
                      "Infinity"],
                      
        correctAnswer: 3
    },
    {
        text: "4 – “5” + 0xf – “1e1”; өрнегінің мәні неге тең?",
        answers: ["Санға",
              "Жолға ",
              "NAN",
                      "Infinity"],
        correctAnswer: 0
    },
    {
        text: "ECMAScript дегеніміз не?",
        answers: ["Жаңа бағдарламалау тілі",
              "JavaScript-ті қайта құру құралы",
              "Дұрыс жауап жоқ",
                      "JavaScript тілінің сипаттамасы"],
        correctAnswer: 3
    },
    ];
    var yourAns = new Array;
	var score = 0;
	
	function Engine(question, answer) {yourAns[question]=answer;}
	function Score(){
	   var answerText = "<br>Сіздің тестіңіздің нәтижесі:<br> \n";
	   var answerText1="";
	   for(var i = 0; i < yourAns.length; ++i){
		var num = i+1;
		answerText=answerText+"\n   №"+ num +"";
		if(yourAns[i]!=questions[i].correctAnswer){
			answerText=answerText+" Дұрыс емес<br> \n";
		  }
			else{
			answerText=answerText+" Дұрыс<br> \n";
			++score;
			}
			if (score<20&&score>=0){
				answerText1="Сіздің баллыңыз төмен, оң жақта көрсетілген ақпараттар бөліміне кіріп, біліміңізді толықтыра аласыз.<br>"}
			  else if(score>=20&&score<=30) {
				 answerText1="<br>Сіздің баллыңыз орташа, оң жақта көрсетілген кітаптар бөлімінен сізге пайдасы тиер кітаптар тізімін таба аласыз<br> \n";
			  }
			  else{
				answerText1="<br>Сіздің баллыңыз өте жақсы! <br> \n";
			  }
			   }
	   answerText=answerText1+"\n <br> Барлық дұрыс жауаптар саны: "+score+answerText; "\n";
	   document.getElementById('jayab').innerHTML=answerText;
	   yourAns = [];
	   score = 0;
	   clearForm("quiz");
}
	function clearForm(name) {
	   var f = document.forms[name];
	   for(var i = 0; i < f.elements.length; ++i) {
		if(f.elements[i].checked)
			f.elements[i].checked = false;
	}
};
