
        //Add the list item to the current list
         function addelement(){
             var li=document.createElement("li");
             var textvalue=document.getElementById("value").value;
             var t=document.createTextNode(textvalue);
             li.appendChild(t);

             if(textvalue===' '){
                 alert("You must give some input");
             }
             else{
                 document.getElementById("myUL").appendChild(li);
             }
             document.getElementById("value").value=" ";

             var buttonclose= document.createElement("button");
             var text= document.createTextNode("\u00D7");
             buttonclose.className="close";
             buttonclose.appendChild(text);
             li.appendChild(buttonclose);

             for (i = 0; i < close.length; i++) {
                 close[i].onclick = function() {
                     var div = this.parentElement;
                     div.style.display = "none";
                    }
                }
            }

        //Create a close button added at the end of each list item
            var mylist=document.getElementsByTagName("li");
            var i;
            for(i=0;i<mylist.length;i++){
                var buttonclose=document.createElement("button");
                var text=document.createTextNode("\u00D7");
                buttonclose.className="close";
                buttonclose.appendChild(text);
                mylist[i].appendChild(buttonclose);
            }

        //Hide the item when it is closed
        var close=document.getElementsByClassName("close");
        var i;
        for(i=0;i<close.length;i++)
        {
            close[i].onclick = function(){
                var div= this.parentElement;
                div.style.display="none";
            }
        }

        // Add a "checked" symbol when clicking on a list item
        var list = document.querySelector('ul');
        list.addEventListener('click', function(ev) {
            if (ev.target.tagName === 'LI') {
                ev.target.classList.toggle('checked');
            }
        }, false);     
       