const chapters = {
	"0": "Preface",
	"1": "Introduction to Algorithm Design",
	"1.1": "Robot Tour Optimization",
	"1.2": "Selecting the Right Jobs",
	"1.3": "Reasoning about Correctness",
	"1.3.1": "Problems and Properties",
	"1.3.2": "Expressing Algorithms",
	"1.3.3": "Demonstrating Incorrectness",
	"1.4": "Induction and Recursion",
	"1.5": "Modeling the Problem",
	"1.5.1": "Combinatorial Objects",
	"1.5.2": "Recursive Objects"
}

/*
	[
		"chapterId",
		[page, paragraph],
		"word",
		"transcription",
		"meaning",
		"translation",
		[
			"example-1-en",
			"example-1-ru",
			"example-2-en",
			"example-2-ru"
		]
	]
 */

const words = [
	[
		"0",
		[],
		"to delve",
		"|delv|",
		"To search, especially as if by digging, in order to find a thing or information",
		"Углублять, копаться, проникаться",
		[
			"I am not going to delve into the problem's background.",
			"Я не буду сейчас углубляться в предысторию этой проблемы.",
			"This will save you from the need to delve into the wisdom of taxation and waste time.",
			"Это избавит вас от необходимости вникать в премудрости налогообложения и тратить время."
		]
	],
	[
		"0",
		[],
		"to prune",
		"|pruːn|",
		"To make something shorter",
		"Подрезать, обрезать, сокращать",
		[
			"Time to prune the family tree.",
			"Пора сократить фамильное древо.",
			"If you have a long form, try to prune it down.",
			"Если у вас длинная форма, попробуйте сократить ее."
		]
	],
	[
		"0",
		[],
		"to devote",
		"|dɪˈvəʊt|",
		"Pay attention to someone",
		"Уделять, посвящать, посветить, предаваться",
		[
			"I might not be able to devote myself full time to the old racism.",
			"Боюсь, у меня не получится уделять достаточно времени старому доброму расизму.",
			"I am ready to devote years to the study of how I can repair the injuries I have caused.",
			"- Я готова отдать годы, лишь бы искупить свою вину."
		]
	],
	[
		"1",
		[3, 1],
		"to accomplish",
		"|əˈkʌmplɪʃ|",
		"To finish something successfully or to achieve something",
		"Выполнять, совершать, достигать, завершать, совершенствовать",
		[
			"You can actually accomplish a lot more by gentle persuasion.",
			"Вы на самом деле можете добиться гораздо большего с помощью мягкого убеждения.",
			"He believes you can accomplish a lot in a relatively short space of time.",
			"Он верит, что вы можете многого добиться за относительно короткий промежуток времени."
		]
	],
	[
		"1",
		[3, 1],
		"reasonable",
		"|ˈriːz(ə)nəb(ə)l|",
		"Based on or using good judgment and therefore fair and practical",
		"Разумный, приемлемый, обоснованный, умеренно",
		[
			"If you tell him what happened, I'm sure he'll understand - he's a reasonable man.",
			"Если вы расскажете ему, что произошло, я уверен, он поймет - он разумный человек.",
			"We have a strong team and a reasonable chance of winning the game.",
			"У нас сильная команда и неплохие шансы на победу в этой игре."
		]
	],
	[
		"1",
		[3, 2],
		"well-specified",
		"|wel ˈspesɪfaɪd|",
		"Having suitable experience or formal qualifications",
		"Хорошо заданный, чётко определённый",
		[
			"I think the only solution lies in the passage of laws that will make it illegal to amplify sounds above well-specified levels.",
			"Я думаю, что единственное решение заключается в принятии законов, которые сделают незаконным усиление звуков выше четко определенных уровней."
		]
	],
	[
		"1",
		[3, 2],
		"distinction",
		"|dɪˈstɪŋ(k)ʃ(ə)n|",
		"A difference between two similar things",
		"Различие, отличие, разграничение, различение, разница, честь, распознавание",
		[
			"There's a clear distinction between the dialects spoken in the two regions.",
			"Существует четкое различие между диалектами, на которых говорят в этих двух регионах.",
			"This company makes no distinction between the sexes.",
			"Эта компания не делает различий между полами."
		]
	],
	[
		"1",
		[3, 4],
		"thus",
		"|ðʌs|",
		"With this result, in this way",
		"Таким образом, так, поэтому, таким образом, поэтому, стало",
		[
			"Exercise made us more hungry and thus our food supplies ran out.",
			"Физические упражнения сделали нас еще более голодными, и, таким образом, наши запасы продовольствия иссякли.",
			"Thus the Romans left Britain.",
			"Таким образом, римляне покинули Британию."
		]
	],
	[
		"1",
		[4, 1],
		"generality",
		"|dʒenəˈrælɪtɪ|",
		"An occasion when what someone says contains no details, and often very little meaning, or a statement of this type",
		"Всеобщность, большинство, неопределенность, утверждение общего характера",
		[
			"Despite these generalities, however, the picture of prosodic development presented here highlights variability. ",
			"Однако, несмотря на эти общие черты, представленная здесь картина просодического развития подчеркивает вариативность.",
			"There are, of course, the generalities of biology and anthropology.",
			"Конечно, существуют общие черты биологии и антропологии."
		]
	],
	[
		"1",
		[4, 1],
		"readily verified",
		"|ˈredɪlɪ ˈverɪfaɪd|",
		"Obvious and (or) doesn’t require any further explanations",
		"Легко проверяемый"
	],
	[
		"1",
		[4, 2],
		"desirable",
		"|dɪˈzaɪərəb(ə)l|",
		"Worth having and wanted by most people",
		"Желательный, желанный, подходящий, хороший, соблазнительный",
		[
			"Reducing class sizes in schools is a desirable aim.",
			"Сокращение численности классов в школах является желательной целью.",
			"It's regarded as a highly desirable job.",
			"Это считается очень желанной работой."
		]
	],
	[
		"1",
		[4, 2],
		"simultaneously",
		"|ˌsɪmlˈteɪnɪəslɪ|",
		"Happening or being done at exactly the same time",
		"Одновременно",
		[
			"Two children answered the teacher's question simultaneously.",
			"Двое детей ответили на вопрос учителя одновременно.",
			"The network was broadcasting four games simultaneously across the country.",
			"Телеканал транслировал четыре игры одновременно по всей стране."
		]
	],
	[
		"1",
		[4, 2],
		"regardless",
		"|rɪˈɡɑːdləs|",
		"Despite, not being affected by something",
		"Не обращающий внимания, не обращая внимания ни на что",
		[
			"The plan for a new office building went ahead regardless of local opposition.",
			"План строительства нового офисного здания был реализован, несмотря на противодействие местных властей.",
			"This job is open to all, regardless of previous experience.",
			"Эта работа открыта для всех, независимо от предыдущего опыта."
		]
	],
	[
		"1",
		[4, 3],
		"flat-out",
		"|ˌflat ˈaʊt|",
		"At the maximum speed, level, rate, etc. that is possible",
		"Ровный, быстрый, совершенно, напрямик, изо всех сил",
		[
			"When you're working flat-out, that's when relationships can suffer.",
			"Когда вы работаете не покладая рук, именно тогда могут пострадать отношения.",
			"Many factories are running flat out, so new investment is needed. ",
			"Многие заводы работают на износ, поэтому необходимы новые инвестиции."
		]
	],
	[
		"1",
		[4, 3],
		"suffice",
		"|səˈfaɪs|",
		"To be enough",
		"Хватить, хватать, быть достаточным, удовлетворять",
		[
			"I'm taking $400 - I think that should suffice.",
			"Я беру 400 долларов - думаю, этого должно хватить."
		]
	],
	[
		"1.1",
		[5, 1],
		"to suppose",
		"|səˈpəʊz|",
		"To think that something is likely to be true",
		"Предполагать, полагать, думать, допускать, предположение, гипотеза",
		[
			"Dan didn't answer his phone, so I suppose (that) he's busy.",
			"Дэн не отвечал на звонки, так что я полагаю, (что) он занят.",
			"He found it a lot more difficult to get a job than he supposed it would be.",
			"Он обнаружил, что устроиться на работу оказалось гораздо труднее, чем он предполагал."
		]
	],
	[
		"1.1",
		[5, 1],
		"soldering iron",
		"|ˈsɒldərɪŋ ˈaɪən|",
		"A tool that you use for heating solder",
		"Паяльник"
	],
	[
		"1.1",
		[5, 1],
		"fastened",
		"|ˈfɑːsənd|",
		"Two things that are fixed together",
		"Укреплённый, привязанный",
		[
			"He placed the two boxes together and fastened them with bolts.",
			"Он составил оба ящика, скрепил их анкерными болтами.",
			"Shall I fasten it back on?",
			"- Застегнуть обратно?"
		]
	],
	[
		"1.1",
		[5, 1],
		"substrate",
		"|ˈsʌbstreɪt|",
		"The electrically insulating portion of a PCB structure, such as fiberglass bound together with epoxy cement",
		"Подложка, подкладка",
		[
			"A variety of substrates such as active metal surfaces, clay minerals or zeolites could act as surface catalysts.",
			"В качестве поверхностных катализаторов могут выступать различные субстраты, такие как активные металлические поверхности, глинистые минералы или цеолиты."
		]
	],
	[
		"1.1",
		[5, 2],
		"assumption",
		"|əˈsʌm(p)ʃ(ə)n|",
		"Something that you accept as true without question or proof",
		"Предположение, допущение",
		[
			"People tend to make assumptions about you when you have a disability.",
			"Люди склонны делать предположения о вас, когда у вас есть инвалидность.",
			"These calculations are based on the assumption that prices will continue to rise.",
			"Эти расчеты основаны на предположении, что цены будут продолжать расти."
		]
	],
	[
		"1.1",
		[5, 3],
		"to think up",
		"|θɪŋk ʌp|",
		"Produce a new idea or plan",
		"Придумать",
		[
			"I can literally hear you trying to think up an excuse.",
			"Я буквально слышу, как ты пытаешься придумать оправдание."
		]
	],
	[
		"1.1",
		[5, 3],
		"heuristic",
		"|ˌhjʊ(ə)ˈrɪstɪk|",
		"Arriving at a solution by trying different actions to see if they produce the result that is wanted, rather than using strict rules",
		"Эвристический, эвристика",
		[
			"A genetic algorithm is a heuristic search that simulates the natural environment of biological and genetic evolution.",
			"Генетический алгоритм - это эвристический поиск, который имитирует естественную среду биологической и генетической эволюции."
		]
	],
	[
		"1.1",
		[6, 4],
		"hopscotch",
		"|ˈhɒpskɒtʃ|",
		"A game played by children, who throw a stone onto a set of joined squares drawn on the ground and jump on one leg and then on two legs into each square to get the stone",
		"Детская игра 'классики'"
	],
	[
		"1.1",
		[7, 2],
		"doomed",
		"|duːmd|",
		"Certain to fail, die, or be destroyed",
		"Обреченный, осужденный",
		[
			"This is a doomed city.",
			"Это обреченный город."
		]
	],
	[
		"1.1",
		[7, 3],
		"premature",
		"|ˈpremətʃə|",
		"Happening or done too soon, especially before the natural or suitable time",
		"Преждевременный, поспешный, непродуманный",
		[
			"Premature birth/death.",
			"Преждевременные рождение/смерть.",
			"Their criticisms seem premature considering that the results aren't yet known.",
			"Их критика кажется преждевременной, учитывая, что результаты еще не известны."
		]
	],
	[
		"1.1",
		[7, 3],
		"disjoint",
		"|dɪsˈdʒɔɪnt|",
		"Two or more things that do not overlap or share any common elements",
		"Непересекающийся",
		[
			"You can have up to 26 disjoint sets in this way.",
			"Таким образом, у вас может быть до 26 непересекающихся наборов."
		]
	],
	[
		"1.1",
		[7, 4],
		"to alternate",
		"|ˈɔːltəneɪt|",
		"To happen or exist one after the other repeatedly",
		"Чередоваться, чередовать, заместитель, дублер, чередующийся",
		[
			"She alternated between cheerfulness and deep despair.",
			"Она колебалась между жизнерадостностью и глубоким отчаянием."
		]
	],
	[
		"1.1",
		[8, 3],
		"presumably",
		"|prɪˈzjuːməblɪ|",
		"Used to say what you think is the likely situation",
		"Вероятно, предположительно",
		[
			"They can presumably afford to buy a bigger apartment.",
			"Предположительно, они могут позволить себе купить квартиру побольше.",
			"Presumably he just forgot to send the letter.",
			"Предположительно, он просто забыл отправить письмо."
		]
	],
	[
		"1.1",
		[8, 3],
		"moot",
		"|muːt|",
		"Often discussed or argued about but having no definite answer",
		"Спорный, обсуждать, дискутировать, собрание граждан",
		[
			"It's a moot point whether building more roads reduces traffic congestion.",
			"Вопрос о том, уменьшит ли строительство большего количества дорог пробки на дорогах, является спорным."
		]
	],
	[
		"1.2",
		[9, 6],
		"notion",
		"|ˈnəʊʃ(ə)n|",
		"An idea or belief",
		"Понятие, представление",
		[
			"I have only a vague notion of what she does for a living.",
			"У меня есть лишь смутное представление о том, чем она зарабатывает на жизнь."
		]
	],
	[
		"1.2",
		[9, 8],
		"banging",
		"|bæŋɪŋ|",
		"Completion of something",
		"Завершение"
	],
	[
		"1.2",
		[9, 8],
		"yield",
		"|jiːld|",
		"To supply or produce something positive such as a profit, an amount of food or information",
		"Доходность, урожай, доход, дебит, давать, приносить, уступать, поддаваться",
		[
			"The investigation yielded some unexpected results.",
			"Расследование дало несколько неожиданных результатов.",
			"Favourable weather yielded a good crop.",
			"Благоприятная погода принесла хороший урожай."
		]
	],
	[
		"1.2",
		[10, 2],
		"exhaustive",
		"|ɪɡˈzɔːstɪv|",
		"Complete and including everything",
		"Исчерпывающий, истощающий",
		[
			"An exhaustive study/report",
			"Исчерпывающее исследование/отчет"
		]
	],
	[
		"1.2",
		[10, 3],
		"decent",
		"|ˈdiːs(ə)nt|",
		"Socially acceptable or good",
		"Приличный, порядочный, пристойный, скромный, подходящий, славный, благопристойный",
		[
			"I thought he was a decent person.",
			"Я думал, он порядочный человек.",
			"It was very decent (= kind) of you to help.",
			"С вашей стороны было очень порядочно (= любезно) помочь."
		]
	],
	[
		"1.2",
		[10, 3],
		"cry 'uncle'",
		"|kraɪ ˈʌŋkᵊl|",
		"To admit defeat or plead for mercy, especially in an informal physical contest of some kind",
		"Просить пощады, сдаться, признать свое поражение"
	],
	[
		"1.2",
		[11, 1],
		"ensuring",
		"|ɪnˈʃʊərɪŋ|",
		"Something certain to happen",
		"Обеспечение, гарантия",
		[
			"Vittoria was certain too, and she intended to ensure he paid.",
			"Виттория в этом тоже не сомневалась, но ей хотелось обеспечить неотвратимость расплаты."
		]
	],
	[
		"1.2",
		[11, 1],
		"to lurk",
		"|lɜːk|",
		"To wait or move in a secret way so that you cannot be seen, especially because you are about to attack someone or do something wrong",
		"Скрываться, таиться, прятаться, обман",
		[
			"Someone was lurking in the shadows.",
			"Кто-то прятался в тени.",
			"Why are you lurking around in the hallway?",
			"Почему ты слоняешься по коридору?"
		]
	],
	[
		"1.3",
		[11, 2],
		"subtlety",
		"|ˈsʌt(ə)ltɪ|",
		"A small but important detail",
		"Тонкость, утонченность, хитрость, искусность, нежность, тонкое различие, острота",
		[
			"All the subtleties of the music are conveyed in this new recording.",
			"Все тонкости музыки переданы в этой новой записи."
		]
	],
	[
		"1.3",
		[11, 2],
		"distinguish",
		"|dɪˈstɪŋɡwɪʃ|",
		"To notice or understand the difference between two things, or to make one person or thing seem different from another",
		"Различать, отличать, выделить, значительный",
		[
			"I sometimes have difficulty distinguishing Spanish from Portuguese.",
			"Иногда мне трудно отличить испанский от португальского."
		]
	],
	[
		"1.3",
		[11, 4],
		"to emphasize",
		"|ˈemfəsaɪz|",
		"To show that something is very important or worth giving attention to",
		"Подчеркивать, акцентировать, выделять, придавать особое значение, напирать",
		[
			"You can use italics or capitals to emphasize a word in a piece of writing.",
			"Вы можете использовать курсив или заглавные буквы, чтобы подчеркнуть слово в тексте."
		]
	],
	[
		"1.3",
		[11, 4],
		"misleading",
		"|mɪsˈliːdɪŋ|",
		"Making someone believe something that is untrue",
		"Вводящий в заблуждение, обманчивый",
		[
			"Adverts must not create a misleading impression.",
			"Реклама не должна создавать вводящего в заблуждение впечатления."
		]
	],
	[
		"1.3",
		[11, 4],
		"crisp",
		"|krɪsp|",
		"A crisp way of speaking, writing, or behaving is quick, confident, and effective",
		"Четкий, хрустящий, свежий, хрустящий картофель, хрустеть, завивать"
	],
	[
		"1.3.1",
		[11, 5],
		"fuzzily-stated",
		"|fʊzzɪleɪ ˈsteɪtɪd|",
		"Described in a vague, imprecise, or ambiguous manner",
		"Расплывчато сформулированный"
	],
	[
		"1.3.1",
		[11, 6],
		"hiatus",
		"|haɪˈeɪtəs|",
		"A short pause in which nothing happens or is said, or a space where something is missing",
		"Перерыв, пауза",
		[
			"Well, we're taking a little hiatus to clear our heads, yes.",
			"Мы взяли небольшую паузу, чтобы подумать."
		]
	],
	[
		"1.3.1",
		[12, 3],
		"ill-defined",
		"|ɪldɪˈfaɪnd|",
		"Not clearly explained, described, or shown",
		"Нечетко определенный",
		[
			"When your project's goals are ill-defined, it can be impossible to plan the necessary steps to achieve those goals.",
			"Когда цели вашего проекта четко определены, может оказаться невозможным спланировать необходимые шаги для достижения этих целей."
		]
	],
	[
		"1.3.2",
		[12, 6],
		"bunch",
		"|bʌn(t)ʃ|",
		"A number of things of the same type fastened together or in a close group",
		"Гроздь, связка, пучок, группа, пук, сгусток, сбивать в кучу",
		[
			"A bunch of flowers/grapes/bananas/keys.",
			"Букет цветов/винограда/бананов/ключей."
		]
	],
	[
		"1.3.2",
		[12, 8],
		"to clarify",
		"|ˈklærɪfæɪ|",
		"To make something clear or easier to understand by giving more details or a simpler explanation",
		"Прояснить, прояснять, вносить ясность, очищать, просветлять, делать ясным",
		[
			"Could you clarify the first point please? I don't understand it completely.",
			"Не могли бы вы прояснить первый пункт, пожалуйста? Я не совсем понимаю это."
		]
	],
	[
		"1.3.3",
		[14, 3],
		"devious",
		"|ˈdiːvɪəs|",
		"Not direct",
		"Окольный, хитрый, отклоняющийся от прямого пути, извилистый, неискренний",
		[
			"He took a rather devious route which avoids the city centre.",
			"Он выбрал довольно окольный маршрут, избегающий центра города."
		]
	],
	[
		"1.3.3",
		[14, 3],
		"greedy",
		"|ˈɡriːdɪ|",
		"Wanting a lot more food, money, etc. than you need",
		"Жадный, алчный, ненасытный, прожорливый",
		[
			"He's greedy for power/success.",
			"Он жаден до власти/успеха."
		]
	],
	[
		"1.4",
		[15, 4],
		"ridiculous",
		"|rɪˈdɪkjʊləs|",
		"Stupid or unreasonable and deserving to be laughed at",
		"Смешной, нелепый, смехотворный",
		[
			"Do I look ridiculous in this hat?",
			"Я что, нелепо выгляжу в этой шляпе?",
			"It's ridiculous to expect a two-year-old to be able to read!",
			"Смешно ожидать, что двухлетний ребенок будет уметь читать!"
		]
	],
	[
		"1.4",
		[15, 7],
		"lousy",
		"|ˈlaʊzɪ|",
		"Very bad",
		"Паршивый, мерзкий, вшивый, отвратительный, дрянь",
		[
			"A lousy book.",
			"Паршивая книга."
		]
	],
	[
		"1.4",
		[16, 3],
		"spot",
		"|spɒt|",
		"A particular place",
		"Место, пятно, пятнышко, капля, определить, увидеть, местный, наличный",
		[
			"This looks like a nice spot for a picnic.",
			"Похоже, это хорошее место для пикника."
		]
	],
	[
		"1.4",
		[16, 4],
		"suspicious",
		"|səˈspɪʃəs|",
		"Feeling doubt or no trust in someone or something",
		"Подозрительный, сомнительный",
		[
			"My mother has a very suspicious nature (= does not trust people).",
			"У моей матери очень подозрительный характер (= она не доверяет людям)."
		]
	],
	[
		"1.4",
		[16, 4],
		"to creep",
		"|kriːp|",
		"To move slowly, quietly, and carefully, usually in order to avoid being noticed",
		"Ползать, подкрадываться",
		[
			"She turned off the light and crept through the door.",
			"Она выключила свет и прокралась к двери."
		]
	],
	[
		"1.4",
		[16, 5],
		"to concern",
		"|kənˈsɜːn|",
		"To cause worry to someone",
		"Беспокоиться, интересоваться, касаться, относиться, заботиться",
		[
			"The state of my father's health concerns us greatly.",
			"Состояние здоровья моего отца нас очень беспокоит.",
			"It concerns me that he hasn't been in contact.",
			"Меня беспокоит, что он не выходил на связь."
		]
	],
	[
		"1.4",
		[16, 5],
		"cavalier",
		"|ˌkævəˈlɪə|",
		"Not considering other people's feelings or safety",
		"Бесцеремонный, высокомерный, кавалер, всадник, рыцарь, кавалерист",
		[
			"That's a rather cavalier attitude.",
			"Это довольно бесцеремонное отношение."
		]
	],
	[
		"1.5",
		[17, 5],
		"precisely",
		"|prɪˈsaɪslɪ|",
		"Same like exactly",
		"Именно, точно, в точности, совершенно верно",
		[
			"The fireworks begin at eight o'clock precisely.",
			"Фейерверк начнется ровно в восемь часов."
		]
	],
	[
		"1.5",
		[17, 5],
		"to eliminate",
		"|ɪˈlɪmɪneɪt|",
		"To remove or take away someone or something",
		"Ликвидировать, устранять, исключать, уничтожать",
		[
			"A move towards healthy eating could help eliminate heart disease.",
			"Переход к здоровому питанию может помочь избавиться от сердечных заболеваний.",
			"We eliminated the possibility that it could have been an accident.",
			"Мы исключили возможность того, что это мог быть несчастный случай."
		]
	],
	[
		"1.5",
		[17, 6],
		"rigorously",
		"|ˈrɪɡərəslɪ|",
		"In a way that controls behaviour severely",
		"Строго, сурово, точно, тщательно, досконально, неукоснительно",
		[
			"The rules were applied too rigorously.",
			"Правила применялись слишком строго.",
			"Driving bans for serious offences should be rigorously enforced.",
			"Запреты на вождение за серьезные правонарушения должны неукоснительно соблюдаться."
		]
	],
	[
		"1.5.1",
		[17, 7],
		"odds",
		"|ɒdz|",
		"The probability (= how likely it is) that a particular thing will or will not happen",
		"Шансы, разногласие, перевес, разница, преимущество",
		[
			"If you drive a car all your life, the odds are that you'll have an accident at some point.",
			"Если вы всю свою жизнь водите машину, велика вероятность, что в какой-то момент вы попадете в аварию.",
			"There are heavy odds against people succeeding in such a bad economic climate.",
			"Существуют большие шансы на то, что люди добьются успеха в таком плохом экономическом климате."
		]
	],
	[
		"1.5.1",
		[17, 7],
		"to stumble (upon)",
		"|ˈstʌmb(ə)l|",
		"To discover something by chance, or to meet someone by chance",
		"Спотыкаться, споткнуться, оступаться, задержка, спотыкание",
		[
			"Workmen stumbled upon the mosaic while digging foundations for a new building.",
			"Рабочие наткнулись на мозаику, когда копали фундамент для нового здания."
		]
	],
	[
		"1.5.1",
		[17, 7],
		"substantially",
		"|səbˈstænʃ(ə)lɪ|",
		"Same like generally",
		"По существу, в основном, в значительной степени, основательно, прочно",
		[
			"This model has leather seats, but the two cars are substantially the same.",
			"У этой модели кожаные сиденья, но эти два автомобиля практически одинаковы."
		]
	],
	[
		"1.5.1",
		[18, 5],
		"arbitrary",
		"|ˈɑːbɪt(rə)rɪ|",
		"Based on chance rather than being planned or based on reason",
		"Произвольный, случайный, деспотический, своевольный, капризный",
		[
			"Did you have a reason for choosing your destination or was it arbitrary?",
			"Была ли у вас причина для выбора места назначения или это было произвольно?"
		]
	],
	[
		"",
		[],
		"",
		"",
		"",
		"",
		[
			"",
			"",
			"",
			""
		]
	],
	[
		"",
		[],
		"",
		"",
		"",
		"",
		[
			"",
			"",
			"",
			""
		]
	],
	[
		"",
		[],
		"",
		"",
		"",
		"",
		[
			"",
			"",
			"",
			""
		]
	],
	[
		"",
		[],
		"",
		"",
		"",
		"",
		[
			"",
			"",
			"",
			""
		]
	],
	[
		"",
		[],
		"",
		"",
		"",
		"",
		[
			"",
			"",
			"",
			""
		]
	],
	[
		"",
		[],
		"",
		"",
		"",
		"",
		[
			"",
			"",
			"",
			""
		]
	],
	[
		"",
		[],
		"",
		"",
		"",
		"",
		[
			"",
			"",
			"",
			""
		]
	],
	[
		"",
		[],
		"",
		"",
		"",
		"",
		[
			"",
			"",
			"",
			""
		]
	],
	[
		"",
		[],
		"",
		"",
		"",
		"",
		[
			"",
			"",
			"",
			""
		]
	],
	[
		"",
		[],
		"",
		"",
		"",
		"",
		[
			"",
			"",
			"",
			""
		]
	],
	[
		"",
		[],
		"",
		"",
		"",
		"",
		[
			"",
			"",
			"",
			""
		]
	],
	[
		"",
		[],
		"",
		"",
		"",
		"",
		[
			"",
			"",
			"",
			""
		]
	],
	[
		"",
		[],
		"",
		"",
		"",
		"",
		[
			"",
			"",
			"",
			""
		]
	]
]