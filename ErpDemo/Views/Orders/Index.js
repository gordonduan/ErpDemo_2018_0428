//debugger
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

var productlist = new Array();
var status;
$(function () {
    $("#btnAdd").click(function () { add(); });
    $("#btnSave").click(function () { save(); });
    $("#btnDelete").click(function () { deleteMulti(); });
    $("#btnLoad").click(function () {
        refresh();
    });
    $("#checkAll").click(function () { checkAll(this) });
    $("#btnInsert").click(function () { insertRow(); });
    $("#btnApprove").click(function () { approve(); });
    getProductsList();
    getCustomersList();
    //getSuppliersList();
});

//Clear tableBody record
function clearTableBody() {
    var table = document.getElementById('tableBody');
    var rowNum = table.rows.length;
    for (i = 1; i < rowNum; i++) {
        table.deleteRow(i);
        rowNum = rowNum - 1;
        i = i - 1;
    }
};

//Add
function add() {
    clearTableBody();
    $("#Id").val("00000000-0000-0000-0000-000000000000");
    $("#CustomerId").val("");
    $("#OrderType").val("1");
    $("#OrderStatus").val("0");
    $("#ShipAddress").val("");
    //hiden
    $("#Code").val("");
    $("#OrderId").val("");
    $("#OrderDate").val("");
    $("#RequiredDate").val("");
    $("#ShippedDate").val("");
    $("#ShipVia").val("");
    $("#Freight").val("");
    $("#ShipName").val("");
    $("#ShipCity").val("");
    $("#ShipRegion").val("");
    $("#ShipPostalCode").val("");
    $("#ShipCountry").val("");
    $("#IsValid").val("");
    $("#CreatedTime").val("");
    $("#ModifiedTime").val("");
    //Pop up add modal
    $("#Title").text("New Order");
    $('#CustomerId').removeAttr("disabled");
    $('#OrderType').removeAttr("disabled");
    $('#ShipAddress').removeAttr("disabled");
    $("#btnSave").show();
    $("#btnInsert").show();
    $("#btnApprove").hide();
    $("#editModal").modal("show");
};

// Edit
function edit(id) {
    clearTableBody();
    $.ajax({
        type: "Get",
        url: "/Orders/GetHead?id=" + id + "&_t=" + new Date(),
        success: function (data) {
            $("#Id").val(data.id);
            $("#CustomerId").val(data.customerId);
            $("#OrderType").val(data.orderType);
            $("#OrderStatus").val(data.orderStatus);
            $("#ShipAddress").val(data.shipAddress);
            //hiden
            $("#Code").val(data.code);
            $("#OrderId").val(data.orderId);
            $("#OrderDate").val(data.orderDate);
            $("#RequiredDate").val(data.requireDate);
            $("#ShippedDate").val(data.shippedDate);
            $("#ShipVia").val(data.shipVia);
            $("#Freight").val(data.freight);
            $("#ShipName").val(data.shipName);
            $("#ShipCity").val(data.shipCity);
            $("#ShipRegion").val(data.shipRegion);
            $("#ShipPostalCode").val(data.shipPostalCode);
            $("#ShipCountry").val(data.shipCountry);
            $("#IsValid").val(data.isValid);
            $("#CreatedTime").val(data.createdTime);
            $("#ModifiedTime").val(data.modifiedTime);
            //Pop up add modal
            $("#Title").text("Edit Order");
        }
    });
    $.ajax({
        type: "GET",
        url: "/Orders/GetDetails?id=" + id + "&_t=" + new Date(),
        success: function (data) {
            $.each(data, function (i, item) {
                var element = document.createElement("select");
                element.setAttribute("class", "product");
                element.setAttribute("style", "border: 0; background: transparent; appearance:none; -webkit-appearance:none; -moz-appearance:none;");
                var tb = document.getElementById("tableBody");
                rowIndex = tb.rows.length;

                var tr = "<tr>";
                tr += "<td>" + rowIndex + "</td>";
                tr += "<td></td>";
                tr += "<td>" + "<input class='price' disabled='disabled' style='border: 0px; outline: none; background-color:transparent'></input>" + "</td>";
                tr += "<td>" + "<input class='unit' type='number' min='1' onkeyup='keyUp(this)' style='border: 0px; outline: none; background-color:transparent'></input>" + "</td>";
                tr += "<td>" + "<button class='btn btn-danger btn-xs' href='javascript:;' onclick='deleteRow(this)'><i class='fa fa-trash-o'></i> Delete </button>" + "</td>";
                tr += "</tr>";
                $("#tableBody").append(tr);
                
                var c = tb.rows[rowIndex].cells[1];
                for (var i = 0; i < productlist.length; i++) {
                    var option = document.createElement("option");
                    option.value = productlist[i].substring(0, productlist[i].indexOf(":"));
                    option.text = productlist[i].substring(productlist[i].indexOf(":") + 1);
                    element.appendChild(option);
                }
                c.appendChild(element);
                c.children[0].value = item.productId;
                tb.rows[rowIndex].cells[2].children[0].value = item.unitPrice;
                tb.rows[rowIndex].cells[3].children[0].value = item.quantity;
            });
        }
    });
    $('#CustomerId').removeAttr("disabled");
    $('#OrderType').removeAttr("disabled");
    $('#ShipAddress').removeAttr("disabled");
    $("#btnSave").show();
    $("#btnInsert").show();
    $("#btnApprove").hide();
    $("#editModal").modal("show");
}

