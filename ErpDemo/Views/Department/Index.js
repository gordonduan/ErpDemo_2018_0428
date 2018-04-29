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
//Initiate department tree
function initTree() {
    $.jstree.destroy();
    $.ajax({
        type: "Get",
        url: "/Department/GetTreeData?_t=" + new Date().getTime(),    //Get data ajax request url
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
//Load department table data
function loadTables(startPage, pageSize) {
    $("#tableBody").html("");
    $("#checkAll").prop("checked", false);
    $.ajax({
        type: "GET",
        url: "/Department/GetChildrenByParent?startPage=" + startPage + "&pageSize=" + pageSize + "&parentId=" + selectedId + "&_t=" + new Date().getTime(),
        success: function (data) {
            $.each(data.rows, function (i, item) {
                //if (item.isSystem != "Y") {
                    var tr = "<tr>";
                    tr += "<td align='center'><input type='checkbox' class='checkboxs' value='" + item.id + "'/></td>";
                    tr += "<td>" + item.name + "</td>";
                    tr += "<td>" + (item.code == null ? "" : item.code) + "</td>";
                    tr += "<td>" + (item.manager == null ? "" : item.manager) + "</td>";
                    tr += "<td>" + (item.contactNumber == null ? "" : item.contactNumber) + "</td>";
                    tr += "<td>" + (item.remarks == null ? "" : item.remarks) + "</td>";
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
            layer.alert("Please select department.");
            return;
        }
        $("#ParentId").val(selectedId);
    }
    else {
        $("#ParentId").val("00000000-0000-0000-0000-000000000000");
    }
    $("#Id").val("00000000-0000-0000-0000-000000000000");
    $("#Code").val("");
    $("#Name").val("");
    $("#Manager").val("");
    $("#ContactNumber").val("");
    $("#SerialNumber").val(0);
    $("#Remarks").val("");
    $("#Title").text("New Root");
    //Pop up add root modal
    $("#addRootModal").modal("show");
};
//Edit
function edit(id) {
    $.ajax({
        type: "Get",
        url: "/Department/Get?id=" + id + "&_t=" + new Date().getTime(),
        success: function (data) {
            $("#Id").val(data.id);
            $("#ParentId").val(data.parentId);
            $("#Name").val(data.name);
            $("#Code").val(data.code);
            $("#Manager").val(data.manager);
            $("#ContactNumber").val(data.contactNumber);
            $("#SerialNumber").val(data.serialNumber);
            $("#Remarks").val(data.remarks);

            $("#Title").text("Edit Department")
            $("#addRootModal").modal("show");
        }
    })
};
//Save
function save() {
    var postData = { "dto": { "Id": $("#Id").val(), "ParentId": $("#ParentId").val(), "Name": $("#Name").val(), "Code": $("#Code").val(), "Manager": $("#Manager").val(), "ContactNumber": $("#ContactNumber").val(), "SerialNumber": $("#SerialNumber").val(), "Remarks": $("#Remarks").val() } };
    $.ajax({
        type: "Post",
        url: "/Department/Edit",
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
    layer.confirm("Confirm to delete the items?", {
        btn: ["Confirm", "Cancel"]
    }, function () {
        var sendData = { "ids": ids };
        $.ajax({
            type: "Post",
            url: "/Department/DeleteMuti",
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
    layer.confirm("Confirm to delete the item?", {
        btn: ["Confirm", "Cancel"]
    }, function () {
        $.ajax({
            type: "POST",
            url: "/Department/Delete",
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

