const ydb = require('nodem').Ydb();
ydb.open();
let cnt=0; 
var glbal="CARS";
var key=ydb.order({global: glbal, subscripts: ['']});
var jsonstr='[{ "name": "^' + glbal + '", "class": "man", "textClass": "emphasis"'
while (key.result != "") {
	   cnt=cnt+1;
	   if (cnt==1) {
		         jsonstr=jsonstr + ', "children": [ { "name": "' + key.result + '", "class": "man" '
		         keya=ydb.get({global: glbal, subscripts: [key.result]});
		         console.log(keya);
		         if (keya.data != "") {
				          jsonstr=jsonstr + ',"extra": { "nickname": "' + keya.data  + '" }'
				       }
		       }
	   else {
		         jsonstr=jsonstr + ', { "name": "' + key.result +'", "class": "man"'
		         if (keya.data != "") {
				          jsonstr=jsonstr + ',"extra": { "nickname": "' + keya.data + '" }'
				       }
		      }
	   var key1=ydb.order({global: glbal, subscripts: [key.result, '']});
	   let cnt1=0;
	   while (key1.result != "") {
		          cnt1=cnt1+1;
		          if (cnt1==1) {
				            jsonstr=jsonstr + ', "children": [ { "name": "' + key1.result + '", "class": "man" '
				            keya=ydb.get({global: glbal, subscripts: [key.result, key1.result]});
				            if (keya.data != "") {
						                 jsonstr=jsonstr + ',"extra": { "nickname": "' + keya.data  + '" }'
						              }
				         } 
		          else {
				             jsonstr=jsonstr + ', { "name": "' + key1.result +'", "class": "man"'
				             if (keya.data != "") {
						                   jsonstr=jsonstr + ',"extra": { "nickname": "' + keya.data + '" }'
						                } 
				         } 
		          var key2=ydb.order({global: glbal, subscripts: [key.result, key1.result, '']});
		          let cnt2=0;
		          while (key2.result != "") {
				            cnt2=cnt2+1;
				            if (cnt2==1) {
						                 jsonstr=jsonstr + ', "children": [ { "name": "' + key2.result + '", "class": "man" '
						                 keya=ydb.get({global: glbal, subscripts: [key.result, key1.result, key2.result]});
						                 if (keya.data != "") {
									                 jsonstr=jsonstr + ',"extra": { "nickname": "' + keya.data  + '" }'
									              }
						              } 
				            else {
						                 jsonstr=jsonstr + ', { "name": "' + key2.result +'", "class": "man"'
						                 if (keya.data != "") {
									                 jsonstr=jsonstr + ',"extra": { "nickname": "' + keya.data + '" }'
									              } 
						              } 
				            var key3=ydb.order({global: glbal, subscripts: [key.result, key1.result, key2.result,'']});
				            let cnt3=0;
				            while (key3.result != "") {
						                 cnt3=cnt3+1;  
						                 if (cnt3==1) {
									                 jsonstr=jsonstr + ', "children": [ { "name": "' + key3.result + '", "class": "man" '
									                 keya=ydb.get({global: glbal, subscripts: [key.result, key1.result, key2.result,key3.result]});
									                 if (keya.data != "") {
												                    jsonstr=jsonstr + ',"extra": { "nickname": "' + keya.data  + '" }'
												                 }
									              } 
						                 else {
									                 jsonstr=jsonstr + ', { "name": "' + key3.result +'", "class": "man"'
									                 if (keya.data != "") {
												                    jsonstr=jsonstr + ',"extra": { "nickname": "' + keya.data + '" }'
												                 } 
									              } 
						                 var key4=ydb.order({global: glbal, subscripts: [key.result, key1.result, key2.result,key3.result,'']});
						                 let cnt4=0;
						                 while (key4.result != "") {
									                  cnt4=cnt4+1;
									                  if (cnt4==1) {
												                      jsonstr=jsonstr + ', "children": [ { "name": "' + key4.result + '", "class": "man" '
												                      keya=ydb.get({global: glbal, subscripts: [key.result, key1.result, key2.result,key3.result,key4.result]});
												                      if (keya.data != "") {
															                             jsonstr=jsonstr + ',"extra": { "nickname": "' + keya.data  + '" }'
															                          }
												                   } 
									                  else {
												                      jsonstr=jsonstr + ', { "name": "' + key4.result +'", "class": "man"'
												                      if (keya.data != "") {
															                             jsonstr=jsonstr + ',"extra": { "nickname": "' + keya.data + '" }'
															                          } 
												                   } 
									                  key5=ydb.order({global: glbal, subscripts: [key.result, key1.result, key2.result,key3.result,key4.result,'']});
									                  if (key5.result=="") {
												                      jsonstr=jsonstr + '}';
												                   }
									                 key4=ydb.order({global: glbal, subscripts: [key.result, key1.result, key2.result,key3.result,key4.result]});
									                 if (key4.result=="") {
												                    jsonstr=jsonstr + ']}';
												                 }
									              }
						                 key3=ydb.order({global: glbal, subscripts: [key.result, key1.result, key2.result,key3.result]});
						                 if (key3.result=="") {
									                 jsonstr=jsonstr + ']}';
									              }
						              }
				            key2=ydb.order({global: glbal, subscripts: [key.result, key1.result, key2.result]});
				            if (key2.result=="") {
						                 jsonstr=jsonstr + ']}';
						              }
				         }
		          key1=ydb.order({global: glbal, subscripts: [key.result, key1.result]});
		          if (key1.result=="") {
				            jsonstr=jsonstr + ']}';
				         }
		      }
	   key=ydb.order({global: glbal, subscripts: [key.result]});
	   if (key.result=="") {
		         jsonstr=jsonstr + ']}]';
		      }
}
console.log(jsonstr);
