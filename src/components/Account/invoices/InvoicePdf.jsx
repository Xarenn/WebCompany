import jsPDF from 'jspdf'
import {autoTable} from 'jspdf-autotable';

export function createPdf(json) {
    var pdf = new jsPDF('p', 'pt', 'a4');
    pdf.setFontSize(20);
    pdf.text("FAKTURA VAT " + json.id, 200, 50)
    pdf.setFontSize(10);
    createHeaderPdf(pdf,json);
    createTable(pdf,json);
    pdf.save("faktura Vat-"+json.id);
}

function createHeaderPdf(doc, json) {
    doc.text("Kontakt: " + json.phoneNumber,400,210);
    doc.text("Adres: " + json.sellerAddress,400,220);
    doc.text("Sprzedajacy: " + json.seller,400,230);
    doc.text("NIP: " + json.sellerNIP,400,240);
    doc.text("Kupujacy: " + json.buyer,50,200);
    doc.text("Adres: " + json.buyerAddress,50,210);
    doc.text("NIP: " + json.buyerNIP,50,220);
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
        margin: {top:300}
      });
}