// ==UserScript==
// @name        Loteria paragonowa
// @namespace   huk.waw.pl
// @include     https://loteriaparagonowa.gov.pl/
// @version     1
// @grant       none
// ==/UserScript==
function pad(n){return n<10 ? '0'+n : n}
$(function(){
	$("#nr_kasy_1").val("");
	$("#nip_1,#nip_2,#nip_3,#nip_4,#nip_5").val("");
	$("#nip_6,#nip_7,#nip_8,#nip_9,#nip_10").val("");
	$("#rok,#miesiac,#dzien").val("");
	$("#nr_wydruku,#kwota_zl,#kwota_gr").val("");
	var operation = $("#captcha-operation").html();
	var result = eval(operation);
	var now = new Date();
	$("#captcha-input").val(result);
	$("#zgoda_dane").prop("checked", "checked");
	$("#sprawdzone").prop("checked", "checked");
	$("#rok").val(now.getFullYear());
	$("#miesiac").val(pad(now.getMonth()+1));
	$("#nr_kasy_1").focus();
});
