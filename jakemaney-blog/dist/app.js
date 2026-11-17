'use strict';
const notes=[
{title:'从这里开始：我的 PLC × AI 学习地图',cat:'PLC 控制',tags:['PLC','学习路线'],intro:'控制现场与智能技术之间，有一条值得慢慢走的路。这篇置顶笔记整理博客的内容方向，也为第一次来到这里的你提供一个阅读起点。',art:'',sections:[['先建立控制系统的地图','从现场设备、输入输出、程序逻辑和人机界面这四层理解一套控制系统。阅读程序之前，先画出信号的来源、用途与异常状态，能够帮助我们更快找到问题的边界。'],['再建立数据的地图','记录每个数据点的单位、采样周期、质量标记与时间戳。对同一个物理量建立一致的命名，是后续分析、可视化和机器学习的起点。'],['最后让 AI 帮助思考','先从资料整理、术语解释和学习计划等低风险任务开始。面对控制逻辑与现场操作，始终把验证和工程判断放在工具建议之前。这个博客会沿着控制、数据与智能三个方向持续积累笔记。']]},
{title:'读懂 PLC 扫描周期：输入、逻辑与输出之间发生了什么',cat:'PLC 控制',tags:['PLC','电气控制'],intro:'为什么输入信号已经变化，输出却没有立即动作？从扫描周期入手，把程序执行顺序、信号采样和响应时间放在同一张地图上。',art:'plc',sections:[['一个理解程序的起点','周期性任务通常会围绕输入采集、逻辑运算和输出更新工作。但具体执行方式取决于控制器、任务配置和 I/O 更新机制，不能把一个简化流程当成所有设备的严格时序。'],['观察时间，而不只观察数值','排查间歇性现象时，同时记录信号持续时间、任务周期和通信刷新周期。短脉冲可能落在两次采样之间；是否需要高速输入或事件任务，应根据设备手册和现场要求确定。'],['把验证放在现场操作之前','先在仿真或隔离测试环境中检查正常路径、异常路径和恢复路径。修改前保留项目备份，确认控制器型号、固件与工程软件版本，并安排可恢复的维护窗口。']]},
{title:'AI 入门笔记：从一个问题，到一份可验证的结果',cat:'AI 学习',tags:['AI','机器学习','学习路线'],intro:'不用急着追逐模型名词。先明确任务、准备样本，再建立评价标准，让每一次尝试都留下可以比较的结果。',art:'ai',sections:[['把任务缩小','“让 AI 帮我学习”过于宽泛。可以先把任务定义为：对一段报警说明提取设备、症状和待确认信息，并要求保留原文依据。任务越具体，越容易判断结果是否有用。'],['准备一组固定样本','保留典型案例与容易混淆的案例，在修改提示词前后使用同一组样本比较。不要只挑成功案例；错误分类、遗漏条件和无依据补充都值得单独记录。'],['定义停止条件','当信息不足时，输出应该明确指出缺失信息。把“需要人工确认”作为一种有效结果，可以帮助避免把不确定的推测误当作结论。']]},
{title:'工业网络笔记：先画清楚边界，再谈数据连通',cat:'工业网络',tags:['工业网络','OPC UA'],intro:'设备能通信只是起点。把控制流、采集流和维护流分开梳理，才能看清网络中的依赖关系与故障范围。',art:'net',sections:[['记录谁与谁通信','整理设备清单、网络地址、用途、通信方向与负责人。拓扑图应反映实际连接，而不是只有理想设计。现场发现的差异应被记录和确认。'],['从只读采集开始','上层应用初次接入时，先确定需要哪些变量、刷新频率和访问权限。避免把控制器的整个变量空间开放给每一个新应用；让数据需求对应明确的访问范围。'],['把故障场景写进设计','考虑采集服务离线、交换机重启、时间同步失效和数据过期后的行为。业务画面应区分当前值与历史缓存值，避免把失联设备误认为仍在正常运行。']]},
{title:'边缘 AI 的第一步：先算清数据与维护的账',cat:'AI 学习',tags:['AI','边缘计算'],intro:'模型放在产线附近，意味着什么？从时延、数据、部署和维护四个问题出发，整理一个项目启动前的思考清单。',art:'',sections:[['明确响应要求','先问清从采样到结果需要多长时间，以及结果延迟或缺失时系统如何处理。模型推理时间只是整个处理链路中的一部分。'],['明确数据条件','数据的代表性、标注一致性和采集环境会影响模型表现。验证时应覆盖正常状态之外的变化，例如光照、负载、材料和设备老化。'],['明确长期维护方式','为模型、配置和运行环境建立版本记录，并保留回退方案。先用旁路观察方式评估效果，再决定是否进入实际业务决策链。']]},
{title:'如何整理一份真正能复用的报警复盘',cat:'PLC 控制',tags:['电气控制','工程笔记'],intro:'一条报警消失了，并不代表问题已经被理解。把现象、证据、判断和后续验证分开记录，让经验成为团队可以复用的知识。',art:'',sections:[['保留时间线','按发生顺序记录报警、操作、设备状态和恢复动作。注明时间来源以及是否存在时钟偏差，让后续分析能够把不同系统的事件对齐。'],['区分证据与判断','截图、日志和测量值属于证据；原因推测属于判断。把两者分开写，并标注哪些判断已经验证，可以减少复盘中的误解。'],['给改进项一个验证方法','对每个改进项写清负责人、实施条件和验证标准。避免只留下“加强检查”这样的泛化结论；说明要检查什么、多久检查一次，以及异常时如何处理。']]}
];
const posts = [...newsPosts, ...notes.map(p=>({...p,date:'2026-11-17',kind:'学习笔记'}))];
const $=s=>document.querySelector(s);
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function sourceLink(p){return p.url?'<a class="source-link" href="'+esc(p.url)+'" target="_blank" rel="noopener noreferrer">来源：'+esc(p.source)+' ↗</a>':'';}
function openPost(i){
 const p=posts[i];if(!p)return;
 $('#article-body').innerHTML='<div class="category">'+esc(p.cat)+' / '+p.kind+'</div><h1>'+esc(p.title)+'</h1><div class="meta">'+(p.url?'原文发布：':'笔记发布：')+p.date+' · '+(p.url?'jakemaney 编辑整理':'jakemaney')+'</div><p>'+esc(p.intro)+'</p>'+p.sections.map(s=>'<h2>'+esc(s[0])+'</h2><p>'+esc(s[1])+'</p>').join('')+(p.url?'<div class="source-box">'+sourceLink(p)+'<p>核验日期：'+p.checked+' · 中文编译摘要，非原文全文。本站观察为编辑观点。</p></div>':'');
 if($('#search').open)$('#search').close();$('#reader').showModal();$('#reader').scrollTop=0;
}
function render(category='最新资讯'){
 const items=posts.map((p,i)=>({...p,i})).filter(p=>category==='全部'||(category==='最新资讯'?Boolean(p.url):p.cat===category));
 $('#count').textContent=items.length+' 篇内容';
 $('#articles').innerHTML=items.map(p=>'<article class="box post">'+(p.art?'<div class="art '+p.art+'"><span>'+({plc:'INPUT → LOGIC',ai:'HUMAN × AI',net:'CONNECTED'}[p.art])+'</span><b>'+({plc:'⌘',ai:'✧',net:'◎'}[p.art])+'</b><small>JAKEMANEY / FIELD NOTES</small></div>':'')+'<div class="category"><span class="pin">'+p.kind+'</span>'+p.cat+'</div><h2><button data-post="'+p.i+'">'+esc(p.title)+'</button></h2><p>'+esc(p.intro)+'</p>'+sourceLink(p)+'<div class="meta"><span>'+(p.url?'原文发布 ':'笔记发布 ')+p.date+'</span><span>'+(p.url?'核验 '+p.checked:'jakemaney')+'</span><button data-post="'+p.i+'"> '+(p.url?'阅读摘要':'阅读全文')+' ↗</button></div><div class="tags">'+p.tags.map(t=>'<button data-tag="'+esc(t)+'"># '+esc(t)+'</button>').join('')+'</div></article>').join('');
 document.querySelectorAll('#filters button').forEach(b=>{b.classList.toggle('selected',b.dataset.category===category);b.setAttribute('aria-pressed',String(b.dataset.category===category));});
}
function search(q){const items=posts.map((p,i)=>({...p,i})).filter(p=>(p.title+p.cat+p.tags.join('')+p.intro).toLowerCase().includes(q.toLowerCase().trim()));$('#results').innerHTML=items.length?items.map(p=>'<button data-post="'+p.i+'"><small class="category">'+p.cat+'</small><br>'+p.title+'</button>').join(''):'<p class="empty">没有找到相关笔记，试试其他关键词。</p>';}
document.addEventListener('click',e=>{const b=e.target.closest('[data-post],[data-category],[data-tag],[data-close]');if(!b)return;if(b.dataset.post!==undefined)openPost(Number(b.dataset.post));if(b.dataset.category)render(b.dataset.category);if(b.dataset.tag){$('#search').showModal();$('#query').value=b.dataset.tag;search(b.dataset.tag);}if(b.dataset.close)$('#'+b.dataset.close).close();});
$('#search-toggle').onclick=()=>{$('#search').showModal();$('#query').value='';search('');$('#query').focus();};$('#query').oninput=e=>search(e.target.value);
$('#archive-list').innerHTML=posts.map((p,i)=>({...p,i})).sort((a,b)=>b.date.localeCompare(a.date)).map(p=>'<button data-post="'+p.i+'">'+p.date+' · '+p.kind+'　'+esc(p.title)+'</button>').join('');
$('#tags').innerHTML=[...new Set(posts.flatMap(p=>p.tags))].map(t=>'<button data-tag="'+t+'">'+t+'</button>').join('');
try{document.body.classList.toggle('dark',localStorage.getItem('jakemaney-theme')==='dark');}catch{}
$('#theme').onclick=()=>{const dark=document.body.classList.toggle('dark');$('#theme').textContent=dark?'☀':'☾';$('#theme').setAttribute('aria-label',dark?'切换浅色模式':'切换深色模式');try{localStorage.setItem('jakemaney-theme',dark?'dark':'light');}catch{}};
let paused=matchMedia('(prefers-reduced-motion: reduce)').matches;document.body.classList.toggle('paused',paused);
$('#motion').onclick=()=>{paused=!paused;document.body.classList.toggle('paused',paused);$('#motion').textContent=paused?'▷':'Ⅱ';$('#motion').setAttribute('aria-label',paused?'播放动画':'暂停动画');};
const canvas=$('#stars'),ctx=canvas.getContext('2d');let w=0,h=0,stars=[];
function resize(){w=canvas.clientWidth;h=canvas.clientHeight;const dpr=Math.min(devicePixelRatio||1,2);canvas.width=w*dpr;canvas.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);stars=Array.from({length:100},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.3+.2,s:Math.random()*.15+.03}));}
resize();window.addEventListener('resize',resize);
function frame(){if(!document.hidden){ctx.clearRect(0,0,w,h);for(const s of stars){if(!paused)s.y=(s.y+s.s)%h;ctx.fillStyle='rgba(175,212,240,.55)';ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill();}}requestAnimationFrame(frame);}frame();
const phrases=['记录控制的逻辑，探索智能的可能。','保持好奇，让学习成为日常。','从一行逻辑，到一个更大的世界。'];let phrase=0,pos=phrases[0].length,back=true,hold=30;
setInterval(()=>{if(paused||document.hidden)return;if(hold>0){hold--;return;}if(back){pos--;if(pos===0){back=false;phrase=(phrase+1)%phrases.length;}}else{pos++;if(pos===phrases[phrase].length){back=true;hold=35;}}$('#typed').textContent=phrases[phrase].slice(0,pos);},110);
document.querySelectorAll('.stats b')[0].textContent=posts.length;
document.querySelectorAll('.stats b')[1].textContent=new Set(posts.map(p=>p.cat)).size;
document.querySelectorAll('.stats b')[2].textContent=new Set(posts.flatMap(p=>p.tags)).size;
render();

