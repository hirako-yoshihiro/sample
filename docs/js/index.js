(function () {

  var $arrow;
  var $window;
  var stageW;
  var stageH;
  var stageD;

  var isMotion;

  $(function () {
    $arrow = $("#message");
    $window = $(window);

    isMotion = false;

    $(window).on("resize", resizeHandler);
    resizeHandler();

    // DeviceMotion Event
    window.addEventListener("devicemotion", devicemotionHandler);
  });

  // 加速度が変化
  function devicemotionHandler(event) {
    if (isMotion) return;

    // 加速度
    // X軸
    var x = event.acceleration.x;
    // Y軸
    var y = event.acceleration.y;
    // Z軸
    var z = event.acceleration.z;

    $arrow.stop();

    var l = 10;
    if (x > l) { // 左へ移動
        $arrow.css({
            x: -stageW
        });
    	document.getElementById("message").textContent="左に動きました";
    }
    else if (x < -l) { // 右へ移動
        $arrow.css({
            x: stageW
        });
    	document.getElementById("message").textContent="右に動きました";
    }
    else if (y > l) { // 下へ移動
        $arrow.css({
            x: -stageH
        });
    	document.getElementById("message").textContent="下に動きました";
    }
    else if (y < -l) { // 上へ移動
        $arrow.css({
            x: stageH
        });
    	document.getElementById("message").textContent="上に動きました";
    }
    else if (z < l) { // 後ろへ移動
        $arrow.css({
            z: -stageD
        });
    	document.getElementById("message").textContent="後ろに動きました";
    }
    else if (z < -l) { // 前へ移動
        $arrow.css({
            z: stageD
        });
    	document.getElementById("message").textContent="前に動きました";
    }
    else return;

    isMotion = true;

    $arrow.delay(500).transition({x: 0, y: 0}, 300, "easeOutCubic", function () {
      isMotion = false
    });
  }

  function resizeHandler(event) {
    stageW = $window.width();
    stageH = $window.height();
  }
})();