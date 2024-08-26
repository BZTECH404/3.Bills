import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


const VivekBholeArc = () => {
    const dispatch = useDispatch();
    const performa = useSelector((state) => state.performa);

    const invoiceRef = useRef(null);

    const downloadInvoice = () => {
        const invoiceElement = invoiceRef.current;

        html2canvas(invoiceElement, {
            scale: 2, // Increase scale for higher resolution
            useCORS: true, // Handle cross-origin images properly
            allowTaint: true, // Allows cross-origin images to be loaded
            logging: true // Optional, to see the process in the console
        }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const width = pdf.internal.pageSize.getWidth();
            const height = pdf.internal.pageSize.getHeight();

            pdf.addImage(imgData, 'PNG', 0, 0, width, height);
            pdf.save('VivekBholeArtitect_invoice.pdf');
        }).catch((error) => {
            console.error('Error generating PDF: ', error);
        });
    };

    const amtRs = Number(performa.amtRs);
    const cgst = amtRs * 0.09;
    const sgst = amtRs * 0.09;
    const totalAmt = amtRs + cgst + sgst;

    return (
        <div>
            {/* Header Section */}
            <div
                ref={invoiceRef}
                style={{
                    fontFamily: 'Arial, sans-serif',
                    width: '210mm', // A4 width
                    minHeight: '297mm', // A4 height
                    margin: 'auto',
                    border: '1px solid black',
                    padding: '10mm',
                    boxSizing: 'border-box',
                    backgroundImage: 'url(https://res.cloudinary.com/dlwot6rlr/image/upload/v1724235276/Frame_25_hqmfar.jpg)', // Background image
                    backgroundSize: 'cover', // Ensure the image covers the entire area
                    backgroundPosition: 'center', // Center the background image
                    backgroundRepeat: 'no-repeat', // Prevent repeating the background image
                }}
            >
                <div
                    style={{
                        textAlign: 'center',
                        marginBottom: '0px',
                        padding: '10px',
                        backgroundColor: '#fff',
                        color: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        opacity: 1 // Optional: Add slight opacity to make text more readable
                    }}
                >
                    {/* Image */}
                    <img
                        src="https://res.cloudinary.com/dlwot6rlr/image/upload/v1724313158/artitect_wvqxiq.png" // Replace with the actual URL or local path
                        alt="Company Logo"
                        style={{
                            width: '195mm', // Adjust the width as needed
                            marginBottom: '0px'
                        }}
                    />

                    {/* Text */}
                </div>

                <div style={{ textAlign: 'center', marginBottom: '0', border: '1px solid black', padding: '0px' }}>
                    <h1>{performa.BillType}</h1>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0' }}>
                    <div style={{ width: '75%', border: '1px solid black', padding: '10px' }}>
                        <p>
                            <strong>Company Name :</strong> {performa.companyName}
                        </p>
                        <p>
                            <strong>Company Pan No. :</strong> {performa.companyPanNo}
                        </p>
                        <p>
                            <strong>State :</strong> {performa.state}
                        </p>
                        <p>
                            <strong>Invoice No. :</strong> {performa.invoiceNo}
                        </p>
                    </div>
                    <div style={{ width: '38.5%', border: '1px solid black', padding: '10px' }}>
                        <p>
                            <strong>GSTIN :</strong> {performa.gstin}
                        </p>
                        <p>
                            <strong>State Code :</strong> {performa.stateCode}
                        </p>
                        <p>
                            <strong>Invoice Date :</strong> {performa.invoiceDate}
                        </p>
                    </div>
                </div>
                <div style={{ marginBottom: '0', padding: '10px', border: '1px solid black' }}>
                    <p>
                        <strong>Receiver Name :</strong> {performa.receiverName}
                    </p>
                    <p>
                        <strong>Address :</strong> {performa.receiverAddress}
                    </p>
                    <p>
                        <strong>GSTIN :</strong> {performa.receiverGstin}
                    </p>
                    <p>
                        <strong>State :</strong> {performa.receiverState}
                    </p>
                    <p>
                        <strong>Project No. :</strong> {performa.projectNo}
                    </p>
                    <p>
                        <strong>Project Reference No. :</strong> {performa.projectReferenceNo}
                    </p>
                    <p>
                        <strong>Work Order No. :</strong> {performa.workOrderNo}
                    </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0' }}>
                    <div style={{ width: '75%', border: '1px solid black', padding: '10px' }}>
                        <p>
                            <strong>SAC Code :</strong> {performa.sac_code}
                        </p>
                        <p>
                            <strong>Particulars :</strong> {performa.particulars}
                        </p>
                    </div>
                    <div style={{ width: '38.5%', border: '1px solid black', padding: '10px' }}>
                        <p>
                            <strong>AMT. (Rs)</strong> {performa.amtRs.toLocaleString()}
                        </p>
                        <p style={{ fontSize: '12px', marginTop: '100px' }}>
                            <strong>CGST @9% :</strong> {cgst.toLocaleString()}
                        </p>
                        <p style={{ fontSize: '12px' }}>
                            <strong>SGST @9% :</strong> {sgst.toLocaleString()}
                        </p>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0' }}>
                    <div style={{ width: '75%', border: '1px solid black', padding: '10px' }}>
                        <p>
                            <strong>In Words :</strong> {performa.amtWords}
                        </p>
                    </div>
                    <div style={{ width: '38.5%', border: '1px solid black', padding: '10px' }}>
                        <p>
                            <strong>Total AMT. (Rs):</strong> {totalAmt.toLocaleString()}
                        </p>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0' }}>
                    <div style={{ width: '75%', border: '1px solid black', padding: '10px' }}>
                        <p>
                            <strong> Bank Details :</strong> Axis Bank
                        </p>
                        <p>
                            <strong> A/c Name :</strong> Vivek Bhole Architect Pvt. Ltd
                        </p>
                        <p>
                            <strong> A/C No. :</strong> 919020012575070
                        </p>
                        <p>
                            <strong>IFSC CODE :</strong> UTIB0000395
                        </p>
                    </div>
                    <div style={{ width: '45%', border: '1px solid black', padding: '10px', height: '220px' }}>
                        <img
                            src="https://res.cloudinary.com/dlwot6rlr/image/upload/c_thumb,w_200,g_face/v1724310985/Screenshot_2024-08-22_124355_xmu3ef.png" // Replace with the actual URL or local path
                            alt="Company Logo"
                            style={{
                                borderRadius: '50%',
                                marginTop: '0px',
                                width: '160px', // Increased the width
                                height: '130px', // Maintains the aspect ratio
                                display: 'block',
                                margin: '0 auto' // Centers the image horizontally
                            }}
                        />
                        <p style={{ marginTop: '40px', textAlign: 'center' }}>
                            <strong>Common Seal</strong>
                        </p>
                    </div>
                    <div style={{ width: '65%', border: '1px solid black', padding: '10px', textAlign: 'center' }}>
                        <p>
                            <strong>For Vivek Bhole Architect Pvt. Ltd</strong>
                        </p>
                        <img
                            src="https://res.cloudinary.com/dlwot6rlr/image/upload/c_thumb,w_200,g_face/v1724228826/bhau-removebg-preview_fwuvmc.png" // Replace with the actual URL or local path
                            alt="Company Logo"
                            style={{
                                width: '160px', // Adjust the width as needed
                                display: 'block',
                                margin: '0 auto' // Centers the image horizontally
                            }}
                        />
                        <p style={{ marginTop: '15px' }}>
                            <strong>(Authorised Signatory)</strong>
                        </p>
                    </div>


                </div>

            </div>
            <button style={{ marginTop: '10px', height: '40px', width: '100%' }} onClick={downloadInvoice}>Download PDF</button>
        </div>
    );
};

export default VivekBholeArc;
