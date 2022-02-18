const url = require('url');
const ydb = require('nodem').Ydb();
function getmjson(glbal) {
let cnt=0; 
var glbal="CARS";
var key=ydb.order({global: glbal, subscripts: ['']});
var jsonstr='[{ "name": "^' + glbal + '", "class": "man", "textClass": "emphasis"'
while (key.result != "") {
   cnt=cnt+1;
   keya=ydb.get({global: glbal, subscripts: [key.result]});
   if (cnt==1) {
      jsonstr=jsonstr + ', "children": [ { "name": "' + key.result
      console.log(keya);
      if (keya.data != "") {
         jsonstr=jsonstr + ' (' + keya.data  + ')"'
      }
      else {
        jsonstr=jsonstr + '"'
      }
    }
   else {
      jsonstr=jsonstr + ', { "name": "' + key.result
      if (keya.data != "") {
         jsonstr=jsonstr + ' (' + keya.data  + ')"'
      }
      else {
        jsonstr=jsonstr + '"' 
      }
   }
   var key1=ydb.order({global: glbal, subscripts: [key.result, '']});
   let cnt1=0;
   while (key1.result != "") {
       keya=ydb.get({global: glbal, subscripts: [key.result, key1.result]});
       cnt1=cnt1+1;
       if (cnt1==1) {
          jsonstr=jsonstr + ', "children": [ { "name": "' + key1.result
          if (keya.data != "") {
             jsonstr=jsonstr + ' (' + keya.data  + ')"'
          }
          else {
            jsonstr=jsonstr + '"'
          }
       } 
       else {
           jsonstr=jsonstr + ', { "name": "' + key1.result
           if (keya.data != "") {
              jsonstr=jsonstr + ' (' + keya.data  + ')"'
           } 
           else {
            jsonstr=jsonstr + '"'
           }
       } 
       var key2=ydb.order({global: glbal, subscripts: [key.result, key1.result, '']});
       let cnt2=0;
       while (key2.result != "") {
          keya=ydb.get({global: glbal, subscripts: [key.result, key1.result, key2.result]});
          cnt2=cnt2+1;
          if (cnt2==1) {
             jsonstr=jsonstr + ', "children": [ { "name": "' + key2.result
             if (keya.data != "") {
                jsonstr=jsonstr + ' (' + keya.data  + ')"'
             }
             else {
                jsonstr=jsonstr + '"'
             }
          } 
          else {
             jsonstr=jsonstr + ', { "name": "' + key2.result
             if (keya.data != "") {
                jsonstr=jsonstr + ' (' + keya.data  + ')"'
             } 
             else {
                jsonstr=jsonstr + '"'
             }
          } 
          var key3=ydb.order({global: glbal, subscripts: [key.result, key1.result, key2.result,'']});
          let cnt3=0;
          while (key3.result != "") {
             keya=ydb.get({global: glbal, subscripts: [key.result, key1.result, key2.result,key3.result]});
             cnt3=cnt3+1;  
             if (cnt3==1) {
                jsonstr=jsonstr + ', "children": [ { "name": "' + key3.result
                if (keya.data != "") {
                   jsonstr=jsonstr + ' (' + keya.data  + ')"'
                }
                else {
                    jsonstr=jsonstr + '"'
                }
             } 
             else {
                jsonstr=jsonstr + ', { "name": "' + key3.result
                if (keya.data != "") {
                   jsonstr=jsonstr + ' (' + keya.data  + ')"'
                } 
                else {
                    jsonstr=jsonstr + '"'
                }
             } 
             var key4=ydb.order({global: glbal, subscripts: [key.result, key1.result, key2.result,key3.result,'']});
             let cnt4=0;
             while (key4.result != "") {
                 cnt4=cnt4+1;
                 keya=ydb.get({global: glbal, subscripts: [key.result, key1.result, key2.result,key3.result,key4.result]});
                 if (cnt4==1) {
                    jsonstr=jsonstr + ', "children": [ { "name": "' + key4.result
                    if (keya.data != "") {
                       jsonstr=jsonstr + ' (' + keya.data  + ')"'
                    }
                    else {
                        jsonstr=jsonstr + '"'
                    }
                 } 
                 else {
                    jsonstr=jsonstr + ', { "name": "' + key4.result
                    if (keya.data != "") {
                       jsonstr=jsonstr + ' (' + keya.data  + ')"'
                    } 
                    else {
                        jsonstr=jsonstr + '"'
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

return jsonstr;
}

ydb.open();
const express = require('express')
const app = express()
const port = 3002

app.get('/', (req, res) => {
	  const queryObject = url.parse(req.url, true).query;
	  var jsonstr=getmjson(queryObject['global']);
	  console.log(jsonstr);
	  res.send(jsonstr)
})

app.listen(port, () => {
	  console.log(`Example app listening on port ${port}`)
})


