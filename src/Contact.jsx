import React , {useState} from 'react';


const Contact = () =>{

    const [data, setData] = useState({

        fullname:"",
        email:"",
        mobile:"",
        msg:""

    });

    const InputEvent = (event) =>{
        const{ name, value} = event.target;
    
    setData((preVal)=>{
        return{
            ...preVal,
            [name]: value,
        };
    });
    };


const formSubmit = (i) => {
    i.preventDefault();
    alert(
        `My name is ${data.fullname}. My email is ${data.email}. My mobile no is ${data.mobile}. I wanna say ${data.msg}`
    );
};















    return(

        <>
        <div className="my-5">
        <h1 className="text-center">Contact</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">
                             Full Name
                        </label>
                     <input
                        type="text"
                        class="form-control"
                        id="exampleFoemControlInput1"
                        name="fullname"
                        value={data.fullname}
                        onChange={InputEvent}
                        
                        placeholder="enter full name"
                     />
                    </div>


                    <div className="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">
                             Email Address
                        </label>
                     <input
                        type="email"
                        class="form-control"
                        id="exampleFoemControlInput1"
                        name="email"
                        value={data.email}
                        onChange={InputEvent}
                        
                        placeholder="name@example.com"
                     />
                    </div>


                    <div className="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">
                             Mobile no
                        </label>
                     <input
                        type="number"
                        class="form-control"
                        id="exampleFoemControlInput1"
                        name="mobile"
                        value={data.mobile}
                        onChange={InputEvent}
                        
                        placeholder="enter mobile number"
                     />
                    </div>

             
                    <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                        Message
                    </label>
                    <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        name="msg"
                        value={data.msg}
                        onChange={InputEvent}
                        placeholder="write message">
                    </textarea>
                </div>

                        <div class="col-12">
                            <button class="btn btn-primary" type="submit">Submit</button>
                        </div>

                </form>
            </div>
            </div>
            </div>
    
        



        </>
        
        
    );
    };
export default Contact;