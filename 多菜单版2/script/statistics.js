$.ajax({
    url: '/admin/statistics/getData',
    type: 'POST',
    success: function(res) {
        if (res.code == 401) {
            goLogin(); return false;
        }
        if (res.code == 200) {
            initData(res.data);
        } else if (res.code == 400) {
            layer.msg(res.message); return false;
        } else {
            layer.msg('操作失败'); return false;
        }
    }
})

function initData(data) {
	$('#count_order').html(data.count.order);
	$('#count_user').html(data.count.user);
	$('#count_product').html(data.count.product);
	$('#count_product_category').html(data.count.product_category);
	// 最新订单
	var str = '';
	if (data.orders.length == 0) {
		str += '<tr><td class="color-red text-center" colspan="7">暂无数据</td></tr>';
	} else {
		for (var i = 0; i < data.orders.length; i++) {
			str += '<tr>';
			str += '<td>'+ parseInt(i + 1) +'</td>';
			str += '<td>'+data.orders[i].number+'</td>';
			str += '<td>¥ '+data.orders[i].total_price+'</td>';
			str += '<td>'+data.orders[i].user_nickname+'</td>';
			str += '<td>'+data.orders[i].payment_name+'</td>';
			str += '<td>'+data.orders[i].status_str+'</td>';
			str += '<td>'+data.orders[i].create_time+'</td>';
			str += '</tr>';
		}
	}
	$('#orders tbody').html(str);

	// 最新产品
	var str = '';
	if (data.products.length == 0) {
		str += '<tr><td class="color-red text-center" colspan="7">暂无数据</td></tr>';
	} else {
		for (var i = 0; i < data.products.length; i++) {
			str += '<tr>';
			str += '<td>'+ parseInt(i + 1) +'</td>';
			if (data.products[i].name.length > 15) {
				str += '<td title="'+data.products[i].name+'">'+data.products[i].name.substring(0, 15)+'...</td>';
			} else {
				str += '<td title="'+data.products[i].name+'">'+data.products[i].name+'</td>';
			}
			str += '<td>'+data.products[i].full_category_name+'</td>';
			str += '<td>'+data.products[i].create_time+'</td>';
			str += '</tr>';
		}
	}
	$('#products tbody').html(str);

	// 新用户
	var str = '';
	if (data.users.length == 0) {
		str += '<tr><td class="color-red text-center" colspan="7">暂无数据</td></tr>';
	} else {
		for (var i = 0; i < data.users.length; i++) {
			str += '<tr>';
			str += '<td>'+ parseInt(i + 1) +'</td>';
			str += '<td>'+data.users[i].nickname+'</td>';
			str += '<td>'+data.users[i].create_time+'</td>';
			str += '</tr>';
		}
	}
	$('#users tbody').html(str);
}