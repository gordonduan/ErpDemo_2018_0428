var selectedRole = 0;
//debugger;
$(function () {
    $("#btnAdd").click(function () { add(); });
    $("#btnDelete").click(function () { deleteMulti(); });
    $("#btnSave").click(function () { save(); });
    $("#btnSavePermission").click(function () { savePermission(); });
    $("#checkAll").click(function () { checkAll(this) });
    initTree();
    loadTables(1, 10);
});
//Initiate role tree
function initTree() {
    $.jstree.destroy();
    $.ajax({
        type: "Get",
        url: "/Menu/GetMenuTreeDataByRole?_t=" + new Date().getTime(),    //Get data ajax request url
        data: { "roleId": selectedRole},
        success: function (data) {
            $('#treeDiv').jstree({       //Create JsTtree
                'core': {
                    'data': data,        //Bonding JsTree data
                    "multiple": true    //Multi choose
                },
                "plugins": ["types", "wholerow", "checkbox",],  //Configuration info
                "checkbox": {
                    "keep_selected_style": false
                }
            })
            $("#treeDiv").on("ready.jstree", function (e, data) {   //Jstree ready event
                data.instance.open_all();    //Open all
            });
        }
    });

}
//Load role table data
function loadTables(startPage, pageSize) {
    $("#tableBody").html("");
    $("#checkAll").prop("checked", false);
    $.ajax({
        type: "GET",
        url: "/Role/GetAllPageList?startPage=" + startPage + "&pageSize=" + pageSize + "&_t=" + new Date().getTime(),
        success: function (data) {
            $.each(data.rows, function (i, item) {
                //if (item.remarks != "access by admin" || item.code != "0000" || item.name !="System administrator")
                //    {
                    var tr = "<tr>";
                    tr += "<td align='center'><input type='checkbox' class='checkboxs' value='" + item.id + "'/></td>";
                    tr += "<td>" + (item.code == null ? "" : item.code) + "</td>";
                    tr += "<td>" + item.name + "</td>";
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
            $("table > tbody > tr").click(function () {
                $("table > tbody > tr").removeAttr("style")
                $(this).attr("style", "background-color:#beebff");
                selectedRole = $(this).find("input").val();
                //initTree();
                loadPermissionByRole(selectedRole);
            });
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
function add() {
    $("#Id").val("00000000-0000-0000-0000-000000000000");
    $("#Code").val("");
    $("#Name").val("");
    $("#Remarks").val("");
    $("#Title").text("New Role");
    //Pop up edit modal
    $("#editModal").modal("show");
};
//Edit
function edit(id) {
    $.ajax({
        type: "Get",
        url: "/Role/Get?id=" + id + "&_t=" + new Date().getTime(),
        success: function (data) {
            $("#Id").val(data.id);
            $("#Name").val(data.name);
            $("#Code").val(data.code);
            $("#Remarks").val(data.remarks);

            $("#Title").text("Edit Role")
            $("#editModal").modal("show");
        }
    })
};
//Save
function save() {
    var postData = { "dto": { "Id": $("#Id").val(), "Name": $("#Name").val(), "Code": $("#Code").val(), "Remarks": $("#Remarks").val() } };
    $.ajax({
        type: "Post",
        url: "/Role/Edit",
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
            url: "/Role/DeleteMuti",
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
            url: "/Role/Delete",
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
//Save role menu permission
function savePermission() {
    if (selectedRole == 0) {
        layer.alert("Please select role");
        return;
    }
    $('#treeDiv').jstree(true).get_all_checked = function (full) {
        var tmp = new Array;
        for (var i in this._model.data) {
            if (i != "#") {
                if (this.is_undetermined(i) || this.is_checked(i)) { tmp.push(full ? this._model.data[i] : i); }
            }
        }
        return tmp;
    };

    var checkedMenu = $('#treeDiv').jstree(true).get_all_checked(true);
    //var checkedMenu = $('#treeDiv').jstree().get_checked(true);
    var permissions = [];
    $.each(checkedMenu, function (i, item) {
        permissions.push({ "RoleId": selectedRole, "MenuId": item.id });
    })
    $.ajax({
        type: "POST",
        url: "/Role/SavePermission",
        data: { "roleId": selectedRole, "roleMenus": permissions },
        success: function (data) {
            if (data.result = true) {
                layer.alert("Save successfully!");
            }
            else {
                layer.alert("Save failed!");
            }
        }
    })
};
//Load menus permission by role
function loadPermissionByRole(selectedRole) {
        $.ajax({
        type: "Get",
        url: "/Role/GetMenusByRole?roleId=" + selectedRole + "&_t=" + new Date().getTime(),
        success: function (data) {
            $("#treeDiv").find("li").each(function () {
                $("#treeDiv").jstree("uncheck_node", $(this));
                if (data.indexOf($(this).attr("id")) != -1) {
                    $("#treeDiv").jstree("check_node", $(this));
                }
            })
        }
    });
};

//Generate Guid
function guid() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
};