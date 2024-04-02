var data = [
    {
        id : 1,
        name : "Căn hộ Deluxe",
        price : 500000,
        image:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/429369419.jpg?k=c8a5f9eb7af328bc701781a3d8a7358fe19ae3376bd7496622aa6a89620df73f&o=",
        rate :5.0,
        description:
        "Tọa lạc ở Đà Nẵng, cách Bãi biển Mỹ Khê 7 phút đi bộ và Bãi biển Bắc Mỹ An 1.2 km, Lagom Boutique Hotel Da Nang cung cấp chỗ nghỉ có Wi-Fi miễn phí, điều hòa, khu vườn và phòng chờ chung. Khách sạn căn hộ có ban công nơi khách có thể nhìn ra thành phố, khu vực ghế ngồi, TV màn hình phẳng, bếp đầy đủ tiện nghi gồm tủ lạnh và lò vi sóng, cùng phòng tắm riêng được trang bị vòi xịt, chậu rửa vệ sinh và đồ vệ sinh cá nhân miễn phí. Minibar và bếp, cũng như ấm đun nước đều được cung cấp.Khách có thể sử dụng sân hiên tại Lagom Boutique Hotel Da Nang. Chỗ nghỉ cách Cầu khóa Tình yêu Đà Nẵng 2.8 km và Bảo tàng điêu khắc Chăm 3.5 km. Sân bay gần nhất là Sân bay Quốc tế Đà Nẵng, cách Lagom Boutique Hotel Da Nang 6 km, đồng thời chỗ nghỉ này cũng cung cấp dịch vụ đưa đón sân bay mất phí. Các cặp đôi đặc biệt thích địa điểm này — họ cho điểm 9,7 cho kỳ nghỉ dành cho 2 người.",
  
    },
    {
        id : 2,
        name : "Studio Superior",
        price : 249000,
        image:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/429369908.jpg?k=bfb884c0dd7e781f7546c34cab5ea7d9b81c8f61942b1c863880fce0bbd89949&o=",
        rate :4.5,
        description:
        "Tọa lạc ở Đà Nẵng, cách Bãi biển Mỹ Khê 7 phút đi bộ và Bãi biển Bắc Mỹ An 1.2 km, Lagom Boutique Hotel Da Nang cung cấp chỗ nghỉ có Wi-Fi miễn phí, điều hòa, khu vườn và phòng chờ chung. Khách sạn căn hộ có ban công nơi khách có thể nhìn ra thành phố, khu vực ghế ngồi, TV màn hình phẳng, bếp đầy đủ tiện nghi gồm tủ lạnh và lò vi sóng, cùng phòng tắm riêng được trang bị vòi xịt, chậu rửa vệ sinh và đồ vệ sinh cá nhân miễn phí. Minibar và bếp, cũng như ấm đun nước đều được cung cấp.Khách có thể sử dụng sân hiên tại Lagom Boutique Hotel Da Nang. Chỗ nghỉ cách Cầu khóa Tình yêu Đà Nẵng 2.8 km và Bảo tàng điêu khắc Chăm 3.5 km. Sân bay gần nhất là Sân bay Quốc tế Đà Nẵng, cách Lagom Boutique Hotel Da Nang 6 km, đồng thời chỗ nghỉ này cũng cung cấp dịch vụ đưa đón sân bay mất phí. Các cặp đôi đặc biệt thích địa điểm này — họ cho điểm 9,7 cho kỳ nghỉ dành cho 2 người.",
  
    },
    {
        id : 3,
        name : "Căn Hộ 2 Phòng Ngủ",
        price : 700000,
        image:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/429371105.jpg?k=c66228e9a996618c8a0bdcb01bb0df3c8bb8b03445c9b2b1cffc66185101cac4&o=",
        rate : 5.0,
        description:
        "Tọa lạc ở Đà Nẵng, cách Bãi biển Mỹ Khê 7 phút đi bộ và Bãi biển Bắc Mỹ An 1.2 km, Lagom Boutique Hotel Da Nang cung cấp chỗ nghỉ có Wi-Fi miễn phí, điều hòa, khu vườn và phòng chờ chung. Khách sạn căn hộ có ban công nơi khách có thể nhìn ra thành phố, khu vực ghế ngồi, TV màn hình phẳng, bếp đầy đủ tiện nghi gồm tủ lạnh và lò vi sóng, cùng phòng tắm riêng được trang bị vòi xịt, chậu rửa vệ sinh và đồ vệ sinh cá nhân miễn phí. Minibar và bếp, cũng như ấm đun nước đều được cung cấp.Khách có thể sử dụng sân hiên tại Lagom Boutique Hotel Da Nang. Chỗ nghỉ cách Cầu khóa Tình yêu Đà Nẵng 2.8 km và Bảo tàng điêu khắc Chăm 3.5 km. Sân bay gần nhất là Sân bay Quốc tế Đà Nẵng, cách Lagom Boutique Hotel Da Nang 6 km, đồng thời chỗ nghỉ này cũng cung cấp dịch vụ đưa đón sân bay mất phí. Các cặp đôi đặc biệt thích địa điểm này — họ cho điểm 9,7 cho kỳ nghỉ dành cho 2 người.",
  
    },
]
function savelocalstorage() {
  localStorage.setItem('data', JSON.stringify(data));
}

