//debugger;
//datatable config
$(function () {
    $("#dataTable").DataTable({
        paging: true,
        searching: true,
        lengthChange: false,
        info: true,
        dom: "<'row'<'col-sm-3'f><'col-sm-9'lT>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-6'i><'col-sm-6'p>>",
        paging: true,
        pagingType: "full_numbers",
        autoWidth: false,
        "columnDefs": [{ "sortable": false, "targets": [0, 6] }],
        "sorting": []
    });
    $("#dataTable input[type=search]").css({ width: "auto" });
});

$(function () {
    $("#btnAdd").click(function () { add(); });
    $("#btnSave").click(function () { save(); });
    $("#btnDelete").click(function () { deleteMulti(); });
    $("#btnLoad").click(function () {
        refresh();
    });
    $("#checkAll").click(function () { checkAll(this) });
    getCategoriesList();
    getSuppliersList();
});
//Add
function add() {
    $("#Id").val("00000000-0000-0000-0000-000000000000");
    $("#Name").val("");
    $("#SupplierId").val("");
    $("#CategoryId").val("");
    $("#UnitPrice").val(0);
    $("#Description").val("");
    //hiden
    $("#Code").val("");
    $("#ProductId").val("");
    $("#QuantityPerUnit").val("");
    $("#IsValid").val("");
    $("#CreatedTime").val("");
    $("#ModifiedTime").val("");
    //Pop up add modal
    $("#Title").text("New Product");
    $("#editModal").modal("show");
};

//Edit
function edit(id) {
    $.ajax({
        type: "Get",
        url: "/Products/Get?id=" + id + "&_t=" + new Date(),
        success: function (data) {
            //visible
            $("#Id").val(data.id);
            $("#Name").val(data.productName);
            $("#SupplierId").val(data.supplierId);
            $("#CategoryId").val(data.categoryId);
            $("#UnitPrice").val(data.unitPrice);
            $("#Description").val(data.description);
            //hiden
            $("#Code").val(data.code);
            $("#ProductId").val(data.productId);
            $("#QuantityPerUnit").val(data.quantityPerUnit);
            $("#IsValid").val(data.isValid);
            $("#CreatedTime").val(data.createdTime);
            $("#ModifiedTime").val(data.modifiedTime);
            //Pop up add modal
            $("#Title").text("Edit Product");
            $("#editModal").modal("show");
        }
    })
};

//Save
function save() {
    var postData = {
        "dto": {
            "Id": $("#Id").val(), "ProductName": $("#Name").val(), "ProductId": $("#ProductId").val(),
            "Description": $("#Description").val(), "UnitPrice": $("#UnitPrice").val(), "Code": $("#Code").val(),
            "SupplierId": $("#SupplierId").val(), "CategoryId": $("#CategoryId").val(), "QuantityPerUnit": $("#QuantityPerUnit").val(),
            "IsValid": $("#IsValid").val(), "CreatedTime": $("#CreatedTime").val(), "ModifiedTime": $("#ModifiedTime").val()
        }
    };
    $.ajax({
        type: "Post",
        url: "/Products/Edit",
        data: postData,
        success: function (data) {
            if (data.result == "Success") {
                refresh();
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
            url: "/Products/DeleteMuti",
            data: sendData,
            success: function (data) {
                if (data.result == "Success") {
                    refresh();
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
            url: "/Products/Delete",
            data: { "id": id },
            success: function (data) {
                if (data.result == "Success") {
                    refresh();
                    layer.closeAll();
                }
                else {
                    layer.alert("Delete failed!" + " " + data.message);
                }
            }
        })
    });
};

//Refresh
function refresh() {
    document.getElementById('btnRefresh').click();
};

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

//Get categories list
function getCategoriesList() {
    //$("#CategoryId").find("option").remove();
    $.ajax({
        type: "Get",
        url: "/Products/GetAllCategoriesList?_t=" + new Date().getTime(),    //Get data ajax request url
        success: function (data) {
            //$("#CategoryId").append("<option value='" + "'>" + "</option>");
            $.each(data, function (index, value) {
                $("#CategoryId").append("<option value='" + value.id + "'>" + value.text + "</option>");
            })
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });
};

//Get suppliers list
function getSuppliersList() {
    //$("#SupplierId").find("option").remove();
    $.ajax({
        type: "Get",
        url: "/Products/GetAllSuppliersList?_t=" + new Date().getTime(),    //Get data ajax request url
        success: function (data) {
            //$("#SupplierId").append("<option value='" + "'>" + "</option>");
            $.each(data, function (index, value) {
                $("#SupplierId").append("<option value='" + value.id + "'>" + value.text + "</option>");
            })
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });
};