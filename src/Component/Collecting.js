import React, { useState } from 'react';
import Performa from './Performa/Performa';
import ProformaInvoice from './Bill/Performabill';
import VivekProformaInvoice from './Bill/VivekPerfoma';
import BzTech from './Bill/BzTech';
import BzCounsaltant from './Bill/BzCounsaltant';
import VivekBholeArc from './Bill/VivekBholeArc';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

function Collecting() {
    const [selectedInvoice, setSelectedInvoice] = useState('ProformaInvoice');
    const navigate = useNavigate();

    const handleSelectChange = (event) => {
        setSelectedInvoice(event.target.value);
    };

    const handleLogout = () => {
        localStorage.clear(); // Clear all data in local storage
        navigate('/'); // Redirect to login page
    };

    return (
        <div>
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <select 
                    onChange={handleSelectChange} 
                    value={selectedInvoice}
                    style={{ fontSize: '20px', padding: '10px' }}
                >
                    <option value="NeoMorden">Neo Modern</option>
                    <option value="VivekBholeConsultant">Vivek Bhole Consultant</option>
                    <option value="BzCounsaltant">Bz Counsaltant</option>
                    <option value="Bztech">Bz tech</option>
                    <option value="VivekBholeArc">Vivek Bhole Arc</option>
                </select>
            </div>
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <button 
                    onClick={handleLogout}
                    style={{ fontSize: '16px', padding: '10px 20px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }}
                >
                    Logout
                </button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ marginRight: '20px' }}>
                    <Performa />
                </div>
                <div style={{ flex: 1 }}>
                    {selectedInvoice === 'NeoMorden' && <ProformaInvoice />}
                    {selectedInvoice === 'VivekBholeConsultant' && <VivekProformaInvoice />}
                    {selectedInvoice === 'BzCounsaltant' && <BzCounsaltant />}
                    {selectedInvoice === 'Bztech' && <BzTech />}
                    {selectedInvoice === 'VivekBholeArc' && <VivekBholeArc />}
                </div>
            </div>
        </div>
    );
}

export default Collecting;
