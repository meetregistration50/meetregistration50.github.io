

$(document).ready(function () {

    setTimeout(() => {
        $('#signInForm').slideDown();
    }, 500);

    //აქ მიუთითე რამდენმეტრიანი აუზიააააააააააააააააააააააააააააააააააააააააააააა

    let course = '50მ';


    let id, password;
    // აქ დააყენე აიდი და პაროლიიიიიიიიი
    $('#submit').on('click', function () {
        id = $('#id').val();
        password = $('#password').val();
        id = id.toLowerCase();
        password = password.toLowerCase();

        console.log(id, password);

        if (id == 'gurjaani' && password == 'giojeje777' ||id == 'გურჯაანი' && password == 'giojeje777' ||id == 'batumi' && password == 'ajarateam' ||id == 'ბათუმი' && password == 'ajarateam' ||id == 'str' && password == 'str444' || id == 'gldani' && password == '12345' || id == 'olympic' && password == '12345' || id == 'gsclub' && password == 'murjomarsaga' || id == 'achara' && password == 'marina1' || id == 'bist' && password == 'bga' || id == 'giorgisirbiladze' && password == '594622' || id == 'თემქა' && password == 'დელფინები' || id == 'temqa' && password == 'delfinebi' || id == 'temqa' && password == 'delpinebi' || id == 'gldani' && password == 'champion' || id == 'tonusi' && password == 'gioira' || id == 'aqva' && password == 'mari28' || id == 'gori' && password == 'mari27' || id == 'sachkhere' && password == 'auzi' || id == 'black sea' && password == 'blacksea2013' || id == 'gsssporttime' && password == '0023' || id == 'chiatura' && password == 'v@leri' || id == 'hualing' && password == '1919olmp') {
            $('#selectDivShadow').show();
            $('#selectsDiv2').show();
            $('#signInForm').hide();
        } else {
            $('.regInputs1').css({ 'background-color': 'rgb(230, 67, 67)' })
            setTimeout(() => {
                $('.regInputs1').css({ 'background-color': 'rgb(197, 212, 212)' })
            }, 500);

            setTimeout(() => {
                $('.regInputs1').css({ 'background-color': 'rgb(230, 67, 67)' })
            }, 1000);

            setTimeout(() => {
                $('.regInputs1').css({ 'background-color': 'rgb(197, 212, 212)' })
            }, 1500);

            setTimeout(() => {
                $('.regInputs1').css({ 'background-color': 'rgb(230, 67, 67)' })
            }, 2000);

            setTimeout(() => {
                $('.regInputs1').css({ 'background-color': 'rgb(197, 212, 212)' })
            }, 2500);

        }



    })



    setInterval(() => {
        let date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let hours = date.getHours();
        let minutes = date.getMinutes()
        let seconds = date.getSeconds();

        if (month < 10) {
            month = '0' + month;
        }
        if (year < 10) {
            year = '0' + year;
        }
        if (day < 10) {
            day = '0' + day;
        }
        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }


        $('#date').html(day + '.' + month + '.' + year)
        $('#clock').html(hours + ':' + minutes + ':' + seconds)
    }, 1000);


    function mistace1() {
        if (start == 1) {
            alert('გთხოვთ შეიყვანოთ მონაცემი შემდეგ ფორმატში 01:01.01')

            $("#wrapper" + countWrappers).children().first().next().next().next().next().next().children().first().next().addClass('redBackground');

            setTimeout(() => {
                $("#wrapper" + countWrappers).children().first().next().next().next().next().next().children().first().next().removeClass('redBackground');

            }, 500);

            setTimeout(() => {
                $("#wrapper" + countWrappers).children().first().next().next().next().next().next().children().first().next().addClass('redBackground');

            }, 1000);


            setTimeout(() => {
                $("#wrapper" + countWrappers).children().first().next().next().next().next().next().children().first().next().removeClass('redBackground');

            }, 1500);


            setTimeout(() => {
                $("#wrapper" + countWrappers).children().first().next().next().next().next().next().children().first().next().addClass('redBackground');

            }, 2000);

            setTimeout(() => {
                $("#wrapper" + countWrappers).children().first().next().next().next().next().next().children().first().next().removeClass('redBackground');

            }, 3000);
        }

    }

    function mistaceClub() {

        alert('გთხოვთ შეიყვანოთ მონაცემი "კლუბი:"')

        $('#page3').children().last().children().first().next().next().next().children().first().next().addClass('redBackground');

        setTimeout(() => {
            $('#page3').children().last().children().first().next().next().next().children().first().next().removeClass('redBackground');

        }, 500);

        setTimeout(() => {
            $('#page3').children().last().children().first().next().next().next().children().first().next().addClass('redBackground');

        }, 1000);


        setTimeout(() => {
            $('#page3').children().last().children().first().next().next().next().children().first().next().removeClass('redBackground');

        }, 1500);


        setTimeout(() => {
            $('#page3').children().last().children().first().next().next().next().children().first().next().addClass('redBackground');

        }, 2000);

        setTimeout(() => {
            $('#page3').children().last().children().first().next().next().next().children().first().next().removeClass('redBackground');

        }, 3000);
    }

    function mistaceAge() {

        alert('გთხოვთ შეიყვანოთ მონაცემი "დაბ.წელი:"')

        $('#page3').children().last().children().first().next().next().next().next().children().first().next().addClass('redBackground');

        setTimeout(() => {
            $('#page3').children().last().children().first().next().next().next().next().children().first().next().removeClass('redBackground');

        }, 500);

        setTimeout(() => {
            $('#page3').children().last().children().first().next().next().next().next().children().first().next().addClass('redBackground');

        }, 1000);


        setTimeout(() => {
            $('#page3').children().last().children().first().next().next().next().next().children().first().next().removeClass('redBackground');

        }, 1500);


        setTimeout(() => {
            $('#page3').children().last().children().first().next().next().next().next().children().first().next().addClass('redBackground');

        }, 2000);

        setTimeout(() => {
            $('#page3').children().last().children().first().next().next().next().next().children().first().next().removeClass('redBackground');

        }, 3000);
    }

    function mistaceGender() {

        alert('გთხოვთ აირჩიოთ "სქესი:"')

        $('#page3').children().last().children().first().next().next().children().first().next().addClass('redBackground');

        setTimeout(() => {
            $('#page3').children().last().children().first().next().next().children().first().next().removeClass('redBackground');

        }, 500);

        setTimeout(() => {
            $('#page3').children().last().children().first().next().next().children().first().next().addClass('redBackground');

        }, 1000);


        setTimeout(() => {
            $('#page3').children().last().children().first().next().next().children().first().next().removeClass('redBackground');

        }, 1500);


        setTimeout(() => {
            $('#page3').children().last().children().first().next().next().children().first().next().addClass('redBackground');

        }, 2000);

        setTimeout(() => {
            $('#page3').children().last().children().first().next().next().children().first().next().removeClass('redBackground');

        }, 3000);
    }



    let start = 0;
    let page = 1;
    let code = [];

    $('#back1').on('click', function () {

        $('#selectsDiv1').show();
        $('#selectDivShadow').show();
        $('#selectsDiv2').hide();
        $('#shortRes').hide();
        $('#helper').hide();
        $('#clickkk').hide();
        $('#page3').html('');
        page--;

    })

    $('#back2').on('click', function () {
        $('#selectDivShadow').show();
        $('#selectsDiv2').show();
        $('#page3').show();
        $('#clickkk').show();
        $('#back2').hide();
        $('#container1').hide();
        $('#falseReg').hide();
        $('#save').hide();
        // $('#back1').show();
        page--;

    })

    let countWrappers = 0;
    let wrappersArray = [];
    let header11;

    $('#button1').on('click', function () {
        if ($('#competitionName').val() && $('#year').val()) {

            $('#shortRes').show();
            $('#helper').show();
            $('#back1').show();
            trigger = 0;
            header11 = '<div id="header">' + $('#competitionName').val() + ' ' + $('#year').val() + '</div>'
            $('#page3').html(header11)

            $('#shortRes').html('');
            wrappersArray = [];
            countWrappers = 0;
            code = [];
            swimmerAllResultsArray = [];

            page++;
            $('#selectsDiv1').hide();
            $('#selectDivShadow').hide();
            $('#selectsDiv2').show();
        } else {
            alert('გთხოვთ შიყვანოთ მონაცემები!')
        }
    })



    $('#swimmerName').on('keyup', function () {
        $('#choice').show();
        $('#choice').html('');
        for (i = 0; i < namesList2.length; i++) {

            if ($('#swimmerName').val().length > 2 && namesList2[i].includes($('#swimmerName').val())) {
                $('#choice').append('<div class="choices">' + namesList2[i] + '</div>')
            }
        }

        $('#choice').children().on('click', function () {
            $('#swimmerName').val($(this).html())
            $('#choice').hide();
        })
    })

    function registration() {
        $('#choice').hide();
        $('#helper').html('')
        for (i = 0; i < code.length; i++) {
            if (code[i].time) {
                $('#helper').append('<div>' + code[i].name + '//' + code[i].age + '//' + code[i].club + '//' + code[i].event + '//' + code[i].gender + '//' + code[i].time + '//' + code[i].compName + '//' + code[i].date + '///' + '</div>')

            }
            if (!code[i].time) {
                $('#helper').append('<div>' + code[i].name + '//' + code[i].age + '//' + code[i].club + '//' + code[i].event + '//' + code[i].gender + '//' + $("#wrapper" + countWrappers).children().first().next().next().next().next().next().children().first().next().val() + '///' + '</div>')

                code[i].time = $("#wrapper" + countWrappers).children().first().next().next().next().next().next().children().first().next().val();
                code[i].compName = '-';
                code[i].date = '-';
            }

        }

        if ($('#style').val() && $('#distance').val() && $('#swimmerName').val()) {
            $('#clickkk').show();
            trigger = 1;
            count = 0;
            abzo = 0;
            irachka = 0;
            swimmerAllResultsArray = [];
            let distance, style, style1, year, competitionName, event;

            distance = $('#distance').val();
            style = $('#style').val();
            year = $('#year').val();
            compName = $('#competitionName').val();

            function convertStyleName(fullName, shortName) {
                if (style == fullName) {
                    style1 = shortName
                }
            }

            event = distance + ' ' + style;

            convertStyleName('ბატერფლაი', 'ბატ.')
            convertStyleName('გულაღმა', 'გ/ც')
            convertStyleName('კომპლექსი', 'კომპლექსი')
            convertStyleName('თავისუფალი', 'თ/ყ')
            convertStyleName('ბრასი', 'ბრასი')

            event = distance + ' ' + style1;


            for (i = '0'; i < compsArray.length; i++) {
                if (compsArray[i].results) {
                    for (j = 0; j < compsArray[i].results.length; j++) {
                        if ($('#swimmerName').val() == compsArray[i].results[j].name && compsArray[i].course == course && compsArray[i].event == event && compsArray[i].results[j].result != 'მოხსნილია') {

                            Object.assign(compsArray[i].results[j], { event: compsArray[i].event })
                            Object.assign(compsArray[i].results[j], { gender: compsArray[i].gender })
                            Object.assign(compsArray[i].results[j], { date: compsArray[i].date })
                            Object.assign(compsArray[i].results[j], { course: compsArray[i].course })
                            Object.assign(compsArray[i].results[j], { event: compsArray[i].event })
                            Object.assign(compsArray[i].results[j], { compName: compsArray[i].compName })
                            Object.assign(compsArray[i].results[j], { date: compsArray[i].date })
                            swimmerAllResultsArray.push(compsArray[i].results[j]);
                            abzo = 1;
                        }
                    }

                }

            }

            checkExistance = 0;

            let options;
            let clubs = ['რუსთავი', 'ეს თი ერ','გურჯაანი', 'ტონუსი', 'ბლექ სი', 'ჯი ეს სი', 'ჯი ეს ეს', 'გლდანი', 'ჰუალინგი', 'არენა', 'თემქა', 'პენტა', 'საჩხერე', 'ჭიათურა', 'ნეპტუნი', 'თემქა', 'ჰუალინგი', 'სპორტ ტაიმი', 'აჭარა', 'ბათუმი']
            for (let i = 0; i < clubs.length; i++) {
                options += "<option>" + clubs[i] + "</option>"
            }

            if (abzo == 1) {
                swimmerAllResultsArray.sort((a, b) => {
                    return b.points - a.points;
                });




                for (i = 0; i < wrappersArray.length; i++) {
                    if (wrappersArray[i].event == distance + ' ' + style && $('#swimmerName').val() == wrappersArray[i].swimmerName) {
                        checkExistance = 1;

                    }
                }

                if (checkExistance == 0) {
                    countWrappers++;
                    $('#page3').append('<div id="wrapper' + countWrappers + '" class="wrapper"><div class="nameAndData"><label>დისციპლინა:</label><span class="data dataEvent" id="event' + swimmerNum + '"></span></div><div class="nameAndData"><label>სახელი:</label><span class="data" id="name' + swimmerNum + '"></span></div><div class="nameAndData"><label>სქესი:</label><span class="data dataGender" id="gender' + swimmerNum + '"></span></div><div class="nameAndData"><label>კლუბი:</label><input  type="text" list="clubsList"  class="data clubLetters" id="club' + swimmerNum + '"/><datalist id="clubsList">' +

                        options

                        + '</datalist></div><div class="nameAndData"><label>დაბ.წელი:</label><input class="data ageNumbers" id="age' + swimmerNum + '"/></div><div class="nameAndData"><label>შედეგი:</label><span class="data" id="time' + swimmerNum + '"></span></div><div class="nameAndData"><label>შეჯიბრი:</label><span class="data" id="compName' + swimmerNum + '"></span></div><div class="nameAndData"><label>თარიღი:</label><span class="data" id="date' + swimmerNum + '"></span></div><div class="deleteWrapper">წაშლა</div></div>');

                }

            }

            if (abzo == 0) {
                for (i = '0'; i < compsArray.length; i++) {
                    if (compsArray[i].results) {
                        for (j = 0; j < compsArray[i].results.length; j++) {
                            if ($('#swimmerName').val() == compsArray[i].results[j].name && compsArray[i].course == course) {
                                Object.assign(compsArray[i].results[j], { event: compsArray[i].event })
                                Object.assign(compsArray[i].results[j], { gender: compsArray[i].gender })
                                Object.assign(compsArray[i].results[j], { date: compsArray[i].date })
                                Object.assign(compsArray[i].results[j], { course: compsArray[i].course })
                                Object.assign(compsArray[i].results[j], { event: compsArray[i].event })
                                Object.assign(compsArray[i].results[j], { compName: compsArray[i].compName })
                                Object.assign(compsArray[i].results[j], { date: compsArray[i].date })
                                noTimeSwimmer = compsArray[i].results[j];
                                count = 1;
                                irachka = 1;
                            }
                        }
                    }
                }


                countWrappers++;

                if (irachka == 0) {
                    for (i = 0; i < wrappersArray.length; i++) {
                        if (wrappersArray[i].event == distance + ' ' + style && $('#swimmerName').val() == wrappersArray[i].swimmerName) {
                            checkExistance = 1;

                        }
                    }

                    if (checkExistance == 0) {
                        $('#page3').append('<div id="wrapper' + countWrappers + '"  class="wrapper"><div class="nameAndData"><label>დისციპლინა:</label><span class="data dataEvent" id="event' + swimmerNum + '"></span></div><div class="nameAndData"><label>სახელი:</label><span class="data nameLetters" id="name' + swimmerNum + '"></span></div><div class="nameAndData"><label>სქესი:</label><span class="data dataGender" id="gender' + swimmerNum + '"><span class="littleClass">კაცი</span><span class="littleClass">ქალი</span></span></div><div class="nameAndData"><label>კლუბი:</label><input type="text" list="clubsList" class="data clubLetters" id="club' + swimmerNum + '"/><datalist id="clubsList">' +

                            options

                            + '</datalist></div><div class="nameAndData"><label>დაბ.წელი:</label><input class="data ageNumbers" id="age' + swimmerNum + '"/></div><div class="nameAndData"><label>შედეგი:</label><input class="data resultNumbers" id="time' + swimmerNum + '"/></div><div class="deleteWrapper">წაშლა</div></div>');
                    }
                }
            }

            if (irachka == 1) {
                for (i = 0; i < wrappersArray.length; i++) {
                    if (wrappersArray[i].event == distance + ' ' + style && $('#swimmerName').val() == wrappersArray[i].swimmerName) {
                        checkExistance = 1;

                    }
                }

                if (checkExistance == 0) {
                    $('#page3').append('<div id="wrapper' + countWrappers + '"  class="wrapper"><div class="nameAndData"><label>დისციპლინა:</label><span class="data dataEvent" id="event' + swimmerNum + '"></span></div><div class="nameAndData"><label>სახელი:</label><span class="data nameLetters" id="name' + swimmerNum + '"></span></div><div class="nameAndData"><label>სქესი:</label><span class="data dataGender" id="gender' + swimmerNum + '"></span></div><div class="nameAndData"><label>კლუბი:</label><input type="text" list="clubsList" class="data clubLetters" id="club' + swimmerNum + '"/><datalist id="clubsList">' +

                        options

                        + '</datalist></div><div class="nameAndData"><label>დაბ.წელი:</label><input class="data ageNumbers" id="age' + swimmerNum + '"/></div><div class="nameAndData"><label>შედეგი:</label><input class="data resultNumbers" id="time' + swimmerNum + '"/></div><div class="deleteWrapper">წაშლა</div></div>');
                }
            }



            $('.littleClass').on('click', function () {
                $(this).parent().html($(this).html())
            })

            $('.littleClass').on('mouseover', function () {
                $(this).addClass('addBackGroundToGender');
                $(this).css({ 'border': '1.7px solid black' })
                $(this).siblings().removeClass('addBackGroundToGender');
                $(this).siblings().css({ 'border': 'none' })
            })

            $('.littleClass').on('mouseout', function () {
                $(this).removeClass('addBackGroundToGender');
                $(this).siblings().removeClass('addBackGroundToGender');
            })




            let gender;



            $('#page3').show();


            if (abzo == 1) {
                if (swimmerAllResultsArray[0].gender == 'კაცები') {
                    gender = 'კაცი'
                }

                if (swimmerAllResultsArray[0].gender == 'ქალები') {
                    gender = 'ქალი'
                }

                $('#name' + swimmerNum).html($('#swimmerName').val());
                $('#club' + swimmerNum).val(swimmerAllResultsArray[0].club);
                $('#age' + swimmerNum).val(swimmerAllResultsArray[0].age);
                $('#time' + swimmerNum).html(swimmerAllResultsArray[0].result);
                $('#gender' + swimmerNum).html(gender);
                $('#event' + swimmerNum).html(distance + ' ' + style);
                $('#compName' + swimmerNum).html(swimmerAllResultsArray[0].compName);
                $('#date' + swimmerNum).html(swimmerAllResultsArray[0].date);

            }

            if (abzo == 0 && noTimeSwimmer && irachka == 0) {
                if (noTimeSwimmer.gender == 'კაცები') {
                    gender = 'კაცი'
                }

                if (noTimeSwimmer.gender == 'ქალები') {
                    gender = 'ქალი'
                }
                $('#name' + swimmerNum).html($('#swimmerName').val());
                $('#club' + swimmerNum).val(noTimeSwimmer.club);
                $('#age' + swimmerNum).val(noTimeSwimmer.age);
                $('#time' + swimmerNum).val('');
                $('#gender' + swimmerNum).val(gender);
                $('#event' + swimmerNum).html(distance + ' ' + style);
            }

            if (irachka == 1) {
                if (noTimeSwimmer.gender == 'კაცები') {
                    gender = 'კაცი'
                }

                if (noTimeSwimmer.gender == 'ქალები') {
                    gender = 'ქალი'
                }

                $('#name' + swimmerNum).html($('#swimmerName').val());
                $('#club' + swimmerNum).val(noTimeSwimmer.club);
                $('#age' + swimmerNum).val(noTimeSwimmer.age);
                $('#time' + swimmerNum).html(noTimeSwimmer.result);
                $('#gender' + swimmerNum).html(gender);
                $('#event' + swimmerNum).html(distance + ' ' + style);

            }

            if (abzo == 0 && !noTimeSwimmer) {
                $('#name' + swimmerNum).html($('#swimmerName').val());
                $('#event' + swimmerNum).html(distance + ' ' + style);
            }

            let forChangeName, forChangetime, forChangeEvent, forChangeAge, forChangeClub, forChangeGender;

            $('.resultNumbers').on('change', function (e) {

                forChangeName = $(this).parent().prev().prev().prev().prev().children().first().next().html();
                forChangetime = $(this).val();
                forChangeEvent = $(this).parent().prev().prev().prev().prev().prev().children().first().next().html()

                for (i = 0; i < code.length; i++) {
                    if (code[i].event == forChangeEvent && code[i].name == forChangeName) {
                        code[i].time = forChangetime;
                    }
                    if (!code[i].compName) {
                        code[i].compName = '-';
                    }
                    if (!code[i].date) {
                        code[i].date = '-';
                    }
                }

            })

            $('.clubLetters').on('change', function () {
                forChangeEvent = $(this).parent().prev().prev().prev().children().first().next().html()
                forChangeClub = $(this).val()
                forChangeName = $(this).parent().prev().prev().children().first().next().html()

                for (i = 0; i < code.length; i++) {
                    if (code[i].event == forChangeEvent && code[i].name == forChangeName) {
                        code[i].club = forChangeClub;
                    }

                }
            })

            $('.dataGender').on('click', function () {
                forChangeEvent = $(this).parent().prev().prev().children().first().next().html()
                forChangeName = $(this).parent().prev().children().first().next().html()
                forChangeGender = $(this).html();

                for (i = 0; i < code.length; i++) {
                    if (code[i].event == forChangeEvent && code[i].name == forChangeName) {
                        code[i].gender = forChangeGender;
                    }

                }
            })


            $('.ageNumbers').on('change', function () {
                forChangeEvent = $(this).parent().prev().prev().prev().prev().children().first().next().html()
                forChangeAge = $(this).val()
                forChangeName = $(this).parent().prev().prev().prev().children().first().next().html()
                for (i = 0; i < code.length; i++) {
                    if (code[i].event == forChangeEvent && code[i].name == forChangeName) {
                        code[i].age = forChangeAge;
                    }

                }
            })

            $('.resultNumbers').on('keypress', function (e) {
                setTimeout(() => {
                    if ($(this).val().length == 2) {
                        $(this).val($(this).val() + ':');
                    }
                    if ($(this).val().length == 5) {
                        $(this).val($(this).val() + '.');
                    }
                }, 10);

            })



            if ($('#name' + swimmerNum).html()) {
                code.push({
                    'name': $('#name' + swimmerNum).html(),
                    'club': $('#club' + swimmerNum).val(),
                    'age': $('#age' + swimmerNum).val(),
                    'time': $('#time' + swimmerNum).html(),
                    'gender': $('#gender' + swimmerNum).html(),
                    'event': $('#event' + swimmerNum).html(),
                    'compName': $('#compName' + swimmerNum).html(),
                    'date': $('#date' + swimmerNum).html()
                })
            }



            if (checkExistance == 0) {
                wrappersArray.push(
                    {
                        'event': $('#event' + swimmerNum).html(),
                        'swimmerName': $('#swimmerName').val()
                    }
                )
                swimmerNum++;
            }

            $('#shortRes').html('');


            for (i = 0; i < wrappersArray.length; i++) {
                $('#shortRes').append('<div id="swimmer"' + (i + 1) + '>' + (i + 1) + ') ' + wrappersArray[i].swimmerName + '\xa0\xa0\xa0' + wrappersArray[i].event + '</div>');
            }
        } else {
            alert('გთხოვთ შიყვანოთ მონაცემები!');
        }


        let disciplina, saxeli;

        $('.deleteWrapper').on('click', function () {
            trigger = 0;
            $(this).parent().remove();
            disciplina = $(this).parent().children().first().children().first().next().html();
            saxeli = $(this).parent().children().first().next().children().first().next().html();

            for (i = 0; i < wrappersArray.length; i++) {
                if (wrappersArray[i].event == disciplina && wrappersArray[i].swimmerName == saxeli) {
                    wrappersArray.splice(i, 1);
                }
            }

            for (i = 0; i < code.length; i++) {
                if (code[i].event == disciplina && code[i].name == saxeli) {
                    code.splice(i, 1);
                }
            }

            $('#helper').html('')

            for (i = 0; i < code.length; i++) {
                if (!code[i].time) {
                    $('#helper').append('<div>' + code[i].name + '//' + code[i].age + '//' + code[i].club + '//' + code[i].event + '//' + code[i].gender + '///' + '</div>')
                }
                if (code[i].time) {
                    $('#helper').append('<div>' + code[i].name + '//' + code[i].age + '//' + code[i].club + '//' + code[i].event + '//' + code[i].gender + '//' + code[i].time + '//' + code[i].compName + '//' + code[i].date + '///' + '</div>')
                }
            }



            $('#shortRes').html('');
            for (i = 0; i < wrappersArray.length; i++) {
                $('#shortRes').append('<div id="swimmer"' + (i + 1) + '>' + (i + 1) + ') ' + wrappersArray[i].swimmerName + '\xa0\xa0\xa0' + wrappersArray[i].event + '</div>');
            }


            if ($('#page3').html() == header11) {
                trigger = 0;
            }

            countWrappers--;

        })

    }

    let swimmerAllResultsArray = [];
    let swimmerNum = 1;
    let abzo = 0;
    let irachka = 0;
    let noTimeSwimmer;
    let count;
    let checkExistance;
    let trigger = 0;

    $('#registration').on('click', function () {

        abzo = 0;
        irachka = 0;
        noTimeSwimmer = undefined;
        if (trigger == 0) {
            registration();
        }

        if (trigger == 1) {
            if ($('#page3').children().last().children().first().next().next().next().next().next().children().first().next().html().split('')[2] == ':' || $('#page3').children().last().children().first().next().next().next().next().next().children().first().next().val().split('')[2] == ':') {
                if ($('#page3').children().last().children().first().next().next().next().next().next().children().first().next().html().split('')[5] == '.' || $('#page3').children().last().children().first().next().next().next().next().next().children().first().next().val().split('')[5] == '.') {
                    if ($('#page3').children().last().children().first().next().next().next().next().next().children().first().next().html().length == 8 || $('#page3').children().last().children().first().next().next().next().next().next().children().first().next().val().length == 8) {
                        if ($('#page3').children().last().children().first().next().next().next().children().first().next().val()) {
                            if ($('#page3').children().last().children().first().next().next().next().next().children().first().next().val() > 1900 && $('#page3').children().last().children().first().next().next().next().next().children().first().next().val() < 2100) {
                                if ($('#page3').children().last().children().first().next().next().children().first().next().html() == 'კაცი' || $('#page3').children().last().children().first().next().next().children().first().next().html() == 'ქალი') {
                                    registration();
                                } else {
                                    mistaceGender()
                                }
                            } else {
                                mistaceAge()
                            }

                        } else {
                            mistaceClub()
                        }

                    } else {
                        mistace1()
                        console.log('ggggg')
                    }
                } else {
                    mistace1()
                    console.log('ggggg')
                }
            } else {
                mistace1()
                console.log('ggggg')
            }
        }
        start = 1;
    })



    $('#clickkk').on('click', function () {
        $('#choice').hide();
        $('#selectDivShadow').hide();
        if ($('#page3').children().last().children().first().next().next().next().next().next().children().first().next().html().split('')[2] == ':' || $('#page3').children().last().children().first().next().next().next().next().next().children().first().next().val().split('')[2] == ':') {
            if( $('#page3').children().last().children().first().next().next().next().next().next().children().first().next().html().split('')[5] == '.' || $('#page3').children().last().children().first().next().next().next().next().next().children().first().next().val().split('')[5] == '.') {
                if($('#page3').children().last().children().first().next().next().next().next().next().children().first().next().html().length == 8 || $('#page3').children().last().children().first().next().next().next().next().next().children().first().next().val().length == 8) {
            if ($('#page3').children().last().children().first().next().next().next().children().first().next().val()) {
                if ($('#page3').children().last().children().first().next().next().next().next().children().first().next().val() > 1900 && $('#page3').children().last().children().first().next().next().next().next().children().first().next().val() < 2100) {
                    if ($('#page3').children().last().children().first().next().next().children().first().next().html() == 'კაცი' || $('#page3').children().last().children().first().next().next().children().first().next().html() == 'ქალი') {


                        $('#helper').html('')
                        $('#back1').hide();
                        for (i = 0; i < code.length; i++) {
                            if (!code[i].time) {
                                $('#helper').append('<div>' + code[i].name + '//' + code[i].age + '//' + code[i].club + '//' + code[i].event + '//' + code[i].gender + '//' + $("#wrapper" + countWrappers).children().first().next().next().next().next().next().children().first().next().val() + '///' + '</div>')
                            }
                            if (code[i].time) {
                                $('#helper').append('<div>' + code[i].name + '//' + code[i].age + '//' + code[i].club + '//' + code[i].event + '//' + code[i].gender + '//' + code[i].time + '//' + code[i].compName + '//' + code[i].date + '///' + '</div>')
                            }
                        }

                        $('#massage').html($('#helper').html() + $('#date').html() + '/' + $('#clock').html());

                        $('#selectsDiv2').hide();
                        $('#clickkk').hide();
                        $('#back2').show();
                        $('#container1').show();
                        if ($('#firstName').val() == '' || $('#lastName').val() == '' || $('#email').val() == '') {
                            $('#falseReg').show();
                        }
                        $('#page3').hide();
                        $('#save').show();
                        page++;
                    } else {
                        mistaceGender()
                    }
                } else {
                    mistaceAge()
                }

            } else {
                mistaceClub()
            }

        } else {
            mistace1();
        } 
    } else {
        mistace1();
    }
} else {
    mistace1();
}

    })


    // სახელს გვარს და იმეილს თუ არ ჩაწერ რეგისტრაციის ღილაკი არ გამოჩნდება

    $('.regInputs').on('change', function () {
        if ($('#firstName').val() != '' && $('#lastName').val() != '' && $('#email').val() != '') {
            $('#regButton').show();
            $('#falseReg').hide();
        }

        if ($('#firstName').val() == '' || $('#lastName').val() == '' || $('#email').val() == '') {
            $('#regButton').hide();
            $('#falseReg').show();
        }
    })

    $('.regInputs').on('keyup', function () {
        if ($('#firstName').val() != '' && $('#lastName').val() != '' && $('#email').val() != '') {
            $('#regButton').show();
            $('#falseReg').hide();
        }

        if ($('#firstName').val() == '' || $('#lastName').val() == '' || $('#email').val() == '') {
            $('#regButton').hide();
            $('#falseReg').show();
        }
    })



    if ($('#firstName').val() != '' && $('#lastName').val() != '' && $('#email').val() != '') {
        $('#regButton').show();
        $('#falseReg').hide();
    }

    if ($('#firstName').val() == '' || $('#lastName').val() == '' || $('#email').val() == '') {
        $('#regButton').hide();
    }

    $('#falseReg').on('click', function () {
        if ($('#firstName').val() == '' || $('#lastName').val() == '' || $('#email').val() == '') {
            alert('გთხოვთ შეავსოთ "სახელი:", "გვარი:", "იმეილი"')
        }
    })

})
