// Last update 04/19/2018
String.prototype.format = function () {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined'
            ? args[number]
            : match
            ;
    });
};
jQuery.fn.extend({
    disable: function (state) {
        return this.each(function () {
            var $this = $(this);
            $this.toggleClass('disabled', state);
        });
    }
});
Array.prototype.remove = function (from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};
tpl = {
    templates: {},
    loadTemplates: function (names, callback) {
        var that = this;
        var loadTemplate = function (index) {
            var name = names[index];
            console.log('Loading template: ' + name);
            $.get('/ajax/page/' + name, function (data) {
                that.templates[name] = data;
                index++;
                if (index < names.length) {
                    loadTemplate(index);
                } else {
                    callback();
                }
            });
        }
        loadTemplate(0);
    },
    get: function (name) {
        return this.templates[name];
    }
};
function checksubmit() {

}
function GetAllTime() {
    var d = new Date();
    return d.getHours() + '' + d.getMinutes() + '' + d.getSeconds() + '' + d.getMilliseconds();
}
function ChooseAll(aspnetForm) {
    if (aspnetForm.kChooseAll.checked == true) {
        for (var i = 0; i < aspnetForm.elements.length; i++) {
            if ((aspnetForm.elements[i].type == "checkbox") && (aspnetForm.elements[i].value == "vnk")) {
                aspnetForm.elements[i].checked = true;
            }
        }
    } else {
        for (i = 0; i < aspnetForm.elements.length; i++) {
            if ((aspnetForm.elements[i].type == "checkbox") && (aspnetForm.elements[i].value == "vnk")) {
                aspnetForm.elements[i].checked = false;
            }
        }
    }
}
function checkDelete(aspnetForm) {
    var removeList = '';
    var check = false;
    for (var i = 0; i < aspnetForm.elements.length; i++) {
        if (aspnetForm.elements[i].type == "checkbox") {
            if (aspnetForm.elements[i].checked) {
                if (aspnetForm.elements[i].value == "vnk") {
                    check = true;
                }
                if (aspnetForm.elements[i].name.substr(0, 8) == 'kChoose_') {
                    removeList += ',' + aspnetForm.elements[i].name.substring(8);
                }
            }
        }
    }
    if (!check) {
        alert('Bạn phải chọn ít nhất một bản ghi cần xóa.');
        return false;
    }
    if (removeList == '')
        return false;
    removeList = removeList.substring(1);
    if (confirm('Bạn có đồng ý xoá?')) {
        aspnetForm.kevent.value = '1';
        aspnetForm.klist.value = removeList;
        return document.getElementById("frmMain").submit();
    } else
        return false;
}
function checkDeleteView(aspnetForm) {
    if (confirm('Bạn có đồng ý xoá?')) {
        aspnetForm.kevent.value = '1';
        return document.getElementById("frmMain").submit();
    }
}
function checkDeleteLine(aspnetForm, thisid) {
    if (confirm('Bạn có đồng ý xoá?')) {
        $("input[name^='kevent']").val('1');
        $("input[name^='klist']").val(thisid);
        return document.getElementById("frmMain").submit();
    } else
        return false;
}
function checkSubmitLine(aspnetForm, thisevent, thisid, Msg) {
    if (confirm(Msg)) {
        $("input[name^='kevent']").val(thisevent);
        $("input[name^='klist']").val(thisid);
        return document.getElementById("frmMain").submit();
    } else
        return false;
}
function checkMsg(aspnetForm, setvalue, Msg) {
    var removeList = '';
    var check = false;
    for (var i = 0; i < aspnetForm.elements.length; i++) {
        if (aspnetForm.elements[i].type == "checkbox") {
            if (aspnetForm.elements[i].checked) {
                if (aspnetForm.elements[i].value == "vnk") {
                    check = true;
                }
                if (aspnetForm.elements[i].name.substr(0, 8) == 'kChoose_') {
                    removeList += ',' + aspnetForm.elements[i].name.substring(8);
                }
            }
        }
    }
    if (!check) {
        alert('Bạn phải chọn ít nhất một bản ghi.');
        return false;
    }
    if (removeList == '') return false;
    removeList = removeList.substring(1);
    if (confirm(Msg)) {
        $("input[name^='kevent']").val(setvalue);
        $("input[name^='klist']").val(removeList);
        return document.getElementById("frmMain").submit();
    } else return false;
}

