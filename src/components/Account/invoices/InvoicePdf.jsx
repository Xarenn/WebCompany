import jsPDF from 'jspdf'
import {autoTable} from 'jspdf-autotable';

export function createPdf(json) {
    var pdf = new jsPDF('p', 'pt', 'a4');
    pdf.setFontSize(20);
    pdf.text("FAKTURA VAT" + json.id, 200, 50)
    pdf.setFontSize(10);
    createHeaderPdf(pdf,json);
    createTable(pdf,json);
    pdf.save("fakturaVat-"+json.id);
}

function createHeaderPdf(doc, json) {
    let value = ""+json.value;
    doc.text(value,50,100);
    doc.text(json.phoneNumber,400,110);
    doc.text(json.sellerAddress,400,120);
    doc.text(json.seller,400,130);
    doc.text(json.sellerNIP,400,140);
    doc.text(json.buyer,50,100);
    doc.text(json.buyerAddress,50,110);
    doc.text(json.buyerNIP,50,120);
}

function createTable(doc, json) {
    var columns = [
    {title: "nr", dataKey: "idInvoice"},
    {title: "name", dataKey: "name"}, {title: "amount", dataKey:"amount"},
    {title: "price Netto", dataKey: "priceNet"}, {title: "vat", dataKey: "vat"},
    {title: "vat amount", dataKey:"vatAmount"}, {title:"price brutto", dataKey:"priceBrutto"}
    ];
    let data = [];
    json.items.map(item => data.push(item));
    doc.autoTable(columns,data, {
        margin: {top:500}
      });
}