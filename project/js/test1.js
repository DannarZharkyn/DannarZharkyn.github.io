
var questions=[
{
	text: "JavaScript-те функцияны қалай енгізіп бастау керек?",
	answers: ["function MyFunction()",
		  "function:MyFunction()",
		  "function = MyFunction()",
                  "function = New MyFunction()"],
	correctAnswer: 0 // нумерация ответов с нуля!
},
{
	text: "Қай бөлімде JavaScript-ті енгізуге болады?",
	answers: ["&lt;body&gt;",
		  "&lt;head&gt;",
		  "<’head’> және <’body’>",
                  "&lt;head&gt;және &lt;body&gt;"],
	correctAnswer: 3
},
{
	text: "Қандай HTML тегінен кейін JavaScript енгізу керек?",
	answers: ["&lt;javascript&gt;",
		  "&lt;script&gt;",
		  "&lt;js&gt;",
                  "&lt;scripting&gt;"],
	correctAnswer: 1
},
{
	text: "Сыртқы скрипті қалай дұрыс енгізу керек?",
	answers: ["&lt;script src=&quot;sample1.js&quot;&gt",
		  "&lt;#include &quot;sample1.js&quot;&gt",
		  "&lt;script name=&quot;sample1.js&quot;&gt",
                  "&lt;script href=&quot;sample1.js&quot;&gt"],
	correctAnswer: 0
},
{
	text: "JavaScript көмегімен &quot;Hello, World!&quot; хабарламасын қалай шығаруға болады?",
	answers: ["alertBox(&quot;Hello, World!&quot;);",
		 "msgBox(&quot;Hello, World!&quot;)",
		  "alert(&quot;Hello, World!&quot;)",
                  "msg(&quot;Hello, World!&quot;)"],
	correctAnswer: 2
},
{
	text: "JavaScript-те қалай жаңа массив құруға болады?",
        answers: ["var colors = &quot;yellow&quot;, &quot;purple&quot;, &quot;blue&quot;",
		  "var colors = (1:&quot;yellow&quot;, 2:&quot;purple&quot;, 3:&quot;blue&quot;)",
		  "var colors = 1 = (&quot;yellow&quot;), 2 = (&quot;purple&quot;), 3 = (&quot;blue&quot;)",
                  "var colors = [&quot;yellow&quot;, &quot;purple&quot;, &quot;blue&quot;]"],
	correctAnswer: 3
},
{
	text: "JavaScript WHILE циклын қалай бастау керек?",
	answers: ["while i = 1 to 7",
		  "while (i <= 7; i++)",
		  "while i = 1 <= 7",
                  "while (i <= 7)"],
	correctAnswer: 3
},
{
	text: "JavaScript FOR циклын қалай бастау керек?",
	answers: ["for (i = 0; i <= 10)",
		  "for (i <= 10; i++)",
		  "for (i = 0; i <= 10; i++)",
                  "for i = 1 to 10"],
	correctAnswer: 2
},
{
	text: "JavaScript-те екі санның ең үлкенін қалай табуға болады?",
	answers: ["Math.max(x, y)",
		  "ceil(x, y)",
		  "Math.ceil(x, y)",
                  "top(x, y)"],
	correctAnswer: 0
},
{
	text: "Берілген кодтардың қайсысы HTML элементінің мазмұнын өзгерте алады?",
	answers: ["#demo.text = &quot;Hello, World!&quot;",
		  "document.getElementById(&quot;demo&quot;).innerHTML = &quot;Hello, World!&quot;",
		  "document.getElementByName(&quot;p&quot;).innerHTML = &quot;Hello, World!&quot;",
                  "#demo.text = &quot;Hello, World!&quot;"],
	correctAnswer: 1
},
{
	text: "Бір толық хостқа бір уақытта қанша HTTP сұранысы орындалады (протокол://домен:порт) әдепкі параметрлерде шолғышты қолдайды ?",
	answers: ["2;",
		 " 8;",
		  "шектеусіз;",
                  "4;"],
	correctAnswer: 0 // нумерация ответов с нуля!
},
{
	text: "a = new Array(1,2,3) b = new Array(1,2,3) a == b деген рас па ?",
	answers: ["Дұрыс",
		  "Дұрыс емес",
		  "Көптеген кездейсоқ жағдайларға байланысты"],
                  
	correctAnswer: 1
},
{
	text: "Сценарийді іске қосқаннан кейін 5 секундтан кейін сәлемдесуді қалай алуға болады ?",
	answers: ["sleep(5); alert(«Сәлем!»);",
		  "setTimeout (function () {alert («Сәлем!»)}, 5); ",
		  "sleep (5000); alert («Сәлем!»);",
                  "setTimeout ('ескерту («Сәлем!»)', 5000);"],
	correctAnswer: 3
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
	text: "JavaScript-те циклдарға арналған қандай құрылымдар бар?",
        answers: ["Үш: for, while және do ... while",
		  "Тек екеуі: for and while",
		  "Тек біреу: for",
                  "Тек біреу: while"],
	correctAnswer: 0
},
{
	text: "break me коды не істейді ?",
	answers: ["Әр түрлі браузерлер әр түрлі",
		  "қате жібереді",
		  "циклдің ағымдағы блогынан шығады немесе «me» белгісіне ауысады",
                  "JavaScript аудармашысын бұзады"],
	correctAnswer: 2
},
{
	text: "XmlHttpRequest серверге қандай кодтау жіберіледі?",
	answers: ["Беттерді кодтауда",
		  "Әрдайым UTF-8-де",
		  "Сервер алғысы келетінінде",
                  "Сұрау тақырыбында көрсететінімізде"],
	correctAnswer: 1
},
{
	text: "typeof операторының жұмысы:",
	answers: [" Көрсетілген элементті жояды",
		 " Көрсетілген обьект типін қайтарады",
		  "Мүмкін болатын қателіктерді жояды",
                  " Математикалық операцияларды орындайды"],
	correctAnswer: 1 // нумерация ответов с нуля!
},
{
	text: "date обьектісі қандай мүмкіншілік береді?",
	answers: ["Күндер мен уақыттар бойыншы әр-түрлі операцияларды орындауға",
		  "URL  ағымдағы құжатты толықтай сақтауға",
		  "Құжаттың URL мекен-жайы туралы кез-келген ақпаратты білуге",
                  "Код бөлімдерін қателіктерге тексеруге мүмкіндік береді"],
	correctAnswer: 0
},
{
	text: "getDate() әдісі қандай жұмыс атқарады?",
	answers: ["Көрсетілген обьект типін қайтарады",
		  "Объектінің немесе массивті анықтайды",
		  "Обьектіден айдың күнін алады",
                  "Көрсетілген элементті жояды"],
	correctAnswer: 2
},
{
	text: "Айнымалыларда қандай мәндерді сақтауға болады?",
	answers: ["Тек сандар мен жолдар ",
		 " Жолдар, нүктелі сандар, жай сандар және бульдік өрнектер",
		  "Жолдар, нүктелік және жай сандар",
                  "Тек жай сандар мен жолдар"],
	correctAnswer: 1
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
	text: "Төмендегілердің қайсысы JavaScript-тегі кілт сөз емес?",
	answers: ["module",
		  "for",
		  "if",
                  "while"],
	correctAnswer: 0
},
{
	text: "JavaScript-те eval () деген не?",
        answers: ["Ол көрсетілген жолды JavaScript коды ретінде орындайды.",
		  "Ол көрсетілген жолды c++ коды ретінде орындайды.",
		  "Ол көрсетілген жолды CSS коды ретінде орындайды.",
                  "Ондай амал жоқ"],
	correctAnswer: 0
},
{
	text: "JavaScript-те null деген не?",
	answers: ["Белгісіз мәнді білдіреді",
		  "Мәннің жоқ екенін білдіреді",
		  "Мәннің қате екенін білдіреді",
                  "Ондай амал жоқ"],
	correctAnswer: 1
},
{
	text: "1 == «1» не қайтарады?",
	answers: ["1",
		  "0",
		  "True",
                  "False"],
	correctAnswer: 2
},
{
	text: "1 == «2» не қайтарады?",
	answers: ["1",
		  "0",
		  "True",
                  "False"],
	correctAnswer: 3
},
{
	text: "JavaScript тілі ECMAScript ке жатады",
	answers: ["Иә",
		  "Жоқ",
		  "Тек  кейбір функциялары",
                  "Тек скрипт сөзі ұқсайды"],
                  
	correctAnswer: 0
},
{
	text: "JavaScript-те санды екі еселеу әдістерінің бірі",
	answers: ["Math.max(x, y)",
		  "ceil(x, y)",
		  "Math.pow(number,2);",
                  "top(x, y)"],
	correctAnswer: 2
},
{
	text: "=== операторы не істейді?",
	answers: ["Мәні бойынша емес, сілтеме бойынша салыстырады ",
		  "Сілтеме бойынша емес, мәні арқылы салыстырады",
		  "Мысал келтірусіз салыстырады",
                  "Ондай оператор жоқ"],
	correctAnswer: 2
},
{
	text: "Әр түрлі сұраныстар үшін бір XmlHttpReguest нысанын пайдалануға бола ма?",
	answers: ["Иә, болады",
		  "Жоқ бір нысанға, бір ғана сұраныс",
		  "Иә, бірақ әрбір жаңа сұраныстың алдында, abort() қою керек",
                  "Жоқ, болмайды"],
        correctAnswer: 0
},
{
	text: " Бір сыныпта бір-бірімен үйлесімді жұп әдістерді таңдаңыз ",
	answers: ["Void get() {} int get() {}",
		 " Void get int(int x) {} void get(double x) {}",
		  " Public int get() {} private int get() {}",
                  " Void get(int x) {} void get(int y) {}"],
	correctAnswer: 1
},
{
	text: " Сынып мұрагерлігін қалай болдырмауға болады?",
	answers: ["мұраға тыйым сала алмайсыз",
		  " Private модификаторын қосу ",
		  " Abstract модификаторын қосу ",
                  " Final модификаторын қосу "],
                  
	correctAnswer: 3
},
{ 
	text: " Math обьектісі көмегімен не істеуге болады?", 
	answers: [" Әр-түрлі математикалық операцияларды орындайды", 
	" Мәліметтер базасымен жұмыс жасайды", 
	" Код бөлімдері қателіктерін тексереді ", 
	" Мүмкін болатын қателіктерді жояды "], 
	correctAnswer: 0 
	}
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
			 if (score<20&&score>=0){ /* егер алған баллы 20 дан аз болса онда нашар балл болып табылады */
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
