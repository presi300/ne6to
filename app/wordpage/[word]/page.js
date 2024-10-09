"use client";
import Link from "next/link";
import React from "react";

export default function Page({ params }) {
  const word = params.word;

  function WordCase({ mqn }) {
    switch (mqn) {
      case "Communication":
        return (
          <>
            <div>
              Общуването е дейност, при който живи организми, както и
              информационни системи, обменят сведения и знания. Информационната
              обмяна на съобщения се състои от създаване, промяна и пренос или
              изпращане на текстови съобщения и информация. Има много начини на
              общуване, за което могат да бъдат използвани много различни
              езикови и дори неезикови методи. Езикът, речта и писменният текст
              са основна част на общуването, а в технологиите при технологичния
              комуникационен процес на обработването от изчислителни устройства
              (
              <Link className="text-blue-300 hover:underline" href="Computers">
                компютри
              </Link>
              , телефони) на езиковите и текстови съобщения те трябва да бъдат
              пратени от техния изпращач до техния получател.
            </div>
            <br></br>
            <div>
              Communication is an activity in which living organisms, as well as
              information systems, exchange information and knowledge. The
              information exchange of messages is done by changing, creating and
              transferring or sending text messages and information. There are
              many ways to communicate for which you can use many different
              languages ​​and even non-linguistic methods. Language, speech and
              written text are a major part of communication, and in technology,
              in the technological communication process for processing by
              computing devices (
              <Link className="text-blue-300 hover:underline" href="Computers">
                computers
              </Link>
              , telephones) of language and text messages, they must be sent
              from the technique, the sender to the receiving technique.
            </div>
          </>
        );
      case "Computers":
        return (
          <>
            {" "}
            <div>
              Компютърът е изчислително устройство с общо предназначение, което
              може да бъде програмирано да извършва набор от аритметични и/или
              логически операции. Възможността на устройството да извършва
              поредица такива операции позволява компютърът да се използва за
              решаване на теоретично всяка изчислителна/логическа задача. Тези
              аритметични и логически операции са също така част от програмен
              код (компютърната програма),с който работят компютрите. Целта е
              обработката на въведена информация (и компютърни данни), най-често
              дигитализирана или представена в цифров вид, чийто резултат може
              да се изведе в най-общо казано използваема форма. Първата
              изчислителна машина с изцяло електронен изчислителен блок и с
              отделна памет е конструирана от{" "}
              <Link
                className="text-blue-300 hover:underline"
                href="John_Atanasoff"
              >
                Джон Атанасов
              </Link>{" "}
              в Щатския колеж в Айова. В периода 1936 – 41 г. той и асистентът
              му{" "}
              <Link
                className="text-blue-300 hover:underline"
                href="Clifford_Berry"
              >
                Клифърд Бери
              </Link>{" "}
              разработват изчислителна машина (много по-късно наречена компютър
              на Атанасов – Бери), предназначена да решава системи линейни
              уравнения с до 30 неизвестни.
            </div>
            <br></br>
            <div>
              A computer is a general purpose computing device that can be
              programmed to perform a set of arithmetic and/or logical
              operations. The ability of the device to perform a series of such
              operations allows the computer to be used to solve theoretically
              any computational/logical task. These arithmetic and logical
              operations are also part of the program code (the computer
              program) that computers work with. The purpose is the processing
              of input information (and computer data), most often digitized or
              represented in digital form, the result of which can be output in
              a generally usable form. The first computing machine with an
              all-electronic computing unit and separate memory was constructed
              by{" "}
              <Link
                className="text-blue-300 hover:underline"
                href="John_Atanasoff"
              >
                John Atanasoff
              </Link>{" "}
              at Iowa State College. In the period 1936–41, he and his assistant{" "}
              <Link
                className="text-blue-300 hover:underline"
                href="Clifford_Berry"
              >
                Clifford Berry
              </Link>{" "}
              developed a computing machine (much later called the
              Atanasov–Berry computer) designed to solve systems of linear
              equations with up to 30 unknowns.
            </div>
          </>
        );

      case "John_Atanasoff":
        return (
          <>
            <div>
              Роден: 4 октомври 1903 г. Хамилтън, САЩ <br></br> Починал: 15 юни
              1995 г. (91 г.) Фредерик, САЩ <br></br> <br></br>Джон Вѝнсънт
              Атана̀сов е американски физик, математик и електроинженер,
              изобретател на модел на електронен цифров компютър с регенеративна
              памет, изграден от множество изчислителни модули и изпълняващ
              логически операции с двоични числа. Роден в многодетно семейство
              на българин и ирландка, той от малък проявява наклонност към
              математика и електротехника. Завършва електроинженерство, а след
              това защитава магистърска степен по математика и докторска
              дисертация по теоретична физика.
            </div>
            <br></br>
            <div>
              Born: October 4, 1903 Hamilton, USA <br></br> Died: June 15, 1995
              (age 91) Frederick, USA <br></br> <br></br>John Vincent Atanasoff
              is an American physicist, mathematician and electrical engineer,
              the inventor of a model of an electronic digital computer with
              regenerative memory, built from multiple computing modules and
              performing logical operations with binary numbers. Born into a
              large family of a Bulgarian and an Irish woman, he showed an
              inclination towards mathematics and electrical engineering from an
              early age. He graduated in electrical engineering, and then
              defended his master's degree in mathematics and a doctoral thesis
              in theoretical physics.
            </div>
          </>
        );

      case "Clifford_Berry":
        return (
          <>
            <div>
              Роден: 19 април 1918 г. Гладбруук, Айова, САЩ Починал: 30 октомври
              1963 г. (45 г.) Ню Йорк, САЩ Клифърд Бери е американски физик,
              електроинженер и изобретател. Той е титуляр на 30 издадени
              патента, 19 от които в областта на масспектрометрията, а
              останалите 11 в областта на вакуумната електроника. За широката
              общественост той е по-известен с участието си в проекта за
              създаване на Компютър на Атанасов-Бери заедно с Джон Атанасов през
              1939 г
            </div>
            <br></br>
            <div>
              Born: April 19, 1918 Gladbrook, Iowa, USA Died: 30 October 1963
              (age 45) New York, USA Clifford Berry is an American physicist,
              electrical engineer and inventor. He is the holder of 30 issued
              patents, 19 of which in the field of mass spectrometry, and the
              remaining 11 in the field of vacuum electronics. To the general
              public, he is better known for his participation in the project to
              create the Atanasov-Berry Computer together with John Atanasov in
              1939.
            </div>
          </>
        );
      case "Компютърна програма":
        return (
          <div>
            Компютърната програма или още софтуерна програма, или накратко
            програма е съвкупност от инструкции към компютъра, които трябва да
            дадат някакъв определен изходен резултат. Компютърът изисква
            програмите да функционират, обикновено изпълнявайки програмните
            инструкции в централния процесор. Програмата има изпълнителна форма,
            която компютърът директно използва, за да изпълни инструкциите,
            зададени от програмата. Тази същата програма има и четивна за човека
            част, наречена сорс код, от който изпълнимите програми се
            компилират, като сорс кодът дава възможност на програмиста да
            изследва протичането на инструкциите или да разработва алгоритмите.
          </div>
        );
      case "Computer program":
        return (
          <div>
            A computer program or software program, or program for short, is a
            set of instructions to the computer that must produce some specific
            output. A computer requires programs to function, usually executing
            the program instructions in the central processing unit. The program
            has an executable form that the computer directly uses to execute
            the instructions given by the program. This same program also has a
            human-readable part called source code from which executable
            programs are compiled, the source code enabling the programmer to
            examine the flow of instructions or develop algorithms.зика.
          </div>
        );
      case "Сорс код":
        return (
          <div>
            Сорс код или изходният код е сбор от инструкции (заедно с
            коментарите), написан на разбираем за човека език за програмиране
            (може и на повече от един език за програмиране) обикновено като
            текст. Изходният код позволява модификация на компютърната програма,
            разглеждане на начина, по който тя работи, откриване на грешки и
            други действия. Той трябва да се компилира, за да се получи програма
            на машинен език, която може да се изпълнява от хардуера. Друг
            вариант е да се ползва интерпретатор, който да анализира и да
            изпълни кода на момента. Повечето компютърни програми не се
            разпространяват с техния изходен код, а във вид на изпълними
            файлове. Ако кодът е включен, той е полезен за потребителя,
            програмиста или системния администратор, за да разбере действието
            му, или за да го промени или допълни.
          </div>
        );
      case "Source code":
        return (
          <div>
            Source code or source code is a set of instructions (along with
            comments) written in a human-understandable programming language
            (maybe in more than one programming language) usually as text.
            Source code allows modification of a computer program, examining how
            it works, detecting errors, and other actions. It must be compiled
            to produce a machine language program that can be executed by the
            hardware. Another option is to use an interpreter to parse and
            execute the current code. Most computer programs are not distributed
            with their source code, but in the form of executable files. If the
            code is included, it is useful for the user, programmer, or system
            administrator to understand its operation, or to modify or
            supplement it.
          </div>
        );
      case "Хардуер":
        return (
          <div>
            Произлиза от английската дума hardware (означава железария;
            техническа апаратура; изчислителна техника; устройства, изграждащи
            по-голям апарат или машина). Преди появата на тази дума в българския
            език се е използвал терминът апаратно осигуряване. Хардуерът,
            изграждащ смартфона или компютъра, се състои от процесор, дънна
            платка, видеокарта, RAM памет, захранващ блок, твърд диск/ССД,
            компютърна кутия и входно-изходни устройства. Съответно асемблерният
            език е езикът за програмиране, който е най-близо до хардуера.
          </div>
        );
      case "Hardware":
        return (
          <div>
            The hardware that makes up the smartphone or computer consists of a
            processor, motherboard, video card, RAM memory, power supply unit,
            hard disk/SSD, computer case and input/output devices. Accordingly,
            assembly language is the programming language closest to the
            hardware.
          </div>
        );
      case "Смартфон":
        return (
          <div>
            Смартфонът еволюира от мобилния телефон, като съвместява функциите
            на пренос на глас и кратки съобщения с по-разширени компютърни
            функции като обработка на данни, интелигентност и дисплей в
            телефоните. Смартфоните продължават да се развиват. Следващите
            поколения смартфони уголемяват размерите си и подобряват камерата на
            предишното поколение. Тази тенденция се запазва и до днес.
          </div>
        );
      case "Smartphone":
        return (
          <div>
            The smartphone evolved from the mobile phone by combining voice and
            short messaging functions with more advanced computing functions
            such as data processing, intelligence and display in phones.
            Smartphones continue to evolve. The next generations of smartphones
            increase their size and improve the camera of the previous
            generation. This trend continues to this day.
          </div>
        );
      case "Съобщения":
        return (
          <div>
            През 1982 г. Европейската конференция на пощенската и
            телекомуникационна администрация CEPT group одобрява план, изискващ
            услугите, предоставяни от обществените информационни мрежи, да бъдат
            достъпни и за мобилните телефони. В резултат на това от 1984 г.
            група инженери, сред които Фридхелм Хилебранд (Deutsche Telekom),
            Бернар Жилбер (France Télécom), Фин Тросбю (Telenor), Кевин Холи
            (Cellnet), Иън Харис (Vodafone) започват да развиват концепцията за
            SMS, като поставят и границата от 160 знака за първите съобщения,
            смятайки ги за „напълно достатъчни“. Трябва да изминат цели 8
            години, преди да се появи първото SMS съобщение. На 3 декември 1992
            г. Нийл Папуърт (Neil Papworth), тестов инженер от Sema Group
            (по-късно Mavenir Systems), изпраща първото в света SMS съобщение
            чрез персоналния си компютър (мобилните телефони по онова време не
            са притежавали опция за текстови съобщения) по GSM-мрежата на
            Vodafon във Великобритания до мобилния телефон „Orbitel 901“ на своя
            приятел Ричард Ярвис, поздравявайки го с „Весела Коледа“. Това
            променя коренно начина по който хората общуваме днес.
          </div>
        );
      case "Messages":
        return (
          <div>
            In 1982, the European Conference of Postal and Telecommunications
            Administrations CEPT group approved a plan requiring services
            provided by public information networks to be accessible to mobile
            phones. As a result, since 1984, a group of engineers including
            Friedhelm Hillebrand (Deutsche Telekom), Bernard Gilbert (France
            Télécom), Finn Trosby (Telenor), Kevin Holley (Cellnet), Ian Harris
            (Vodafone) began to develop the SMS concept , also setting a limit
            of 160 characters for first messages, considering them "perfectly
            sufficient". A full 8 years must pass before the first SMS message
            appears. On December 3, 1992, Neil Papworth, a test engineer at Sema
            Group (later Mavenir Systems), sent the world's first SMS message
            via his personal computer (mobile phones at the time did not have a
            text messaging option). over the Vodafone UK GSM network to the
            'Orbitel 901' mobile phone of his friend Richard Jarvis, wishing him
            a 'Merry Christmas'. This fundamentally changes the way people
            communicate today.
          </div>
        );
      case "Писма":
        return (
          <div>
            Писмото е писмено съобщение на определен език, предавано по един или
            друг начин от един човек на друг. Ролята на писмата се е променила
            съществено от 19 век насам. В миналото писмата са били смятани за
            единствения надежден начин за комуникация между двама географски
            отдалечени души. С напредъка на комуникационните технологии
            значението на писмата за редовната комуникация намалява. Изобретения
            и явления като телеграфа, телефона, факса и Интернет оказват влияние
            върху писането и изпращането на писма. Размяната на лични писма в
            модерните индустриализирани общества е по-рядко срещана, като тя се
            заменя от технологии като телефона и електронната поща (т.нар.
            „имейл“).
          </div>
        );
      case "Letters":
        return (
          <div>
            A letter is a written message in a certain language, transmitted in
            one way or another from one person to another. The role of letters
            has changed significantly since the 19th century. In the past,
            letters were considered the only reliable way of communication
            between two geographically distant people. With the advancement of
            communication technology, the importance of letters for regular
            communication is decreasing. Inventions and phenomena such as the
            telegraph, telephone, fax and the Internet have influenced the
            writing and sending of letters. The exchange of personal letters in
            modern industrialized societies is less common, and it is being
            replaced by technologies such as the telephone and e-mail (the
            so-called electronic mail). "email").
          </div>
        );
      case "Интернет":
        return (
          <div>
            Ѝнтернет или глобалната мрежа, а в разговорния български език и
            накратко като нет, е глобална система от свързани компютри в мрежа
            или дори компютърни мрежи, която работи чрез стандартизиран комплект
            от протоколи TCP/IP, които позволяват свързването между компютрите и
            съответните интернет устройства, и свързаните с интернет чрез
            wireless устройства, като също така обслужва интернет потребителите
            с кабелен или wireless по целия свят (които са няколко милиарда).
            Интернет представлява мрежа от мрежи, и е съставен от милиони
            частни, обществени, университетски и академични, фирмени, търговски,
            а също и съответните държавни мрежи, като wireless-a има
            най-различен обхват – от местен, регионален до глобален за
            сателитния интернет, в различни преносни среди и свързани помежду си
            чрез сложна система от мрежов хардуер и софтуер. Интернет служи за
            отдалечен достъп до голямо разнообразие от информационни ресурси и
            услуги, най-известни сред които са взаимносвързаните хипертекстови
            документи на World Wide Web (WWW) и електронната пощa. Това променя
            коренно начина по който хората общуваме днес.
          </div>
        );
      case "Internet":
        return (
          <div>
            The Internet or the global network, and in the colloquial Bulgarian
            language and abbreviated as net, is a global system of connected
            computers in a network or even computer networks, which works
            through a standardized set of TCP/IP protocols that allow the
            connection between computers and the corresponding Internet devices,
            and connected to the Internet through wireless devices, while also
            serving wired or wireless Internet users around the world (which
            number several billion). The Internet is a network of networks, and
            is made up of millions of private, public, university and academic,
            corporate, commercial, and also related government networks, with
            wireless ranging in scope from local, regional, to global for
            satellite Internet, in different transmission media and
            interconnected by a complex system of network hardware and software.
            The Internet provides remote access to a wide variety of information
            resources and services, the most prominent of which are the
            interconnected hypertext documents of the World Wide Web (WWW) and
            electronic mail. This fundamentally changes the way people
            communicate today.
          </div>
        );
      case "Езикови методи":
        return (
          <div>
            Езикът е система от знаци, използвани за комуникация. Най-често под
            език се разбира говорният (устен) език – речта, и неговият писмен
            вариант, но има също и други типове езици, като жестикулаторни
            например. Говорната способност на хората възниква в далечно
            предисторическо време. Тогава се оформят и езиковите семейства,
            които съществуват при появата на писмеността.
          </div>
        );
      case "Language methods":
        return (
          <div>
            Language is a system of signs used to communicate. Most often,
            language is understood as spoken (oral) language - speech, and its
            written version, but there are also other types of languages, such
            as gestural ones for example. The ability of people to speak arose
            in distant prehistoric times. Then the language families that exist
            at the time of writing are formed.
          </div>
        );
      case "Кабелна връзка":
        return (
          <div>
            Кабелът е метален електрически проводник, обвит с токоизолиращ
            материал или снопове от повече изолирани помежду се жила от
            проводици в обща защитна обвивка. Поради това те се произвеждат с
            изисквания към конкретно предназначение удовлетворяващи безопасното
            ползване при определини условия за монтаж и експлоатация. Това
            налага за някои видове кабели да има допълнителни изисквания в
            сравнение с шнуровете, особено за тези които се полагат под земята,
            в шахти, тунели, канали или се използват на места при други
            агресивни условия. Може да са наложителни на места но е по-практично
            за домакинство да използва безжична връзка.
          </div>
        );
      case "Cable connection":
        return (
          <div>
            A cable is a metallic electrical conductor wrapped in an insulating
            material or bundles of multiple insulated strands of wires in a
            common protective sheath. Therefore, they are produced with
            requirements for a specific purpose satisfying safe use under
            certain conditions for installation and operation. This means that
            some types of cables have additional requirements compared to cords,
            especially for those that are laid underground, in shafts, tunnels,
            canals or used in places with other aggressive conditions. They may
            be imperative in places but it is more practical for a household to
            use a wireless connection.
          </div>
        );
      case "Безична връзка":
        return (
          <div>
            Безжична мрежа се използва за предаването на информация между два
            или повече обекта посредством определени радиочестоти чрез ефира без
            необходимостта на механична връзка между тях (кабел). Разстоянието
            между обектите може да бъде от няколко метра (дистанционното
            устройство на телевизора) до милиони километри (комуникация между
            Земята и спътник в космоса).
          </div>
        );
      case "Wireless connection":
        return (
          <div>
            A wireless network is used to transmit information between two or
            more objects using certain radio frequencies through the air without
            the need for a mechanical connection between them (cable). The
            distance between objects can be from a few meters (the TV remote) to
            millions of kilometers (communication between the Earth and a
            satellite in space).
          </div>
        );
      case "Електрона поща":
        return (
          <div>
            Електронна поща, също е-поща или съкратено като имейл, е онлайн
            метод за комуникация чрез писма във вид на кодирани текстови или
            цифрови съобщения през Интернет и други компютърни мрежи. Те могат
            да приличат на незабавни съобщения или самата поща да има опции за
            изпращане на онлайн съобщения.
          </div>
        );
      case "Electronic mail":
        return (
          <div>
            Electronic mail, also e-mail or abbreviated as e-mail, is an online
            method of communication by means of letters in the form of coded
            text or digital messages over the Internet and other computer
            networks. They can look like instant messages, or the mail itself
            has options for sending online messages.
          </div>
        );
      case "Неезикови методи":
        return (
          <div>
            Несловесното общуване, наричано още невербална комуникация между
            хората, е вид общуване, чрез което се изпраща и получава информация
            без думи и без използването на вербален език. Това включва
            използването на визуални знаци като езика на тялото (кинезика),
            разстоянието (проксемика) и физическата обстановка / външния вид,
            глас и докосване (хаптика). Тя може да включва хроника (използване
            на време) и окулезика (контакт с очите и действията на гледане,
            докато говорите и слушате, честота на погледите, модели на
            фиксиране, разширение на зеницата и скорост на мигане).
          </div>
        );
      case "Non-linguistic methods":
        return (
          <div>
            Non-verbal communication, also called non-verbal interpersonal
            communication, is a type of communication in which information is
            sent and received without words and without the use of verbal
            language. This includes the use of visual cues such as body language
            (kinesics), distance (proxemics) and physical
            surroundings/appearance, voice and touch (haptics). It can include
            chronic (time use) and oculosics (eye contact and gaze actions while
            speaking and listening, gaze frequency, fixation patterns, pupil
            dilation and blink rate).
          </div>
        );
      case "Писменост/думи":
        return (
          <div>
            Писмеността е система от знаци, предназначена за представянето на
            езици в писмена форма (текстово). Писмеността включва набор от знаци
            или символи, както и правилата за тяхното използване които заедно
            свормират език. Знаците могат да включват символи, фонеми, срички
            или цели обекти.
          </div>
        );
      case "Literacy/Words":
        return (
          <div>
            Writing is a system of signs designed for the representation of
            languages ​​in written form (text). Writing includes a set of signs
            or symbols, as well as the rules for their use, which together form
            a language. Signs can include symbols, phonemes, syllables, or whole
            objects.
          </div>
        );
      case "Реч":
        return (
          <div>
            За реч се приема всяко конкретно говорене, разбирано както като
            самия процес на звучащо говорене (речева дейност), така и като
            резултата от този процес (речевите произведения), фиксиран в паметта
            или в писмена форма.
          </div>
        );
      case "Speech":
        return (
          <div>
            Speech is considered to be any specific speaking, understood both as
            the process of sounding speaking itself (speech activity) and as the
            result of this process (speech works), fixed in memory or in written
            form.
          </div>
        );
      case "Жестикулиране":
        return (
          <div>
            Жестът е символично движение с тялото за невербално (без употреба на
            думи) общуване между хора. Това движение е най-често с ръцете или
            главата, но също и с други части на тялото или с цялото тяло. Този
            вид движение и комуникация се нарича жестикулация. Също така отделни
            социални или професионални групи от хора имат специфични за тях
            жестове и знаци. Например в това отношение е армията, където жестови
            сигнали могат да се използват за насочване при кацане и излитане на
            самолети и вeртолети.
          </div>
        );
      case "Gesturing":
        return (
          <div>
            A gesture is a symbolic movement with the body for non-verbal
            (without the use of words) communication between people. This
            movement is most often with the hands or the head, but also with
            other parts of the body or with the whole body. This type of
            movement and communication is called gesturing. Also, individual
            social or professional groups of people have gestures and signs
            specific to them. An example in this regard is the military, where
            hand signals can be used to guide the landing and takeoff of
            airplanes and helicopters.
          </div>
        );
      case "Алгоритми":
        return (
          <div>
            При все че няма общоприета формална дефиниция на алгоритъм,
            неформално понятието може да се определи като „набор от правила,
            които точно дефинират някаква поредица от операции“. Това
            определение обхваща всички компютърни програми, включително тези,
            които не извършват числени изчисления, стига те да прекратяват
            работа след краен брой операции.
          </div>
        );
      case "Algorithms":
        return (
          <div>
            Although there is no generally accepted formal definition of an
            algorithm, informally the term can be defined as "a set of rules
            that precisely define some sequence of operations". This definition
            covers all computer programs, including those that do not perform
            numerical calculations, as long as they terminate after a finite
            number of operations.
          </div>
        );
      default:
        return <div>404 Думата не съществува</div>;
    }
  }

  return (
    <>
      <div className="fixed top-2 left-3">{word}</div>
      <WordCase mqn={word}></WordCase>
    </>
  );
}
