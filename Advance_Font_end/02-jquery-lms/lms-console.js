
/* ==========================================
   BAI 2: JQUERY LMS
   Yeu cau 1: In bai tap thu 5
   Yeu cau 2: Liet ke chu de va deadline
========================================== */

(function () {

    // Kiem tra va nap jQuery neu LMS chua co
    function startJQueryLab() {

        if (!window.jQuery) {

            console.log("Dang tai thu vien jQuery...");

            var script = document.createElement("script");

            script.src = "https://code.jquery.com/jquery-3.7.1.min.js";

            script.onload = function () {
                runExercise(window.jQuery);
            };

            script.onerror = function () {
                console.error("Khong tai duoc jQuery!");
            };

            document.head.appendChild(script);

        } else {

            runExercise(window.jQuery);

        }

    }


    function runExercise($) {

        console.clear();

        console.log("===== BAI THUC HANH JQUERY LMS =====");


        // ==================================
        // YEU CAU 1: IN BAI TAP THU 5
        // ==================================

        var assignments = [];

        $(".modtype_assign").each(function () {

            var activity = $(this);

            var name = activity
                .find(".instancename")
                .first()
                .clone()
                .children(".accesshide")
                .remove()
                .end()
                .text()
                .replace(/\s+/g, " ")
                .trim();

            assignments.push({
                name: name || "Khong doc duoc ten bai tap",
                element: this
            });

        });


        console.group("YEU CAU 1 - BAI TAP THU 5");

        if (assignments.length >= 5) {

            console.log(
                "Bai tap thu 5:",
                assignments[4].name
            );

            console.log(
                "Phan tu HTML:",
                assignments[4].element
            );

        } else {

            console.warn(
                "Chi tim thay " + assignments.length +
                " bai tap. Hay kiem tra trang LMS."
            );

        }

        console.log("Tong so bai tap tim thay:", assignments.length);

        console.groupEnd();


        // ==================================
        // YEU CAU 2: DANH SACH CHU DE
        // ==================================

        var sections = $(
            ".course-content .course-section, " +
            ".course-content li.section, " +
            "ul.topics li.section, " +
            "ul.weeks li.section"
        ).get();

        // Loai bo phan tu trung lap
        sections = [...new Set(sections)];

        var topicRows = [];


        sections.forEach(function (section, index) {

            var $section = $(section);

            // Lay ten chu de
            var topicName = $section
                .find(".sectionname, h3, h4")
                .first()
                .text()
                .replace(/\s+/g, " ")
                .trim();

            if (!topicName) {
                topicName = "Chu de " + (index + 1);
            }


            // Tim cac bai tap trong chu de
            var tasks = $section.find(".modtype_assign");


            // Truong hop khong co bai tap
            if (tasks.length === 0) {

                topicRows.push({

                    "Chu de": topicName,

                    "Co bai tap?": "Khong",

                    "Deadline": "Khong co bai tap"

                });

            }


            // Truong hop co bai tap
            else {

                tasks.each(function () {

                    var $task = $(this);

                    var taskName = $task
                        .find(".instancename")
                        .first()
                        .text()
                        .replace(/\s+/g, " ")
                        .trim();


                    // Tim thong tin deadline
                    var deadlineParts = [];

                    $task.find(
                        ".activity-dates, " +
                        "[data-region='activity-dates'], " +
                        ".contentafterlink, " +
                        ".submission"
                    ).each(function () {

                        var text = $(this)
                            .text()
                            .replace(/\s+/g, " ")
                            .trim();

                        if (text && !deadlineParts.includes(text)) {
                            deadlineParts.push(text);
                        }

                    });


                    var deadline = deadlineParts.length
                        ? deadlineParts.join(" | ")
                        : "Chua tim thay deadline tren trang";


                    topicRows.push({

                        "Chu de": topicName,

                        "Co bai tap?": "Co - " +
                            (taskName || "Bai tap chua ro ten"),

                        "Deadline": deadline

                    });

                });

            }

        });


        // ==================================
        // HIEN THI KET QUA
        // ==================================

        console.group("YEU CAU 2 - DANH SACH CHU DE");

        if (topicRows.length > 0) {

            console.table(topicRows);

        } else {

            console.warn(
                "Khong tim thay chu de. " +
                "Can kiem tra cau truc HTML cua LMS."
            );

        }

        console.log("Tong so dong ket qua:", topicRows.length);

        console.groupEnd();


        console.log("===== HOAN THANH BAI TAP JQUERY =====");

    }


    startJQueryLab();

})();
