import React, {useState} from 'react';
import './SideNav.css';
import document from '../../images/documents.jpg';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function UploadDoument(props){

    const [date, setDate] = useState(new Date());

    let formObject = {};
    const handleSubmit = (event) => {
        formObject = {};
    const formData = new FormData(event.currentTarget);
    console.log(event.currentTarget.value);
    event.preventDefault();

    let i =0;
    for (let [key, value] of formData.entries()) {
        
      console.log(key, value);
      
    }
    const value = Object.fromEntries(formData.entries());

    console.log("Form object Stringy : " + JSON.stringify(value));

    /*axios.post('/url', JSON.stringify(value))
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      */
  };

    return (
        <div>
        <div id="mySidenav" className="sidenav">
            <a href="#">ViewDocuments</a>
            <a href="#">UploadDocuments</a>
        </div>
        
        <div id="main" className=" main card col-12 col-lg-4 login-card mt-2 hv-center" >
        <div>
            <img src={document} alt="Logo" className="documentImage" />
        </div>
        <div>
            <form className="documentForm" onSubmit={handleSubmit}> 
                <p className="text-left">Document Number </p>
                <div className="form-group text-left">                
                <input type="text" 
                       required
                       className="form-control text-left" 
                       name="documentNumber" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter document number"
                />
                </div>
                <div className="form-group text-left">
                    <p >Supplier Name</p>
                    <input type="text" 
                        required
                        className="form-control text-left" 
                        name="supplierNumber" 
                        placeholder="Enter supplier number"
                    />
                </div>
                <div className="form-group text-left">
                <p >Document Currency</p>
                <input type="text" 
                        required
                       className="form-control" 
                       name="documentCurrency" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter document currency"
                />
                </div>
                <div className="form-group text-left">
                    <p >Document Amount</p>
                    <input type="text" 
                        required
                        className="form-control" 
                        name="documentAmount" 
                        placeholder="Enter document amount"
                    />
                </div>
                <p className="text-left">Document Date </p>
                <DatePicker name="documentDate" selected={date} onChange={date => setDate(date)} />
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