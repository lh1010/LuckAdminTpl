$(document).ready(function() {
	sidebarInit();
	bootstrapConfig();
	switchTabs();
	fileManager();
})

function sidebarInit() {
	$('#sidebar .items-title').bind('click', function() {
		$(this).next().slideToggle();
	})

	$('#sidebar .item, #sidebar .items-onepage').bind('click', function() {
		$('#sidebar .item, #sidebar .items-onepage').removeClass('on');
		$(this).addClass('on');
	})

	$('#main .mini-button').click(function() {
		if ($('#sidebar').hasClass('mini')) {
			$('#sidebar').removeClass('mini');
			$('#main').removeClass('mini');
		} else {
			$('#sidebar').addClass('mini');
			$('#main').addClass('mini');
			$('#sidebar .items-list').css('display', 'none');
		}
	})
}

/**
 * 头部tabs切换
 * 使用方法：选择使用 data-id="#general" data-id="#seo" 
 * 对应视图模块 <div id="gengal"> <div id="seo"> 
 * 默认显示一个视图模块，其余隐藏
 */
function switchTabs() {
	$(".tab-box").eq(0).show();
	$("#tabs li a").click(function() {
		$("#tabs li a").removeClass('active');
		$(this).addClass('active');
	  $(".tab-box").hide();
	  $($(this).attr('data-id')).show();
	})
}

/**
 * Bootstrap Config 
 */
function bootstrapConfig() {
	// Tooltips
	if ($('[data-bs-toggle="tooltip"]').length > 0) {
		var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
		var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		  return new bootstrap.Tooltip(tooltipTriggerEl)
		})
	}
}

function goTop() {
	$('html, body').animate({scrollTop: 0}, 'slow');
}

function logout_admin() {
	layer.confirm('确认退出？', function() {
		layer.closeAll();
		layer.msg('已安全退出...', {time: 1000}, function() {
			window.location.href = 'login.html';
			return false;
		});
	})
}

function jump(url = '') {
	window.location.href = url;
}

function goLogin() {
	layer.msg('请先登录', {time: 1500}, function() {window.location.href = '';})
}

function layerOpen(url = '', title = '信息', width = '90%', height = '90%') {
	layer.open({
	  	type: 2, 
	  	title: title,
	  	area: [width, height],
	  	maxmin: true,
	  	content: url,
	});
}

// 表格全选/取消全选
if ($('.table tr input:checkbox').length > 0) {
	checkAll();

	$('.table tr input:checkbox').eq(0).click(function() {
		if ($(this).prop('checked') == true) {
			$('.table tr input:checkbox').prop('checked', true);
		} else {
			$('.table tr input:checkbox').prop('checked', false);
		}
	})

	$('.table tr input:checkbox').click(function() {
		checkAll();
	})

	function checkAll()
	{
		var ident = 1;
		$('.table tr input:checkbox').each(function(i) {
			if (i > 0) {
				if ($(this).prop('checked') == false) ident = 0;
			}
		})
		if (ident == 1) {
			$('.table tr input:checkbox').eq(0).prop('checked', true);
		} else {
			$('.table tr input:checkbox').eq(0).prop('checked', false);
		}
	}
}

/**
 * 检测数组中是否存在某个字符串
 * @param string search 
 * @param array array
 * @return boolean
 */
function in_array(search, array) {
	for (var i in array) {
		if (array[i] == search) {
			return true;
		}
	}
	return false;
}

// 图片空间
function fileManager() {
	$('body').on('click', '.fmr_remove', function(){
		$(this).parent('.fmr').removeClass('uploaded');
	    $(this).parent('.fmr').html('');
		return false;
	})

	$('body').on('click', '.fmr', function() {
		$('.fmr_current_ident').removeClass('fmr_current_ident');
		$(this).addClass('fmr_current_ident');
		layer.open({
			type: 2,
			title: '图片空间',
			area: ['827px', '485px'],
			content: ['image.html', 'no'],
		});
	})
}

