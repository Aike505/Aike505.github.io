function saveData(e,n){localStorage.setItem(e,JSON.stringify({time:Date.now(),data:n}))}function loadData(e,n){let t=JSON.parse(localStorage.getItem(e));if(t){let e=Date.now()-t.time;if(e<60*n*1e3&&e>-1)return t.data}return 0}try{let e=loadData("blogbg",1440);e?changeBg(e,1):localStorage.removeItem("blogbg")}catch(e){localStorage.removeItem("blogbg")}function changeBg(e,n){let t=document.getElementById("web_bg");"#"==e.charAt(0)?(t.style.backgroundColor=e,t.style.backgroundImage="none"):t.style.backgroundImage=e,n||saveData("blogbg",e)}var winbox="";function createWinbox(){let e=document.createElement("div");document.body.appendChild(e),winbox=WinBox({id:"changeBgBox",index:999,title:"切换背景",x:"center",y:"center",minwidth:"300px",height:"60%",background:"var(---blue)",onmaximize:()=>{e.innerHTML="<style>body::-webkit-scrollbar {display: none;}div#changeBgBox {width: 100% !important;}</style>"},onrestore:()=>{e.innerHTML=""}}),winResize(),window.addEventListener("resize",winResize),winbox.body.innerHTML='\n    <div id="article-container" style="padding:10px;">\n    <p><button onclick="localStorage.removeItem(\'blogbg\');location.reload();" style="background:#5fcdff;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>\n    <h2 id="图片（手机）"><a href="#图片（手机）" class="headerlink" title="图片（手机）"></a>图片（手机）</h2>\n    <div class="bgbox">\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/10/24/vSaeplVUJWcTxXN.jpg)" class="pimgbox" onclick="changeBg(\'url(https://s2.loli.net/2022/10/24/vSaeplVUJWcTxXN.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/10/24/sGi5mwVELXR7cj2.jpg)" class="pimgbox" onclick="changeBg(\'url(https://s2.loli.net/2022/10/24/sGi5mwVELXR7cj2.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/10/24/w6cuEoIgj3e9Hia.jpg)" class="pimgbox" onclick="changeBg(\'url(https://s2.loli.net/2022/10/24/w6cuEoIgj3e9Hia.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/10/24/sjNyRJgvkDGoEHS.jpg)" class="pimgbox" onclick="changeBg(\'url(https://s2.loli.net/2022/10/24/sjNyRJgvkDGoEHS.jpg)\')"></a>\n\n    </div>\n    <h2 id="图片（电脑）"><a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>图片（电脑）</h2>\n    <div class="bgbox">\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s3.bmp.ovh/imgs/2022/10/21/966d85c470185cc9.jpg)" class="imgbox" onclick="changeBg(\'url(https://s3.bmp.ovh/imgs/2022/10/21/966d85c470185cc9.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s3.bmp.ovh/imgs/2022/10/21/1ec5a40201abe7bd.jpg)" class="imgbox" onclick="changeBg(\'url(https://s3.bmp.ovh/imgs/2022/10/21/1ec5a40201abe7bd.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/10/24/Hae9uQiAlR7Tyt5.jpg)" class="imgbox" onclick="changeBg(\'url(https://s2.loli.net/2022/10/24/Hae9uQiAlR7Tyt5.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/10/24/2DmtRhbNP38MaYH.jpg)" class="imgbox" onclick="changeBg(\'url(https://s2.loli.net/2022/10/24/2DmtRhbNP38MaYH.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/10/24/9zqTBno4ifWmUu3.jpg)" class="imgbox" onclick="changeBg(\'url(https://s2.loli.net/2022/10/24/9zqTBno4ifWmUu3.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/10/24/EzZhcHL81ilVIaS.jpg)" class="imgbox" onclick="changeBg(\'url(https://s2.loli.net/2022/10/24/EzZhcHL81ilVIaS.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/10/24/Jb89nUat5K7LEru.jpg)" class="imgbox" onclick="changeBg(\'url(https://s2.loli.net/2022/10/24/Jb89nUat5K7LEru.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/10/24/BP9aATI4cMHxG3j.jpg)" class="imgbox" onclick="changeBg(\'url(https://s2.loli.net/2022/10/24/BP9aATI4cMHxG3j.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/10/24/rl96DLkFVaNTQE4.jpg)" class="imgbox" onclick="changeBg(\'url(https://s2.loli.net/2022/10/24/rl96DLkFVaNTQE4.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/10/24/xgtuoriqem4yvlk.jpg)" class="imgbox" onclick="changeBg(\'url(https://s2.loli.net/2022/10/24/xgtuoriqem4yvlk.jpg)\')"></a>\n    </div>\n    \n    \n    \n    <h2 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h2>\n    <div class="bgbox">\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg(\'linear-gradient(to right, #eecda3, #ef629f)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, rgb(255, 110, 127), rgb(191, 233, 255))" onclick="changeBg(\'linear-gradient(to right, rgb(255, 110, 127), rgb(191, 233, 255)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #ff4b1f, #1fddff)" onclick="changeBg(\'linear-gradient(to right, #ff4b1f, #1fddff)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, rgb(251, 215, 134), rgb(247, 121, 125))" onclick="changeBg(\'linear-gradient(to right, rgb(251, 215, 134), rgb(247, 121, 125))\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #16bffd, #cb3066)" onclick="changeBg(\'linear-gradient(to right, #16bffd, #cb3066)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, rgb(192, 192, 170), rgb(28, 239, 255))" onclick="changeBg(\'linear-gradient(to right, rgb(192, 192, 170), rgb(28, 239, 255))\')"></a>\n    </div>\n    \n    <h2 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h2>\n    <div class="bgbox">\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #F4E2D8" onclick="changeBg(\'#F4E2D8\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #76BA99" onclick="changeBg(\'#76BA99\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #F2D7D9" onclick="changeBg(\'#F2D7D9\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #9FC088" onclick="changeBg(\'#9FC088\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #7D9D9C" onclick="changeBg(\'#7D9D9C\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #CEAB93" onclick="changeBg(\'#CEAB93\')"></a>\n</div>\n'}function winResize(){var e=document.documentElement.clientWidth;e<=768?winbox.resize(.95*e+"px","90%").move("center","center"):winbox.resize(.6*e+"px","70%").move("center","center")}function toggleWinbox(){document.querySelector("#changeBgBox")?winbox.toggleClass("hide"):createWinbox()}function percent(){let e=document.documentElement.scrollTop||window.pageYOffset,n=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-document.documentElement.clientHeight,t=Math.round(e/n*100),o=document.querySelector("#go-up");t<=95?(o.childNodes[0].style.display="none",o.childNodes[1].style.display="block",o.childNodes[1].innerHTML=t):(o.childNodes[1].style.display="none",o.childNodes[0].style.display="block")}function share(){let e=window.location.origin+window.location.pathname;new ClipboardJS(".share",{text:function(){return"标题："+document.title+"\n链接："+e}}),btf.snackbarShow("本页链接已复制到剪切板，快去分享吧~")}function owoBig(){let e=1,n="",t=document.createElement("div"),o=document.querySelector("body");t.id="owo-big",o.appendChild(t),new MutationObserver((l=>{for(let a=0;a<l.length;a++){let r=l[a].addedNodes,i="";2==r.length&&"OwO-body"==r[1].className&&(i=r[1],document.body.clientWidth<=768&&i.addEventListener("contextmenu",(e=>e.preventDefault())),i.onmouseover=l=>{e&&"IMG"==l.target.tagName&&(e=0,n=setTimeout((()=>{let e=3*l.path[0].clientHeight,n=3*l.path[0].clientWidth,a=l.x-l.offsetX-(n-l.path[0].clientWidth)/2,r=l.y-l.offsetY;a+n>o.clientWidth&&(a-=a+n-o.clientWidth+10),a<0&&(a=10),t.style.cssText=`display:flex; height:${e}px; width:${n}px; left:${a}px; top:${r}px;`,t.innerHTML=`<img src="${l.target.src}">`}),300))},i.onmouseout=()=>{t.style.display="none",e=1,clearTimeout(n)})}})).observe(document.getElementById("post-comment"),{subtree:!0,childList:!0})}function RemoveFixedComment(){var e=document.querySelectorAll(".fixedcomment");if(e)for(i=0;i<e.length;i++)e[i].classList.remove("fixedcomment")}function AddFixedComment(){var e=document.getElementById("post-comment"),n=document.getElementById("quit-board");e.classList.add("fixedcomment"),n.classList.add("fixedcomment")}function CreateQuitBoard(){document.getElementById("post-comment").insertAdjacentHTML("beforebegin",'<div id="quit-board" onclick="RemoveFixedComment()"></div>')}function FixedCommentBtn(){var e=document.getElementById("post-comment");e?e.className.indexOf("fixedcomment")>-1?RemoveFixedComment():(CreateQuitBoard(),AddFixedComment()):pjax?pjax.loadUrl("/comments/#post-comment"):window.location.href="/comments/#post-comment"}window.onscroll=percent,document.getElementById("post-comment")&&owoBig(),RemoveFixedComment(),document.getElementById("page-name").innerText=document.title.split(" | 下雨天不打伞")[0];