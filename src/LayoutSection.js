import React, {Component} from 'react'
import './styles/components/layout.css'

class LayoutSection extends React.Component{
    constructor(props){
        super(props);        
        this.calcLayoutSection = this.calcLayoutSection.bind(this);
        this.state = {
            totalCentsValue: 0,
            totalAcresValue:0,
            error: undefined
        };
      }
    calcLayoutSection(e){
      e.preventDefault();
      const Length1 = parseInt(e.target.elements.length1.value.trim());
      const Length2 = parseInt(e.target.elements.length2.value.trim());
      const Width1 = parseInt(e.target.elements.width1.value.trim());
      const Width2 = parseInt(e.target.elements.width2.value.trim());
      let totalCents = (((Length1 + Length2)/2) * ((Width1 + Width2)/2)) * 0.0247;
      let totalAcres = (totalCents)/100;
      console.log("Total Cents of Layout Section:",totalCents);
      console.log("Total Acres of Layout Section:",totalAcres);
      this.setState(() => ({ totalCentsValue: totalCents, totalAcresValue: totalAcres}));
    }
    
    render(){
        console.log("webClass Render");
        return(
            <div class="container">
                <form onSubmit={this.calcLayoutSection}>
                    <fieldset>
                        <legend>Layout Section Calculator</legend>

                        <div class="row">
                            <div class="col-25">
                                <label>Length 1</label>
                            </div>
                            <div class="col-75">
                                <input autoComplete='Off' type='text' name='length1' placeholder='Enter in Meters'/>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-25">
                                <label>Length 2</label>
                            </div>
                            <div class="col-75">
                                <input autoComplete='Off' type='text' name='length2' placeholder='Enter in Meters'/>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-25">
                                <label>Width 1</label>
                            </div>
                            <div class="col-75">
                                <input autoComplete='Off' type='text' name='width1' placeholder='Enter in Meters'/>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-25">
                                <label>Width 2</label>
                            </div>
                            <div class="col-75">
                                <input autoComplete='Off' type='text' name='width2' placeholder='Enter in Meters'/>
                            </div>
                        </div>

                        <div class="row">
                            <button>Calculate Values</button>
                        </div>          

                        
                        {this.state.totalCentsValue > 0 ? 
                        <div>
                            <p> Layout Area in Cents : {this.state.totalCentsValue} </p> 
                            <br/> 
                            <p> Layout Area in Acres : {this.state.totalAcresValue}</p>
                        </div>: 
                        <p>Enter Details and Click Calculate</p>}
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default LayoutSection;