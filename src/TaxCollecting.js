import React, { useState } from 'react';
import Tax from './Component/TaxInvoice/Tax';
import TaxInvoice from './Component/Bill/TaxBill';
import VivekTaxInvoice from './Component/Bill/VivekTaxBill';

function TaxCollecting() {
    const [selectedInvoice, setSelectedInvoice] = useState('ProformaInvoice');

    const handleSelectChange = (event) => {
        setSelectedInvoice(event.target.value);
    };

    return (
        <div>
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <select 
                    onChange={handleSelectChange} 
                    value={selectedInvoice}
                    style={{ fontSize: '20px', padding: '10px' }}
                >
                    <option value="ProformaInvoice">Neo Modern</option>
                    <option value="VivekProformaInvoice">Vivek Bhole Proforma</option>
                </select>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ marginRight: '20px' }}>
                    <Tax />
                </div>
                <div style={{ flex: 1 }}>
                    {selectedInvoice === 'ProformaInvoice' && <TaxInvoice />}
                    {selectedInvoice === 'VivekProformaInvoice' && <VivekTaxInvoice />}
                </div>
            </div>
        </div>
    );
}

export default TaxCollecting;
