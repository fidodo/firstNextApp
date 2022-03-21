(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[265],{1704:function(r,e,t){"use strict";t.d(e,{bZ:function(){return O}});var n=t(7462),a=t(3366),o=t(4655),i=t(7294),u=t(2154),l=t(4942),c=t(6767),s=t.n(c);var h=function(r,e){return s()(r).fade(1-e).rgb().string()},f=function(r){return{900:h(r,.92),800:h(r,.8),700:h(r,.6),600:h(r,.48),500:h(r,.38),400:h(r,.24),300:h(r,.16),200:h(r,.12),100:h(r,.08),50:h(r,.04)}},d=function(r,e){switch(e){case"high":return r;case"medium":return f(r)[700];case"low":return f(r)[500];case"lowest":return f(r)[300];default:return}},g=t(7721),p=t(3485);function v(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function b(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?v(t,!0).forEach((function(e){(0,l.Z)(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):v(t).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}var m=function(r){var e=r.color,t=r.theme.colors,n=t[e]&&t[e][200];return{light:{bg:e+".100"},dark:{bg:d(n,"lowest")}}},y=function(r){switch(r.variant){case"solid":return function(r){var e=r.color;return{light:{bg:e+".500",color:"white"},dark:{bg:e+".200",color:"gray.900"}}}(r);case"subtle":return m(r);case"top-accent":return function(r){var e=r.color;return{light:b({pt:2},m(r).light,{borderTop:"4px",borderColor:e+".500"}),dark:b({pt:2},m(r).dark,{borderTop:"4px",borderColor:e+".200"})}}(r);case"left-accent":return function(r){var e=r.color;return{light:b({pl:3},m(r).light,{borderLeft:"4px",borderColor:e+".500"}),dark:b({pl:3},m(r).dark,{borderLeft:"4px",borderColor:e+".200"})}}(r);default:return{}}},w={display:"flex",alignItems:"center",position:"relative",overflow:"hidden",pl:4,pr:4,pt:3,pb:3},k=function(r){var e=(0,p.If)().colorMode,t=b({},r,{theme:(0,g.F)()});return b({},w,{},y(t)[e])},M={info:{icon:"info",color:"blue"},warning:{icon:"warning-2",color:"orange"},success:{icon:"check-circle",color:"green"},error:{icon:"warning",color:"red"}},x=(0,i.createContext)(),O=function(r){var e=r.status,t=void 0===e?"info":e,i=r.variant,l=void 0===i?"subtle":i,c=(0,a.Z)(r,["status","variant"]),s=k({variant:l,color:M[t]&&M[t].color}),h={status:t,variant:l};return(0,o.tZ)(x.Provider,{value:h},(0,o.tZ)(u.ZP,(0,n.Z)({role:"alert"},s,c)))}},4968:function(r,e,t){"use strict";t.d(e,{Z:function(){return d}});var n=t(7462),a=t(3366),o=t(7294),i=t(2154),u=(0,o.forwardRef)((function(r,e){var t=r.gap,u=r.rowGap,l=r.columnGap,c=r.autoFlow,s=r.autoRows,h=r.autoColumns,f=r.templateRows,d=r.templateColumns,g=r.templateAreas,p=r.area,v=r.column,b=r.row,m=(0,a.Z)(r,["gap","rowGap","columnGap","autoFlow","autoRows","autoColumns","templateRows","templateColumns","templateAreas","area","column","row"]);return o.createElement(i.ZP,(0,n.Z)({ref:e,display:"grid",gridArea:p,gridTemplateAreas:g,gridGap:t,gridRowGap:u,gridColumnGap:l,gridAutoColumns:h,gridColumn:v,gridRow:b,gridAutoFlow:c,gridAutoRows:s,gridTemplateRows:f,gridTemplateColumns:d},m))}));u.displayName="Grid";var l=u,c=function(r){return"number"===typeof r?r+"px":r},s=function r(e){if(Array.isArray(e))return e.map(r);if(null!==e&&"object"===typeof e&&Object.keys(e).length>0){var t={};for(var n in e)t[n]="repeat(auto-fit, minmax("+c(e[n])+", 1fr))";return t}return null!=e?"repeat(auto-fit, minmax("+c(e)+", 1fr))":null},h=function r(e){if(Array.isArray(e))return e.map(r);if(null!==e&&"object"===typeof e&&Object.keys(e).length>0){var t={};for(var n in e)t[n]="repeat("+e[n]+", 1fr)";return t}return null!=e?"repeat("+e+", 1fr)":null},f=(0,o.forwardRef)((function(r,e){var t=r.columns,i=r.spacingX,u=r.spacingY,c=r.spacing,f=r.minChildWidth,d=(0,a.Z)(r,["columns","spacingX","spacingY","spacing","minChildWidth"]),g=f?s(f):h(t);return o.createElement(l,(0,n.Z)({ref:e,gap:c,columnGap:i,rowGap:u,templateColumns:g},d))}));f.displayName="SimpleGrid";var d=f},1395:function(r,e,t){"use strict";var n=t(7462),a=t(7294),o=t(2154),i=a.forwardRef((function(r,e){return a.createElement(o.ZP,(0,n.Z)({ref:e,as:"p",fontFamily:"body"},r))}));i.displayName="Text",e.Z=i},8168:function(r,e,t){var n=t(8874),a={};for(var o in n)n.hasOwnProperty(o)&&(a[n[o]]=o);var i=r.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var u in i)if(i.hasOwnProperty(u)){if(!("channels"in i[u]))throw new Error("missing channels property: "+u);if(!("labels"in i[u]))throw new Error("missing channel labels property: "+u);if(i[u].labels.length!==i[u].channels)throw new Error("channel and label counts mismatch: "+u);var l=i[u].channels,c=i[u].labels;delete i[u].channels,delete i[u].labels,Object.defineProperty(i[u],"channels",{value:l}),Object.defineProperty(i[u],"labels",{value:c})}i.rgb.hsl=function(r){var e,t,n=r[0]/255,a=r[1]/255,o=r[2]/255,i=Math.min(n,a,o),u=Math.max(n,a,o),l=u-i;return u===i?e=0:n===u?e=(a-o)/l:a===u?e=2+(o-n)/l:o===u&&(e=4+(n-a)/l),(e=Math.min(60*e,360))<0&&(e+=360),t=(i+u)/2,[e,100*(u===i?0:t<=.5?l/(u+i):l/(2-u-i)),100*t]},i.rgb.hsv=function(r){var e,t,n,a,o,i=r[0]/255,u=r[1]/255,l=r[2]/255,c=Math.max(i,u,l),s=c-Math.min(i,u,l),h=function(r){return(c-r)/6/s+.5};return 0===s?a=o=0:(o=s/c,e=h(i),t=h(u),n=h(l),i===c?a=n-t:u===c?a=1/3+e-n:l===c&&(a=2/3+t-e),a<0?a+=1:a>1&&(a-=1)),[360*a,100*o,100*c]},i.rgb.hwb=function(r){var e=r[0],t=r[1],n=r[2];return[i.rgb.hsl(r)[0],100*(1/255*Math.min(e,Math.min(t,n))),100*(n=1-1/255*Math.max(e,Math.max(t,n)))]},i.rgb.cmyk=function(r){var e,t=r[0]/255,n=r[1]/255,a=r[2]/255;return[100*((1-t-(e=Math.min(1-t,1-n,1-a)))/(1-e)||0),100*((1-n-e)/(1-e)||0),100*((1-a-e)/(1-e)||0),100*e]},i.rgb.keyword=function(r){var e=a[r];if(e)return e;var t,o,i,u=1/0;for(var l in n)if(n.hasOwnProperty(l)){var c=n[l],s=(o=r,i=c,Math.pow(o[0]-i[0],2)+Math.pow(o[1]-i[1],2)+Math.pow(o[2]-i[2],2));s<u&&(u=s,t=l)}return t},i.keyword.rgb=function(r){return n[r]},i.rgb.xyz=function(r){var e=r[0]/255,t=r[1]/255,n=r[2]/255;return[100*(.4124*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.3576*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)+.1805*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)),100*(.2126*e+.7152*t+.0722*n),100*(.0193*e+.1192*t+.9505*n)]},i.rgb.lab=function(r){var e=i.rgb.xyz(r),t=e[0],n=e[1],a=e[2];return n/=100,a/=108.883,t=(t/=95.047)>.008856?Math.pow(t,1/3):7.787*t+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(t-n),200*(n-(a=a>.008856?Math.pow(a,1/3):7.787*a+16/116))]},i.hsl.rgb=function(r){var e,t,n,a,o,i=r[0]/360,u=r[1]/100,l=r[2]/100;if(0===u)return[o=255*l,o,o];e=2*l-(t=l<.5?l*(1+u):l+u-l*u),a=[0,0,0];for(var c=0;c<3;c++)(n=i+1/3*-(c-1))<0&&n++,n>1&&n--,o=6*n<1?e+6*(t-e)*n:2*n<1?t:3*n<2?e+(t-e)*(2/3-n)*6:e,a[c]=255*o;return a},i.hsl.hsv=function(r){var e=r[0],t=r[1]/100,n=r[2]/100,a=t,o=Math.max(n,.01);return t*=(n*=2)<=1?n:2-n,a*=o<=1?o:2-o,[e,100*(0===n?2*a/(o+a):2*t/(n+t)),100*((n+t)/2)]},i.hsv.rgb=function(r){var e=r[0]/60,t=r[1]/100,n=r[2]/100,a=Math.floor(e)%6,o=e-Math.floor(e),i=255*n*(1-t),u=255*n*(1-t*o),l=255*n*(1-t*(1-o));switch(n*=255,a){case 0:return[n,l,i];case 1:return[u,n,i];case 2:return[i,n,l];case 3:return[i,u,n];case 4:return[l,i,n];case 5:return[n,i,u]}},i.hsv.hsl=function(r){var e,t,n,a=r[0],o=r[1]/100,i=r[2]/100,u=Math.max(i,.01);return n=(2-o)*i,t=o*u,[a,100*(t=(t/=(e=(2-o)*u)<=1?e:2-e)||0),100*(n/=2)]},i.hwb.rgb=function(r){var e,t,n,a,o,i,u,l=r[0]/360,c=r[1]/100,s=r[2]/100,h=c+s;switch(h>1&&(c/=h,s/=h),n=6*l-(e=Math.floor(6*l)),0!==(1&e)&&(n=1-n),a=c+n*((t=1-s)-c),e){default:case 6:case 0:o=t,i=a,u=c;break;case 1:o=a,i=t,u=c;break;case 2:o=c,i=t,u=a;break;case 3:o=c,i=a,u=t;break;case 4:o=a,i=c,u=t;break;case 5:o=t,i=c,u=a}return[255*o,255*i,255*u]},i.cmyk.rgb=function(r){var e=r[0]/100,t=r[1]/100,n=r[2]/100,a=r[3]/100;return[255*(1-Math.min(1,e*(1-a)+a)),255*(1-Math.min(1,t*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a))]},i.xyz.rgb=function(r){var e,t,n,a=r[0]/100,o=r[1]/100,i=r[2]/100;return t=-.9689*a+1.8758*o+.0415*i,n=.0557*a+-.204*o+1.057*i,e=(e=3.2406*a+-1.5372*o+-.4986*i)>.0031308?1.055*Math.pow(e,1/2.4)-.055:12.92*e,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,[255*(e=Math.min(Math.max(0,e),1)),255*(t=Math.min(Math.max(0,t),1)),255*(n=Math.min(Math.max(0,n),1))]},i.xyz.lab=function(r){var e=r[0],t=r[1],n=r[2];return t/=100,n/=108.883,e=(e/=95.047)>.008856?Math.pow(e,1/3):7.787*e+16/116,[116*(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116)-16,500*(e-t),200*(t-(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116))]},i.lab.xyz=function(r){var e,t,n,a=r[0];e=r[1]/500+(t=(a+16)/116),n=t-r[2]/200;var o=Math.pow(t,3),i=Math.pow(e,3),u=Math.pow(n,3);return t=o>.008856?o:(t-16/116)/7.787,e=i>.008856?i:(e-16/116)/7.787,n=u>.008856?u:(n-16/116)/7.787,[e*=95.047,t*=100,n*=108.883]},i.lab.lch=function(r){var e,t=r[0],n=r[1],a=r[2];return(e=360*Math.atan2(a,n)/2/Math.PI)<0&&(e+=360),[t,Math.sqrt(n*n+a*a),e]},i.lch.lab=function(r){var e,t=r[0],n=r[1];return e=r[2]/360*2*Math.PI,[t,n*Math.cos(e),n*Math.sin(e)]},i.rgb.ansi16=function(r){var e=r[0],t=r[1],n=r[2],a=1 in arguments?arguments[1]:i.rgb.hsv(r)[2];if(0===(a=Math.round(a/50)))return 30;var o=30+(Math.round(n/255)<<2|Math.round(t/255)<<1|Math.round(e/255));return 2===a&&(o+=60),o},i.hsv.ansi16=function(r){return i.rgb.ansi16(i.hsv.rgb(r),r[2])},i.rgb.ansi256=function(r){var e=r[0],t=r[1],n=r[2];return e===t&&t===n?e<8?16:e>248?231:Math.round((e-8)/247*24)+232:16+36*Math.round(e/255*5)+6*Math.round(t/255*5)+Math.round(n/255*5)},i.ansi16.rgb=function(r){var e=r%10;if(0===e||7===e)return r>50&&(e+=3.5),[e=e/10.5*255,e,e];var t=.5*(1+~~(r>50));return[(1&e)*t*255,(e>>1&1)*t*255,(e>>2&1)*t*255]},i.ansi256.rgb=function(r){if(r>=232){var e=10*(r-232)+8;return[e,e,e]}var t;return r-=16,[Math.floor(r/36)/5*255,Math.floor((t=r%36)/6)/5*255,t%6/5*255]},i.rgb.hex=function(r){var e=(((255&Math.round(r[0]))<<16)+((255&Math.round(r[1]))<<8)+(255&Math.round(r[2]))).toString(16).toUpperCase();return"000000".substring(e.length)+e},i.hex.rgb=function(r){var e=r.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!e)return[0,0,0];var t=e[0];3===e[0].length&&(t=t.split("").map((function(r){return r+r})).join(""));var n=parseInt(t,16);return[n>>16&255,n>>8&255,255&n]},i.rgb.hcg=function(r){var e,t=r[0]/255,n=r[1]/255,a=r[2]/255,o=Math.max(Math.max(t,n),a),i=Math.min(Math.min(t,n),a),u=o-i;return e=u<=0?0:o===t?(n-a)/u%6:o===n?2+(a-t)/u:4+(t-n)/u+4,e/=6,[360*(e%=1),100*u,100*(u<1?i/(1-u):0)]},i.hsl.hcg=function(r){var e=r[1]/100,t=r[2]/100,n=1,a=0;return(n=t<.5?2*e*t:2*e*(1-t))<1&&(a=(t-.5*n)/(1-n)),[r[0],100*n,100*a]},i.hsv.hcg=function(r){var e=r[1]/100,t=r[2]/100,n=e*t,a=0;return n<1&&(a=(t-n)/(1-n)),[r[0],100*n,100*a]},i.hcg.rgb=function(r){var e=r[0]/360,t=r[1]/100,n=r[2]/100;if(0===t)return[255*n,255*n,255*n];var a,o=[0,0,0],i=e%1*6,u=i%1,l=1-u;switch(Math.floor(i)){case 0:o[0]=1,o[1]=u,o[2]=0;break;case 1:o[0]=l,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=u;break;case 3:o[0]=0,o[1]=l,o[2]=1;break;case 4:o[0]=u,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=l}return a=(1-t)*n,[255*(t*o[0]+a),255*(t*o[1]+a),255*(t*o[2]+a)]},i.hcg.hsv=function(r){var e=r[1]/100,t=e+r[2]/100*(1-e),n=0;return t>0&&(n=e/t),[r[0],100*n,100*t]},i.hcg.hsl=function(r){var e=r[1]/100,t=r[2]/100*(1-e)+.5*e,n=0;return t>0&&t<.5?n=e/(2*t):t>=.5&&t<1&&(n=e/(2*(1-t))),[r[0],100*n,100*t]},i.hcg.hwb=function(r){var e=r[1]/100,t=e+r[2]/100*(1-e);return[r[0],100*(t-e),100*(1-t)]},i.hwb.hcg=function(r){var e=r[1]/100,t=1-r[2]/100,n=t-e,a=0;return n<1&&(a=(t-n)/(1-n)),[r[0],100*n,100*a]},i.apple.rgb=function(r){return[r[0]/65535*255,r[1]/65535*255,r[2]/65535*255]},i.rgb.apple=function(r){return[r[0]/255*65535,r[1]/255*65535,r[2]/255*65535]},i.gray.rgb=function(r){return[r[0]/100*255,r[0]/100*255,r[0]/100*255]},i.gray.hsl=i.gray.hsv=function(r){return[0,0,r[0]]},i.gray.hwb=function(r){return[0,100,r[0]]},i.gray.cmyk=function(r){return[0,0,0,r[0]]},i.gray.lab=function(r){return[r[0],0,0]},i.gray.hex=function(r){var e=255&Math.round(r[0]/100*255),t=((e<<16)+(e<<8)+e).toString(16).toUpperCase();return"000000".substring(t.length)+t},i.rgb.gray=function(r){return[(r[0]+r[1]+r[2])/3/255*100]}},2085:function(r,e,t){var n=t(8168),a=t(4111),o={};Object.keys(n).forEach((function(r){o[r]={},Object.defineProperty(o[r],"channels",{value:n[r].channels}),Object.defineProperty(o[r],"labels",{value:n[r].labels});var e=a(r);Object.keys(e).forEach((function(t){var n=e[t];o[r][t]=function(r){var e=function(e){if(void 0===e||null===e)return e;arguments.length>1&&(e=Array.prototype.slice.call(arguments));var t=r(e);if("object"===typeof t)for(var n=t.length,a=0;a<n;a++)t[a]=Math.round(t[a]);return t};return"conversion"in r&&(e.conversion=r.conversion),e}(n),o[r][t].raw=function(r){var e=function(e){return void 0===e||null===e?e:(arguments.length>1&&(e=Array.prototype.slice.call(arguments)),r(e))};return"conversion"in r&&(e.conversion=r.conversion),e}(n)}))})),r.exports=o},4111:function(r,e,t){var n=t(8168);function a(r){var e=function(){for(var r={},e=Object.keys(n),t=e.length,a=0;a<t;a++)r[e[a]]={distance:-1,parent:null};return r}(),t=[r];for(e[r].distance=0;t.length;)for(var a=t.pop(),o=Object.keys(n[a]),i=o.length,u=0;u<i;u++){var l=o[u],c=e[l];-1===c.distance&&(c.distance=e[a].distance+1,c.parent=a,t.unshift(l))}return e}function o(r,e){return function(t){return e(r(t))}}function i(r,e){for(var t=[e[r].parent,r],a=n[e[r].parent][r],i=e[r].parent;e[i].parent;)t.unshift(e[i].parent),a=o(n[e[i].parent][i],a),i=e[i].parent;return a.conversion=t,a}r.exports=function(r){for(var e=a(r),t={},n=Object.keys(e),o=n.length,u=0;u<o;u++){var l=n[u];null!==e[l].parent&&(t[l]=i(l,e))}return t}},8874:function(r){"use strict";r.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},9818:function(r,e,t){var n=t(8874),a=t(6851),o=Object.hasOwnProperty,i={};for(var u in n)o.call(n,u)&&(i[n[u]]=u);var l=r.exports={to:{},get:{}};function c(r,e,t){return Math.min(Math.max(e,r),t)}function s(r){var e=Math.round(r).toString(16).toUpperCase();return e.length<2?"0"+e:e}l.get=function(r){var e,t;switch(r.substring(0,3).toLowerCase()){case"hsl":e=l.get.hsl(r),t="hsl";break;case"hwb":e=l.get.hwb(r),t="hwb";break;default:e=l.get.rgb(r),t="rgb"}return e?{model:t,value:e}:null},l.get.rgb=function(r){if(!r)return null;var e,t,a,i=[0,0,0,1];if(e=r.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(a=e[2],e=e[1],t=0;t<3;t++){var u=2*t;i[t]=parseInt(e.slice(u,u+2),16)}a&&(i[3]=parseInt(a,16)/255)}else if(e=r.match(/^#([a-f0-9]{3,4})$/i)){for(a=(e=e[1])[3],t=0;t<3;t++)i[t]=parseInt(e[t]+e[t],16);a&&(i[3]=parseInt(a+a,16)/255)}else if(e=r.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)){for(t=0;t<3;t++)i[t]=parseInt(e[t+1],0);e[4]&&(e[5]?i[3]=.01*parseFloat(e[4]):i[3]=parseFloat(e[4]))}else{if(!(e=r.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)))return(e=r.match(/^(\w+)$/))?"transparent"===e[1]?[0,0,0,0]:o.call(n,e[1])?((i=n[e[1]])[3]=1,i):null:null;for(t=0;t<3;t++)i[t]=Math.round(2.55*parseFloat(e[t+1]));e[4]&&(e[5]?i[3]=.01*parseFloat(e[4]):i[3]=parseFloat(e[4]))}for(t=0;t<3;t++)i[t]=c(i[t],0,255);return i[3]=c(i[3],0,1),i},l.get.hsl=function(r){if(!r)return null;var e=r.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(e){var t=parseFloat(e[4]);return[(parseFloat(e[1])%360+360)%360,c(parseFloat(e[2]),0,100),c(parseFloat(e[3]),0,100),c(isNaN(t)?1:t,0,1)]}return null},l.get.hwb=function(r){if(!r)return null;var e=r.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(e){var t=parseFloat(e[4]);return[(parseFloat(e[1])%360+360)%360,c(parseFloat(e[2]),0,100),c(parseFloat(e[3]),0,100),c(isNaN(t)?1:t,0,1)]}return null},l.to.hex=function(){var r=a(arguments);return"#"+s(r[0])+s(r[1])+s(r[2])+(r[3]<1?s(Math.round(255*r[3])):"")},l.to.rgb=function(){var r=a(arguments);return r.length<4||1===r[3]?"rgb("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+")":"rgba("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+", "+r[3]+")"},l.to.rgb.percent=function(){var r=a(arguments),e=Math.round(r[0]/255*100),t=Math.round(r[1]/255*100),n=Math.round(r[2]/255*100);return r.length<4||1===r[3]?"rgb("+e+"%, "+t+"%, "+n+"%)":"rgba("+e+"%, "+t+"%, "+n+"%, "+r[3]+")"},l.to.hsl=function(){var r=a(arguments);return r.length<4||1===r[3]?"hsl("+r[0]+", "+r[1]+"%, "+r[2]+"%)":"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+r[3]+")"},l.to.hwb=function(){var r=a(arguments),e="";return r.length>=4&&1!==r[3]&&(e=", "+r[3]),"hwb("+r[0]+", "+r[1]+"%, "+r[2]+"%"+e+")"},l.to.keyword=function(r){return i[r.slice(0,3)]}},6767:function(r,e,t){"use strict";var n=t(9818),a=t(2085),o=[].slice,i=["keyword","gray","hex"],u={};Object.keys(a).forEach((function(r){u[o.call(a[r].labels).sort().join("")]=r}));var l={};function c(r,e){if(!(this instanceof c))return new c(r,e);if(e&&e in i&&(e=null),e&&!(e in a))throw new Error("Unknown model: "+e);var t,s;if(null==r)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(r instanceof c)this.model=r.model,this.color=r.color.slice(),this.valpha=r.valpha;else if("string"===typeof r){var h=n.get(r);if(null===h)throw new Error("Unable to parse color from string: "+r);this.model=h.model,s=a[this.model].channels,this.color=h.value.slice(0,s),this.valpha="number"===typeof h.value[s]?h.value[s]:1}else if(r.length){this.model=e||"rgb",s=a[this.model].channels;var f=o.call(r,0,s);this.color=d(f,s),this.valpha="number"===typeof r[s]?r[s]:1}else if("number"===typeof r)r&=16777215,this.model="rgb",this.color=[r>>16&255,r>>8&255,255&r],this.valpha=1;else{this.valpha=1;var g=Object.keys(r);"alpha"in r&&(g.splice(g.indexOf("alpha"),1),this.valpha="number"===typeof r.alpha?r.alpha:0);var p=g.sort().join("");if(!(p in u))throw new Error("Unable to parse color from object: "+JSON.stringify(r));this.model=u[p];var v=a[this.model].labels,b=[];for(t=0;t<v.length;t++)b.push(r[v[t]]);this.color=d(b)}if(l[this.model])for(s=a[this.model].channels,t=0;t<s;t++){var m=l[this.model][t];m&&(this.color[t]=m(this.color[t]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}function s(r,e,t){return(r=Array.isArray(r)?r:[r]).forEach((function(r){(l[r]||(l[r]=[]))[e]=t})),r=r[0],function(n){var a;return arguments.length?(t&&(n=t(n)),(a=this[r]()).color[e]=n,a):(a=this[r]().color[e],t&&(a=t(a)),a)}}function h(r){return function(e){return Math.max(0,Math.min(r,e))}}function f(r){return Array.isArray(r)?r:[r]}function d(r,e){for(var t=0;t<e;t++)"number"!==typeof r[t]&&(r[t]=0);return r}c.prototype={toString:function(){return this.string()},toJSON:function(){return this[this.model]()},string:function(r){var e=this.model in n.to?this:this.rgb(),t=1===(e=e.round("number"===typeof r?r:1)).valpha?e.color:e.color.concat(this.valpha);return n.to[e.model](t)},percentString:function(r){var e=this.rgb().round("number"===typeof r?r:1),t=1===e.valpha?e.color:e.color.concat(this.valpha);return n.to.rgb.percent(t)},array:function(){return 1===this.valpha?this.color.slice():this.color.concat(this.valpha)},object:function(){for(var r={},e=a[this.model].channels,t=a[this.model].labels,n=0;n<e;n++)r[t[n]]=this.color[n];return 1!==this.valpha&&(r.alpha=this.valpha),r},unitArray:function(){var r=this.rgb().color;return r[0]/=255,r[1]/=255,r[2]/=255,1!==this.valpha&&r.push(this.valpha),r},unitObject:function(){var r=this.rgb().object();return r.r/=255,r.g/=255,r.b/=255,1!==this.valpha&&(r.alpha=this.valpha),r},round:function(r){return r=Math.max(r||0,0),new c(this.color.map(function(r){return function(e){return function(r,e){return Number(r.toFixed(e))}(e,r)}}(r)).concat(this.valpha),this.model)},alpha:function(r){return arguments.length?new c(this.color.concat(Math.max(0,Math.min(1,r))),this.model):this.valpha},red:s("rgb",0,h(255)),green:s("rgb",1,h(255)),blue:s("rgb",2,h(255)),hue:s(["hsl","hsv","hsl","hwb","hcg"],0,(function(r){return(r%360+360)%360})),saturationl:s("hsl",1,h(100)),lightness:s("hsl",2,h(100)),saturationv:s("hsv",1,h(100)),value:s("hsv",2,h(100)),chroma:s("hcg",1,h(100)),gray:s("hcg",2,h(100)),white:s("hwb",1,h(100)),wblack:s("hwb",2,h(100)),cyan:s("cmyk",0,h(100)),magenta:s("cmyk",1,h(100)),yellow:s("cmyk",2,h(100)),black:s("cmyk",3,h(100)),x:s("xyz",0,h(100)),y:s("xyz",1,h(100)),z:s("xyz",2,h(100)),l:s("lab",0,h(100)),a:s("lab",1),b:s("lab",2),keyword:function(r){return arguments.length?new c(r):a[this.model].keyword(this.color)},hex:function(r){return arguments.length?new c(r):n.to.hex(this.rgb().round().color)},rgbNumber:function(){var r=this.rgb().color;return(255&r[0])<<16|(255&r[1])<<8|255&r[2]},luminosity:function(){for(var r=this.rgb().color,e=[],t=0;t<r.length;t++){var n=r[t]/255;e[t]=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(r){var e=this.luminosity(),t=r.luminosity();return e>t?(e+.05)/(t+.05):(t+.05)/(e+.05)},level:function(r){var e=this.contrast(r);return e>=7.1?"AAA":e>=4.5?"AA":""},isDark:function(){var r=this.rgb().color;return(299*r[0]+587*r[1]+114*r[2])/1e3<128},isLight:function(){return!this.isDark()},negate:function(){for(var r=this.rgb(),e=0;e<3;e++)r.color[e]=255-r.color[e];return r},lighten:function(r){var e=this.hsl();return e.color[2]+=e.color[2]*r,e},darken:function(r){var e=this.hsl();return e.color[2]-=e.color[2]*r,e},saturate:function(r){var e=this.hsl();return e.color[1]+=e.color[1]*r,e},desaturate:function(r){var e=this.hsl();return e.color[1]-=e.color[1]*r,e},whiten:function(r){var e=this.hwb();return e.color[1]+=e.color[1]*r,e},blacken:function(r){var e=this.hwb();return e.color[2]+=e.color[2]*r,e},grayscale:function(){var r=this.rgb().color,e=.3*r[0]+.59*r[1]+.11*r[2];return c.rgb(e,e,e)},fade:function(r){return this.alpha(this.valpha-this.valpha*r)},opaquer:function(r){return this.alpha(this.valpha+this.valpha*r)},rotate:function(r){var e=this.hsl(),t=e.color[0];return t=(t=(t+r)%360)<0?360+t:t,e.color[0]=t,e},mix:function(r,e){if(!r||!r.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof r);var t=r.rgb(),n=this.rgb(),a=void 0===e?.5:e,o=2*a-1,i=t.alpha()-n.alpha(),u=((o*i===-1?o:(o+i)/(1+o*i))+1)/2,l=1-u;return c.rgb(u*t.red()+l*n.red(),u*t.green()+l*n.green(),u*t.blue()+l*n.blue(),t.alpha()*a+n.alpha()*(1-a))}},Object.keys(a).forEach((function(r){if(-1===i.indexOf(r)){var e=a[r].channels;c.prototype[r]=function(){if(this.model===r)return new c(this);if(arguments.length)return new c(arguments,r);var t="number"===typeof arguments[e]?e:this.valpha;return new c(f(a[this.model][r].raw(this.color)).concat(t),r)},c[r]=function(t){return"number"===typeof t&&(t=d(o.call(arguments),e)),new c(t,r)}}})),r.exports=c},1163:function(r,e,t){r.exports=t(387)},6851:function(r,e,t){"use strict";var n=t(9594),a=Array.prototype.concat,o=Array.prototype.slice,i=r.exports=function(r){for(var e=[],t=0,i=r.length;t<i;t++){var u=r[t];n(u)?e=a.call(e,o.call(u)):e.push(u)}return e};i.wrap=function(r){return function(){return r(i(arguments))}}},9594:function(r){r.exports=function(r){return!(!r||"string"===typeof r)&&(r instanceof Array||Array.isArray(r)||r.length>=0&&(r.splice instanceof Function||Object.getOwnPropertyDescriptor(r,r.length-1)&&"String"!==r.constructor.name))}},8100:function(r,e,t){"use strict";t.d(e,{ZP:function(){return H}});var n=t(7294);function a(r,e,t,n){return new(t||(t=Promise))((function(a,o){function i(r){try{l(n.next(r))}catch(e){o(e)}}function u(r){try{l(n.throw(r))}catch(e){o(e)}}function l(r){var e;r.done?a(r.value):(e=r.value,e instanceof t?e:new t((function(r){r(e)}))).then(i,u)}l((n=n.apply(r,e||[])).next())}))}function o(r,e){var t,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=e.call(r,i)}catch(u){o=[6,u],n=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}var i,u=function(){},l=u(),c=Object,s=function(r){return r===l},h=function(r){return"function"==typeof r},f=function(r,e){return c.assign({},r,e)},d="undefined",g=function(){return typeof window!=d},p=new WeakMap,v=0,b=function(r){var e,t,n=typeof r,a=r&&r.constructor,o=a==Date;if(c(r)!==r||o||a==RegExp)e=o?r.toJSON():"symbol"==n?r.toString():"string"==n?JSON.stringify(r):""+r;else{if(e=p.get(r))return e;if(e=++v+"~",p.set(r,e),a==Array){for(e="@",t=0;t<r.length;t++)e+=b(r[t])+",";p.set(r,e)}if(a==c){e="#";for(var i=c.keys(r).sort();!s(t=i.pop());)s(r[t])||(e+=t+":"+b(r[t])+",");p.set(r,e)}}return e},m=!0,y=g(),w=typeof document!=d,k=y&&window.addEventListener?window.addEventListener.bind(window):u,M=w?document.addEventListener.bind(document):u,x=y&&window.removeEventListener?window.removeEventListener.bind(window):u,O=w?document.removeEventListener.bind(document):u,E={isOnline:function(){return m},isVisible:function(){var r=w&&document.visibilityState;return s(r)||"hidden"!==r}},j={initFocus:function(r){return M("visibilitychange",r),k("focus",r),function(){O("visibilitychange",r),x("focus",r)}},initReconnect:function(r){var e=function(){m=!0,r()},t=function(){m=!1};return k("online",e),k("offline",t),function(){x("online",e),x("offline",t)}}},C=!g()||"Deno"in window,A=function(r){return g()&&typeof window.requestAnimationFrame!=d?window.requestAnimationFrame(r):setTimeout(r,1)},R=C?n.useEffect:n.useLayoutEffect,P="undefined"!==typeof navigator&&navigator.connection,F=!C&&P&&(["slow-2g","2g"].includes(P.effectiveType)||P.saveData),S=function(r){if(h(r))try{r=r()}catch(t){r=""}var e=[].concat(r);return[r="string"==typeof r?r:(Array.isArray(r)?r.length:r)?b(r):"",e,r?"$swr$"+r:""]},T=new WeakMap,I=function(r,e,t,n,a,o,i){void 0===i&&(i=!0);var u=T.get(r),l=u[0],c=u[1],s=u[3],h=l[e],f=c[e];if(i&&f)for(var d=0;d<f.length;++d)f[d](t,n,a);return o&&(delete s[e],h&&h[0])?h[0](2).then((function(){return r.get(e)})):r.get(e)},D=0,Z=function(){return++D},N=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return a(void 0,void 0,void 0,(function(){var e,t,n,a,i,u,c,d,g,p,v,b,m,y,w,k,M,x,O,E;return o(this,(function(o){switch(o.label){case 0:if(e=r[0],t=r[1],n=r[2],a=r[3],u=!!s((i="boolean"===typeof a?{revalidate:a}:a||{}).populateCache)||i.populateCache,c=!1!==i.revalidate,d=!1!==i.rollbackOnError,g=i.optimisticData,p=S(t),v=p[0],b=p[2],!v)return[2];if(m=T.get(e),y=m[2],r.length<3)return[2,I(e,v,e.get(v),l,l,c,!0)];if(w=n,M=Z(),y[v]=[M,0],x=!s(g),O=e.get(v),x&&(e.set(v,g),I(e,v,g)),h(w))try{w=w(e.get(v))}catch(j){k=j}return w&&h(w.then)?[4,w.catch((function(r){k=r}))]:[3,2];case 1:if(w=o.sent(),M!==y[v][0]){if(k)throw k;return[2,w]}k&&x&&d&&(u=!0,w=O,e.set(v,O)),o.label=2;case 2:return u&&(k||(h(u)&&(w=u(w,O)),e.set(v,w)),e.set(b,f(e.get(b),{error:k}))),y[v][1]=Z(),[4,I(e,v,w,k,l,c,!!u)];case 3:if(E=o.sent(),k)throw k;return[2,u?E:w]}}))}))},V=function(r,e){for(var t in r)r[t][0]&&r[t][0](e)},z=function(r,e){if(!T.has(r)){var t=f(j,e),n={},a=N.bind(l,r),o=u;if(T.set(r,[n,{},{},{},a]),!C){var i=t.initFocus(setTimeout.bind(l,V.bind(l,n,0))),c=t.initReconnect(setTimeout.bind(l,V.bind(l,n,1)));o=function(){i&&i(),c&&c(),T.delete(r)}}return[r,a,o]}return[r,T.get(r)[4]]},q=z(new Map),L=q[0],G=q[1],$=f({onLoadingSlow:u,onSuccess:u,onError:u,onErrorRetry:function(r,e,t,n,a){var o=t.errorRetryCount,i=a.retryCount,u=~~((Math.random()+.5)*(1<<(i<8?i:8)))*t.errorRetryInterval;!s(o)&&i>o||setTimeout(n,u,a)},onDiscarded:u,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:F?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:F?5e3:3e3,compare:function(r,e){return b(r)==b(e)},isPaused:function(){return!1},cache:L,mutate:G,fallback:{}},E),U=function(r,e){var t=f(r,e);if(e){var n=r.use,a=r.fallback,o=e.use,i=e.fallback;n&&o&&(t.use=n.concat(o)),a&&i&&(t.fallback=f(a,i))}return t},W=(0,n.createContext)({}),J=function(r){return h(r[1])?[r[0],r[1],r[2]||{}]:[r[0],null,(null===r[1]?r[2]:r[1])||{}]},_=function(){return f($,(0,n.useContext)(W))},X=function(r,e,t){var n=e[r]||(e[r]=[]);return n.push(t),function(){var r=n.indexOf(t);r>=0&&(n[r]=n[n.length-1],n.pop())}},Y={dedupe:!0},H=(c.defineProperty((function(r){var e=r.value,t=U((0,n.useContext)(W),e),a=e&&e.provider,o=(0,n.useState)((function(){return a?z(a(t.cache||L),e):l}))[0];return o&&(t.cache=o[0],t.mutate=o[1]),R((function(){return o?o[2]:l}),[]),(0,n.createElement)(W.Provider,f(r,{value:t}))}),"default",{value:$}),i=function(r,e,t){var i=t.cache,u=t.compare,c=t.fallbackData,d=t.suspense,g=t.revalidateOnMount,p=t.refreshInterval,v=t.refreshWhenHidden,b=t.refreshWhenOffline,m=T.get(i),y=m[0],w=m[1],k=m[2],M=m[3],x=S(r),O=x[0],E=x[1],j=x[2],P=(0,n.useRef)(!1),F=(0,n.useRef)(!1),D=(0,n.useRef)(O),V=(0,n.useRef)(e),z=(0,n.useRef)(t),q=function(){return z.current},L=function(){return q().isVisible()&&q().isOnline()},G=function(r){return i.set(j,f(i.get(j),r))},$=i.get(O),U=s(c)?t.fallback[O]:c,W=s($)?U:$,J=i.get(j)||{},_=J.error,H=!P.current,B=function(){return H&&!s(g)?g:!q().isPaused()&&(d?!s(W):s(W)||t.revalidateIfStale)},K=!(!O||!e)&&(!!J.isValidating||H&&B()),Q=function(r,e){var t=(0,n.useState)({})[1],a=(0,n.useRef)(r),o=(0,n.useRef)({data:!1,error:!1,isValidating:!1}),i=(0,n.useCallback)((function(r){var n=!1,i=a.current;for(var u in r){var l=u;i[l]!==r[l]&&(i[l]=r[l],o.current[l]&&(n=!0))}n&&!e.current&&t({})}),[]);return R((function(){a.current=r})),[a,o.current,i]}({data:W,error:_,isValidating:K},F),rr=Q[0],er=Q[1],tr=Q[2],nr=(0,n.useCallback)((function(r){return a(void 0,void 0,void 0,(function(){var e,n,a,c,f,d,g,p,v,b,m,y,w;return o(this,(function(o){switch(o.label){case 0:if(e=V.current,!O||!e||F.current||q().isPaused())return[2,!1];c=!0,f=r||{},d=!M[O]||!f.dedupe,g=function(){return!F.current&&O===D.current&&P.current},p=function(){var r=M[O];r&&r[1]===a&&delete M[O]},v={isValidating:!1},b=function(){G({isValidating:!1}),g()&&tr(v)},G({isValidating:!0}),tr({isValidating:!0}),o.label=1;case 1:return o.trys.push([1,3,,4]),d&&(I(i,O,rr.current.data,rr.current.error,!0),t.loadingTimeout&&!i.get(O)&&setTimeout((function(){c&&g()&&q().onLoadingSlow(O,t)}),t.loadingTimeout),M[O]=[e.apply(void 0,E),Z()]),w=M[O],n=w[0],a=w[1],[4,n];case 2:return n=o.sent(),d&&setTimeout(p,t.dedupingInterval),M[O]&&M[O][1]===a?(G({error:l}),v.error=l,m=k[O],!s(m)&&(a<=m[0]||a<=m[1]||0===m[1])?(b(),d&&g()&&q().onDiscarded(O),[2,!1]):(u(rr.current.data,n)?v.data=rr.current.data:v.data=n,u(i.get(O),n)||i.set(O,n),d&&g()&&q().onSuccess(n,O,t),[3,4])):(d&&g()&&q().onDiscarded(O),[2,!1]);case 3:return y=o.sent(),p(),q().isPaused()||(G({error:y}),v.error=y,d&&g()&&(q().onError(y,O,t),("boolean"===typeof t.shouldRetryOnError&&t.shouldRetryOnError||h(t.shouldRetryOnError)&&t.shouldRetryOnError(y))&&L()&&q().onErrorRetry(y,O,t,nr,{retryCount:(f.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return c=!1,b(),g()&&d&&I(i,O,v.data,v.error,!1),[2,!0]}}))}))}),[O]),ar=(0,n.useCallback)(N.bind(l,i,(function(){return D.current})),[]);if(R((function(){V.current=e,z.current=t})),R((function(){if(O){var r=O!==D.current,e=nr.bind(l,Y),t=0,n=X(O,w,(function(r,e,t){tr(f({error:e,isValidating:t},u(rr.current.data,r)?l:{data:r}))})),a=X(O,y,(function(r){if(0==r){var n=Date.now();q().revalidateOnFocus&&n>t&&L()&&(t=n+q().focusThrottleInterval,e())}else if(1==r)q().revalidateOnReconnect&&L()&&e();else if(2==r)return nr()}));return F.current=!1,D.current=O,P.current=!0,r&&tr({data:W,error:_,isValidating:K}),B()&&(s(W)||C?e():A(e)),function(){F.current=!0,n(),a()}}}),[O,nr]),R((function(){var r;function e(){var e=h(p)?p(W):p;e&&-1!==r&&(r=setTimeout(t,e))}function t(){rr.current.error||!v&&!q().isVisible()||!b&&!q().isOnline()?e():nr(Y).then(e)}return e(),function(){r&&(clearTimeout(r),r=-1)}}),[p,v,b,nr]),(0,n.useDebugValue)(W),d&&s(W)&&O)throw V.current=e,z.current=t,F.current=!1,s(_)?nr(Y):_;return{mutate:ar,get data(){return er.data=!0,W},get error(){return er.error=!0,_},get isValidating(){return er.isValidating=!0,K}}},function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];var t=_(),n=J(r),a=n[0],o=n[1],u=n[2],l=U(t,u),c=i,s=l.use;if(s)for(var h=s.length;h-- >0;)c=s[h](c);return c(a,o||l.fetcher,l)})}}]);