// https://l2dwidget.js.org/docs/class/src/index.js~L2Dwidget.html
if (window.L2Dwidget) {
    let darkPath = "js/live2d/hijiki/hijiki.model.json";
    let lightPath = "js/live2d/tororo/tororo.model.json";

    function calHOffset() {
        var footer = document.getElementsByTagName("footer")[0];
        var hr = footer.getElementsByTagName("hr")[0];
        return hr.offsetLeft - 5;
    }

    function calVOffset() {
        var footer = document.getElementsByTagName("footer")[0];
        // var hr = footer.getElementsByTagName("hr")[0];
        var clientHeight = document.body.clientHeight;
        return clientHeight - footer.offsetTop - 34;

    }

    let config = {
        model: {
            jsonPath: "",
        },
        dev: {
            border: false,
        },
        display: {
            superSample: 1, // 超采样等级
            width: 150, // canvas的宽度
            height: 200, // canvas的高度
            position: "left", // 显示位置：左或右
            hOffset: calHOffset(), // canvas水平偏移
            vOffset: calVOffset(), // canvas垂直偏移
        },
        mobile: {
            show: true, // 是否在移动设备上显示
            scale: 1, // 移动设备上的缩放
            motion: true, // 移动设备是否开启重力感应
        },
        react: {
            opacityDefault: 1, // 默认透明度
            opacityOnHover: 0.8, // 鼠标移上透明度
        },
    };

    this.show = function () {
        config.model.jsonPath =
            document.body.className != "colorscheme-light" ? lightPath : darkPath;
        L2Dwidget.init(config);
    };

    document
        .getElementById("dark-mode-toggle")
        .addEventListener("click", function () {
            config.model.jsonPath =
                document.body.className != "colorscheme-light" ? lightPath : darkPath;
            L2Dwidget.init(config);
        });

    this.show();
}
