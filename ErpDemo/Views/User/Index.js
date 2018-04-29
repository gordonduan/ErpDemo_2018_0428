﻿var selectedId = "00000000-0000-0000-0000-000000000000";
//debugger;
$(function () {
    $("#btnAdd").click(function () { add(); });
    $("#btnSave").click(function () { save(); });
    $("#btnDelete").click(function () { deleteMulti(); });
    $("#checkAll").click(function () { checkAll(this) });
    $("#btnLoadAll").click(function () {
        selectedMenuId = "00000000-0000-0000-0000-000000000000";
        loadAllUser(1, 10);
    });
    initTree();
    loadAllUser(1, 10);
});
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
//Load user table data
function loadTables(startPage, pageSize) {
    $("#tableBody").html("");
    $("#checkAll").prop("checked", false);
    $.ajax({
        type: "GET",
        url: "/User/GetUserByDepartment?startPage=" + startPage + "&pageSize=" + pageSize + "&departmentId=" + selectedId + "&_t=" + new Date().getTime(),
        success: function (data) {
            $.each(data.rows, function (i, item) {
                var tr = "<tr>";
                tr += "<td align='center'><input type='checkbox' class='checkboxs' value='" + item.id + "'/></td>";
                tr += "<td>" + item.userName + "</td>";
                tr += "<td>" + (item.name == null ? "" : item.name) + "</td>";
                tr += "<td>" + (item.email == null ? "" : item.email) + "</td>";
                tr += "<td>" + (item.mobileNumber == null ? "" : item.mobileNumber) + "</td>";
                tr += "<td>" + (item.remarks == null ? "" : item.remarks) + "</td>";
                tr += "<td><button class='btn btn-info btn-xs' href='javascript:;' onclick='edit(\"" + item.id + "\")'><i class='fa fa-edit'></i> Edit </button> <button class='btn btn-danger btn-xs' href='javascript:;' onclick='deleteSingle(\"" + item.id + "\")'><i class='fa fa-trash-o'></i> Delete </button> </td>"
                tr += "</tr>";
                $("#tableBody").append(tr);
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
            loadRoles(data);
        }
    })
};

//Load user table data
function loadAllUser(startPage, pageSize) {
    $("#tableBody").html("");
    $("#checkAll").prop("checked", false);
    $.ajax({
        type: "GET",
        url: "/User/GetAllUserList?startPage=" + startPage + "&pageSize=" + pageSize + "&departmentId=" + new Date().getTime(),
        success: function (data) {
            $.each(data.rows, function (i, item) {
                var tr = "<tr>";
                tr += "<td align='center'><input type='checkbox' class='checkboxs' value='" + item.id + "'/></td>";
                tr += "<td>" + item.userName + "</td>";
                tr += "<td>" + (item.name == null ? "" : item.name) + "</td>";
                tr += "<td>" + (item.email == null ? "" : item.email) + "</td>";
                tr += "<td>" + (item.mobileNumber == null ? "" : item.mobileNumber) + "</td>";
                tr += "<td>" + (item.remarks == null ? "" : item.remarks) + "</td>";
                tr += "<td><button class='btn btn-info btn-xs' href='javascript:;' onclick='edit(\"" + item.id + "\")'><i class='fa fa-edit'></i> Edit </button> <button class='btn btn-danger btn-xs' href='javascript:;' onclick='deleteSingle(\"" + item.id + "\")'><i class='fa fa-trash-o'></i> Delete </button> </td>"
                tr += "</tr>";
                $("#tableBody").append(tr);
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
            loadRoles(data);
        }
    })
};

function loadRoles(data) {
    $("#Role").select2();
    var option = "";
    $.each(data.roles, function (i, item) {
        //if (item.remarks != "access by admin" || item.code != "0000" || item.name != "System administrator") {
            option += "<option value='" + item.id + "'>" + item.name + "</option>"
        //}
    })
    $("#Role").html(option);
}
//Add
function add() {
    if (selectedId === "00000000-0000-0000-0000-000000000000") {
        layer.alert("Please select Department.");
        return;
    }
    $("#Id").val("00000000-0000-0000-0000-000000000000");
    $("#UserName").val("");
    $("#Password").val("");
    $("#Name").val("");
    $("#EMail").val("");
    $("#MobileNumber").val("");
    $("#Remarks").val("");
    $("#DepartmentId").val(selectedId);
    $("#Role").select2("val", "");
    $("#Title").text("New User ");
    //Pop up edit modal
    $("#editModal").modal("show");
};
//Edit
function edit(id) {
    $.ajax({
        type: "Get",
        url: "/User/Get?id=" + id + "&_t=" + new Date().getTime(),
        success: function (data) {
            $("#Id").val(data.id);
            $("#UserName").val(data.userName);
            $("#Password").val(data.password);
            $("#Name").val(data.name);
            $("#EMail").val(data.eMail);
            $("#mobileNumber").val(data.mobileNumber);
            $("#Remarks").val(data.remarks);
            $("#DepartmentId").val(data.departmentId);
            var roleIds = [];
            if (data.userRoles) {
                $.each(data.userRoles, function (i, item) {
                    roleIds.push(item.roleId)
                });
                //$("#Role").select2("val", roleIds);
                $("#Role").val(roleIds).trigger('change');
            }
            $("#Title").text("Edit User")
            $("#editModal").modal("show");
        }
    })
};
//Save
function save() {
    var roles = "";
    if ($("#Role").val())
        roles = $("#Role").val().toString();
    var postData = { "dto": { "Id": $("#Id").val(), "UserName": $("#UserName").val(), "Password": $("#Password").val(), "Name": $("#Name").val(), "EMail": $("#EMail").val(), "MobileNumber": $("#MobileNumber").val(), "Remarks": $("#Remarks").val(), "DepartmentId": $("#DepartmentId").val() }, "roles": roles };
    $.ajax({
        type: "Post",
        url: "/User/Edit",
        data: postData,
        success: function (data) {
            if (data.result == "Success") {
                loadTables(1, 10)
                $("#editModal").modal("hide");
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
            url: "/User/DeleteMuti",
            data: sendData,
            success: function (data) {
                if (data.result == "Success") {
                    loadTables(1, 10)
                    layer.closeAll();
                }
                else {
                    layer.alert("Delete failed!");
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
            url: "/User/Delete",
            data: { "id": id },
            success: function (data) {
                if (data.result == "Success") {
                    loadTables(1, 10)
                    layer.closeAll();
                }
                else {
                    layer.alert("Delete failed!");
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