// view
function view(id) {
    clearTableBody();
    $.ajax({
        type: "Get",
        url: "/Orders/GetHead?id=" + id + "&_t=" + new Date(),
        success: function (data) {
            $("#Id").val(data.id);
            $("#CustomerId").val(data.customerId);
            $("#OrderType").val(data.orderType);
            $("#OrderStatus").val(data.orderStatus);
            $("#ShipAddress").val(data.shipAddress);
            //hiden
            $("#Code").val(data.code);
            $("#OrderId").val(data.orderId);
            $("#OrderDate").val(data.orderDate);
            $("#RequiredDate").val(data.requireDate);
            $("#ShippedDate").val(data.shippedDate);
            $("#ShipVia").val(data.shipVia);
            $("#Freight").val(data.freight);
            $("#ShipName").val(data.shipName);
            $("#ShipCity").val(data.shipCity);
            $("#ShipRegion").val(data.shipRegion);
            $("#ShipPostalCode").val(data.shipPostalCode);
            $("#ShipCountry").val(data.shipCountry);
            $("#IsValid").val(data.isValid);
            $("#CreatedTime").val(data.createdTime);
            $("#ModifiedTime").val(data.modifiedTime);
            //Pop up add modal
            $("#Title").text("View Order");
        }
    });
    $.ajax({
        type: "GET",
        url: "/Orders/GetDetails?id=" + id + "&_t=" + new Date(),
        success: function (data) {
            $.each(data, function (i, item) {
                var element = document.createElement("select");
                element.setAttribute("disabled", "disabled");
                element.setAttribute("class", "product");
                element.setAttribute("style", "border: 0; background: transparent; appearance:none; -webkit-appearance:none; -moz-appearance:none;");
                var tb = document.getElementById("tableBody");
                rowIndex = tb.rows.length;

                var tr = "<tr>";
                tr += "<td>" + rowIndex + "</td>";
                tr += "<td></td>";
                tr += "<td>" + (item.unitPrice == null ? "" : item.unitPrice) + "</td>";
                tr += "<td>" + (item.quantity == null ? "" : item.quantity) + "</td>";
                tr += "<td></td>";
                tr += "</tr>";
                $("#tableBody").append(tr);
                
                var c = tb.rows[rowIndex].cells[1];
                for (var i = 0; i < productlist.length; i++) {
                    var option = document.createElement("option");
                    option.value = productlist[i].substring(0, productlist[i].indexOf(":"));
                    option.text = productlist[i].substring(productlist[i].indexOf(":") + 1);
                    element.appendChild(option);
                }
                c.appendChild(element);
                c.children[0].value = item.productId;
            });
        }
    });
    $('#CustomerId').attr("disabled", "disabled");
    $('#OrderType').attr("disabled", "disabled");
    $('#ShipAddress').attr("disabled", "disabled");
    //document.getElementById("CustomerId").setAttribute("disabled", "disabled");
    //document.getElementById("OrderType").setAttribute("disabled", "disabled");
    //document.getElementById("ShipAddress").setAttribute("disabled", "disabled");
    $("#btnSave").hide();
    $("#btnInsert").hide();
    $("#btnApprove").hide();
    $("#editModal").modal("show");
}

// Get table content
function getTableContent() {
    var mytable = document.getElementById("tableBody");
    var data = [];
    for (var i = 1, rows = mytable.rows.length; i < rows; i++) {
        for (var j = 1, cells = mytable.rows[i].cells.length; j < cells-1; j++) {
            if (!data[i]) {
                data[i] = new Array();
            }
            data[i][j] = mytable.rows[i].cells[j].children[0].value;
        }
    }
    //return data;
    if (!tojson(data))
    {
        return false;
    }else
    {
        return tojson(data);
    }
    
}

