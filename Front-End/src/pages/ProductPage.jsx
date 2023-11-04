import React, { useState } from 'react';
import { createRequest } from '../APIRequest/APIRequest';
import {useNavigate} from 'react-router-dom'


const ProductPage = () => {
    const [formValue, setFormValue] = useState({
        ProductName: "",
        ProductCode: "",
        Img: "",
        UnitPrice: "",
        Qty: "",
        TotalPrice: ""
    });






    const inputOnChange = (key, value) => {
        setFormValue({
            ...formValue,
            [key]: value
        });
    }

    const navigate = useNavigate();
    const onSubmit = async ()=> {
        let res = await createRequest(formValue);
        navigate('/');
        alert(res)
    }

    return (
        <div>
            <h1>Product Page</h1>

            <input value={formValue.ProductName} onChange={(e) => inputOnChange('ProductName', e.target.value)} placeholder='ProductName' /><br /><br />

            <input value={formValue.ProductCode} onChange={(e) => inputOnChange('ProductCode', e.target.value)} placeholder='ProductCode' /><br /><br />

            <input value={formValue.Img} onChange={(e) => inputOnChange('Img', e.target.value)} placeholder='Img' /><br /><br />

            <input value={formValue.UnitPrice} onChange={(e) => inputOnChange('UnitPrice', e.target.value)} placeholder='UnitPrice' /><br /><br />

            
            <input value={formValue.Qty} onChange={(e) => inputOnChange('Qty', e.target.value)} placeholder='Qty' /><br /><br />

            <input value={formValue.TotalPrice} onChange={(e) => inputOnChange('TotalPrice', e.target.value)} placeholder='TotalPrice' /><br /><br />


            <button onClick={onSubmit}>Submit</button>

        </div>




    );
};

export default ProductPage;
