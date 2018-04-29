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
        sortable: true
    });
    $("#dataTable input[type=search]").css({ width: "auto" });
});