import React, {useState} from 'react';
import './SideNav.css';
import document from '../../images/documents.jpg';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function UploadDoument(props){

    const [date, setDate] = useState(new Date());

    return (
        <div>
        <div id="mySidenav" class="sidenav">
            <a href="#">ViewDocuments</a>
            <a href="#">UploadDocuments</a>
        </div>
        
        <div id="main" className=" main card col-12 col-lg-4 login-card mt-2 hv-center" >
        <div>
            <img src={document} alt="Logo" class="documentImage" />
        </div>
        <div>
            <form class="documentForm"> 
                <p className="text-left">Document Number </p>
                <div className="form-group text-left">                
                <input type="text" 
                       required
                       className="form-control text-left" 
                       id="documentNumber" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter document number"
                />
                </div>
                <div className="form-group text-left">
                    <p >Supplier Name</p>
                    <input type="text" 
                        required
                        className="form-control text-left" 
                        id="supplierNumber" 
                        placeholder="Enter supplier number"
                    />
                </div>
                <div className="form-group text-left">
                <p >Document Currency</p>
                <input type="text" 
                        required
                       className="form-control" 
                       id="documentCurrency" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter document currency"
                />
                </div>
                <div className="form-group text-left">
                    <p >Document Amount</p>
                    <input type="text" 
                        required
                        className="form-control" 
                        id="documentAmount" 
                        placeholder="Enter document amount"
                    />
                </div>
                <p className="text-left">Document Date </p>
                <DatePicker selected={date} onChange={date => setDate(date)} />
                <p />
                <button type="submit" className="btn btn-primary" style={{ width:"150px", backgroundColor:"lightgreen"}}>
                    Submit 
                </button>
            </form>
            </div>
        </div>
        </div>
    );

}

export default UploadDoument;