function GetPostVariable(vName, vDef) {
    var str = location.href;
    var pos = str.indexOf('?'.concat(vName).concat('='));
    if (pos == -1) {
        pos = str.indexOf('&'.concat(vName).concat('='));
        if (pos == -1) return vDef;
    }
    str = str.substring(pos + vName.length + 2);
    pos = str.indexOf('&');
    if (pos == -1) {
        pos = str.length;
    }
    if (pos > 0) {
        str = str.substring(0, pos);
    }
    return str;
}
function GetPostAttributes(obj, vName){
    var str = obj.innerHTML;
    var pos = str.indexOf(vName + '="');
    if(pos>0){
        str=str.substring(pos + vName.length + 2);
        str = str.substring(0,pos);
        return str;
    }
}
function AddNew(modul){
    var lg=GetPostVariable('lg', 'vn');
    location.href = '?modul=' + modul + '&ctr=edit&lg=' + lg;
    return false;
}
function AddNewC(modul, cid) {
    var lg = GetPostVariable('lg', 'vn');
    location.href = '?modul=' + modul + '&ctr=edit&lg=' + lg + '&c=' + cid;
    return false;
}
function FillTextVN(obj, v) {
    var code = RemoveTextVN(obj.value);
    var fcode = $(v);
    for (j = 0; j < fcode.length; j++) {
        fcode[j].value = code.toLowerCase();
    }
}