// Convert table content to json data
function tojson(arr) {
    var type = "^[0-9]*[1-9][0-9]*$";
    var r = new RegExp(type);
    if (!arr.length) {
        alert("No order details, please check!");
        return null;
    }
    len = arr.length;
    // check if there are duplicated row in table
    //for (i = 1; i < arr.length; i++) {
    //    for (x = 1; x < arr.length; x++) {
    //        if (arr[i][1] == arr[x][1] && i != x) {
    //            alert("Row " + i + " and row" + x + " is same product, please delete one.");
    //            return false;
    //        }
    //    }
    //}
    // check if there are empty record and quantity
    array = [];
    for (var i = 1; i < len; i++) {
        if (arr[i][1].length == 0)
        {
            alert("Row " + i + " is empty record, please delete it!");
            return false;
        } else 
        {
            // check if there are duplicated row in table
            for (x = 1; x < arr.length; x++) {
                if (arr[i][1] == arr[x][1] && i != x) {
                    alert("Row " + i + " and row" + x + " is same product, please delete one.");
                    return false;
                }
            }
            var flag = r.test(arr[i][3]);
            if (!flag) {
                alert("Row " + i + " quantity can be positive ingteger only.");
                return false;
            }
            array.push({ "ProductId": arr[i][1], "UnitPrice": arr[i][2], "Quantity": arr[i][3] });
        }
       
    }
    return JSON.stringify(array);
}  

// Show table content
//function showTableContent() {
//    var data = getTableContent("tableBody");
//    var tmp = '';
//    for (i = 0, rows = data.length; i < rows; i++) {
//        for (j = 0, cells = data[i].length; j < cells; j++) {
//            tmp += data[i][j] + ',';
//        }
//        tmp += '<br>';
//    }
//    document.getElementById('result').innerHTML = tmp;
//}

