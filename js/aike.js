// 存数据
// name：命名 data：数据
function saveData(name, data) {
  localStorage.setItem(name, JSON.stringify({ time: Date.now(), data: data }));
}

// 取数据
// name：命名 time：过期时长,单位分钟,如传入30,即加载数据时如果超出30分钟返回0,否则返回数据
function loadData(name, time) {
  let d = JSON.parse(localStorage.getItem(name));
  // 过期或有错误返回 0 否则返回数据
  if (d) {
    let t = Date.now() - d.time;
    if (t < time * 60 * 1000 && t > -1) return d.data;
  }
  return 0;
}

// 上面两个函数如果你有其他需要存取数据的功能，也可以直接使用

// 读取背景
try {
  let data = loadData("blogbg", 1440);
  if (data) changeBg(data, 1);
  else localStorage.removeItem("blogbg");
} catch (error) {
  localStorage.removeItem("blogbg");
}

// 切换背景函数
// 此处的flag是为了每次读取时都重新存储一次,导致过期时间不稳定
// 如果flag为0则存储,即设置背景. 为1则不存储,即每次加载自动读取背景.
function changeBg(s, flag) {
  let bg = document.getElementById("web_bg");
  if (s.charAt(0) == "#") {
    bg.style.backgroundColor = s;
    bg.style.backgroundImage = "none";
  } else bg.style.backgroundImage = s;
  if (!flag) {
    saveData("blogbg", s);
  }
}

// 以下为2.0新增内容

// 创建窗口
var winbox = "";

function createWinbox() {
  let div = document.createElement("div");
  document.body.appendChild(div);
  winbox = WinBox({
    id: "changeBgBox",
    index: 999,
    title: "切换背景",
    x: "center",
    y: "center",
    minwidth: "300px",
    height: "60%",
    background: "var(--leonus-blue)",
    onmaximize: () => {
      div.innerHTML = `<style>body::-webkit-scrollbar {display: none;}div#changeBgBox {width: 100% !important;}</style>`;
    },
    onrestore: () => {
      div.innerHTML = "";
    },
  });
  winResize();
  window.addEventListener("resize", winResize);

  // 每一类我放了一个演示，直接往下复制粘贴 a标签 就可以，需要注意的是 函数里面的链接 冒号前面需要添加反斜杠\进行转义
  winbox.body.innerHTML = `
    <div id="article-container" style="padding:10px;">
    
    <p><button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:#5fcdff;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>
    <h2 id="图片（手机）"><a href="#图片（手机）" class="headerlink" title="图片（手机）"></a>图片（手机）</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.jsdelivr.net/gh/Aike505/ImgHosting/Aike505-PIC/202210160953481.jpg)" class="pimgbox" onclick="changeBg('url(https\://cdn.jsdelivr.net/gh/Aike505/ImgHosting/Aike505-PIC/202210160953481.jpg)')"></a>
    </div>
    
    <h2 id="图片（电脑）"><a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>图片（电脑）</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.jsdelivr.net/gh/Aike505/ImgHosting/Aike505-PIC/202210151229279.jpg)" class="imgbox" onclick="changeBg('url(https\://cdn.jsdelivr.net/gh/Aike505/ImgHosting/Aike505-PIC/202210151229279.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.jsdelivr.net/gh/Aike505/ImgHosting/Aike505-PIC/202210151228677.jpg)" class="imgbox" onclick="changeBg('url(https\://cdn.jsdelivr.net/gh/Aike505/ImgHosting/Aike505-PIC/202210151228677.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.jsdelivr.net/gh/Aike505/ImgHosting/Aike505-PIC/202210151826055.jpg)" class="imgbox" onclick="changeBg('url(https\://cdn.jsdelivr.net/gh/Aike505/ImgHosting/Aike505-PIC/202210151826055.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.jsdelivr.net/gh/Aike505/ImgHosting/Aike505-PIC/202210151228758.jpg)" class="imgbox" onclick="changeBg('url(https\://cdn.jsdelivr.net/gh/Aike505/ImgHosting/Aike505-PIC/202210151228758.jpg)')"></a>
    </div>
    
    
    
    <h2 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h2>
        <div class="bgbox">
            <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="leonus.changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
            <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, rgb(255, 110, 127), rgb(191, 233, 255))" onclick="leonus.changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
            <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #ff4b1f, #1fddff)" onclick="leonus.changeBg('linear-gradient(to right, #ff4b1f, #1fddff)')"></a>
            <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, rgb(251, 215, 134), rgb(247, 121, 125))" onclick="leonus.changeBg('linear-gradient(to right, rgb(251, 215, 134), rgb(247, 121, 125))')"></a>
            <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #16bffd, #cb3066)" onclick="leonus.changeBg('linear-gradient(to right, #16bffd, #cb3066)')"></a>
            <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, rgb(192, 192, 170), rgb(28, 239, 255))" onclick="leonus.changeBg('linear-gradient(to right, rgb(192, 192, 170), rgb(28, 239, 255))')"></a>
</div>
    
    <h2 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #F4E2D8" onclick="leonus.changeBg('#F4E2D8')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #7D9D9C" onclick="leonus.changeBg('#7D9D9C')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #F2D7D9" onclick="leonus.changeBg('#F2D7D9')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #76BA99" onclick="leonus.changeBg('#76BA99')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #9FC088" onclick="leonus.changeBg('#9FC088')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #CEAB93" onclick="leonus.changeBg('#CEAB93')"></a>
</div>
`;
}

// 适应窗口大小
function winResize() {
  var offsetWid = document.documentElement.clientWidth;
  if (offsetWid <= 768) {
    winbox.resize(offsetWid * 0.95 + "px", "90%").move("center", "center");
  } else {
    winbox.resize(offsetWid * 0.6 + "px", "70%").move("center", "center");
  }
}

