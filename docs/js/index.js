(function () {

  var $arrow;
  var $window;
  var stageW;
  var stageH;

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

    var l = 7;
    if (x > l) { // 右
        $arrow.css({
            x: -stageW
        });
    	document.getElementById("message").textContent="右";
    }
    else if (x < -l) { // 左
        $arrow.css({
            x: stageW
        });
    	document.getElementById("message").textContent="左";
    }
    else if (y > l) { // 上
        $arrow.css({
            x: -stageH
        });
    	document.getElementById("message").textContent="右";
    	document.getElementById("message").textContent="上";
    }
    else if (y < -l) { // 下
        $arrow.css({
            x: stageH
        });
    	document.getElementById("message").textContent="下";
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