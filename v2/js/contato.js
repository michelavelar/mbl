// <reference path='jquery-1.10.2.min.js' />
$(function () {
    $.fn.serializeObject = function () {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };

    // Carrega combo de assunto
    $.getJSON("Contato/ContatoService.svc/ListarAssuntos", function (result) {
        var campoAssunto = $("#ass_id");
        $.each(result, function (key, assunto) {
            campoAssunto.append("<option value='" + assunto.ass_id + "'>" + assunto.ass_nome + "</option>");
        })
    });

    // Valida e submete formulário
    $("#form_contato").validate({
        submitHandler: function (form) {
            var dados = JSON.stringify($("#form_contato").serializeObject());
            $.ajax({
                type: "POST",
                url: "Contato/ContatoService.svc/InserirContato",
                data: dados,
                contentType: "application/json",
                dataType: "json"
            })
            .done(function () {
                $("#form_contato").fadeOut();
                $("#mensagem_sucesso").fadeIn();
                $("html, body").animate({ scrollTop: $("#tudo").offset().top }, "slow");
            })
            .fail(function () {
                alert("Não foi possível enviar sua solicitação.");
            });
        },
        rules: {
            con_nome: {
                required: true
            },
            con_email: {
                required: true,
                email: true
            },
            ass_id: {
                required: true
            },
            con_mensagem: {
                required: true
            },
            captcha: {
                required: true,
                remote: "captcha_process.asp"
            }
        },
        messages: {
            con_nome: "Campo nome deve ser preenchido.",
            con_email: {
                required: "Campo e-mail deve ser preenchido.",
                email: "Campo e-mail inválido."
            },
            ass_id: "Campo assunto obrigatório.",
            con_mensagem: "Campo mensagem obrigatório.",
            captcha: {
                required: "Favor preencher os caracteres da imagem.",
                remote: "O texto digitado é inválido."
            }
        }
    });
});

function RefreshImage(valImageId) {
    var objImage = document.getElementById(valImageId)
    if (objImage == undefined)
        return;
    var now = new Date();
    objImage.src = objImage.src.split('?')[0] + '?x=' + now.toUTCString();
}