import React from "react"

function Content() {



     const [formData, setFormData]= React.useState(
          {
               interestRate:"",
               PaymentAmount:"",
               initialDeposit:"",
               years:""
          }
     )

     const [futureValue, setFutureValue]= React.useState(0)

     React.useEffect(() => {
          if (
            formData.interestRate !== "" &&
            formData.PaymentAmount !== "" &&
            formData.initialDeposit !== "" &&
            formData.years !== ""
          ) {
            const FV = calculate(
              parseFloat(formData.interestRate),
              parseFloat(formData.PaymentAmount),
              parseFloat(formData.initialDeposit),
              parseFloat(formData.years)
            );

            const commaNumber = FV.toLocaleString(); 
            setFutureValue(commaNumber);
          } else {
            setFutureValue(0);
          }
        }, [formData]);

     function calculate(InterestRate,PayAmount,InitialDeposit,Years){
          let r = InterestRate / 100;
    
          // Number of times interest is compounded per year
          let n = 12;
          
          // Time in years
          let t = Years;
          
          // Future value of the initial deposit
          let FV_initial = InitialDeposit * Math.pow((1 + r / n), (n * t));
          
          // Future value of the series of monthly contributions
          let FV_contributions = PayAmount * ((Math.pow((1 + r / n), (n * t)) - 1) / (r / n));
          
          // Total future value
          let FV = FV_initial + FV_contributions;
          
          return FV;
     }

     function handleChange(event){
          const {name,value}= event.target;
          setFormData(prevData => {
               return{
                    ...prevData,
                    [name]: value

               }
          })
     }

     console.log(formData)

  return (
    <>
      <div className="content">
        <h2 className="answer"><span>$</span>{futureValue}</h2>

        <div className="inputs">

          <label className="inputLabel" htmlFor="intrestRate">
            Interest Rate
          </label>
          <input 
               className="inputBox" 
               type="text" 
               id="interestRate"
               name="interestRate"
               onChange={handleChange}
               value={formData.interestRate}
          >
          </input>

          <label className="inputLabel" htmlFor="payAmount">
            Payment Amount
          </label>
          <input 
               className="inputBox" 
               type="text" 
               id="payAmount"
               name="PaymentAmount"
               onChange={handleChange}
               value={formData.PaymentAmount}
          >
          </input>

          <label className="inputLabel" htmlFor="initialDeposit">
            Initial Deposit
          </label>
          <input 
               className="inputBox" 
               type="text" 
               id="initialDeposit"
               name="initialDeposit"
               onChange={handleChange}
               value={formData.initialDeposit}
          >
          </input>

          <label className="inputLabel" htmlFor="initialDeposit">
            Years
          </label>
          <input 
               className="inputBox" 
               type="text" 
               id="years"
               name="years"
               onChange={handleChange}
               value={formData.years}
          >
          </input>

        </div>
      </div>
    </>
  );
}

export default Content;