//Save
function save() {
    if (!getTableContent()) {
        return;
    } else {
        var data = getTableContent();
    }
    var orderHead = {
       
            "Id": $("#Id").val(), "CustomerId": $("#CustomerId").val(), "OrderType": $("#OrderType").val(),
            "OrderStatus": $("#OrderStatus").val(), "ShipAddress": $("#ShipAddress").val(), "Code": $("#Code").val(),
            "OrderId": $("#OrderId").val(), "OrderDate": $("#OrderDate").val(), "RequiredDate": $("#RequiredDate").val(),
            "ShippedDate": $("#ShippedDate").val(), "ShipVia": $("#ShipVia").val(), "Freight": $("#Freight").val(),
            "ShipName": $("#ShipName").val(), "ShipCity": $("#ShipCity").val(), "ShipRegion": $("#ShipRegion").val(),
            "ShipPostalCode": $("#ShipPostalCode").val(), "ShipCountr": $("#ShipCountr").val(),
            "IsValid": $("#IsValid").val(), "CreatedTime": $("#CreatedTime").val(), "ModifiedTime": $("#ModifiedTime").val()
        
    };
    var orderDetails = data;
    $.ajax({
        type: "Post",
        url: "/Orders/Edit",
        data: { "orderHead": orderHead, "orderDetails": orderDetails },
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

//Show Approve
function showApprove(id) {
    view(id);
    $("#btnApprove").show();
};

//Approve
function approve() {
    var id = $("#Id").val();
    $.ajax({
        type: "Post",
        url: "/Orders/OrderApprove",
        data: { "id": id },
        success: function (data) {
            debugger
            if (data.result == "Success") {
                refresh();
                $("#editModal").modal("hide");
            } else {
                layer.tips(data.message, "#btnApprove");
            };
        }
    });
}


//delete row
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById('tableBody').deleteRow(i);
}

////Insert row
//function insertrow() {
//    var tb = document.getElementById("tableBody");
//    rowIndex = tb.rows.length;//default insert row at the end of table
//    var row = tb.insertRow(rowIndex);//insert row in specified row
//    var c0 = row.insertCell(0);
//    var element = document.createElement("select")
//    element.setAttribute("class", "product");
//    element.setAttribute("style", "border: 0; background: transparent; appearance:none; -webkit-appearance:none; -moz-appearance:none;");
//    for (var i = 0; i < productlist.length; i++) {
//        var option = document.createElement("option");
//        option.value = productlist[i].substring(0, productlist[i].indexOf(":"));
//        option.text = productlist[i].substring(productlist[i].indexOf(":") + 1);
//        element.appendChild(option);
//    }
//    c0.appendChild(element);
//    var c1 = row.insertCell(1);
//    c1.innerHTML = "<input class='price' disabled='disabled' style='border: 0px; outline: none; background-color:transparent'></input>";
//    var c2 = row.insertCell(2);
//    c2.innerHTML = "<input type='number' min='1' style='border: 0px; outline: none; background-color:transparent'></input>";
//    var c3 = row.insertCell(3);
//    c3.innerHTML = "<button class='btn btn-danger btn-xs' href='javascript:;' onclick='deleteRow(this)'><i class='fa fa-trash-o'></i> Delete </button>";
//}

//Insert row
function insertRow() {
    var element = document.createElement("select")
    element.setAttribute("class", "product");
    element.setAttribute("style", "border: 0; background: transparent; appearance:none; -webkit-appearance:none; -moz-appearance:none;");
    var tb = document.getElementById("tableBody");
    rowIndex = tb.rows.length;

    var tr = "<tr>";
    tr += "<td>" + rowIndex + "</td>";
    tr += "<td></td>";
    tr += "<td>" + "<input class='price' disabled='disabled' style='border: 0px; outline: none; background-color:transparent'></input>" + "</td>";
    tr += "<td>" + "<input class='unit' type='number' min='1' style='border: 0px; outline: none; background-color:transparent' onkeyup='keyUp(this)'></input>" + "</td>";
    tr += "<td>" + "<button class='btn btn-danger btn-xs' href='javascript:;' onclick='deleteRow(this)'><i class='fa fa-trash-o'></i> Delete </button>" + "</td>";
    tr += "</tr>";
    $("#tableBody").append(tr);
    
    var c = tb.rows[rowIndex].cells[1];
    for (var i = 0; i < productlist.length; i++) {
        var option = document.createElement("option");
        option.value = productlist[i].substring(0, productlist[i].indexOf(":"));
        option.text = productlist[i].substring(productlist[i].indexOf(":") + 1);
        element.appendChild(option);
    }
    c.appendChild(element);
}

// unit only can be positive ingteger
function keyUp(ob) {
    //if (ob.value.length == 1) { ob.value = ob.value.replace(/[^1-9]/g, '') } else { ob.value = ob.value.replace(/\D/g, '') }
    var type = "^[0-9]*[1-9][0-9]*$";
    var r = new RegExp(type);
    var flag = r.test(ob.value);
    if (!flag) {
        alert("Quantity can be positive ingteger only.");
        return;
    }
}

//on change, set other cloumn by selecting product
$('#tableBody').on('change', '.product', function () {
    var id = $(this).val();
    var row = $(this).closest('tr'); // get the row
    var priceSelect = row.find('.price'); // get the price select in the same row
    var unitSelect = row.find('.unit'); // get the unit select in the same row
    $.ajax({
        type: "Get",
        url: "/Products/Get?id=" + id + "&_t=" + new Date(),
        success: function (data) {
            priceSelect.val(data.unitPrice);
            unitSelect.val(1);
        }
    });
})


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
            url: "/Orders/DeleteMuti",
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

//check status
function check(r) {
    var i = r.parentNode.parentNode.rowIndex;
    status = document.getElementById('dataTable').rows[i].cells[6].innerHTML;
}

//Delete single item
function deleteSingle(id) {
    if (status == "Approved") {
        alert("Approved order can not be deleted.");
        status = "";
        return;
    }
    layer.confirm("Confirm to delete the item?", {
        btn: ["Confirm", "Cancel"]
    }, function () {
        $.ajax({
            type: "POST",
            url: "/Orders/Delete",
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

//Get products list
function getProductsList() {
    productlist.push("" + ":" + "Please select product");
    $.ajax({
        type: "Get",
        url: "/Orders/GetProductsList?_t=" + new Date().getTime(),    //Get data ajax request url
        success: function (data) {
            $.each(data, function (index, value) {
                productlist.push(value.id + ":" + value.text);
            })
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });
};

//Get customers list
function getCustomersList() {
    $.ajax({
        type: "Get",
        url: "/Orders/GetCustomersList?_t=" + new Date().getTime(),    //Get data ajax request url
        success: function (data) {
            $.each(data, function (index, value) {
                $("#CustomerId").append("<option value='" + value.id + "'>" + value.text + "</option>");
            })
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });
};