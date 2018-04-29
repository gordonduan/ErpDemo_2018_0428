var selectedId = "00000000-0000-0000-0000-000000000000";
//debugger;
$(function () {
    $("#btnAddRoot").click(function () { add(0); });
    $("#btnAdd").click(function () { add(1); });
    $("#btnSave").click(function () { save(); });
    $("#btnDelete").click(function () { deleteMulti(); });
    $("#btnLoadRoot").click(function () {
        selectedId = "00000000-0000-0000-0000-000000000000";
        loadTables(1, 10);
    });
    $("#checkAll").click(function () { checkAll(this) });
    initTree();
    loadTables(1, 10);
});
//Initiate category tree
function initTree() {
    $.jstree.destroy();
    $.ajax({
        type: "Get",
        url: "/Categories/GetTreeData?_t=" + new Date().getTime(),    //Get data ajax request url
        success: function (data) {
            $('#treeDiv').jstree({       //Create JsTtree
                'core': {
                    'data': data,        //Bonding JsTree data
                    "multiple": false    //Multi choose
                },
                "plugins": ["types", "wholerow"]  //Configuration info
            })
            $("#treeDiv").on("ready.jstree", function (e, data) {   //Jstree ready event
                data.instance.open_all();    //Open all
            });
            $("#treeDiv").on('changed.jstree', function (e, data) {   //event on Jstree node changed
                var node = data.instance.get_node(data.selected[0]);  //Get selected node
                if (node) {
                    selectedId = node.id;
                    loadTables(1, 10);
                };
            });
        }
    });

}
//Load category table data
function loadTables(startPage, pageSize) {
    $("#tableBody").html("");
    $("#checkAll").prop("checked", false);
    $.ajax({
        type: "GET",
        url: "/Categories/GetChildrenByParent?startPage=" + startPage + "&pageSize=" + pageSize + "&parentId=" + selectedId + "&_t=" + new Date().getTime(),
        success: function (data) {
            $.each(data.rows, function (i, item) {
                //if (item.isSystem != "Y") {
                var tr = "<tr>";
                tr += "<td align='center'><input type='checkbox' class='checkboxs' value='" + item.id + "'/></td>";
                tr += "<td>" + item.categoryName + "</td>";
                tr += "<td>" + (item.code == null ? "" : item.code) + "</td>";
                tr += "<td>" + (item.description == null ? "" : item.description) + "</td>";
                tr += "<td><button class='btn btn-info btn-xs' href='javascript:;' onclick='edit(\"" + item.id + "\")'><i class='fa fa-edit'></i> Edit </button> <button class='btn btn-danger btn-xs' href='javascript:;' onclick='deleteSingle(\"" + item.id + "\")'><i class='fa fa-trash-o'></i> Delete </button> </td>"
                tr += "</tr>";
                $("#tableBody").append(tr);
                //}

            })
            var elment = $("#grid_paging_part"); //Grid paginator id
            if (data.rowCount > 0) {
                var options = { //Paginator plugin configuration
                    bootstrapMajorVersion: 3,
                    currentPage: startPage, //start page
                    numberOfPages: data.rowsCount, //rows count
                    totalPages: data.pageCount, //page count
                    onPageChanged: function (event, oldPage, newPage) { //event on page changed
                        loadTables(newPage, pageSize);
                    }
                }
                elment.bootstrapPaginator(options); //Paginator plugin initiation
            }
        }
    })
}
//Check all
function checkAll(obj) {
    $(".checkboxs").each(function () {
        if (obj.checked == true) {
            $(this).prop("checked", true)

        }
        if (obj.checked == false) {
            $(this).prop("checked", false)
        }
    });
};
//Add
function add(type) {
    if (type === 1) {
        if (selectedId === "00000000-0000-0000-0000-000000000000") {
            layer.alert("Please select category.");
            return;
        }
        $("#ParentId").val(selectedId);
    }
    else {
        $("#ParentId").val("00000000-0000-0000-0000-000000000000");
    }
    $("#Id").val("00000000-0000-0000-0000-000000000000");
    $("#Code").val("");
    $("#CategoryName").val("");
    $("#Description").val("");
    //hiden
    $("#CategoryId").val("");
    $("#Picture").val("");
    $("#IsValid").val("");
    $("#CreatedTime").val("");
    $("#ModifiedTime").val("");
    //Pop up add root modal
    $("#Title").text("New Category");
    $("#addRootModal").modal("show");
};
//Edit
function edit(id) {
    $.ajax({
        type: "Get",
        url: "/Categories/Get?id=" + id + "&_t=" + new Date().getTime(),
        success: function (data) {

            $("#Id").val(data.id);
            $("#Code").val(data.code);
            $("#CategoryName").val(data.categoryName);
            $("#Description").val(data.description);
            //hiden
            $("#ParentId").val(data.parentId);
            $("#CategoryId").val(data.categoryId);
            $("#Picture").val(data.picture);
            $("#IsValid").val(data.isValid);
            $("#CreatedTime").val(data.createdTime);
            $("#ModifiedTime").val(data.modifiedTime);

            $("#Title").text("Edit Category")
            $("#addRootModal").modal("show");
        }
    })
};
//Save
function save() {
    var postData = {
        "dto": {
            "Id": $("#Id").val(), "ParentId": $("#ParentId").val(), "CategoryName": $("#CategoryName").val(),
            "Code": $("#Code").val(), "Description": $("#Description").val(), "CategoryId": $("#CategoryId").val(),
            "Picture": $("#Picture").val(), "IsValid": $("#IsValid").val(), "CreatedTime": $("#CreatedTime").val(),
            "ModifiedTime": $("#ModifiedTime").val()
        }
    };
    $.ajax({
        type: "Post",
        url: "/Categories/Edit",
        data: postData,
        success: function (data) {
            if (data.result == "Success") {
                initTree();
                $("#addRootModal").modal("hide");
            } else {
                layer.tips(data.message, "#btnSave");
            };
        }
    });
};
//Delete multi items
function deleteMulti() {
    var ids = "";
    $(".checkboxs").each(function () {
        if ($(this).prop("checked") == true) {
            ids += $(this).val() + ","
        }
    });
    ids = ids.substring(0, ids.length - 1);
    if (ids.length == 0) {
        layer.alert("Please select items.");
        return;
    };
    //Confirm message
    layer.confirm("Confirm to delete the categories and all related products?", {
        btn: ["Confirm", "Cancel"]
    }, function () {
        var sendData = { "ids": ids };
        $.ajax({
            type: "Post",
            url: "/Categories/DeleteMuti",
            data: sendData,
            success: function (data) {
                if (data.result == "Success") {
                    initTree();
                    layer.closeAll();
                }
                else {
                    layer.alert("Delete failed!" + " " + data.message);
                }
            }
        });
    });
};
//Delete single item
function deleteSingle(id) {
    layer.confirm("Confirm to delete the category and all related products?", {
        btn: ["Confirm", "Cancel"]
    }, function () {
        $.ajax({
            type: "POST",
            url: "/Categories/Delete",
            data: { "id": id },
            success: function (data) {
                if (data.result == "Success") {
                    initTree();
                    layer.closeAll();
                }
                else {
                    layer.alert("Delete failed!" + " " + data.message);
                }
            }
        })
    });
};

//Generate Guid
function guid() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
};
