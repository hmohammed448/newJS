//  HTML to PDF png inside
function convertHTMLtoPDF() {
  const { jsPDF } = window.jspdf;
  const pdfWidth = 210; // A4 width in mm
  const pdfHeight = 297; // A4 height in mm
  let doc = new jsPDF("p", "mm", "a4");
  let pdfjs = document.querySelector("#divID");

  html2canvas(pdfjs, { scale: 2 }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const imgProps = doc.getImageProperties(imgData);
    const pdfCanvasWidth = doc.internal.pageSize.getWidth();
    const pdfCanvasHeight = (imgProps.height * pdfCanvasWidth) / imgProps.width;
    doc.addImage(imgData, "PNG", 0, 0, pdfCanvasWidth, pdfCanvasHeight);
    doc.save("newpdf.pdf");
  });
}

let fName = document.querySelector("#first_name");
let lName = document.querySelector("#last_name");
let companyName = document.querySelector("#company");
let invoiceDate = document.querySelector("#invoiceDate");
let billingAddress = document.querySelector("#billingAddress");
let dueBalance = document.querySelector("#dueBalance");

function submit() {
  // Form Validation
  if (fName.value === "") {
    alert("Please Enter First Name");
    return;
  }
  if (lName.value === "") {
    alert("Please Enter Last Name");
    return;
  }
  if (companyName.value === "") {
    alert("Please Enter Company Name");
    return;
  }
  if (invoiceDate.value === "") {
    alert("Please Select Invoice Date");
    return;
  }
  if (billingAddress.value === "") {
    alert("Please Enter Billing Address");
    return;
  }
  if (dueBalance.value === "") {
    alert("Please Enter Billing Address");
    return;
  }

  document.querySelector("#formDiv").style.display = "none";
  let body = document.querySelector("body");
  let createInvoice = document.createElement("div");
  createInvoice.id = "invoiceDiv";
  createInvoice.innerHTML = `
  <div class="invoiceHeader" id="divID">
        <div class="formDivPart2">
            <table border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff" style="width: 100%;">
                <thead>
                    <tr>
                        <th align="left" rowspan="2" colspan="6">
                            <a href=" #" style="text-decoration: none;">
                                <img src="./header-logo.png" alt="Sell My Home" style="height: 70px; outline: none;">
                            </a>
                        </th>
                        <th colspan="6" style="text-align: right; vertical-align: bottom;">
                            <h4 style="font-size: 1.5rem; font-weight: 700;">Invoice</h4>
                        </th>
                    </tr>
                    <tr>
                        <td colspan="6"
                            style="text-align: right; vertical-align: baseline; font-size: smaller; color: #1D3B5B;">
                            Invoice#
                            ODL-000050</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="12" style="padding-top: 2rem; font-weight: 700;">
                            ${companyName.value}
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color: #fff; " colspan="6">${billingAddress.value}</td>
                        <td style="text-align: right; background-color: #fff; font-weight: 700; " colspan="6">
                            Balance Due</td>
                    </tr>

                    <tr>
                        <td style="background-color: #fff; vertical-align: middle;" colspan="6">
                            VAT 317507118</td>
                        <td style="text-align: right; background-color: #fff; font-size: xx-large; font-weight: 700;"
                            colspan="6">
                            £${dueBalance.value}
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right; background-color: #fff;" colspan="10">
                            Invoice
                            Date :
                        </td>
                        <td style="text-align: right; background-color: #fff;" colspan="2">
                            ${invoiceDate.value}
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right; background-color: #fff;" colspan="10">Terms :</td>
                        <td style="text-align: right; background-color: #fff;" colspan="2">Due on Receipt</td>
                    </tr>
                    <tr>
                        <td style="text-align: right; background-color: #fff;" colspan="10">P.O.# :</td>
                        <td style="text-align: right; background-color: #fff;" colspan="2">AMCO-SHOPIFY</td>
                    </tr>
                    <tr>
                        <td colspan="12">Bill To</td>
                    </tr>
                    <tr>
                        <td style="background-color: #fff; font-weight: 700;" colspan="12">
                            ${fName.value} ${lName.value}</td>
                    </tr>
                    <tr>
                        <td style="background-color: #fff; padding-top: 1rem;" colspan="12">Subject :</td>
                    </tr>
                    <tr>
                        <td style="background-color: #fff; padding-bottom: 1rem;" colspan="12">Advance Invoice -
                            Amco
                            Shopify</td>
                    </tr>
                    <tr style="background-color: #1D3B5B; color: #ffffff; font-weight: 700;">
                        <td colspan="1" style="width: 50px; text-align: center; padding: 10px 5px !important;">#
                        </td>
                        <td colspan="5" style="padding: 10px 5px !important; letter-spacing: 1.5px;">Item</td>
                        <td colspan="1" style="padding: 10px 5px !important; letter-spacing: 1.5px;" align="center">
                            Qty.
                        </td>
                        <td colspan="3" style="padding: 10px 5px !important; letter-spacing: 1.5px;">Price</td>
                        <td colspan="2" style="padding: 10px 5px !important; letter-spacing: 1.5px;">Total</td>
                    </tr>
                    <tr>
                        <td colspan="1" style="width: 50px; text-align: center; padding: 10px 5px !important;">1
                        </td>
                        <td colspan="5" style="padding: 10px 5px !important;">Property Management</td>
                        <td colspan="1" style="padding: 10px 5px !important;" align="center">1</td>
                        <td colspan="3" style="padding: 10px 5px !important;">£0.00</td>
                        <td colspan="2" style="padding: 10px 5px !important;">£0.00</td>
                    </tr>
                    <tr>
                        <td colspan="1" style="width: 50px; text-align: center; padding: 10px 5px !important;">2
                        </td>
                        <td colspan="5" style="padding: 10px 5px !important;">Photos, Floorplan & Virtual Tour</td>
                        <td colspan="1" style="padding: 10px 5px !important;" align="center">1</td>
                        <td colspan="3" style="padding: 10px 5px !important;">£150.00</td>
                        <td colspan="2" style="padding: 10px 5px !important;">£0.00</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="7" style="padding: 10px 5px !important;"></td>
                        <td colspan="3" style="padding: 10px 5px !important;  font-weight: 700;">
                            Subtotal:
                        </td>
                        <td colspan="2" style="padding: 10px 5px !important;">£150.00</td>
                    </tr>

                    <tr>
                        <td colspan="7"></td>
                        <td colspan="3" style="padding: 10px 5px !important;  font-weight: 700;">
                            VAT(20%):
                        </td>
                        <td colspan="2" style="padding: 10px 5px !important;">£30.00</td>
                    </tr>
                    <tr>
                        <td colspan="7"></td>
                        <td colspan="3"
                            style="padding: 10px 10px !important; background-color: #1D3B5B; color: white; font-weight: 700;">
                            Grand Total:</td>
                        <td colspan="2"
                            style="padding: 10px 10px !important; background-color: #1D3B5B; color: white; font-weight: 700; text-align: left;">
                            £180.00</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
    <center><button onclick="convertHTMLtoPDF()">Download</button></center>
  `;
  body.appendChild(createInvoice);
}
