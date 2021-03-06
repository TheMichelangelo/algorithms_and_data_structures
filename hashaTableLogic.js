function changeURL() {
    var URL = window.location.href.split('/');
    var val = document.getElementById("Language").value;
    URL[3] = val;
    window.location.assign(URL.join('/'));
}

var PHP_DOMAIN = "";

// surprise colour!
// Referenced to in  home.js and viz.js also
var colourArray = ["#52bc69", "#d65775"/*"#ed5a7d"*/, "#2ebbd1", "#d9513c", "#fec515", "#4b65ba", "#ff8a27", "#a7d41e"]; // green, pink, blue, red, yellow, indigo, orange, lime

function disableScroll() { $('html').css('overflow', 'hidden'); }

function enableScroll() { $('html').css('overflow', 'visible'); }

function replaceAll(find, replace, str) { return str.replace(new RegExp(find, 'g'), replace); }

function getColours() {
    var generatedColours = new Array();
    while (generatedColours.length < 4) {
        var n = (Math.floor(Math.random() * colourArray.length));
        if ($.inArray(n, generatedColours) == -1)
            generatedColours.push(n);
    }
    return generatedColours;
}

function isOn(value, position) {
    return (value >> position) & 1 === 1;
}

function customAlert(msg) {
    $('#custom-alert p').html(msg);
    var m = -1 * ($('#custom-alert').outerHeight() / 2);
    $('#custom-alert').css('margin-top', m + 'px');
    $('#dark-overlay').fadeIn(function () {
        $('#custom-alert').fadeIn(function () {
            setTimeout(function () {
                $('#custom-alert').fadeOut(function () {
                    $('#dark-overlay').fadeOut();
                });
            }, 1000);
        });
    });
}

function showLoadingScreen() {
    $('#loading-overlay').show();
    $('#loading-message').show();
}

function hideLoadingScreen() {
    $('#loading-overlay').hide();
}

function commonAction(retval, msg) {
    //setTimeout(function() {
    if (retval) { // mode == "exploration" && // now not only for exploration mode, but check if this opens other problems
        $('#current-action').show();
        $('#current-action').html(mode == "exploration" ? msg : ("e-Lecture Example (auto play until done)<br>" + msg));
        $('#progress-bar').slider("option", "max", gw.getTotalIteration() - 1);
        triggerRightPanels();
        isPlaying = true;
    }
    //}, 500);
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable)
            return decodeURIComponent(pair[1]);
    }
    return "";
}

var generatedColours = getColours();
var surpriseColour = colourArray[generatedColours[0]];
var colourTheSecond = colourArray[generatedColours[1]];
var colourTheThird = colourArray[generatedColours[2]];
var colourTheFourth = colourArray[generatedColours[3]];

