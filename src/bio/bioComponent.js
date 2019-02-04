import React, { Component } from 'react';
import './bioComponent.css'
import locationSVG from '../static/location.svg';
import calendar from '../static/calendar.svg';


class BioComponent extends Component {
    render() {
        return <div>
            <h3>Vikash</h3>
            <h4 className='Twitter-username'>@I_M_Zarathustra</h4>
            <p>A Teacher and A Full stack developer on a mission to improve the world for all humans.
                 Productive collaborator in great teams utilizing hard skills to make awesome products
                 and software services.
            </p>
            <img className='Location-symbol' src={locationSVG} alt='location symbol'></img> <div className='Location'>Earth</div>
            <div class='DOB-section'>
                <img className='Calendar-symbol' src={calendar} alt='Calendar symbol'></img> <div className='Location'>Officialy Joined Human Race on 3rd August 1992.</div>
            </div>
        </div>
    }
}

export default BioComponent;
