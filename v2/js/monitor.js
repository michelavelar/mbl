// JavaScript Document


$(document).ready(function() {
	
		
			$('#como-funciona, #parceiros-tecnologicos').hide();
		
			$('#botao-aplicativo').click(function() {
				$('#como-funciona, #parceiros-tecnologicos').hide();
				$('#o-aplicativo').show();
				$('#botao-como, #botao-como2, #botao-parceiros, #botao-parceiros2 ').removeClass('link-menu-interno-ativo');
				$('#botao-como, #botao-como2, #botao-parceiros, #botao-parceiros2 ').addClass('link-menu-interno');
				$('#botao-aplicativo, #botao-aplicativo2').removeClass('link-menu-interno');
				$('#botao-aplicativo, #botao-aplicativo2').addClass('link-menu-interno-ativo');
			});
			$('#botao-aplicativo2').click(function() {
				$('#como-funciona, #parceiros-tecnologicos').hide();
				$('#o-aplicativo').show();
				$('#botao-como, #botao-como2, #botao-parceiros, #botao-parceiros2 ').removeClass('link-menu-interno-ativo');
				$('#botao-como, #botao-como2, #botao-parceiros, #botao-parceiros2 ').addClass('link-menu-interno');
				$('#botao-aplicativo, #botao-aplicativo2').removeClass('link-menu-interno');
				$('#botao-aplicativo, #botao-aplicativo2').addClass('link-menu-interno-ativo');
				$('html, body').animate({scrollTop : 0});
					return false;
			});
			$('#botao-como').click(function() {
				$('#o-aplicativo, #parceiros-tecnologicos').hide();
				$('#como-funciona').show();
				$('#botao-aplicativo, #botao-aplicativo2, #botao-parceiros, #botao-parceiros2 ').removeClass('link-menu-interno-ativo');
				$('#botao-aplicativo, #botao-aplicativo2, #botao-parceiros, #botao-parceiros2 ').addClass('link-menu-interno');
				$('#botao-como, #botao-como2').removeClass('link-menu-interno');
				$('#botao-como, #botao-como2').addClass('link-menu-interno-ativo');
			});
			$('#botao-como2').click(function() {
				$('#o-aplicativo, #parceiros-tecnologicos').hide();
				$('#como-funciona').show();
				$('#botao-aplicativo, #botao-aplicativo2, #botao-parceiros, #botao-parceiros2 ').removeClass('link-menu-interno-ativo');
				$('#botao-aplicativo, #botao-aplicativo2, #botao-parceiros, #botao-parceiros2 ').addClass('link-menu-interno');
				$('#botao-como, #botao-como2').removeClass('link-menu-interno');
				$('#botao-como, #botao-como2').addClass('link-menu-interno-ativo');
				$('html, body').animate({scrollTop : 0});
					return false;
			});
			$('#botao-parceiros').click(function() {
				$('#como-funciona, #o-aplicativo').hide();
				$('#parceiros-tecnologicos').show();
				$('#botao-aplicativo, #botao-aplicativo2, #botao-como, #botao-como2 ').removeClass('link-menu-interno-ativo');
				$('#botao-aplicativo, #botao-aplicativo2, #botao-como, #botao-como2 ').addClass('link-menu-interno');
				$('#botao-parceiros, #botao-parceiros2').removeClass('link-menu-interno');
				$('#botao-parceiros, #botao-parceiros2').addClass('link-menu-interno-ativo');
			});
			$('#botao-parceiros2').click(function() {
				$('#como-funciona, #o-aplicativo').hide();
				$('#parceiros-tecnologicos').show();
				$('#botao-aplicativo, #botao-aplicativo2, #botao-como, #botao-como2 ').removeClass('link-menu-interno-ativo');
				$('#botao-aplicativo, #botao-aplicativo2, #botao-como, #botao-como2 ').addClass('link-menu-interno');
				$('#botao-parceiros, #botao-parceiros2').removeClass('link-menu-interno');
				$('#botao-parceiros, #botao-parceiros2').addClass('link-menu-interno-ativo');
				$('html, body').animate({scrollTop : 0});
					return false;
			});
			
			$('.seta').click(function() {
				$('html, body').animate({scrollTop : 0});
					return false;
			});
			
			
			//FAQ
			$(".p1,.p2,.p3,.p4,.p5,.p6,.p7,.p8,.p9,.p10,.p11,.p12,.p13,.p14,.p15,.p16,.p17,.p18,.p19,.p20,.p21,.p22,.p23,.p24,.p25,.p26,.p27,.p28,.p29,.p30,.p31,.p32,.p33,.p34,.p35,.p36,.p37,.p38,.p39,.p40,.p41,.p42,.p43").hide();
			
			$("div.pergunta").click(function(){
				var pn = $(this).prop("id");
				var cl = '.' + pn;
				
				$("div" +cl).fadeToggle("slow");
			});
});