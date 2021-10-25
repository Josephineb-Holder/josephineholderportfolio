import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./Contact.css"
import axios from 'axios'

class Contact extends Component {
    constructor() {
        super()
        this.state = {
            fullName:'',
            email:'',
            number:'',
            country:''
        }

        this.changeFullName = this.changeFullName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeNumber = this.changeNumber.bind(this)
        this.changeCountry = this.changeCountry.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }

    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }

    changeNumber(event){
        this.setState({
            number:event.target.value
        })
    }

    changeCountry(event){
        this.setState({
            country:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const registered = {
            fullName: this.state.fullName,
            email: this.state.email,
            number: this.state.number,
            country: this.state.country
        }

        axios.post('http://localhost:3001/app/signup', registered)
          .then(response => console.log(response.data))

          this.setState({
              fullName:'',
              email:'',
              number:'',
              country:''
          })
    }

    render() {
        return (
            <div className="container-fluid form">
               <div className="container">
               <h1 class="display-4 text-center py-1">Let's Connect!!!</h1>
                   <div>
                       <form onSubmit={this.onSubmit}>
                       <div id="form-div">
                       <div class="d-flex align-items-center">
                           <input type="text"
                           placeholder="Full Name"
                           onChange={this.changeFullName}
                           value={this.state.fullName}
                           autofocus
                            autocomplete="off"
                           className="form-control form-group mr-3"
                            />
                            </div>
                        <div class="d-flex align-items-center">
                           <input type="text"
                           placeholder="Email"
                           onChange={this.changeEmail}
                           value={this.state.email}
                           autofocus 
                           autocomplete="off"
                           className="form-control form-group mr-3"
                            />
                            </div>
                        <div class="d-flex align-items-center">
                           <input type="text"
                           placeholder="Number"
                           onChange={this.changeNumber}
                           value={this.state.number}
                           autofocus 
                           autocomplete="off"
                           className="form-control form-group mr-3"
                            />
                            </div>
                        <div class="d-flex align-items-center">
                           <input type="text"
                           placeholder="Country"
                           onChange={this.changeCountry}
                           value={this.state.country}
                           autofocus
                            autocomplete="off"
                           className="form-control form-group mr-3"
                            />
                        </div>
                         
                         </div>
                     

                            <input type="submit" 
                              className="btn btn-success"
                              value="Submit"
                            
                            />


                       </form>

                   </div>

               </div>
            </div>
         );
    }
}

export default Contact