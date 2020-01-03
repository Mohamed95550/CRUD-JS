$(function(){

    function show()
    {
        document.getElementById('notify').style.right='10px';
        setTimeout(hide,3500);
    }
    function hide(){ document.getElementById('notify').style.right='-500px';}

    function showFormUpdate()
    {
        document.getElementById('updateEmployeeById').style.left='430px';
        //setTimeout(hide,3500);
    }
    function hideFormUpdate(){ document.getElementById('updateEmployeeById').style.left='-900px';}
    $("body")
    .on("click","#edit",function(){
        showFormUpdate();
    });
    $("body")
    .on("click","#closeForm",function(){
        hideFormUpdate();
    });

    $("#submitAdd").click(()=>{
        var firstname = $( "#firstname" ).val();
        var lastname = $( "#lastname" ).val();
        var login = $( "#login" ).val();

        var row = '<tr><td>'+firstname+'</td><td>'+lastname+'</td><td>'+login+'</td><td><a href="#" class="btn btn-danger removeEmployee"><span class="glyphicon glyphicon-trash"></span></a> &nbsp;&nbsp; <a href="#" id="edit" class="btn btn-warning editEmployee"><span class="glyphicon glyphicon-edit"></span></a></td><tr>';

        if((firstname == "") || (lastname == "") || (login == ""))
        {
            $("#notify")
                .css('background','red')
                .html("<span class='glyphicon glyphicon-remove'></span> Required one or many inputs");
                show();
        }
        else
        {
            $("table tbody").append(row);
            $("#employeeForm")[0].reset();
            $("#notify")
                .css('background','green')
                .html("<span class='glyphicon glyphicon-ok'></span> Employee added succefully");
                show();
        }
    })
    $("body")
        .on("click",".removeEmployee",function(){
        //var id = $(this).parent("td").data('id');
        var selectedEmployee = $(this).parents("tr");
        selectedEmployee.css('background','red');
        selectedEmployee.fadeOut(1500,function(){
            selectedEmployee.remove();
        });
        $("#notify")
                .css('background','red')
                .html("<span class='glyphicon glyphicon-remove'></span> Employee deleted succefully");
                show();
    });
     $("body")
        .on("click",".editEmployee",function(){
            var target = $(this).parents("tr");
            var t =target.children("td:eq(0)");
            var y = t.text();
            alert(y);
            /*target.fadeIn(1500,function(){
                $(this).css('background','orange');
            });*/
        });
    $("#submitUpdate").click(()=>{
        var firstnameUpdate = $( "#firstnameUpdate" ).val();
        var lastnameUpdate = $( "#lastnameUpdate" ).val();
        var loginUpdate = $( "#loginUpdate" ).val(); 
        //alert(firstnameUpdate+" "+lastnameUpdate+" "+loginUpdate);
        $("#notify")
        .css('background','orange')
        .html("<span class='glyphicon glyphicon-edit'></span> "+firstnameUpdate+" edited succefully ");
        show();
    });
});