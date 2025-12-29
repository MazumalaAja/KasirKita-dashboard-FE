// Hilangkan sidebar...
const toggle = document.querySelector("#toggle");
const sidebar = document.querySelector("aside");
toggle.addEventListener("click" , () => {
     sidebar.classList.toggle("active");
})

// Dashboard...
const dashboardItem = document.querySelector(".dashboard-item"); 
const dataIcon = ['bi-people' , 'bi-boxes' , 'bi-coin' , 'bi-bag'];
const dataTitle = ['Total number of users' , 'Total number of products' , 'Daily sales' , 'Products sold']
const total = ['230' , '1200' , Rupiah(12000000) , '300']

dataIcon.forEach((item,index) => {
     dashboardItem.innerHTML +=  `<div class="card py-3 px-6 rounded-sm shadow-sm bg-white w-full md:max-w-sm space-y-3 border-b-4 border-[var(--main)]">
                    <div class="flex justify-between gap-3 items-center text-gray-500">
                         <i class="bi ${item} m-1 text-xl ring-2 ring-[var(--main)] ring-offset-2 bg-[var(--main)] text-white p-2 px-3 rounded-full"></i>
                         <span class="text-lg lg:text-xl">${dataTitle[index]}</span>
                    </div>
                    <span class="text-[var(--text)] md:text-xl block text-end">${total[index]}</span>
               </div>`
});

// Rupiah...
function Rupiah(data) {
     return new Intl.NumberFormat("id-ID" , {
          style:"currency",
          currency:"IDR",
          minimumFractionDigits:0
     }).format(data)
}

// Tables...
let table = document.querySelector(".table-body")
const dataTable = [
     {id:'00990077' , date:"12/03/2029" , cashier:"Clara" , customer:'andin' , total: Rupiah(120000) , method:'Transfer'},
     {id:'00990011' , date:"12/07/2029" , cashier:"Tarisa" , customer:'zahra' , total: Rupiah(1890000) , method:'Cash'},
     {id:'00990055' , date:"12/08/2029" , cashier:"Rama" , customer:'zahra' , total: Rupiah(10000) , method:"Transfer"},
     {id:'00990078' , date:"12/09/2029" , cashier:"Putri" , customer:'andin' , total: Rupiah(90000) , method:'Cash'},
     {id:'00990074' , date:"12/10/2029" , cashier:"Ayu" , customer:'andin' , total: Rupiah(80000) , method:'Transfer'},
     {id:'00990034' , date:"12/11/2029" , cashier:"Cindy" , customer:'zahra' , total: Rupiah(1200000) , method:'Cash'},
     {id:'00990089' , date:"12/12/2029" , cashier:"Fajar" , customer:'andin' , total: Rupiah(780000), method:'Transfer'},
]

dataTable.forEach((item) => {
     table.innerHTML += ` <tr>
                              <td>${item.id}</td>
                              <td>${item.date}</td>
                              <td class="capitalize">${item.cashier}</td>
                              <td class="capitalize">${item.customer}</td>
                              <td>${item.total}</td>
                              <td>
                              <p class="bg-indigo-300 p-1 w-max rounded-full px-3 text-white">${item.method}</p>
                              </td>
                         </tr>`
})