function RemoveTextVN(input) {
    input = input.replace(/\s|\?|\/|\"|\'|\\|,|&/ig, '-');
    input = input.replace(/á|à|ạ|ả|ã|ă|ắ|ằ|ặ|ẳ|ẵ|â|ấ|ầ|ậ|ẩ|ẫ/ig, "a");
    input = input.replace(/đ/ig, "d");
    input = input.replace(/ó|ò|ọ|ỏ|õ|ơ|ớ|ờ|ợ|ở|ỡ|ô|ố|ồ|ộ|ổ|ỗ/ig, "o");
    input = input.replace(/ú|ù|ụ|ủ|ũ|ư|ứ|ừ|ự|ử|ữ/ig, "u");
    input = input.replace(/é|è|ẹ|ẻ|ẽ|ê|ế|ề|ệ|ể|ễ/ig, "e");
    input = input.replace(/í|ì|ị|ỉ|ĩ/ig, "i");
    input = input.replace(/ý|ỳ|ỵ|ỷ|ỹ/ig, "y");
    input = input.replace(/-+/ig, "-");
    input = input.replace(/--/ig, "-");
    if (input.lastIndexOf('-') == input.length - 1)
        input = input.substring(0, input.length - 1);
    if (input.indexOf('-') == 0)
        input = input.substring(1, input.length);
    return input;
}
function Reset(aspnetForm){
    aspnetForm.reset();
    return false;
}
function Back(url) {
    if (url == null) {
        history.go(-1);
        return false;
    }
    else
        location.href = url;
}
var delay = (function () {
    var timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();
jQuery.fn.filterByText = function (textbox) {
    return this.each(function () {
        var select = this;
        var options = [];
        $(select).find('option').each(function () {
            options.push({ value: $(this).val(), text: $(this).text() });
        });
        $(select).data('options', options);

        $(textbox).bind('keyup', function () {
            delay(function () {
                var options = $(select).empty().data('options');
                var search = $.trim($(textbox).val());
                var regex = new RegExp(search, "gi");

                $.each(options, function (i) {
                    var option = options[i];
                    if (option.text.match(regex) !== null) {
                        $(select).append(
                            $('<option>').text(option.text).val(option.value).attr('title', option.text)
                        );
                    }
                });
            }, 500);
        });
    });
};

var kPortal = new Object({
    _u: '/',
    _nav: navigator,
    _document: document,
    _eurc: function (s) {
        return encodeURIComponent(s);
    },
    OpenDialog: function (url, size) {
        if (size == 0) {
            $('#kZoom div').removeClass('modal-lg');
        }
        $('#kbox').html('<div class="modal-body"><div class="row"><div class="col-md-12"><i class="fa fa-spinner fa-pulse fa-fw margin-bottom"></i> <span>Đang tải ...</span></div></div></div>');
        $('#kZoom').modal('toggle');
        $('#kbox').load(url, (function (response, status, xhr) {
            if (status == "error") {
                var msg = "Sorry but there was an error: "; $("#kbox").html(msg + xhr.status + " " + xhr.statusText);
            }
        }));
    },
    CloseBox: function () {
        $('#kZoom').modal('hide');
    },
    checkSelect: function (objF, objS) {
        var check = false;
        fields = document.getElementById(objF);
        next = document.getElementById(objS);
        for (var j = 0; j < fields.options.length; j++) {
            if (fields.options[j].selected) {
                check = true;
                $(next).append('<option value="' + fields.options[j].value + '">' + fields.options[j].text + '</option>');
            }
        }
        $("#" + objF + " option:selected").remove();
        if (!check) {
            alert('Bạn phải chọn ít nhất một bản ghi cần chuyển.');
            return false;
        }
    },
	 checkRemove: function (objF, objS) {
        var check = false;
        fields = document.getElementById(objF);
        next = document.getElementById(objS);
        for (var j = 0; j < fields.options.length; j++) {
            if (fields.options[j].selected) {
                check = true;
                Inven.RemoveElement(fields.options[j].value);
                $(next).append('<option value="' + fields.options[j].value + '">' + fields.options[j].text + '</option>');
            }
        }
        $("#" + objF + " option:selected").remove();
        if (!check) {
            alert('Bạn phải chọn ít nhất một bản ghi cần chuyển.');
            return false;
        }
    },
    checkAdd: function (objF, objS) {
        var check = false;
        fields = document.getElementById(objF);
        next = document.getElementById(objS);
        for (var j = 0; j < fields.options.length; j++) {
            if (fields.options[j].selected) {
                check = true;
                Inven.AddElement(fields.options[j].value);
                $(next).append('<option value="' + fields.options[j].value + '">' + fields.options[j].text + '</option>');
            }
        }
        $("#" + objF + " option:selected").remove();
        if (!check) {
            alert('Bạn phải chọn ít nhất một bản ghi cần chuyển.');
            return false;
        }
    },
    UploadImage: function (btn, view, url) {
        $('#frmForm').attr('action', url + '?' + GetAllTime());
        $(btn).click(function () {
            $('#inpFiles').click();
            $('#kverify').val(kverify);
        });

        $("#inpFiles").change(function () {
            var time = new Date().getTime();
            $('#ktime').val(time);
            $('#frmForm').submit();
            $(view).append($('#AttachTemplate').html().format($('#inpFiles').val(), time));
            $('#iftime').unbind().load(function () {
                var myFrame = document.getElementById($('#iftime').attr('name'));
                var response = $(myFrame.contentWindow.document.body).text();
                try {
                    var items = jQuery.parseJSON(response);
                    if (items.err == 0 && items.data.length == 1) {
                        $('#row' + items.data[0].t).html($('#AttachTemplateComplete').html().format(items.data[0].fn, items.data[0].fd, items.data[0].ft, items.data[0].fs, items.data[0].t, items.data[0].fi));
                    } else {
                        $('#row' + time).html($('#AttachTemplateError').html().format($('#inpFiles').val(), items.msg));
                    }
                }
                catch (ex) {
                    alert('Có lỗi xảy ra, không thể upload file này!');
                }
            });
        });
    },
    ViewAllUpload: function (Drop, Callback) {
        $.post('/ajax/media/action?' + GetAllTime(), { 'cmd': 'viewall', 'v': kverify },
            function (item) {
                if (item == null) return; if (item.err == 0) {
                    for (var i = 0; i < item.data.length; i++) {
                        var html = $('#tplUpload').html().format(item.data[i].fn, item.data[i].fd, item.data[i].fs, item.data[i].fi, item.data[i].ft.replace('/', '-'));
                        Drop.append(html);
                    }

                    Callback();
                } else { alert(data.msg); }
            }, 'json');
    },
    SetMenu: function (modul, ctr) {

    }
});