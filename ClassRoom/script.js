

// Drag and drop students

document.addEventListener('DOMContentLoaded', (event) => {

    function handleDragStart(e) {
        this.style.opacity = '0.4';
        dragSrcEl = this;

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }

    function handleDragEnd(e) {
        this.style.opacity = '1';
        items.forEach(function (item) {
            item.classList.remove('over');
        });
    }

    function handleDragOver(e) {
        e.preventDefault();
        return false;
    }

    function handleDragEnter(e) {
        this.classList.add('over');
    }

    function handleDragLeave(e) {
        this.classList.remove('over');
    }

    function handleDrop(e) {
        e.stopPropagation(); // stops the browser from redirecting.
        if (dragSrcEl !== this) {
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
        }
        return false;
    }


    let items = document.querySelectorAll('.container .box');
    items.forEach(function (item) {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('dragenter', handleDragEnter);
        item.addEventListener('dragleave', handleDragLeave);
        item.addEventListener('dragend', handleDragEnd);
        item.addEventListener('drop', handleDrop);
    });

});

// Import student list from Excel
import * as XLSX from "xlsx";

function handleFile(e) {
    var workbook = XLSX.readFile(studentlist.xlsx);

    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        var data = e.target.result;
        /* reader.readAsArrayBuffer(file) -> data will be an ArrayBuffer */
        var workbook = XLSX.read(e.target.result);

        /* DO SOMETHING WITH workbook HERE */
        if (!("TextDecoder" in window))
            alert("Sorry, this browser does not support TextDecoder...");

        var enc = new TextDecoder("utf-8");
        console.log(enc.decode(workbook));
    };
    reader.readAsArrayBuffer(file);
}

input_dom_element.addEventListener("change", handleFile, false);
