const _0x53c790=_0x134b;function _0x134b(_0x179e7d,_0x637a01){const _0x86a24a=_0x86a2();return _0x134b=function(_0x134b62,_0x5e2060){_0x134b62=_0x134b62-0xda;let _0x37cc1b=_0x86a24a[_0x134b62];return _0x37cc1b;},_0x134b(_0x179e7d,_0x637a01);}(function(_0x406e3e,_0x56430f){const _0x247471=_0x134b,_0x5ec4c3=_0x406e3e();while(!![]){try{const _0x5ac944=-parseInt(_0x247471(0xea))/0x1*(-parseInt(_0x247471(0xf4))/0x2)+-parseInt(_0x247471(0xef))/0x3*(-parseInt(_0x247471(0xdb))/0x4)+parseInt(_0x247471(0xe7))/0x5*(-parseInt(_0x247471(0xeb))/0x6)+parseInt(_0x247471(0xed))/0x7*(parseInt(_0x247471(0xec))/0x8)+-parseInt(_0x247471(0xdf))/0x9*(parseInt(_0x247471(0xf1))/0xa)+-parseInt(_0x247471(0xfd))/0xb*(parseInt(_0x247471(0xf0))/0xc)+parseInt(_0x247471(0xfe))/0xd*(parseInt(_0x247471(0xdd))/0xe);if(_0x5ac944===_0x56430f)break;else _0x5ec4c3['push'](_0x5ec4c3['shift']());}catch(_0x54ef20){_0x5ec4c3['push'](_0x5ec4c3['shift']());}}}(_0x86a2,0xae629));const log=console[_0x53c790(0xfc)],cfonts=require('cfonts'),fs=require('fs'),spin=require(_0x53c790(0xfb)),spin1=require(_0x53c790(0xfb)),Pino=require(_0x53c790(0x106)),chalk=require(_0x53c790(0x104)),axios=require(_0x53c790(0xf3)),moment=require(_0x53c790(0xe2)),hora=moment['tz'](_0x53c790(0xf6))[_0x53c790(0xf7)](_0x53c790(0xfa)),data=moment['tz'](_0x53c790(0xf6))[_0x53c790(0xf7)]('DD/MM/YY'),color=(_0x49cccd,_0x4db751)=>{return!_0x4db751?chalk['green'](_0x49cccd):chalk['keyword'](_0x4db751)(_0x49cccd);},spinner={'interval':0x78,'frames':['💣','💥','💣','💥','💣','💥','💣','💥','💣','💥']};let globalSpinner;const getGlobalSpinner=(_0x29237c=![])=>{const _0x397c3f=_0x53c790;if(!globalSpinner)globalSpinner=new spin({'color':_0x397c3f(0xf2),'succeedColor':_0x397c3f(0xdc),'spinner':spinner,'disableSpins':_0x29237c});return globalSpinner;};spins=getGlobalSpinner(![]);const start=(_0x5edbac,_0x957d4d)=>{const _0x10ed98=_0x53c790;spins[_0x10ed98(0xe9)](_0x5edbac,{'text':_0x957d4d});},info=(_0x7146de,_0x557575)=>{const _0x17b2b5=_0x53c790;spins[_0x17b2b5(0xda)](_0x7146de,{'text':_0x557575});},success=(_0x2a9037,_0x3d30a5)=>{const _0x2f8008=_0x53c790;spins[_0x2f8008(0xe5)](_0x2a9037,{'text':_0x3d30a5});},close=(_0x2a3543,_0x3778f8)=>{const _0x295850=_0x53c790;spins[_0x295850(0x103)](_0x2a3543,{'text':_0x3778f8});},banner1=cfonts[_0x53c790(0xe0)](_0x53c790(0xf9),{'font':'chrome','align':_0x53c790(0xee),'colors':[_0x53c790(0xf5),_0x53c790(0xdc)]}),banner=cfonts['render'](_0x53c790(0xf8),{'font':_0x53c790(0xe8),'color':_0x53c790(0xe3),'align':_0x53c790(0xee),'colors':[_0x53c790(0xf5),_0x53c790(0xdc)]}),getGroupAdmins=_0x3b6eb3=>{const _0xfd7c4b=_0x53c790;admins=[];for(let _0x566e88 of _0x3b6eb3){if(_0x566e88[_0xfd7c4b(0xe6)]==_0xfd7c4b(0xe6))admins['push'](_0x566e88['id']);if(_0x566e88[_0xfd7c4b(0xe6)]==_0xfd7c4b(0x100))admins[_0xfd7c4b(0x102)](_0x566e88['id']);}return admins;};var cor=['red',_0x53c790(0xde),_0x53c790(0xe3),_0x53c790(0x105),_0x53c790(0xdc),_0x53c790(0xf2),_0x53c790(0xff)];function _0x86a2(){const _0x209972=['1475076BAzITG','12350lSWgXK','yellow','axios','10zyzFpA','greenBright','America/Sao_Paulo','format','Tatsumaki|V1','Tatsumaki|md','HH:mm:ss','spinnies','log','33WfFXaS','286BcHTkB','magenta','adm','exports','push','fail','chalk','white','pino','update','1046572reNKcq','green','998298YTRHSV','cyan','7623wqduEc','render','random','moment-timezone','blue','floor','succeed','admin','5IrZMDk','chrome','add','55810lXdYii','7622358fTLQve','45464qlYTIu','1589asIvBT','center','3TYfckm'];_0x86a2=function(){return _0x209972;};return _0x86a2();}cores=cor[Math[_0x53c790(0xe4)](Math[_0x53c790(0xe1)]()*cor['length'])],module[_0x53c790(0x101)]={'log':log,'color':color,'cores':cores,'hora':hora,'start':start,'info':info,'success':success,'close':close,'banner':banner,'getGroupAdmins':getGroupAdmins,'data':data};