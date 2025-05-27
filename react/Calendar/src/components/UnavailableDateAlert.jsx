import { RxCross2 } from "react-icons/rx";
import { TbCalendarDollar } from "react-icons/tb";
import { LuCalendarClock } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";
import "./UnavailableDateAlert.css";

function UnavailableDateAlert() {
  return (
    <div className="alert-container">
      <button className="alert-close-btn" >
      <RxCross2 size={25}/>
      </button>

      <div className="alert-content">
        <h2 className="alert-title">
          <span>⚠️</span> Unavailable Dates Alert
        </h2>
        <p className="alert-message">The selected position is not available on the following dates:</p>
        <p className="alert-dates">12 May, 14 May, 18 May 2025</p>
        <p className="alert-message">Please choose an alternative option to continue your booking.</p>
      </div>

      <div className="alert-divider" />

      <div className="alert-options">
       
          <button  className="alert-option">
           <IoCalendarOutline size={50}/>
            <span>Extend Missing Days</span>
          </button>
             <button  className="alert-option">
          <LuCalendarClock size={50}/>
            <span>Switch Position (Same Day)</span>
          </button>
             <button  className="alert-option">
           <TbCalendarDollar  size={50}/>
            <span>Book Available Days</span>
          </button>
        
      </div>
   <div className="alert-divider" />
      <div className="alert-notes">
        <p className="alert-note-title">Note:</p>
        <ol className="alert-note-list">
          <li>You can extend the missing days to future available dates.</li>
          <li>No extra payment is required.</li>
          <li>Rescheduling will apply only for the same position.</li>
        </ol>
        <p className="alert-example">
          <strong>Example:</strong> If 3 days are unavailable in the current month, those 3 days will be adjusted in the next available month.
        </p>
      </div>

      <div className="alert-actions">
        <button className="alert-btn alert-btn-cancel">Cancel</button>
        <button className="alert-btn alert-btn-confirm">Confirm</button>
      </div>
    </div>
  );
}

export default UnavailableDateAlert;