function LoadlocalStorage() {
  var dataStr = localStorage.getItem('data');
  if (dataStr) {
      data = JSON.parse(dataStr);
  }
}

LoadlocalStorage();

function show(){
    var demo='';
    var d = 0;
    for(let i = 0; i<data.length;i++){
      d++;
        demo += "<tr>";
        demo += "<td>"+(d)+"</td>"
        demo += "<td>"+data[i].name+"</td>"
        demo += "<td>"+data[i].price+"</td>"
        demo +=  "<td ><img onclick=showDescription(" +
        i +
        ") src=" +
        data[i].image +
        " style=height:100px;width:100px></td>";
        demo += "<td>"+data[i].rate+"<i class='fa fa-star'></i></td>"
        demo += "<td><input type='button' value='Sửa' onclick='editroom(" +
        i +
        ")' /></td>";
        demo += "<td><input type='button' value='Xóa' onclick='deleteroom(" +
        i +
        ")' /></td>";
        demo +="</tr>";
        console.log(demo);
        document.getElementById("tbl").innerHTML = demo;
    }
    
    
}
function create(){
    var a = { 
      name :document.getElementById("name").value,
      price :document.getElementById("price").value,
      image:document.getElementById("image").value,
      rate:document.getElementById("rate").value,
    }

    data.push(a);
    savelocalstorage();
    console.log(a)
    console.log(data)

      document.getElementById("id").value = "";
      document.getElementById("name").value = "";
      document.getElementById("price").value = "";
      document.getElementById("image").value = "";
      document.getElementById("rate").value = "";
}

function editroom(index) {

  document.getElementById("editForm").style.display = "block";


    document.getElementById("editid").value = index;
    document.getElementById("editname").value = data[index].name;
    document.getElementById("editprice").value = data[index].price;
    document.getElementById("editimage").value = data[index].image;
    document.getElementById("editrate").value =data[index].rate;

  }

  function closeEditForm() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("editForm").style.display = "none";
    document.getElementById("showdescription").style.display = "none";
  }
  


  function updateroom() {
    var indexupdate = parseInt(document.getElementById("editid").value);
    var newname = document.getElementById("editname").value;
    var newprice = document.getElementById("editprice").value;
    var newimage = document.getElementById("editimage").value;
    var newrate = document.getElementById("editrate").value;
        data[indexupdate].name = newname;
        data[indexupdate].price = newprice;
        data[indexupdate].image = newimage;
        data[indexupdate].rate = newrate;

    document.getElementById("editForm").style.display = "none";
    console.log(data);
    show(data);
  }
  function searchroom() {
    var searchKeyword = document
      .getElementById("searchInput")
      .value.toLowerCase();
    var rows = document.querySelectorAll("#tbl tr");
    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      var name = row.cells[1].innerText.toLowerCase();
  
      if (name.includes(searchKeyword)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    }
  }

function deleteroom(index) {
    data.splice(index, 1);
    show(data);
  }

  function showDescription(index) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("showdescription").style.display = "block";
    console.log(index);
    var name = document.getElementById("name");
    var description = document.getElementById("description");
    name.innerText = data[index].name;
    description.innerText = data[index].description;
    document.getElementById("showdescription").style.display = "block";
  }


