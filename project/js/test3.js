var questions=[
{
	text: "Confirm мен prompt арасындағы айырмашылығы неде?",
	answers: [" Олар әр түрлі емес",
		 " Confirm - енгізу өрісі бар диалогтық терезені шақырады, Prompt - растау терезесін шақырады",
		  "Prompt - енгізу өрісі бар диалогтық терезені шақырады, Confirm - растау терезесін шақырады",
                  " Айырмашылықтары жоқ"],
	correctAnswer: 2 // нумерация ответов с нуля!
},
{
	text: "Javascript-те қандай циклдер бар?",
	answers: ["for, while, do while",
		  "for, forMap, foreach, while",
		  "for, forMap, foreach, while, do while",
                  "for, while, do while, foreach"],
	correctAnswer: 0
},
{
	text: "Javascript-ті қайда қолдануға болады?",
	answers: ["Мобильді және Веб-қосымшаларда",
		  "Серверлік қосымшаларда",
		  "Қолданбалы бағдарламалық жасақтама",
                  "Жоғарыда аталған барлық нұсқаларда"],
	correctAnswer: 3
},
{
	text: "Жергілікті және ғаламдық айнымалының айырмашылығы неде?",
	answers: ["Жергілікті барлық жерде көрінеді, ғаламдық тек функцияларда ",
		  "Ғаламдықты өзгертуге болады, ал жергілікті өзгермейді",
		  "Ғаламдық барлық жерде көрінеді, жергілікті тек функцияларда",
                  "Жергіліктіні өзгертуге болады, ал ғаламдық өзгермейді"],
	correctAnswer: 2
},
{
	text: "Айнымалыларда қандай мәндерді сақтауға болады?",
	answers: ["Тек сандар мен жолдар  ",
		 "Жолдар, нүктелі сандар, жай сандар және бульдік өрнектер",
		  "Жолдар, нүктелік және жай сандар",
                  "Тек жай сандар мен жолдар"],
	correctAnswer: 1
},
{
	text: "Деректерді шығару қай жерде дұрыс орындалған?",
        answers: ["console.log(“Hello”); ",
		  "write(“Hello”);",
		  "print(“Hello”);",
                  "documentWrite(“Hello”);"],
	correctAnswer: 0
},
{
	text: "Қандай айнымалы қате көрсетілген?",
	answers: ["var num = “STRING”; ",
		  "var isDone = 0;",
		  "var number = 12,5;",
                  "var b = false;"],
	correctAnswer: 2
},
{
	text: "Құжаттың басында DOCTYPE сипаттамасы неге әсер етеді?",
	answers: ["Стандарттарға сәйкестігін тексеру кезінде сыртқы валидаторға",
		  "Дисплейде CSS қасиеттерінің жұмысы",
		  "DOM-да кейбір қасиеттерінің болуы және болмауы үшін",
                  "Жоғарыда көсетілгендердің барлығы дұрыс "],
	correctAnswer: 3
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
	text: "Қандай арифметикалық амал JavaScript қатесіне әкеледі?",
	answers: ["Нөлге бөлу ",
		  "Санды жолға көбейту",
		  "Теріс санның түбірі",
                  "Жоғарыда көсетілгендердің ешқайсысы дұрыс емес"],
	correctAnswer: 3
},
{ 
	text: " Объектінің қандай кілттері бар екенін білу үшін қандай функцияны  қолдана аламыз?", 
	answers: ["Object.keys()", 
	" Object.assign()", 
	" Object.pop()", 
	" Object.fill()"], 
	correctAnswer: 0 
	},

{ 
	text: " Массив элементтерінің ретін керісінше өзгертетін әдіс", 
	answers: ["sort() әдісі", 
	" fill() әдісі", 
	" join() әдісі", 
	" reverse() әдісі"], 
	correctAnswer:  3
	},
{ 
	text: " Массивтің соңына элементтерді қосады және оларды сәйкесінше өшіретін әдістер", 
	answers: ["shift () және unshift()", 
	" push() және pop()", 
	" indexOf() и lastIndexOf() әдістері", 
	" splice () және slice ()"], 
	correctAnswer:  1
	},

{ 
	text: " Массивтің басына элементтерді қосады және оларды сәйкесінше алып тастайтын әдістер", 
	answers: ["push() және pop()", 
	" splice () және slice ()", 
	" shift () және unshift()", 
	" fill() және join() әдісі"], 
	correctAnswer: 2
	},
{ 	
	text: " Массивте көрсетілген мәні бар элементті іздейтін және бірінші табылған элементтің индексін қайтаратын әдістер", 
	answers: ["push() және pop()", 
	" indexOf() и lastIndexOf() әдістері", 
	" splice () және slice ()", 
	" shift () және unshift()"], 
	correctAnswer: 1 
	},
{ 
	text: " а++ немесе ++a операциясы a айнымалысын бір бірлікке арттырады, бұл қалай аталады? ", 
	answers: ["Инкремент", 
	" Итерация", 
	" Декремент ", 
	" Литерал"], 
	correctAnswer: 0 
	},

{ 
	text: " Элементтері басқа массивтер немесе объектілер бола алатын массив?", 
	answers: ["ерекше", 
	" күрделі", 
	"тармақталған", 
	" көпөлшемді"], 
	correctAnswer: 3
	},
{ 
	text: " Функциясы барлық қасиеттерді бір объектіден екіншісіне көшіретін функция?", 
	answers: ["Object.keys()", 
	" Object.sort()", 
	" Object.assign()", 
	" Object.fill()"], 
	correctAnswer: 2
	},
{ 
	text: " Math обьектісі көмегімен не істеуге болады?", 
	answers: [" Әр-түрлі математикалық операцияларды орындайды", 
	" Мәліметтер базасымен жұмыс жасайды", 
	" Код бөлімдері қателіктерін тексереді ", 
	" Мүмкін болатын қателіктерді жояды "], 
	correctAnswer: 0 
	},

{ 
	text: " location объектісі арқылы не істеуге болады?", 
	answers: ["Ағымдағы құжаттың URL мекен-жайы туралы кез-келген ақпаратты біле алады", 
	" Жүктелген құжатқа жолды білуге болады ", 
	" URL  ағымдағы құжатты толықтай сақтауға болады ", 
	" Әр-түрлі математикалық операцияларды орындайды "], 
	correctAnswer: 0 
	},

{ 
	text: " delete операторының көмегімен не істеуге болады?", 
	answers: ["Жүктелген құжатқа жолды білуге болады ", 
	" Мүмкін болатын қателіктерді жояды ", 
	" URL  ағымдағы құжатты толықтай сақтауға болады ", 
	" Көрсетілген элементті жоюға болады "], 
	correctAnswer: 3 
	},

{ 
	text: " in операторы көмегімен нені анықтайды?", 
	answers: ["Объектінің немесе массивтің ерікті қасиетін ", 
	" Жүктелген құжаттағы жолды ", 
	" Мәліметтер базасын", 
	" Мүмкін болатын қателіктерді "], 
	correctAnswer: 0 
	},

{ 
	text: " Instanceof операторының жұмысы:", 
	answers: ["Көрсетілген элементті жояды ", 
	" Мәліметтер базасын ашады ", 
	" Код бөлімдері  тексереді", 
	" Объект типін берілген мәнмен тексереді "], 
	correctAnswer: 3 
	},
	{
	text: " Шартты оператор дегеніміз не?",
	answers: ["Кодты бірнеше рет орындайтын конструкция",
		 " Белгілі бір айнымалыны құру конструкциясы",
		  " Мәндерді салыстыру операторы",
                  " Барлық жауап дұрыс"],
	correctAnswer: 2
},
{
	text: " JavaScript тілінде қандай циклдер бар?",
	answers: ["for, while, do while ",
		  " for, forMap, foreach, while",
                  " for, while, do while, foreach",
		  " for, forMap, foreach, while, do while "],
                  
	correctAnswer: 0
},
{
	text: " Node JS платформасы қандай функцияны орындайды?",
	answers: ["Сервермен жұмысты орындайды",
		  " Сайт парағына түзету жасайды",
		  " Клиенттік функцияларға жауапты",
                  " Мәліметтер базасыымен жұмыс жасайды"],
	correctAnswer: 2
},
{
	text: " Дұрыс айнымалы атауы қайда көрсетілген?",
        answers: ["var num_1;",
		  " var num -1;",
		  " var 2num;",
                  " var num;"],
	correctAnswer: 0
},
{
	text: " try…catch өрнегі не істейді?",
	answers: ["Сайт парағына түзету жасайды",	
		  " Код бөлімдерін қателіктерге тексеруге мүмкіндік береді ",
		  " Сервермен жұмысты орындайды ",
                  " Мәліметтер базасыымен жұмыс жасайды"],
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
	text: " JDK стандартына сәйкес келетін Java дизассемблерін атаңыз",
	answers: ["Java",
		 " Javac",
		  " javap",
                  " javah"],
	correctAnswer: 2
},
{
	text: " Объектілерді кілт-мәндік жұп ретінде сақтау мүмкіндігін қандай интерфейстер қамтамасыз етеді?",
	answers: ["Java.util.SortedSet ",
		  " Java.util.Set",
                  " Java.util.List",
		  " Java.util.Map"],
                  
	correctAnswer: 3
},
{
	text: " Төмендегі жолдардың қайсысы қатесіз және ескертусіз құрастырылады?",
	answers: ["Byte b = 255;",
		  " Float f = 1.3;",
		  " Int I = 10;",
                  " Boolean b = null;"],
	correctAnswer: 2
},
{
	text: " Төмендегі код үзінділерінің қайсысы жарамды Java коды болып табылады?",
        answers: ["Integer int1 = new integer (41);int -=33;",
		  " String A = “test2”;",
		  " Integer int2 = new Integer (15); int2;",
                  " String A = “Test1”; A-=”23”;"],
	correctAnswer: 0
},
{
	text: " Қандай командалар нәтижесінде «10» саны және «он» сөзі консольде көрсетіледі",
	answers: ["System.out.println(5+”он”+5);",
		  " System.out.println(“он”+5+5);",
		  " System.out.println(5+5+”он”);",
                  " System.out.println(“”+5+5+”он”);"],
	correctAnswer: 2
},
{
	text: " Дұрыс өзгермелі декларацияны таңдаңыз ",
	answers: ["Short x [];",
		  " Short[5] x2;",
		  " Short z2 [5];",
                  " Short[]y2 = [5];"],
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
