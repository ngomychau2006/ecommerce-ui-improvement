$(document).ready(function () {

    // =========================
    // 1. KHAI BÁO BIẾN
    // =========================

    const container = $('#container');
    const bird = $('#bird');
    const pipeLayer = $('#pipe_layer');
    const trailLayer = $('#trail_layer');

    const birdLeft = 85;
    const birdWidth = 48;
    const birdHeight = 39;

    const pipeWidth = 70;
    const pipeGap = 165;

    let birdTop = 250;
    let birdVelocity = 0;

    let gravity = 0.38;
    let flapPower = -7;

    let gameStarted = false;
    let gameOver = false;

    let score = 0;
    let level = 1;
    let bestScore = Number(localStorage.getItem('pinkDreamBest')) || 0;

    let pipes = [];
    let gameInterval = null;
    let trailInterval = null;

    let lastComboScore = 0;

    $('#best_score').text(bestScore);


    // =========================
    // 2. ÂM THANH
    // =========================

    let audioContext = null;

    function playSound(frequency, duration, type) {

        try {

            if (!audioContext) {
                audioContext = new (window.AudioContext || window.webkitAudioContext)();
            }

            if (audioContext.state === 'suspended') {
                audioContext.resume();
            }

            const oscillator = audioContext.createOscillator();
            const gain = audioContext.createGain();

            oscillator.type = type || 'sine';
            oscillator.frequency.value = frequency;

            gain.gain.setValueAtTime(0.08, audioContext.currentTime);
            gain.gain.exponentialRampToValueAtTime(
                0.001,
                audioContext.currentTime + duration
            );

            oscillator.connect(gain);
            gain.connect(audioContext.destination);

            oscillator.start();
            oscillator.stop(audioContext.currentTime + duration);

        } catch (error) {
            // Nếu trình duyệt không hỗ trợ âm thanh, game vẫn hoạt động.
        }
    }


    // =========================
    // 3. HIỂN THỊ LEVEL
    // =========================

    function updateLevel() {

        let newLevel = 1;

        if (score >= 25) {
            newLevel = 3;
        } else if (score >= 10) {
            newLevel = 2;
        }

        if (newLevel !== level) {

            level = newLevel;

            $('#level').text(level);

            container.removeClass('day sunset night');

            if (level === 1) {
                container.addClass('day');
            }

            if (level === 2) {
                container.addClass('sunset');
            }

            if (level === 3) {
                container.addClass('night');
            }

            showLevelMessage('LEVEL ' + level + ' ✨');

            playSound(650, 0.2, 'sine');
        }
    }


    function showLevelMessage(message) {

        $('#level_message')
            .stop(true, true)
            .text(message)
            .css({
                opacity: 1
            })
            .show();

        setTimeout(function () {
            $('#level_message').fadeOut(400);
        }, 1000);
    }


    // =========================
    // 4. HIỆU ỨNG COMBO
    // =========================

    function showCombo(message) {

        $('#combo_message')
            .stop(true, true)
            .text(message)
            .css({
                opacity: 1
            })
            .show();

        setTimeout(function () {
            $('#combo_message').fadeOut(350);
        }, 700);
    }


    // =========================
    // 5. TẠO ĐƯỜNG BAY LẤP LÁNH
    // =========================

    function createTrail() {

        if (!gameStarted || gameOver) {
            return;
        }

        const dot = $('<div class="trail-dot"></div>');

        dot.css({
            left: birdLeft + 5 + Math.random() * 15,
            top: birdTop + 15 + Math.random() * 15
        });

        trailLayer.append(dot);

        setTimeout(function () {
            dot.remove();
        }, 600);
    }


    // =========================
    // 6. TẠO ỐNG
    // =========================

    function createPipe(startPosition) {

        const containerHeight = container.innerHeight();
        const groundHeight = 25;

        // Vị trí ngẫu nhiên của khoảng trống
        const minTop = 65;
        const maxTop = containerHeight - pipeGap - groundHeight - 65;

        const topHeight = Math.floor(
            Math.random() * (maxTop - minTop + 1) + minTop
        );

        const bottomTop = topHeight + pipeGap;
        const bottomHeight = containerHeight - bottomTop - groundHeight;

        const pair = $('<div class="pipe-pair"></div>');

        const topPipe = $('<div class="pipe pipe-top"></div>');
        const bottomPipe = $('<div class="pipe pipe-bottom"></div>');

        topPipe.css({
            height: topHeight + 'px'
        });

        bottomPipe.css({
            top: bottomTop + 'px',
            height: bottomHeight + 'px'
        });

        pair.append(topPipe);
        pair.append(bottomPipe);

        pair.css({
            left: startPosition + 'px'
        });

        pipeLayer.append(pair);

        pipes.push({
            element: pair,
            scored: false
        });
    }


    // =========================
    // 7. CHIM BAY
    // =========================

    function flap() {

        if (!gameStarted || gameOver) {
            return;
        }

        birdVelocity = flapPower;

        playSound(480, 0.08, 'sine');
    }


    function updateBird() {

        birdVelocity += gravity;
        birdTop += birdVelocity;

        // Giới hạn tốc độ rơi
        if (birdVelocity > 8) {
            birdVelocity = 8;
        }

        bird.css({
            top: birdTop + 'px',
            transform: 'rotate(' + Math.min(birdVelocity * 4, 35) + 'deg)'
        });

    }


    // =========================
    // 8. KIỂM TRA VA CHẠM
    // =========================

    function checkCollision() {

        const birdRect = bird[0].getBoundingClientRect();

        const containerRect = container[0].getBoundingClientRect();

        // Va chạm với trần
        if (birdTop <= 0) {
            return true;
        }

        // Va chạm với mặt đất
        if (birdTop + birdHeight >= container.innerHeight() - 25) {
            return true;
        }

        // Va chạm với ống
        for (let i = 0; i < pipes.length; i++) {

            const pair = pipes[i].element;

            const topPipe = pair.find('.pipe-top')[0];
            const bottomPipe = pair.find('.pipe-bottom')[0];

            const topRect = topPipe.getBoundingClientRect();
            const bottomRect = bottomPipe.getBoundingClientRect();

            // Kiểm tra chim có nằm ngang trong vùng ống không
            const horizontalCollision =
                birdRect.right > topRect.left &&
                birdRect.left < topRect.right;

            // Kiểm tra chim có chạm ống trên hoặc ống dưới không
            const verticalCollision =
                birdRect.top < topRect.bottom ||
                birdRect.bottom > bottomRect.top;

            if (horizontalCollision && verticalCollision) {
                return true;
            }
        }

        return false;
    }


    // =========================
    // 9. DI CHUYỂN ỐNG VÀ TÍNH ĐIỂM
    // =========================

    function updatePipes() {

        const speed = 2.5 + (level - 1) * 0.45;
        const containerWidth = container.innerWidth();

        for (let i = pipes.length - 1; i >= 0; i--) {

            const pipe = pipes[i];
            const element = pipe.element;

            let currentLeft = parseFloat(element.css('left'));

            currentLeft -= speed;

            element.css('left', currentLeft + 'px');

            // Tính điểm khi chim vượt qua hoàn toàn ống
            if (
                !pipe.scored &&
                currentLeft + pipeWidth < birdLeft
            ) {

                pipe.scored = true;

                score++;

                $('#score').text(score);

                playSound(700, 0.1, 'triangle');

                if (score % 5 === 0) {
                    showCombo('AMAZING! ✨');
                } else if (score % 3 === 0) {
                    showCombo('PERFECT! ♡');
                }

                updateLevel();
            }

            // Xóa ống đã đi khỏi màn hình
            if (currentLeft + pipeWidth < 0) {

                element.remove();

                pipes.splice(i, 1);
            }
        }

        // Tạo ống tiếp theo khi ống cuối đã di chuyển đủ xa
        if (pipes.length === 0) {

            createPipe(containerWidth + 30);

        } else {

            const lastPipe = pipes[pipes.length - 1];

            const lastLeft = parseFloat(lastPipe.element.css('left'));

            if (lastLeft < containerWidth - 235) {
                createPipe(containerWidth + 30);
            }
        }
    }


    // =========================
    // 10. VÒNG LẶP GAME
    // =========================

    function gameLoop() {

        if (!gameStarted || gameOver) {
            return;
        }

        updateBird();

        updatePipes();

        createTrail();

        if (checkCollision()) {
            endGame();
        }
    }


    // =========================
    // 11. KẾT THÚC GAME
    // =========================

    function endGame() {

        if (gameOver) {
            return;
        }

        gameOver = true;
        gameStarted = false;

        clearInterval(gameInterval);
        clearInterval(trailInterval);

        // Lưu điểm cao
        if (score > bestScore) {

            bestScore = score;

            localStorage.setItem('pinkDreamBest', bestScore);
        }

        $('#best_score').text(bestScore);

        $('#final_score').text(score);
        $('#final_best').text(bestScore);

        // Dừng chuyển động của chim
        bird.css({
            transform: 'rotate(70deg)'
        });

        playSound(180, 0.35, 'triangle');

        // Hiện bảng Game Over ở chính giữa game
        $('#end_screen').removeClass('hidden');

    }


    // =========================
    // 12. BẮT ĐẦU GAME
    // =========================

    function startGame() {

        clearInterval(gameInterval);
        clearInterval(trailInterval);

        gameStarted = true;
        gameOver = false;

        score = 0;
        level = 1;

        birdTop = 250;
        birdVelocity = 0;

        pipes = [];

        $('#score').text(0);
        $('#level').text(1);

        $('#combo_message').hide().text('');
        $('#level_message').hide().text('');

        $('#end_screen').addClass('hidden');
        $('#start_screen').addClass('hidden');

        pipeLayer.empty();
        trailLayer.empty();

        container.removeClass('day sunset night');
        container.addClass('day');

        bird.css({
            top: birdTop + 'px',
            transform: 'rotate(0deg)'
        });

        // Tạo ống đầu tiên
        createPipe(container.innerWidth() + 30);

        // Tạo ống thứ hai
        createPipe(container.innerWidth() + 300);

        gameInterval = setInterval(gameLoop, 20);

        trailInterval = setInterval(createTrail, 90);
    }


    // =========================
    // 13. NÚT BẮT ĐẦU VÀ CHƠI LẠI
    // =========================

    $('#play_btn').on('click', function (e) {

        e.stopPropagation();

        startGame();
    });


    $('#restart_btn').on('click', function (e) {

        e.stopPropagation();

        startGame();
    });


    // =========================
    // 14. ĐIỀU KHIỂN BẰNG BÀN PHÍM
    // =========================

    $(document).on('keydown', function (e) {

        if (
            e.code === 'Space' ||
            e.code === 'ArrowUp' ||
            e.code === 'ArrowDown'
        ) {

            e.preventDefault();

            if (e.repeat) {
                return;
            }

            flap();
        }

    });


    // =========================
    // 15. ĐIỀU KHIỂN BẰNG CHUỘT
    // =========================

    container.on('mousedown', function (e) {

        if (
            $(e.target).closest(
                '#play_btn, #restart_btn, .popup'
            ).length
        ) {
            return;
        }

        flap();
    });


    // =========================
    // 16. ĐIỀU KHIỂN CẢM ỨNG
    // =========================

    container.on('touchstart', function (e) {

        if (
            $(e.target).closest(
                '#play_btn, #restart_btn, .popup'
            ).length
        ) {
            return;
        }

        e.preventDefault();

        flap();

    });

});