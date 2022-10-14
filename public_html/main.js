/* 
Author: Mohamed
Project: Radioactive Decay Calculator

Purpose:
Here are codes that will be used in the HTML code section

 */

// Getting the modal element:
var modal = document.getElementById('nuclide-modal');

// Getting the modal button:
var modalopn = document.getElementById('modal-open');

// Getting the close button:
var modalcld = document.getElementsByClassName('modalclose')[0];

// Listen for the open click on button:
modalopn.addEventListener('click', OpenNuclideModal);

// Listen for the close click on button:
modalcld.addEventListener('click', CloseNuclideModal);



////// Functions:
// Opening modal:
function OpenNuclideModal()
{
    modal.style.display = 'block';
};

// Closing modal:
function CloseNuclideModal()
{
    modal.style.display = 'none';
};

// Inputing data into the table:
function importdata()
{
    var nucname = document.getElementById('nucname').value;
    var halflife = document.getElementById('halflife').value;
    var activity = document.getElementById('activity').value;
    
    // Checking whether the input is empty or not and if Half-Life and Activity are numbers:
    if (!nucname || !activity || !halflife || isNaN(halflife) || isNaN(activity))
    {
        alert("Please fill the necessary information");
        return;
    } 

    var table = document.getElementById('table'),
            NewRow = table.insertRow(table.length),
            cell1 = NewRow.insertCell(0),
            cell2 = NewRow.insertCell(1),
            cell3 = NewRow.insertCell(2),
            cell4 = NewRow.insertCell(3),
            cell5 = NewRow.insertCell(4),
            cell6 = NewRow.insertCell(5),
            cell7 = NewRow.insertCell(6),
            cell8 = NewRow.insertCell(7),
            nucname = document.getElementById('nucname').value,
            halflife = document.getElementById('halflife').value,
            activity = document.getElementById('activity').value;
              
    cell1.innerHTML = nucname;
    cell2.innerHTML = halflife;
    cell3.innerHTML = activity;
    cell4.innerHTML = (activity * Math.pow(0.5, (1 / halflife))).toFixed(3);
    cell5.innerHTML = (activity * Math.pow(0.5, (10 / halflife))).toFixed(3);
    cell6.innerHTML = (activity * Math.pow(0.5, (100 / halflife))).toFixed(3);
    cell7.innerHTML = (activity * Math.pow(0.5, (1000 / halflife))).toFixed(3);
    cell8.innerHTML = Math.round((((Math.log(1/activity)) * halflife) / Math.log(0.5)));
    total_activity_days()
    emptymodal();
    modal.style.display = 'none';
}

// Emptying the placeholder values:
function emptymodal()
{
    var emptymod1 = document.getElementById('nucname');
    var emptymod2 = document.getElementById('halflife');
    var emptymod3 = document.getElementById('activity');
    
    emptymod1.value = '';
    emptymod2.value = '';
    emptymod3.value = '';
}

// Getting the total activity to decay:
function total_activity_days()
{
    var table = document.getElementById('table');
    let total_act = 0
    
    for(let j = 1; j < table.rows.length; j++)
    {
        total_act += Number(table.rows[j].cells[7].innerText);
    }
    
    const total_days = document.getElementById('totalact');
    total_days.value = total_act;
}
