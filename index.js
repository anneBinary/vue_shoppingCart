var app = new Vue({
	el: '#app',
	data: {
		list: [
			{
				id: 1,
				name: 'iPhone 7',
				price: 6188,
				count: 1
			},
			{
				id: 2,
				name: 'iPhone 8',
				price: 7188,
				count: 5
			},
			{
				id: 3,
				name: 'iPhone X',
				price: 9188,
				count: 10
			}
		]
	},
	computed: {
		totalprice: function(){
			var total = 0;
			for(var i = 0; i < this.list.length; i++){
				total += this.list[i].price*this.list[i].count;
			}
			// 用正则表达式进行千分位的转换
			total = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
			return total;
		}
	},
	methods: {

	}
})