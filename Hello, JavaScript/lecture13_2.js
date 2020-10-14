var obj = {
    name:"object",
    weight:30,
    isObject:true,
    arr:[1,2,3],
    obj: {property:1}
};

console.log("for문으로 object property 반복하기");

var property_list = Object.keys(obj);
console.log("Property List : ", property_list);

for(var i = 0; i < property_list.length; i++)
{
    var propertyName = property_list[i];
    console.log("\t", propertyName, ": ", obj[propertyName]);
}

console.log("\n\nfor in문으로 object property 반복하기");

for(var propertyName in obj)
{
    console.log("\t", propertyName, ": ", obj[propertyName]);
}

// in 연산자는 객체에 속성이 있으면 true, 없으면 false 반환