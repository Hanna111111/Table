let data = [
{
	name: 'Kate',
	age:'25'
},
{
	name: 'Mike',
	age:'30'
},
{
	name: 'Antony',
	age:'22'
},
{
	name: 'Yulia',
	age:'31'

},
{
	name: 'Maryna',
	age:'26'
},
{
	name: 'Sergej',
	age:'28'
},
{
	name: 'Kate',
	age:'25'
},
{
	name: 'Mike',
	age:'30'
},
{
	name: 'Antony',
	age:'22'
},
{
	name: 'Yulia',
	age:'31'
	
},
{
	name: 'Maryna',
	age:'26'
},
{
	name: 'Sergej',
	age:'28'
},
{
	name: 'Kate',
	age:'25'
},
{
	name: 'Mike',
	age:'30'
},
{
	name: 'Antony',
	age:'22'
},
{
	name: 'Yulia',
	age:'31'
	
},
{
	name: 'Maryna',
	age:'26'
},
{
	name: 'Sergej',
	age:'28'
},
{
	name: 'Kate',
	age:'25'
},
{
	name: 'Mike',
	age:'30'
},
{
	name: 'Antony',
	age:'22'
},
{
	name: 'Yulia',
	age:'31'
	
},
{
	name: 'Maryna',
	age:'26'
},
{
	name: 'Sergej',
	age:'28'
},
{
	name: 'Kate',
	age:'25'
},
{
	name: 'Mike',
	age:'30'
},
{
	name: 'Antony',
	age:'22'
},
{
	name: 'Yulia',
	age:'31'
	
},
{
	name: 'Maryna',
	age:'26'
},
{
	name: 'Sergej',
	age:'28'
},
{
	name: 'Kate',
	age:'25'
},
{
	name: 'Mike',
	age:'30'
},
{
	name: 'Antony',
	age:'22'
},
{
	name: 'Yulia',
	age:'31'
	
},
{
	name: 'Maryna',
	age:'26'
},
{
	name: 'Sergej',
	age:'28'
},
];

const info= document.querySelector('#info');
let detals  = data.map(function(item){
	return '<div>' + item.name + '' + ' is ' + item.age + ' years old ' +  'that\'s it' + '</div>';
});

info.innerHTML = detals.join('\n');

