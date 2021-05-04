import React from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AsyncSelect from 'react-select/async';
import Select from 'react-select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import CheckBox from '@material-ui/core/Checkbox';
import Alert from '@material-ui/lab/Alert';
import { priorities, loadOptions } from './database';
import { EventHandler, SubmitForm } from './eventhandlers';

class App extends React.Component {

	constructor (props) {
		super(props)
	
		this.state = {
		  startDate: new Date(),
		  endDate: new Date(),
		  doRepeat: false,
		  doDaily: false,
		  showDB: false,
		  showLOG: false,
		  repeatType: 'Daily',
		  repinterval: 1,
		  repIntervalType: '',
		  selectedItems: [],
		  taskName: '',
		  priority: '',
		  nHrs: 0.0,
		  notes: '',
		  status: '',
		  statusType: 'info',
		  logStr: "",
		};
		this.handleEvent = this.handleEvent.bind(this);
		this.handleStartChange = this.handleStartChange.bind(this);
		this.handleEndChange = this.handleEndChange.bind(this);
		this.handleSelectTags = this.handleSelectTags.bind(this);
		this.handleSelectPriority = this.handleSelectPriority.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	  }


	handleStartChange(date) {
		this.setState({startDate: date});
	}
	
	handleEndChange(date) {
		this.setState({endDate: date});
	}
	
	handleSelectTags(selectedItems) {
		this.setState({selectedItems: selectedItems});
	}
	
	handleSelectPriority(priority) {
		this.setState({priority: priority});
	}
	
	handleEvent(event) {
		EventHandler(this, event);
	}
	
	onFormSubmit(e) {
		this.setState({ statusType: "info" });
		this.setState({ status: "Adding task(s) to database..." });
		e.preventDefault();
		setTimeout(() => {
			SubmitForm(this);
		}, 3000);
	}
	
	render() {
		return (
			<div>
				<form onSubmit={ this.onFormSubmit } style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '100vh', height: '150vh'}}>
				<div className="form-group" >
					<div><table><tbody>
						<tr><td>
							<label>
								<div><b>Enter new task:</b></div>
							</label>
						</td></tr>
						<tr><td>
							<p>&nbsp;</p>
							<FormControlLabel
								control={<CheckBox checked={this.state.doDaily} onChange={this.handleEvent} name="doDaily" />}
								label="Daily"
							/>
							<p>&nbsp;</p>
						</td></tr>
						<tr>
						{this.state.doDaily ?
							null
								:
							<td>
								<TextField required id="taskname" name="taskname" label="Task:" value={this.state.taskName} onChange={this.handleEvent} />
							</td>
						}
						</tr>
						{this.state.doDaily ?
							null
								:
							<div>
								<tr><td>
									<p>&nbsp;</p>
									<div>
										<div>Tags:</div>
										<AsyncSelect
											isMulti
											loadOptions={loadOptions}
											defaultOptions
											isSearchable={true}
											closeMenuOnSelect={false}
											onChange={this.handleSelectTags}
										>
										</AsyncSelect>
									</div>
								</td></tr>
								<tr><td>
									<p>&nbsp;</p>
									<div>
										<div>Priority:</div>
										<Select
											options={priorities}
											isSearchable={true}
											closeMenuOnSelect={true}
											onChange={this.handleSelectPriority}
										>
										</Select>
									</div>
								</td></tr>
								<tr><td>
									<p>&nbsp;</p>
									<TextField required id="hrs" name="hrs" label="Hrs:" type="number" inputProps={{step: "any", min: 0}} value={this.state.nHrs} onChange={this.handleEvent} />
								</td></tr>
							</div>
						}
						<tr><td>
							<p>&nbsp;</p>
							<div>Date:</div>
							<DatePicker
								selected={ this.state.startDate }
								onChange={ this.handleStartChange }
								name="startDate"
								dateFormat="MM/dd/yyyy"
							/>
						</td></tr>
						<tr><td>
							<p>&nbsp;</p>
							<FormControlLabel
								control={<CheckBox checked={this.state.doRepeat} onChange={this.handleEvent} name="doRepeat" />}
								label="Repeat"
							/>
						</td></tr>
						{this.state.doRepeat ?
							<div>
							<FormControl component="fieldset">
								<RadioGroup aria-label="repeattype" name="repeattype1" value={this.state.repeatType} onChange={this.handleEvent}>
									<tr><td><FormControlLabel value="Daily" control={<Radio />} label="Daily" /></td></tr>
									<tr><td><FormControlLabel value="Weekly" control={<Radio />} label="Weekly" /></td></tr>
									<tr><td><FormControlLabel value="Monthly" control={<Radio />} label="Monthly" /></td></tr>
									<tr>
										<td><FormControlLabel value="Every" control={<Radio />} label="Every" /></td>
										<td><input type="number" name="repintervalamt" value={this.state.repinterval} min="1" onChange={this.handleEvent}></input></td>
										<td>
											<FormControl component="fieldset">
												<RadioGroup aria-label="repeatinterval" name="repeatinterval1" value={this.state.repIntervalType} onChange={this.handleEvent}>
													<FormControlLabel value="Days" control={<Radio />} label="Days" />
													<FormControlLabel value="Weeks" control={<Radio />} label="Weeks" />
													<FormControlLabel value="Months" control={<Radio />} label="Months" />
												</RadioGroup>
											</FormControl>
										</td>
									</tr>
								</RadioGroup>
							</FormControl>
							<tr><td>
								<div>End Date:</div>
								<DatePicker
									selected={ this.state.endDate }
									onChange={ this.handleEndChange }
									name="endDate"
									dateFormat="MM/dd/yyyy"
							/>
							</td></tr>
							</div>
								: null}
						{this.state.doDaily ?
							null
							:
							<tr><td>
								<p>&nbsp;</p>
								<label>
									<div>Notes:</div>
									<textarea name="notes" value={this.state.notes} onChange={this.handleEvent} />
								</label>
							</td></tr>
						}
						<tr><td>
							<p>&nbsp;</p>
							<div><input type="submit" value="Submit" /></div>
						</td></tr>
						{(this.state.status === '') ? null :
							<tr><td>
								<p>&nbsp;</p>
								<div>
									<Alert severity={this.state.statusType}>{this.state.status}</Alert>
								</div>
							</td></tr>
						}
						<tr>
							<td>
								<p>&nbsp;</p>
								<FormControlLabel
									control={<CheckBox checked={this.state.showDB} onChange={this.handleEvent} name="showDB" />}
									label="Show DB"
								/>
							</td>
							<td>
								<p>&nbsp;</p>
								<FormControlLabel
									control={<CheckBox checked={this.state.showLOG} onChange={this.handleEvent} name="showLog" />}
									label="Show Log"
								/>
							</td>
						</tr>
					</tbody></table></div>
				</div>
				</form>
				{this.state.showDB ?
					<div>
					<iframe
						className="airtable-embed"
						title="Tasks"
						src="https://airtable.com/embed/shrwDMaLicVlxs8oD?backgroundColor=gray"
						frameBorder="0"
						width="100%"
						height="533"
					>
					</iframe>
					</div>
					: null}
				{this.state.showLOG ?
					<div>
						<p>&nbsp;</p>
						<i>LOG:</i><div align="center"><textarea readOnly value={this.state.logStr} rows="10" cols="50" /></div>
					</div>
					: null}
			</div>
		);
	}
}

export default App;
