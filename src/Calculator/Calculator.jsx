import './Calculator.css'
import React from "react";
// import { useState } from "react";
import { Fragment } from "react";
const Calculator =()=>{
    return<>
    <Fragment>
        <div>
        <div className="section-title">
        <h3>Calculator</h3><button className="reset-button">Reset</button>
        </div>
        <p className='title-text'><span>* This calculator provides return estimates based on the formula for the  Physical
            Digits system. Actual returns may vary based on the number of F-NFTs sold for this assets</span></p>
     </div>
<div className="calculator-section">
    <div className='calculator-element' style={{    }}>
        <span>Assets Value:</span><input type='text' />
    </div>
    <div className='calculator-element'>
        <span>Assets Value:</span><input type='text' />
    </div>
    <div className='calculator-element'>
        <span>Assets Value:</span><input type='text' />
    </div>
    <div className='calculator-element'>
        <span>Assets Value:</span><input type='text' />
    </div>
    <div className='calculator-element'>
        <span>Assets Value:</span><input type='text' />
    </div>
    <div className='calculator-element'>
        <span>Assets Value:</span><input type='text' />
    </div>
    <div className='calculator-element'>
        <span>Assets Value:</span><input type='text' />
    </div>
    <div className='calculator-element calculate'>
        <input type='submit' value={"Calculate"} />
    </div>
</div>

<div>
    <h3 className="assets-title">ROI for Asset Owner</h3>
    <div className="assets">
        <ul>
            <li><p>From F-NFT Sale</p><p className='result'>$sample</p></li>
        </ul>
        <ul>
            <li><p>From F-NFT Sale</p><p className='result'>$sample</p></li>
        </ul>
        <ul>
            <li><p>From F-NFT Sale</p><p className='result'>$sample</p></li>
        </ul>
        <ul>
            <li><p>From F-NFT Sale</p><p className='result'>$sample</p></li>
        </ul>
        <ul>
            <li><p>From F-NFT Sale</p><p className='result'>$sample</p></li>
        </ul>
        <ul>
            <li><p>From F-NFT Sale</p><p className='result'>$sample</p></li>
        </ul>
    </div>
</div>


    </Fragment>
    </>
}

export default Calculator;