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
});
//Add
function add() {
    $("#Id").val("00000000-0000-0000-0000-000000000000");
    $("#Name").val("");
    $("#ContactName").val("");
    $("#PostalCode").val("");
    $("#Address").val("");
    $("#Country").val("");
    $("#City").val("");
    $("#ContactNumber").val("");
    $("#Fax").val("");
    $("#Region").val("");
    $("#HomePage").val("");
    $("#Title").text("New Supplier");
    //hiden
    $("#Code").val("");
    $("#SupplierId").val("");
    $("#ContactTitle").val("");
    $("#IsValid").val("");
    $("#CreatedTime").val("");
    $("#ModifiedTime").val("");
    //Pop up add modal
    $("#Title").text("New Supplier");
    $("#editModal").modal("show");
};

//Edit
function edit(id) {
    $.ajax({
        type: "Get",
        url: "/Suppliers/Get?id=" + id + "&_t=" + new Date(),
        success: function (data) {
            //visible
            $("#Id").val(data.id);
            $("#Name").val(data.supplierName);
            $("#ContactName").val(data.contactName);
            $("#PostalCode").val(data.postalCode);
            $("#Address").val(data.address);
            $("#Country").val(data.country);
            $("#City").val(data.city);
            $("#ContactNumber").val(data.phone);
            $("#Fax").val(data.fax);
            $("#Region").val(data.region);
            $("#HomePage").val(data.homePage);
            //hiden
            $("#Code").val(data.code);
            $("#SupplierId").val(data.supplierId);
            $("#ContactTitle").val(data.contactTitle);
            $("#IsValid").val(data.isValid);
            $("#CreatedTime").val(data.createdTime);
            $("#ModifiedTime").val(data.modifiedTime);
            //Pop up add modal
            $("#Title").text("Edit Supplier");
            $("#editModal").modal("show");
        }
    })
};

//Save
function save() {
    var postData = {
        "dto": {
            "Id": $("#Id").val(), "SupplierName": $("#Name").val(), "ContactName": $("#ContactName").val(),
            "PostalCode": $("#PostalCode").val(), "Address": $("#Address").val(), "Country": $("#Country").val(),
            "City": $("#City").val(), "Phone": $("#ContactNumber").val(), "Fax": $("#Fax").val(),
            "Region": $("#Region").val(), "HomePage": $("#HomePage").val(), "Code": $("#Code").val(),
            "SupplierId": $("#SupplierId").val(), "ContactTitle": $("#ContactTitle").val(),
            "IsValid": $("#IsValid").val(), "CreatedTime": $("#CreatedTime").val(), "ModifiedTime": $("#ModifiedTime").val()
        }
    };
    $.ajax({
        type: "Post",
        url: "/Suppliers/Edit",
        data: postData,
        success: function (data) {
            debugger
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
    layer.confirm("Confirm to delete the suppliers and all related products?", {
        btn: ["Confirm", "Cancel"]
    }, function () {
        var sendData = { "ids": ids };
        $.ajax({
            type: "Post",
            url: "/Suppliers/DeleteMuti",
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
    layer.confirm("Confirm to delete the supplier and all related products?", {
        btn: ["Confirm", "Cancel"]
    }, function () {
        $.ajax({
            type: "POST",
            url: "/Suppliers/Delete",
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