// 切换状态，窗口已创建则控制窗口显示和隐藏，没窗口则创建窗口
function toggleWinbox() {
  if (document.querySelector("#changeBgBox")) winbox.toggleClass("hide");
  else createWinbox();
}

// 在返回顶部图标显示阅读进度
window.onscroll = percent; // 执行函数
// 页面百分比
function percent() {
  let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
    b =
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      ) - document.documentElement.clientHeight, // 整个网页高度
    result = Math.round((a / b) * 100), // 计算百分比
    up = document.querySelector("#go-up"); // 获取按钮

  if (result <= 95) {
    up.childNodes[0].style.display = "none";
    up.childNodes[1].style.display = "block";
    up.childNodes[1].innerHTML = result;
  } else {
    up.childNodes[1].style.display = "none";
    up.childNodes[0].style.display = "block";
  }
}

// 分享本页
function share() {
  let url = window.location.origin + window.location.pathname;
  new ClipboardJS(".share", {
    text: function () {
      return "标题：" + document.title + "\n链接：" + url;
    },
  });
  btf.snackbarShow("本页链接已复制到剪切板，快去分享吧~");
}

// 评论表情包放大功能
// 如果当前页有评论就执行函数
if (document.getElementById("post-comment")) owoBig();
// 表情放大
function owoBig() {
  let flag = 1, // 设置节流阀
    owo_time = "", // 设置计时器
    m = 3; // 设置放大倍数
  // 创建盒子
  let div = document.createElement("div"),
    body = document.querySelector("body");
  // 设置ID
  div.id = "owo-big";
  // 插入盒子
  body.appendChild(div);

  // 构造observer
  let observer = new MutationObserver((mutations) => {
    for (let i = 0; i < mutations.length; i++) {
      let dom = mutations[i].addedNodes,
        owo_body = "";
      if (dom.length == 2 && dom[1].className == "OwO-body") owo_body = dom[1];
      // 如果需要在评论内容中启用此功能请解除下面的注释
      // else if (dom.length == 1 && dom[0].className == 'tk-comment') owo_body = dom[0];
      else continue;

      // 禁用右键（手机端长按会出现右键菜单，为了体验给禁用掉）
      if (document.body.clientWidth <= 768)
        owo_body.addEventListener("contextmenu", (e) => e.preventDefault());
      // 鼠标移入
      owo_body.onmouseover = (e) => {
        if (flag && e.target.tagName == "IMG") {
          flag = 0;
          // 移入300毫秒后显示盒子
          owo_time = setTimeout(() => {
            let height = e.path[0].clientHeight * m, // 盒子高
              width = e.path[0].clientWidth * m, // 盒子宽
              left = e.x - e.offsetX - (width - e.path[0].clientWidth) / 2, // 盒子与屏幕左边距离
              top = e.y - e.offsetY; // 盒子与屏幕顶部距离

            if (left + width > body.clientWidth)
              left -= left + width - body.clientWidth + 10; // 右边缘检测，防止超出屏幕
            if (left < 0) left = 10; // 左边缘检测，防止超出屏幕
            // 设置盒子样式
            div.style.cssText = `display:flex; height:${height}px; width:${width}px; left:${left}px; top:${top}px;`;
            // 在盒子中插入图片
            div.innerHTML = `<img src="${e.target.src}">`;
          }, 300);
        }
      };
      // 鼠标移出隐藏盒子
      owo_body.onmouseout = () => {
        (div.style.display = "none"), (flag = 1), clearTimeout(owo_time);
      };
    }
  });
  observer.observe(document.getElementById("post-comment"), {
    subtree: true,
    childList: true,
  }); // 监听的 元素 和 配置项
}

// 文章评论右侧弹框
//移除FixedComment类，保持原生样式，确保不与最新评论跳转冲突
function RemoveFixedComment() {
  var activedItems = document.querySelectorAll(".fixedcomment");
  if (activedItems) {
    for (i = 0; i < activedItems.length; i++) {
      activedItems[i].classList.remove("fixedcomment");
    }
  }
}
//给post-comment添加fixedcomment类
function AddFixedComment() {
  var commentBoard = document.getElementById("post-comment");
  var quitBoard = document.getElementById("quit-board");
  commentBoard.classList.add("fixedcomment");
  quitBoard.classList.add("fixedcomment");
}
//创建一个蒙版，作为退出键使用
function CreateQuitBoard() {
  var quitBoard = `<div id="quit-board" onclick="RemoveFixedComment()"></div>`;
  var commentBoard = document.getElementById("post-comment");
  commentBoard.insertAdjacentHTML("beforebegin", quitBoard);
}

function FixedCommentBtn() {
  //第一步，判断当前是否存在FixedComment类，存在则移除，不存在则添加
  // 获取评论区对象
  var commentBoard = document.getElementById("post-comment");
  // 若评论区存在
  if (commentBoard) {
    // 判断是否存在fixedcomment类
    if (commentBoard.className.indexOf("fixedcomment") > -1) {
      // 存在则移除
      RemoveFixedComment();
    } else {
      // 不存在则添加
      CreateQuitBoard();
      AddFixedComment();
    }
  }
  // 若不存在评论区则跳转至留言板(留言板路径记得改为自己的)
  else {
    // 判断是否开启了pjax，尽量不破坏全局吸底音乐刷新
    if (pjax) {
      pjax.loadUrl("/comments/#post-comment");
    } else {
      window.location.href = "/comments/#post-comment";
    }
  }
}

//切换页面先初始化一遍，确保开始时是原生状态。所以要加pjax重载。
RemoveFixedComment();
document.getElementById('page-name').innerText = document.title.split(' | 下雨天不打伞')[0];