$(function () {
    $('.links').css('background', surpriseColour);
    $('.right-links').css('background', surpriseColour);
    $('#login-go').css('background', surpriseColour);

    $('.colour').css("color", surpriseColour); // name
    $('h4').css("background-color", surpriseColour); // about, contact us etc. button background

    // title
    $('#title a').click(function () {
        $('#title a').removeClass('selected-viz');
        $(this).addClass('selected-viz');
        // temporary quick fix for Google Chrome Aug 2016 issue...
        setTimeout(function () { document.body.style.zoom = "100.1%"; }, 100); // force resize/redraw...
        setTimeout(function () { document.body.style.zoom = "100%"; }, 600);
    });

    // overlays stuffs
    $('#trigger-about').click(function () {
        if ($(window).width() > 600) {
            $('#dark-overlay').fadeIn(function () {
                $('#about').fadeIn();
            });
        }
        else
            alert('Sorry, this dialog is too big. Please load it on bigger screen');
    });

    $('#trigger-team').click(function () {
        if ($(window).width() > 600) {
            $('#dark-overlay').fadeIn(function () {
                $('#team').fadeIn();
            });
        }
        else
            alert('Sorry, this dialog is too big. Please load it on bigger screen');
    });

    $('#trigger-terms').click(function () {
        if ($(window).width() > 600) {
            $('#dark-overlay').fadeIn(function () {
                $('#termsofuse').fadeIn();
            });
        }
        else
            alert('Sorry, this dialog is too big. Please load it on bigger screen');
    });

    $('.close-overlay').click(function () {
        $('.overlays').fadeOut(function () {
            $('#dark-overlay').fadeOut();
        });
    });

    $('#dark-overlay').click(function () {
        $('.overlays').fadeOut();
        $('#dark-overlay').fadeOut();
    });

    $.get('/isloggedin', function (data) {
        var isLoggedIn = data['isloggedin'] == '1';
        var element;
        if (isLoggedIn) {
            // element = '<a onclick="verifyLogout()">Logout</a>';
            element = '<a href="https://visualgo.net/profile">Profile</a>';
        }
        else {
            element = '<a href="https://visualgo.net/login">Login</a>'
        }
        $('#useraccount').html(element);
    });
});

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-1566631-4', 'auto');
ga('send', 'pageview');
  </script >

    <script
        src="./VisuAlgo - Hash Table (Open Addressing_ Linear Probing, Quadratic Probing, Double Hashing and Closed Addressing_ Separate Chaining)_files/jquery-ui.min.js.Без названия"></script>

    <script
        src="./VisuAlgo - Hash Table (Open Addressing_ Linear Probing, Quadratic Probing, Double Hashing and Closed Addressing_ Separate Chaining)_files/d3.min.js.Без названия"></script>
    <script
        src="./VisuAlgo - Hash Table (Open Addressing_ Linear Probing, Quadratic Probing, Double Hashing and Closed Addressing_ Separate Chaining)_files/viz-1.0.3.js.Без названия"></script>
    <script
        src="./VisuAlgo - Hash Table (Open Addressing_ Linear Probing, Quadratic Probing, Double Hashing and Closed Addressing_ Separate Chaining)_files/visualgo_print.js.Без названия"></script>
    <script
        src="./VisuAlgo - Hash Table (Open Addressing_ Linear Probing, Quadratic Probing, Double Hashing and Closed Addressing_ Separate Chaining)_files/graph_library.js.Без названия"></script>
    <script>

        window.onpopstate = function (event) {
      var slide = event.state['slide'];
    };

    function getUrlParameter(sParam) {
      var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'), sParameterName, i;

      for (i = 0; i < sURLVariables.length; {
            sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) return sParameterName[1] === undefined ? true : sParameterName[1];
      }
    };

    function pushState(slideValue) {
      var url = '/en/hashtable';
      if (typeof slideValue != 'undefined' && slideValue != null) url += '?slide=' + slideValue;
      window.history.pushState({slide: slideValue }, "slide " + slideValue, url);
    }

    function showPopup(callback) {
            $('#popup').fadeIn(100, callback);
    }

    function hidePopup(callback) {
            $('#popup').fadeOut(100, callback);
    }

    function showOverlay() {
            $('#overlay').css('opacity', 0.5);
      $('#overlay').show();
    }

    function hideOverlay() {
            $('#overlay').hide();
      $("#e-lecture").html("");
    }

    function makeOverlayTransparent() {
            $('#overlay').css('opacity', 0);
    }

    function hideSlide(callback) {
            isPlaying = true;
      closeSlide(cur_slide, function () {
            makeOverlayTransparent();
        setTimeout(callback, 700); // don't immediately run the animation, wait for 500ms+ first
      });
    }

    function showSlide() {
            isPlaying = false;
      openSlide(cur_slide);
      showOverlay();
    }

    $(function () {
      var slide = getUrlParameter('slide');

      $.get('/hasvisited' + '/hashtable', function (data) {
        var hasVisited = data['hasvisited'] == '1';
        if (!hasVisited) {
          var postData = {
            '_token': '1rTdbkKhsrfMlItOjS9yNboTQ6kKDO8H8BGTQj0w',
            'page': '/hashtable'.substring(1),
          };

          $.post("/visitpage", postData, function (data) {
            // non critical request...
        });

          if (typeof slide != undefined && slide != null) {
            cur_slide = slide;
          }

          $("#mode-menu a").trigger("click");
        }
        else {
          if (typeof slide != undefined && slide != null) {
            cur_slide = slide;
            $('#mode-menu a').click();
          }
        }
      }).fail(function () {
        if (typeof slide != undefined && slide != null) {
            cur_slide = slide;
          $('#mode-menu a').click();
        }
      });

      $('.mcq-submit').click(function () {
        var questionId = parseInt($(this).attr('id').split('-')[1]);
        var answer = $('#mcq-answer-' + questionId).val();
        var userAnswer = $('input[type=radio][name=mcq-' + questionId + '-choice]:checked').val();

        if (answer === userAnswer) {
            $('#answer-status-' + questionId).html('<font color="green"><b>Correct!</b></font>');
        }
        else {
            $('#answer-status-' + questionId).html('<font color="red"><b>Wrong Answer! Try again...</b></font>');
        }
        $('#answer-status-' + questionId).show();
        setTimeout(function () {
            $('#answer-status-' + questionId).fadeOut(1000);
        }, 1000);
      });

      $('.msq-submit').click(function () {
        var questionId = parseInt($(this).attr('id').split('-')[1]);
        var answer = $('#msq-answer-' + questionId).val();

        var answers = [];
        $('input[type=checkbox][class=msq-choice]:checked').each(function () {
            answers.push($(this).attr('id').split('-')[3]);
        });
        answers.sort();
        var userAnswer = answers.join(',');

        if (answer === userAnswer) {
            $('#answer-status-' + questionId).html('<font color="green">Correct!</font>');
        }
        else {
            $('#answer-status-' + questionId).html('<font color="red">Wrong Answer! Try again...</font>');
        }
        $('#answer-status-' + questionId).show();
        setTimeout(function () {
            $('#answer-status-' + questionId).fadeOut(1000);
        }, 1000);
      });

      $('select.lecture-dropdown').change(function () {
        var nextSlide = $(this).val();
        openSlide(nextSlide, function () {
            runSlide(nextSlide);
          pushState(nextSlide);
        });
      });

      $('#hide-popup').click(function () {
            hidePopup();
      });

      $('#popup').hover(function () {
            $('#hide-popup').show();
      }, function () {
            $('#hide-popup').hide();
      });

    });

    function adjustPopupToImageSize() {
      var width = $('#popup-image').prop('width');
      var height = $('#popup-image').prop('height');
      $('#popup').width(width + 20);
      $('#popup').height(height + 20);
      if (width == 0 && height == 0) {
            setTimeout(adjustPopupToImageSize, 200);
      } else {
            showPopup();
      }
    }

    function POPUP_IMAGE(url) {
            $('#popup-content').html('<img id="popup-image" src="' + url + '">');
      adjustPopupToImageSize();
    }

    function URL(url) {
            window.open(url, '_blank');
    }

    // Implement these functions in each visualisation
    // This function will be called before entering e-Lecture Mode
    function ENTER_LECTURE_MODE() {}

    // This function will be called before returning to Explore Mode
    function ENTER_EXPLORE_MODE() {}

    </script>
    <script type="text/javascript">
    // HashTable Widget
    // original author: Steven Halim
    // Defines a HashTable object; keeps implementation of Hash Table internally and interact with GraphWidget to display Hash Table visualizations
    // will add Separate Chaining sometime soon...

        var HashTable = function () {
      var self = this;
      var gw = new GraphWidget();
      var activeStatus = "-";
      var maxHashTableSize = 19; // we only allow primes up to 17
      var primes = [3, 5, 7, 11, 13, 17, 19]; // OK, only these 5 primes are actually within our range of allowed Hash Table size
      var EMPTY = -1; // use -1 to indicate EMPTY element
      var DELETED = -2; // use -2 to indicate DELETED element
      var HT;  // HT: the Array that represents the state of the Hash Table in Open Addressing
      var HT_SC; // HT_SC: Adjacency List like structure to represent the state of the Hash Table in Separate Chaining
      var N = 4; // number of elements actually present in the hash table

      this.setActiveStatus = function (newActiveStatus) {
        if (activeStatus != newActiveStatus) {
            activeStatus = newActiveStatus;
          if (activeStatus == "SC") { // Separate Chaining
            HT_SC = [[11], [1], [24, 13, 35], [14], [], [27], [28], [18, 7], [8], [], [21, 10]];
            N = 13;
            initSC(HT_SC);
          }
          else { // Open Addressing
            if (activeStatus == "LP") {
            HT = [14, 21, 1, EMPTY, 18, EMPTY, EMPTY];
              N = 4;
            }
            else if (activeStatus == "QP") {
            HT = [38, EMPTY, EMPTY, 3, 18, EMPTY, EMPTY];
              N = 3;
            }
            else if (activeStatus == "DH") {
            HT = [14, EMPTY, EMPTY, 7, 18, EMPTY, EMPTY];
              N = 3;
            }
            init(HT);
          }
        }
      }

      this.getActiveStatus = function () { return activeStatus; }

      this.getGraphWidget = function () { return gw; }

      this.createTable = function (sz) {
        if (sz > maxHashTableSize) {
            // Sorry, maximum allowed Hash Table size is
            $('#create-err').html('Sorry, maximum allowed Hash Table is ' + maxHashTableSize);
          return false;
        }
        else if (sz < 5) {
            // Sorry, Hash Table size should be ≥
            $('#create-err').html('Sorry, Hash Table size should be &ge; ' + "5");
          return false;
        }

        N = 0;
        if (activeStatus == "SC") { // Separate Chaining
            HT_SC = new Array(sz);
          for (var i = 0; i < sz; i++) HT_SC[i] = [];
          initSC(HT_SC);
        }
        else if (activeStatus != "SC") { // NOT Separate Chaining means Open Addressing where we cannot have big table
            HT = new Array(sz);
          for (var i = 0; i < sz; i++) HT[i] = EMPTY;
          init(HT);
        }
      };

      this.createTableSpecial = function (_HT) {
            HT = _HT;
        N = 0;
        for (var i = 0; i < HT.length; i++) if (HT[i] != EMPTY) N++;
        init(HT);
      }

      this.generate = function (arr) {
        if (arr.length > maxHashTableSize) {
            // Sorry, maximum allowed Hash Table size is
            $('#create-err').html('Sorry, maximum allowed Hash Table is ' + maxHashTableSize);
          return;
        }
        if (arr.length < 5) {
            // Sorry, Hash Table size should be ≥
            $('#create-err').html('Sorry, Hash Table size should be &ge; ' + "5");
          return;
        }

        for (var i = 0; i < arr.length; {
            arr[i] = parseInt(arr[i]);
          if (arr[i] < EMPTY) {
            $('#create-err').html('Sorry, Hash Table cannot contain negative integers'); // put in variable soon
            return; // can't create this hashtable
          }
        }
        init(arr);
      };

      function init(initArr) {
        var scale = (1000 - 100) / (initArr.length - 1);

        // remove old ones first (if exist)
        try {
          for (var i = 0; i < 20 * 8; i++) { // I don't record how many but not more than 19*7
            gw.removeVertex(i);
            gw.removeEdge(i);
          }
        }
        catch (e) { // do nothing if that vertex actually not yet exist

        }

        HT = new Array(); // destroy previous content first...
        for (var i = 0; i < initArr.length; {
            HT[i] = initArr[i];
          gw.addVertex(50 + i * scale, 100, (HT[i] == EMPTY ? '' : (HT[i] == DELETED ? 'DEL' : HT[i])), i, true, "i:" + i);
        }
      }

      function initSC(arr) {
        var M = arr.length;
        var scale = (1000 - 100) / (M - 1);

        // remove old ones first (if exist)
        try {
          for (var i = 0; i < 20 * 8; i++) { // I don't record how many but not more than 19*7
            gw.removeVertex(i);
            gw.removeEdge(i);
          }
        }
        catch (e) { // do nothing if that vertex actually not yet exist

        }

        for (var i = 0; i < M; i++) gw.addVertex(50 + i * scale, 100, "H", i * 7, true, "i:" + i);
        N = 0;
        for (var i = 0; i < M; {
          for (var j = 0; j < arr[{
            gw.addVertex(80 + i * scale, 100 + (j + 1) * 70, arr[i][j], i * 7 + (j + 1), 1, "");
            gw.addEdge(i * 7 + j, i * 7 + (j + 1), i * 7 + (j + 1), (j == 0) ? EDGE_TYPE_DE : EDGE_TYPE_UDE, 1, true);
          }
        }
      }

      this.search = function (key, callback) {
        var stateList = [];
        var vertexTraversed = {};
        var edgeTraversed = {};
        var cs;

        if (key < 0 || key > 99) {
            cs = createState(vertexTraversed, edgeTraversed);
          // key = {key}, it must be between [0..99] in this visualization.
          // -1 = empty cell (blank) and -2 = deleted item.
          cs["status"] = 'key = {key}, it must be between [0..99] in this visualization.<br>-1 = empty cell (blank) and -2 = deleted item.'.replace("{key}", key);
          stateList.push(cs);
        }
        else {
          var i = key % (HT.length), base = i;
          var i_next;
          var jump = 1;
          var step = 1;
          var k = 5, smallerPrime = primes[k]; // start from 17
          while (smallerPrime >= HT.length)
            smallerPrime = primes[k--];
          var secondary = smallerPrime - key % smallerPrime; // so it will always be positive
          var strategy = "linear probing";

          cs = createState(vertexTraversed, edgeTraversed);
          // key = {key} is hashed to i = base = {key}%{length} = {i}.
          cs["status"] = 'key = {key} is hashed to i = base = {key}%{length} = {i}.'.replace("{key}", key).replace("{key}", key).replace("{length}", HT.length).replace("{i}", i);
          cs["vl"][i]["state"] = VERTEX_HIGHLIGHTED;
          cs["lineNo"] = 1;
          stateList.push(cs);
          vertexTraversed[i] = true; // this is traversed in future iteration

          while (true) {
            if (HT[i] == EMPTY) { // Not Found
                cs = createState(vertexTraversed, edgeTraversed);
              // HT[{i}] is empty.
              // Therefore key = {key} is not found in Hash Table HT.
              cs["status"] = 'HT[{i}] is empty.<br>Therefore key = {key} is not found in Hash Table HT.'.replace("{i}", i).replace("{key}", key);
              cs["vl"][i]["state"] = VERTEX_HIGHLIGHTED;
              cs["lineNo"] = 3;
              stateList.push(cs);
              break;
            }
            else if (HT[i] == key) { // Found
                    cs = createState(vertexTraversed, edgeTraversed);
              // HT[{i}] = {key}.
              // Therefore key = {key} is found in Hash Table HT at index {i}.
              cs["status"] = 'HT[{i}] = {key}.<br>Therefore key = {key} is found in Hash Table HT at index {i}.'.replace("{i}", i).replace("{key}", key).replace("{key}", key).replace("{i}", i);
              cs["vl"][i]["state"] = VERTEX_HIGHLIGHTED;
              cs["lineNo"] = 4;
              stateList.push(cs);
              break;
            }
            else {
              if (step == HT.length) {
                        cs = createState(vertexTraversed, edgeTraversed);
                // After probing all possibilities, key = {key} is not found in Hash Table HT.
                cs["status"] = 'After probing all possibilities, key = {key} is not found in Hash Table HT.'.replace("{key}", key);
                stateList.push(cs);
                break;
              }

              if (activeStatus == "LP") {
                        jump = 1;
                strategy = "linear probing";
              }
              else if (activeStatus == "QP") {
                        jump = step;
                strategy = "quadratic probing";
              }
              else if (activeStatus == "DH") {
                        jump = secondary;
                strategy = "double hashing";
              }

              i_next = (base + step * jump) % HT.length;

              cs = createState(vertexTraversed, edgeTraversed);
              // HT[{i}] = {val} != key.
              // Use {strategy} to check the next index i_next = ({base}+{step}*{jump})%{length} = {i_next}.
              cs["status"] = 'HT[{i}] = {val} != key.<br>Use {strategy} to check the next index i_next = ({base}+{step}*{jump})%{length} = {i_next}.'
                .replace("{i}", i).replace("{val}", HT[i]).replace("{strategy}", strategy)
                .replace("{base}", base).replace("{step}", step).replace("{jump}", jump).replace("{length}", HT.length).replace("{i_next}", i_next);
              cs["vl"][i_next]["state"] = VERTEX_HIGHLIGHTED;
              cs["lineNo"] = 5;
              stateList.push(cs);
              vertexTraversed[i_next] = true; // this is traversed in future iteration
              i = i_next;
              step++;
            }
          }
        }

        gw.startAnimation(stateList, callback);
        populatePseudocode(0);
        return true;
      }

      this.searchSC = function (key, callback) {
        var stateList = [];
        var vertexTraversed = {};
        var edgeTraversed = {};
        var cs;

        if (key < 0 || key > 99) {
                            cs = createStateSC(vertexTraversed, edgeTraversed);
          // key = {key}, it must be between [0..99] in this visualization.
          // -1 = empty cell (blank) and -2 = deleted item.
          cs["status"] = 'key = {key}, it must be between [0..99] in this visualization.<br>-1 = empty cell (blank) and -2 = deleted item.'.replace("{key}", key);
          stateList.push(cs);
        }
        else {
          var M = HT_SC.length;
          var i = key % M;
          var j = 0;

          cs = createStateSC(vertexTraversed, edgeTraversed);
          // key = {key} is hashed to i = base = {key}%{length} = {i}.
          cs["status"] = 'key = {key} is hashed to i = base = {key}%{length} = {i}.'.replace("{key}", key).replace("{key}", key).replace("{length}", M).replace("{i}", i);
          cs["vl"][i * 7]["state"] = VERTEX_HIGHLIGHTED;
          cs["lineNo"] = 1;
          stateList.push(cs);
          vertexTraversed[i * 7] = true; // this is traversed in future iteration

          for (var j = 0; j < HT_SC[{
                                cs = createStateSC(vertexTraversed, edgeTraversed);
            cs["status"] = 'Checking this vertex';
            cs["vl"][i * 7 + (j + 1)]["state"] = VERTEX_HIGHLIGHTED;
            cs["lineNo"] = [2, 3];
            stateList.push(cs);
            vertexTraversed[i * 7 + (j + 1)] = true; // this is traversed in future iteration
            if (HT_SC[i][j] == key) {
                                cs = createStateSC(vertexTraversed, edgeTraversed);
              cs["status"] = '{key} is found in Hash Table'.replace("{key}", key);
              cs["vl"][i * 7 + (j + 1)]["state"] = VERTEX_HIGHLIGHTED;
              cs["lineNo"] = [4];
              stateList.push(cs);
              break;
            }
          }

          if (j == HT_SC[i].length) { // not found
                                cs = createStateSC(vertexTraversed, edgeTraversed);
            cs["status"] = '{key} is not found in Hash Table'.replace("{key}", key);
            cs["lineNo"] = 5;
            stateList.push(cs);
          }
        }

        gw.startAnimation(stateList, callback);
        populatePseudocode(3);
        return true;
      }

      this.insert = function (keys, callback) {
        var stateList = [];
        var vertexTraversed = {};
        var edgeTraversed = {};
        var cs;

        var the_keys = keys.split(",");
        for (idx in the_keys) {
                                key = parseInt(the_keys[idx]);

          if (key < 0 || key > 99) {
                                cs = createState(vertexTraversed, edgeTraversed);
            // key = {key}, it must be between [0..99] in this visualization.
            // -1 = empty cell (blank) and -2 = deleted item.
            cs["status"] = 'key = {key}, it must be between [0..99] in this visualization.<br>-1 = empty cell (blank) and -2 = deleted item.'.replace("{key}", key);
            stateList.push(cs);
          }
          else if (HT.indexOf(key) != -1) {
                                    cs = createState(vertexTraversed, edgeTraversed);
            // key = {key} is already in the Hash Table.
            // We prevent insertion of duplicate keys.
            cs["status"] = 'key = {key} is already in the Hash Table.<br>We prevent insertion of duplicate keys.'.replace("{key}", key);
            stateList.push(cs);
          }
          else {
            if (N + 1 == HT.length) { // one item before full (if we allow full, our search can get into infinite loop)
                                        cs = createState(vertexTraversed, edgeTraversed);
              // Sorry, the Hash Table HT is nearly full (load factor too high).
              // We cannot insert a new integer.
              cs["status"] = 'Sorry, the Hash Table HT is nearly full (load factor too high).<br>We cannot insert a new integer.';
                                    cs["lineNo"] = 1;
                                    stateList.push(cs);
                                    }
            else { // not yet full, do the insertion
              var i = key % (HT.length), base = i;
              var i_next;
              var jump = 1;
              var step = 1;
              var k = 5, smallerPrime = primes[k]; // start from 17
              while (smallerPrime >= HT.length)
                smallerPrime = primes[k--];
              var secondary = smallerPrime - key % smallerPrime; // so it will always be positive
              var strategy = "linear probing";

              cs = createState(vertexTraversed, edgeTraversed);
              // The hash table is not yet full.
              // key = {key} is hashed to i = base = {key}%{length} = {i}.
              cs["status"] = 'The hash table is not yet full.<br>key = {key} is hashed to i = base = {key}%{length} = {i}.'.replace("{key}", key).replace("{key}", key).replace("{length}", HT.length).replace("{i}", i);
              cs["vl"][i]["state"] = VERTEX_HIGHLIGHTED;
              cs["lineNo"] = 2;
              stateList.push(cs);
              vertexTraversed[i] = true; // this is traversed in future iteration

              while (HT[i] > 0 && step < HT.length) {
                if (activeStatus == "LP") {
                                                jump = 1;
                  strategy = "linear probing";
                }
                else if (activeStatus == "QP") {
                                                jump = step;
                  strategy = "quadratic probing";
                }
                else if (activeStatus == "DH") {
                                                jump = secondary;
                  strategy = "double hashing";
                }

                i_next = (base + step * jump) % HT.length;

                var special = (HT[i] == key ? '&nbsp;(actually a duplicate key)' : ""); // ' (actually a duplicate key)'
                cs = createState(vertexTraversed, edgeTraversed);
                // HT[{i}] = {val} is occupied{special}.
                // Use {strategy} to check the next index i_next ({base}+{step}*{jump})%{length} = {i_next}.
                cs["status"] = 'HT[{i}] = {val} is occupied{special}.<br>Use {strategy} to check the next index i_next ({base}+{step}*{jump})%{length} = {i_next}.'
                  .replace("{i}", i).replace("{val}", HT[i]).replace("{special}", special)
                  .replace("{strategy}", strategy).replace("{base}", base).replace("{step}", step).replace("{jump}", jump).replace("{length}", HT.length).replace("{i_next}", i_next);
                cs["vl"][i_next]["state"] = VERTEX_HIGHLIGHTED;
                cs["lineNo"] = 3;
                stateList.push(cs);
                vertexTraversed[i_next] = true; // this is traversed in future iteration
                i = i_next;
                step++;
              }

              if (step == HT.length) {
                                                    cs = createState(vertexTraversed, edgeTraversed);
                // After {step} probe steps, we still cannot find an insertion point.
                // Reporting failure...
                cs["status"] = 'After {step} probe steps, we still cannot find an insertion point.<br>Reporting failure...'.replace("{step}", step);
                stateList.push(cs);
              }
              else {
                                                        HT[i] = key;
                N++;
                cs = createState(vertexTraversed, edgeTraversed);
                // Found insertion point: Insert {key} at HT[{i}].
                // There are now {N} items in the Hash Table.
                cs["status"] = 'Found insertion point: Insert {key} at HT[{i}].<br>There are now {N} items in the Hash Table.'.replace("{key}", key).replace("{i}", i).replace("{N}", N);
                cs["vl"][i]["state"] = VERTEX_TRAVERSED;
                cs["lineNo"] = 4;
                stateList.push(cs);
              }
            }
          }
        }

        gw.startAnimation(stateList, callback);
        populatePseudocode(1);
        return true;
      }

      this.insertSC = function (keys, callback) {
        var stateList = [];
        var vertexTraversed = {};
        var edgeTraversed = {};
        var cs;

        var the_keys = keys.split(",");
        for (idx in the_keys) {
                                                            key = parseInt(the_keys[idx]);

          if (key < 0 || key > 99) {
                                                            cs = createStateSC(vertexTraversed, edgeTraversed);
            // key = {key}, it must be between [0..99] in this visualization.
            // -1 = empty cell (blank) and -2 = deleted item.
            cs["status"] = 'key = {key}, it must be between [0..99] in this visualization.<br>-1 = empty cell (blank) and -2 = deleted item.'.replace("{key}", key);
            stateList.push(cs);
          }
          else {
            var already_inside = false;
            var M = HT_SC.length;
            for (var i = 0; i < M; i++)
              if (HT_SC[i].indexOf(key) != -1)
                already_inside = true;

            if (already_inside) {
                                                                cs = createStateSC(vertexTraversed, edgeTraversed);
              // key = {key} is already in the Hash Table.
              // We prevent insertion of duplicate keys.
              cs["status"] = 'key = {key} is already in the Hash Table.<br>We prevent insertion of duplicate keys.'.replace("{key}", key);
              stateList.push(cs);
            }
            else { // key [0..99] and not inside
              var i = key % M;
              cs = createStateSC(vertexTraversed, edgeTraversed);
              // The hash table is not yet full.
              // key = {key} is hashed to i = base = {key}%{length} = {i}.
              cs["status"] = 'The hash table is not yet full.<br>key = {key} is hashed to i = base = {key}%{length} = {i}.'.replace("{key}", key).replace("{key}", key).replace("{length}", M).replace("{i}", i);
              cs["vl"][i * 7]["state"] = VERTEX_HIGHLIGHTED;
              cs["lineNo"] = 1;
              stateList.push(cs);
              vertexTraversed[i * 7] = true; // this is traversed in future iteration

              if (HT_SC[i].length == 6) {
                                                                        cs = createStateSC(vertexTraversed, edgeTraversed);
                cs["status"] = 'Sorry, due to the limitation of this visualization<br>We do not allow any more extension to linked list {i}'.replace("{i}", i);
                cs["vl"][i * 7]["state"] = VERTEX_HIGHLIGHTED;
                cs["lineNo"] = 2;
                stateList.push(cs);
              }
              else {
                                                                            HT_SC[i].push(key); // put at the back of this doubly linked list (assume that we have access to tail pointer)
                cs = createStateSC(vertexTraversed, edgeTraversed);
                cs["status"] = 'We append {key} to the back of Doubly Linked List {i}<br>This is O(1) with tail pointer'.replace("{key}", key).replace("{i}", i);
                cs["vl"][i * 7 + (HT_SC[i].length - 1)]["state"] = VERTEX_HIGHLIGHTED;
                cs["vl"][i * 7 + (HT_SC[i].length)]["state"] = VERTEX_HIGHLIGHTED;
                cs["lineNo"] = 3;
                stateList.push(cs);
              }
            }
          }
        }

        gw.startAnimation(stateList, callback);
        populatePseudocode(4);
        return true;
      }

      this.remove = function (key, callback) {
        var stateList = [];
        var vertexTraversed = {};
        var edgeTraversed = {};
        var cs;

        if (key < 0 || key > 99) {
                                                                                cs = createState(vertexTraversed, edgeTraversed);
          // key = {key}, it must be between [0..99] in this visualization.
          // -1 = empty cell (blank) and -2 = deleted item.
          cs["status"] = 'key = {key}, it must be between [0..99] in this visualization.<br>-1 = empty cell (blank) and -2 = deleted item.'.replace("{key}", key);
          stateList.push(cs);
        }
        else {
          var i = key % (HT.length), base = i;
          var i_next;
          var jump = 1;
          var step = 1;
          var k = 5, smallerPrime = primes[k]; // start from 17
          while (smallerPrime >= HT.length)
            smallerPrime = primes[k--];
          var secondary = smallerPrime - key % smallerPrime; // so it will always be positive
          var strategy = "linear probing";

          cs = createState(vertexTraversed, edgeTraversed);
          // key = {key} is hashed to i = base = {key}%{length} = {i}.
          cs["status"] = 'key = {key} is hashed to i = base = {key}%{length} = {i}.'.replace("{key}", key).replace("{key}", key).replace("{length}", HT.length).replace("{i}", i);
          cs["vl"][i]["state"] = VERTEX_HIGHLIGHTED;
          cs["lineNo"] = 1;
          stateList.push(cs);
          vertexTraversed[i] = true; // this is traversed in future iteration

          while (true) {
            if (HT[i] == EMPTY) { // Not Found
                                                                                    cs = createState(vertexTraversed, edgeTraversed);
              // HT[{i}] is empty.
              // Therefore key = {key} is not found in Hash Table HT.
              cs["status"] = 'HT[{i}] is empty.<br>Therefore key = {key} is not found in Hash Table HT.'.replace("{i}", i).replace("{key}", key);
              cs["vl"][i]["state"] = VERTEX_HIGHLIGHTED;
              cs["lineNo"] = 3;
              stateList.push(cs);
              break;
            }
            else if (HT[i] == key) { // Found
                                                                                        cs = createState(vertexTraversed, edgeTraversed);
              // HT[{i}] = {key}.
              // Therefore key = {key} is found in Hash Table HT at index {i}.
              cs["status"] = 'HT[{i}] = {key}.<br>Therefore key = {key} is found in Hash Table HT at index {i}.'.replace("{i}", i).replace("{key}", key).replace("{key}", key).replace("{i}", i);
              cs["vl"][i]["state"] = VERTEX_HIGHLIGHTED;
              cs["lineNo"] = 4;
              stateList.push(cs);

              HT[i] = DELETED;
              N--;
              cs = createState(vertexTraversed, edgeTraversed);
              // Now we mark HT[{i}] as deleted.
              // There are now {N} items in the Hash Table.
              cs["status"] = 'Now we mark HT[{i}] as deleted<br>There are now {N} items in the Hash Table.'.replace("{i}", i).replace("{N}", N);
              cs["vl"][i]["state"] = VERTEX_HIGHLIGHTED;
              cs["lineNo"] = 5;
              stateList.push(cs);
              break;
            }
            else {
              if (activeStatus == "LP") {
                                                                                                jump = 1;
                strategy = "linear probing";
              }
              else if (activeStatus == "QP") {
                                                                                                jump = step;
                strategy = "quadratic probing";
              }
              else if (activeStatus == "DH") {
                                                                                                jump = secondary;
                strategy = "double hashing";
              }

              i_next = (base + step * jump) % HT.length;

              cs = createState(vertexTraversed, edgeTraversed);
              // HT[{i}] = {val} != key.
              // Use {strategy} to check the next index i_next = ({base}+{step}*{jump})%{length} = {i_next}.
              cs["status"] = 'HT[{i}] = {val} != key.<br>Use {strategy} to check the next index i_next = ({base}+{step}*{jump})%{length} = {i_next}.'
                .replace("{i}", i).replace("{val}", HT[i])
                .replace("{strategy}", strategy).replace("{base}", base).replace("{step}", step).replace("{jump}", jump).replace("{length}", HT.length).replace("{i_next}", i_next);
              cs["vl"][i_next]["state"] = VERTEX_HIGHLIGHTED;
              cs["lineNo"] = 6;
              stateList.push(cs);
              vertexTraversed[i_next] = true; // this is traversed in future iteration
              i = i_next;
              step++;
            }
          }
        }

        gw.startAnimation(stateList, callback);
        populatePseudocode(2);
        return true;
      }

      this.removeSC = function (key, callback) {
        var stateList = [];
        var vertexTraversed = {};
        var edgeTraversed = {};
        var cs;

        if (key < 0 || key > 99) {
                                                                                                    cs = createStateSC(vertexTraversed, edgeTraversed);
          // key = {key}, it must be between [0..99] in this visualization.
          // -1 = empty cell (blank) and -2 = deleted item.
          cs["status"] = 'key = {key}, it must be between [0..99] in this visualization.<br>-1 = empty cell (blank) and -2 = deleted item.'.replace("{key}", key);
          stateList.push(cs);
        }
        else {
          var M = HT_SC.length;
          var i = key % M;
          var j = 0;

          cs = createStateSC(vertexTraversed, edgeTraversed);
          // key = {key} is hashed to i = base = {key}%{length} = {i}.
          cs["status"] = 'key = {key} is hashed to i = base = {key}%{length} = {i}.'.replace("{key}", key).replace("{key}", key).replace("{length}", M).replace("{i}", i);
          cs["vl"][i * 7]["state"] = VERTEX_HIGHLIGHTED;
          cs["lineNo"] = 1;
          stateList.push(cs);
          vertexTraversed[i * 7] = true; // this is traversed in future iteration

          var found_and_deleted = false;
          for (var j = 0; j < HT_SC[{
                                                                                                        cs = createStateSC(vertexTraversed, edgeTraversed);
            cs["status"] = 'Checking this vertex';
            cs["vl"][i * 7 + (j + 1)]["state"] = VERTEX_HIGHLIGHTED;
            cs["lineNo"] = [2, 3];
            stateList.push(cs);
            vertexTraversed[i * 7 + (j + 1)] = true; // this is traversed in future iteration
            if (HT_SC[i][j] == key) {
                                                                                                        cs = createStateSC(vertexTraversed, edgeTraversed);
              cs["status"] = '{key} is found in Hash Table'.replace("{key}", key).replace("{i}", i);
              cs["vl"][i * 7 + (j + 1)]["state"] = VERTEX_HIGHLIGHTED;
              cs["lineNo"] = [4];
              stateList.push(cs);

              HT_SC[i].splice(j, 1);
              delete vertexTraversed[i * 7 + (j + 1)];
              cs = createStateSC(vertexTraversed, edgeTraversed);
              cs["status"] = 'It is removed from list {i} in O(1+&alpha;)<br>Deletion is fast if we use Doubly Linked List'.replace("{key}", key).replace("{i}", i);
              cs["lineNo"] = [4];
              stateList.push(cs);

              found_and_deleted = true;
              break;
            }
          }

          if (!found_and_deleted) { // not found
                                                                                                            cs = createStateSC(vertexTraversed, edgeTraversed);
            cs["status"] = '{key} is not found in Hash Table'.replace("{key}", key);
            cs["lineNo"] = 5;
            stateList.push(cs);
          }
        }

        gw.startAnimation(stateList, callback);
        populatePseudocode(5);
        return true;
      }

      /*
       * vertexTraversed: JS object with the vertexes of the List which are to be marked as traversed as the key
       * edgeTraversed: JS object with the edges of the List which are to be marked as traversed as the key
       */

      function createState(vertexTraversed, edgeTraversed) {
        if (vertexTraversed == null || vertexTraversed == undefined || !(vertexTraversed instanceof Object))
          vertexTraversed = {};
        if (edgeTraversed == null || edgeTraversed == undefined || !(edgeTraversed instanceof Object))
          edgeTraversed = {};

        var scale = (1000 - 100) / (HT.length - 1);

        var state = {
                                                                                                            "vl": {},
          "el": {}
        };

        for (var i = 0; i < HT.length; {
                                                                                                            state["vl"][i] = {};
          state["vl"][i]["cx"] = 50 + i * scale;
          state["vl"][i]["cy"] = 100;
          state["vl"][i]["text"] = (HT[i] == EMPTY ? '' : (HT[i] == DELETED ? 'DEL' : HT[i]));
          state["vl"][i]["extratext"] = "i:" + i;
          state["vl"][i]["state"] = VERTEX_DEFAULT;
        }

        for (var key in vertexTraversed)
          state["vl"][key]["state"] = VERTEX_TRAVERSED;

        return state;
      }

      function createStateSC(vertexTraversed, edgeTraversed) {
        if (vertexTraversed == null || vertexTraversed == undefined || !(vertexTraversed instanceof Object))
          vertexTraversed = {};
        if (edgeTraversed == null || edgeTraversed == undefined || !(edgeTraversed instanceof Object))
          edgeTraversed = {};

        var M = HT_SC.length;
        var scale = (1000 - 100) / (M - 1);

        var state = {
                                                                                                            "vl": {},
          "el": {}
        };

        for (var i = 0; i < M; {
                                                                                                            state["vl"][i * 7] = {};
          state["vl"][i * 7]["cx"] = 50 + i * scale;
          state["vl"][i * 7]["cy"] = 100;
          state["vl"][i * 7]["text"] = "H";
          state["vl"][i * 7]["extratext"] = "i:" + i;
          state["vl"][i * 7]["state"] = VERTEX_DEFAULT;
        }

        for (var i = 0; i < M; {
          for (var j = 0; j < HT_SC[{
                                                                                                            state["vl"][i * 7 + (j + 1)] = {};
            state["vl"][i * 7 + (j + 1)]["cx"] = 80 + i * scale;
            state["vl"][i * 7 + (j + 1)]["cy"] = 100 + (j + 1) * 70;
            state["vl"][i * 7 + (j + 1)]["text"] = HT_SC[i][j];
            state["vl"][i * 7 + (j + 1)]["state"] = VERTEX_DEFAULT;

            state["el"][i * 7 + (j + 1)] = {};
            state["el"][i * 7 + (j + 1)]["vertexA"] = i * 7 + j;
            state["el"][i * 7 + (j + 1)]["vertexB"] = i * 7 + (j + 1);
            state["el"][i * 7 + (j + 1)]["type"] = (j == 0) ? EDGE_TYPE_DE : EDGE_TYPE_UDE;
            state["el"][i * 7 + (j + 1)]["weight"] = 1;
            state["el"][i * 7 + (j + 1)]["state"] = EDGE_DEFAULT;
            state["el"][i * 7 + (j + 1)]["animateHighlighted"] = false;
          }
        }

        for (var key in vertexTraversed)
          state["vl"][key]["state"] = VERTEX_TRAVERSED;

        return state;
      }

      function populatePseudocode(act) {
        var jump = '1';
        if (activeStatus == "LP")
          jump = '1';
        else if (activeStatus == "QP")
          jump = 'step';
        else if (activeStatus == "DH")
          jump = 'sec';

        switch (act) {
          case 0: // search
            $('#code1').html('step = 0; i = base = key%HT.length;');
            $('#code2').html('while (true)');
            $('#code3').html('&nbsp&nbspif (HT[i] == EMPTY) return "not found"');
            $('#code4').html('&nbsp&nbspelse if (HT[i] == key) return "found at index i"');
            $('#code5').html('&nbsp;&nbsp;else step++; i = (base+step*{jump})%HT.length'.replace('{jump}', jump));
            $('#code6').html((activeStatus == 'DH' ? '// sec = prime - key%prime' : ''));
            $('#code7').html('');
            break;
          case 1: // insert
            $('#code1').html('if N+1 == M, prevent insertion');
            $('#code2').html('step = 0; i = base = key%HT.length;');
            $('#code3').html('while (HT[i] != EMPTY &amp;&amp; HT[i] != DELETED)');
            $('#code4').html('&nbsp;&nbsp;step++; i = (base+step*{jump})%HT.length'.replace('{jump}', jump));
            $('#code5').html('found insertion point, insert key at HT[i]');
            $('#code6').html((activeStatus == 'DH' ? '// sec = prime - key%prime' : ''));
            $('#code7').html('');
            break;
          case 2: // remove
            $('#code1').html('step = 0; i = base = key%HT.length;');
            $('#code2').html('while (true)');
            $('#code3').html('&nbsp&nbspif (HT[i] == EMPTY) break // &nbsp&nbspif (HT[i] == EMPTY) break // key not found');
            $('#code4').html('&nbsp&nbspelse if (HT[i] == key) // &nbsp&nbspelse if (HT[i] == key)');
            $('#code5').html('&nbsp&nbsp&nbsp&nbspHT[i] = DELETED, break // &nbsp;&nbsp;&nbsp;&nbsp;HT[i] = DELETED');
            $('#code6').html('&nbsp&nbspelse step++; i = (base+step*{jump})%HT.length'.replace('{jump}', jump));
            $('#code7').html((activeStatus == 'DH' ? '// sec = prime - key%prime' : ''));
            break;
          case 3: // search SC
            $('#code1').html('i = key%HT.length;');
            $('#code2').html('for j = 0 to HT_SC[i].length');
            $('#code3').html('&nbsp&nbspif (HT_SC[i][j] == key)');
            $('#code4').html('&nbsp&nbsp&nbsp&nbspreturn "found at index i"');
            $('#code5').html('return "not found"');
            $('#code6').html('');
            $('#code7').html('');
            break;
          case 4: // insert SC
            $('#code1').html('i = key%HT.length;');
            $('#code2').html('if HT_SC[i].length == 6, prevent insertion');
            $('#code3').html('insert key to the back of this list i');
            $('#code4').html('');
            $('#code5').html('');
            $('#code6').html('');
            $('#code7').html('');
            break;
          case 5: // remove SC
            $('#code1').html('i = key%HT.length;');
            $('#code2').html('for j = 0 to HT_SC[i].length');
            $('#code3').html('&nbsp&nbspif (HT_SC[i][j] == key)');
            $('#code4').html('&nbsp&nbsp&nbsp&nbspremove key from list i');
            $('#code5').html('// do nothing, not found');
            $('#code6').html('');
            $('#code7').html('');
            break;
        }
      }
    }



    // HashTable_action.js
    // actions panel stuff
    var actionsWidth = 150;
    var statusCodetraceWidth = 420;

    var isCreateOpen = false;
    var isSearchOpen = false;
    var isInsertOpen = false;
    var isRemoveOpen = false;

    function openCreate() {
                                                                                                            $(".create").css("bottom", "146px");
      $('#createfixedsize-input').hide();
      $('#createuserdefined-input').hide();
      if (!isCreateOpen) {
                                                                                                            $('.create').fadeIn('fast');
        isCreateOpen = true;
      }
    }

    function closeCreate() {
      if (isCreateOpen) {
                                                                                                            $('.create').fadeOut('fast');
        $('#create-err').html("");
        isCreateOpen = false;
      }
    }

    function openSearch() {
      if (!isSearchOpen) {
                                                                                                            $('.search').fadeIn('fast');
        isSearchOpen = true;
      }
    }

    function closeSearch() {
      if (isSearchOpen) {
                                                                                                            $('.search').fadeOut('fast');
        $('#search-err').html("");
        isSearchOpen = false;
      }
    }

    function openInsert() {
                                                                                                            $(".insert").css("bottom", "92px");
      $('#insertkth-input').hide();
      $('#inserthead-input').hide();
      $('#inserttail-input').hide();
      if (!isInsertOpen) {
                                                                                                            $('.insert').fadeIn('fast');
        isInsertOpen = true;
      }
    }

    function closeInsert() {
      if (isInsertOpen) {
                                                                                                            $('.insert').fadeOut('fast');
        $('#insert-err').html("");
        isInsertOpen = false;
      }
    }

    function openRemove() {
                                                                                                            $(".remove").css("bottom", "65px");
      $('#removekth-input').hide();
      if (!isRemoveOpen) {
                                                                                                            $('.remove').fadeIn('fast');
        isRemoveOpen = true;
      }
    }

    function closeRemove() {
      if (isRemoveOpen) {
                                                                                                            $('.remove').fadeOut('fast');
        $('#remove-err').html("");
        isRemoveOpen = false;
      }
    }

    function hideEntireActionsPanel() {
                                                                                                            closeCreate();
      closeSearch();
      closeInsert();
      closeRemove();
      hideActionsPanel();
    }

    // title changing
    function AbbreviateTitle() {
                                                                                                            $('#title-LP').text("Метод лінійних спроб");
      $('#title-QP').text("Метод квадратичних спроб");
      $('#title-DH').text("Повторне гешування");
      $('#title-SC').text("Геш-таблиця з ланцюжками");
    }
    $('#title-LP').click(function () {
      if (isPlaying) stop();
      htw.setActiveStatus("LP");
      AbbreviateTitle();
      $('#title-LP').text('Метод лінійних спроб');
    });
    $('#title-QP').click(function () {
      if (isPlaying) stop();
      htw.setActiveStatus("QP");
      AbbreviateTitle();
      $('#title-QP').text('Метод квадратичних спроб');
    });
    $('#title-DH').click(function () {
      if (isPlaying) stop();
      htw.setActiveStatus("DH");
      AbbreviateTitle();
      $('#title-DH').text('Повторне гешування');
    });
    $('#title-SC').click(function () {
      if (isPlaying) stop();
      htw.setActiveStatus("SC");
      AbbreviateTitle();
      $('#title-SC').text('Геш-таблиця з ланцюжками');
    });

    // local
    $('#play').hide();
    var htw = new HashTable();
    var gw = htw.getGraphWidget();

    $(function () {
      var four_modes = ["LP", "QP", "DH", "SC"];
      $('#title-' + four_modes[Math.floor(Math.random() * 4)]).click(); // randomly open one of the four default example every time

      var hashMode = getQueryVariable("mode");
      if (hashMode.length > 0) {
                                                                                                            $('#title-' + hashMode).click();
      }
      var createHT = getQueryVariable("create");
      if (createHT.length > 0) {
        var newHT = createHT.split(",");
        if (newHT.length == 1)
          htw.createTable(createHT);
        else
          htw.generate(newHT);
      }
      var insert = getQueryVariable("insert");
      if (insert.length > 0) {
                                                                                                            $('#v-insert').val(insert);
        openInsert();
      }
      var remove = getQueryVariable("remove");
      if (remove.length > 0) {
                                                                                                            $('#v-remove').val(remove);
        openRemove();
      }

      $('#create').click(function () {
                                                                                                            closeSearch();
        closeInsert();
        closeRemove();
        openCreate();
      });
      $('#search').click(function () {
                                                                                                            closeCreate();
        closeInsert();
        closeRemove();
        openSearch();
      });
      $('#insert').click(function () {
                                                                                                            closeCreate();
        closeSearch();
        closeRemove();
        openInsert();
      });
      $('#remove').click(function () {
                                                                                                            closeCreate();
        closeSearch();
        closeInsert();
        openRemove();
      });
    });


    function createTable() {
      if (isPlaying) stop();
      var input = parseInt($('#v-create').val());
      if (htw.createTable(input)) {
                                                                                                            $('#progress-bar').slider("option", "max", 0);
        closeCreate();
        isPlaying = false;
      }
      hideStatusPanel();
      hideCodetracePanel();
    }

    function createTableSpecial(_HT) {
      if (isPlaying) stop();
      htw.createTableSpecial(_HT);
      $('#progress-bar').slider("option", "max", 0);
      closeCreate();
      isPlaying = false;
      hideStatusPanel();
      hideCodetracePanel();
    }

    function insertInteger(callback) {
      if (isPlaying) stop();
      var input = $('#v-insert').val();
      commonAction(htw.getActiveStatus() == "SC" ? htw.insertSC(input, callback) : htw.insert(input, callback), "Insert " + input);
    }

    function searchInteger(callback) {
      if (isPlaying) stop();
      var input = parseInt($('#v-search').val());
      commonAction(htw.getActiveStatus() == "SC" ? htw.searchSC(input, callback) : htw.search(input, callback), "Search " + input);
    }

    function removeInteger(callback) {
      if (isPlaying) stop();
      var input = parseInt($('#v-remove').val());
      commonAction(htw.getActiveStatus() == "SC" ? htw.removeSC(input, callback) : htw.remove(input, callback), "Remove " + input);
    }
