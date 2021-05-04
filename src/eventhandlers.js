import { base, tagList } from './database';

function EventHandler(obj, event) {
	switch(event.target.name) {
		case "doRepeat":
			obj.setState({doRepeat: event.target.checked});
			break;
		case "doDaily":
			obj.setState({doDaily: event.target.checked});
			break;
		case "showDB":
			obj.setState({showDB: event.target.checked});
			break;
		case "showLog":
			obj.setState({showLOG: event.target.checked});
			break;
		case "taskname":
			obj.setState({taskName: event.target.value});
			break;
		case "notes":
			obj.setState({notes: event.target.value});
			break;
		case "hrs":
			obj.setState({nHrs: event.target.value});
			break;
		case "repeattype1":
			obj.setState({repeatType: event.target.value});
			break;
		case "repintervalamt":
			obj.setState({repinterval: event.target.value});
			break;
		case "repeatinterval1":
			obj.setState({repIntervalType: event.target.value});
			break;
		default:
	}
}

function GetDateString(theDate) {
	var dt = new Date(theDate);
	let year = dt.getFullYear().toString();
	let month = dt.getMonth() + 1;
	month = month < 10 ? '0' + month : month;
	let dayOfMonth = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
	let str = ""+year+"-"+month+"-"+dayOfMonth;
	return str;
}

function addDBRecord(obj) {
	console.log("SUBMIT:");
	console.log("  Task name = ", obj.state.taskName);
	console.log("  Tags = ", obj.state.selectedItems);
	console.log("  Priority = ", obj.state.priority);
	console.log("  Number of hours = ", obj.state.nHrs);
	console.log("  Date = ", obj.state.startDate.getFullYear(), "/", obj.state.startDate.getMonth()+1, "/", obj.state.startDate.getDate());
	console.log("  Notes = ", obj.state.notes);
	var theLog = "SUBMIT:\n";
	theLog = theLog + "  Task name = " + obj.state.taskName + "\n";
	theLog = theLog + "  Tags = ";
	var selectedTags = [];
	obj.state.selectedItems.forEach(item => {
		theLog = theLog + item.label + ", ";
		selectedTags.push(item.value);
	});
	theLog = theLog + "\n";
	theLog = theLog + "  Priority = " + obj.state.priority.label + "\n";
	theLog = theLog + "  Number of hours = " + obj.state.nHrs + "\n";
	theLog = theLog + "  Notes = " + obj.state.notes + "\n";

	let newRecord = {
		"fields": {
			"Task": obj.state.taskName,
			"Tag": selectedTags,
			"Hrs": parseFloat(obj.state.nHrs),
			"Priority": obj.state.priority.value,
			"Due date": GetDateString(obj.state.startDate),
			"Notes": obj.state.notes,
		}
	};
	if (obj.state.doRepeat) {
		theLog = theLog + "  Start date = " + obj.state.startDate.getFullYear() + "/" + (obj.state.startDate.getMonth()+1) + "/" + obj.state.startDate.getDate() + "\n";
		theLog = theLog + "  End date = " + obj.state.endDate.getFullYear() + "/" + (obj.state.endDate.getMonth()+1) + "/" + obj.state.endDate.getDate() + "\n";
		var d = new Date(obj.state.startDate); 
		switch(obj.state.repeatType) {
			case "Daily":
				theLog = theLog + "  Repeat daily:\n";
				for (; d <= obj.state.endDate; d.setDate(d.getDate()+1)) {
					newRecord.fields['Due date'] = GetDateString(d);
					theLog = theLog + "    " + newRecord.fields.Task + " | " + newRecord.fields.Tag + " | " + newRecord.fields.Hrs + " | " + newRecord.fields.Priority + " | " + newRecord.fields['Due date'] + " | " + newRecord.fields.Notes + "\n";
					base('Task List').create([
						newRecord,
						], function(err, records) {
						if (err) {
						  console.error(err);
						  return;
						}
					});
				}
				console.log("  DAILY");
				break;
			case "Weekly":
				theLog = theLog + "  Repeat weekly:\n";
				for (; d <= obj.state.endDate; d.setDate(d.getDate()+7)) {
					newRecord.fields['Due date'] = GetDateString(d);
					theLog = theLog + "    " + newRecord.fields.Task + " | " + newRecord.fields.Tag + " | " + newRecord.fields.Hrs + " | " + newRecord.fields.Priority + " | " + newRecord.fields['Due date'] + " | " + newRecord.fields.Notes + "\n";
					base('Task List').create([
						newRecord,
						], function(err, records) {
						if (err) {
						  console.error(err);
						  return;
						}
					});
				}
				console.log("  WEEKLY");
				break;
			case "Monthly":
				theLog = theLog + "  Repeat monthly:\n";
				for (; d <= obj.state.endDate; d.setMonth(d.getMonth()+1)) {
					newRecord.fields['Due date'] = GetDateString(d);
					theLog = theLog + "    " + newRecord.fields.Task + " | " + newRecord.fields.Tag + " | " + newRecord.fields.Hrs + " | " + newRecord.fields.Priority + " | " + newRecord.fields['Due date'] + " | " + newRecord.fields.Notes + "\n";
					base('Task List').create([
						newRecord,
						], function(err, records) {
						if (err) {
						  console.error(err);
						  return;
						}
					});
				}
				console.log("  MONTHLY");
				break;
			case "Every":
				switch(obj.state.repIntervalType) {
					case "Days":
						theLog = theLog + "  Repeat every " + obj.state.repinterval.toString() + " day:\n";
						for (; d <= obj.state.endDate; d.setDate(parseInt(d.getDate())+parseInt(obj.state.repinterval))) {
							newRecord.fields['Due date'] = GetDateString(d);
							theLog = theLog + "    " + newRecord.fields.Task + " | " + newRecord.fields.Tag + " | " + newRecord.fields.Hrs + " | " + newRecord.fields.Priority + " | " + newRecord.fields['Due date'] + " | " + newRecord.fields.Notes + "\n";
							base('Task List').create([
								newRecord,
								], function(err, records) {
								if (err) {
								  console.error(err);
								  return;
								}
							});
						}
						console.log("  DAILY");
						break;
					case "Weeks":
						theLog = theLog + "  Repeat every " + obj.state.repinterval.toString() + " week:\n";
						for (; d <= obj.state.endDate; d.setDate(parseInt(d.getDate())+7*parseInt(obj.state.repinterval))) {
							newRecord.fields['Due date'] = GetDateString(d);
							theLog = theLog + "    " + newRecord.fields.Task + " | " + newRecord.fields.Tag + " | " + newRecord.fields.Hrs + " | " + newRecord.fields.Priority + " | " + newRecord.fields['Due date'] + " | " + newRecord.fields.Notes + "\n";
							base('Task List').create([
								newRecord,
								], function(err, records) {
								if (err) {
								  console.error(err);
								  return;
								}
							});
						}
						console.log("  WEEKLY");
						break;
					case "Months":
						theLog = theLog + "  Repeat every " + obj.state.repinterval.toString() + " month:\n";
						for (; d <= obj.state.endDate; d.setMonth(parseInt(d.getMonth())+parseInt(obj.state.repinterval))) {
							newRecord.fields['Due date'] = GetDateString(d);
							theLog = theLog + "    " + newRecord.fields.Task + " | " + newRecord.fields.Tag + " | " + newRecord.fields.Hrs + " | " + newRecord.fields.Priority + " | " + newRecord.fields['Due date'] + " | " + newRecord.fields.Notes + "\n";
							base('Task List').create([
								newRecord,
								], function(err, records) {
								if (err) {
								  console.error(err);
								  return;
								}
							});
						}
						console.log("  MONTHLY");
						break;
					default:
						theLog = theLog + "  *** Bad repeat interval type";
						console.log("  *** Bad repeat interval type");
				}
				console.log("  EVERY");
				break;
			default:
				theLog = theLog + "  *** Bad repeat type";
				console.log("  *** Bad repeat type");
		}
	} else {
		theLog = theLog + "  Date = " + obj.state.startDate.getFullYear() + "/" + (obj.state.startDate.getMonth()+1) + "/" + obj.state.startDate.getDate() + "\n";
		theLog = theLog + "\n\n\n" + newRecord.fields.Task + " | " + newRecord.fields.Tag + " | " + newRecord.fields.Hrs + " | " + newRecord.fields.Priority + " | " + newRecord.fields['Due date'] + " | " + newRecord.fields.Notes + "\n";
		base('Task List').create([
			newRecord,
			], function(err, records) {
			if (err) {
			  console.error(err);
			  return;
			}
		});
	}
	obj.setState({ logStr: theLog });
	obj.setState({ statusType: "success" });
	obj.setState({ status: "Successfully added new task(s)." });
}


function SubmitForm(obj) {

	if (obj.state.doDaily) {

		var tagDailyRoutine = tagList.find(function (element) {
			return element.label === "Daily routine";
		});
		var tagPersonal = tagList.find(function (element) {
			return element.label === "Personal";
		});
		var tagFamily = tagList.find(function (element) {
			return element.label === "Family";
		});
		var tagExercise = tagList.find(function (element) {
			return element.label === "Exercise";
		});
		obj.setState({
			priority: { value: 'Daily routine', label: 'Daily routine' },
			notes: '',
		});

		obj.setState({
			taskName: 'Wind down',
			nHrs: 1.0,
			selectedItems: [tagDailyRoutine, tagPersonal],
		});
		addDBRecord(obj);

		obj.setState({
			taskName: 'Sleep',
			nHrs: 7.0,
			selectedItems: [tagDailyRoutine, tagPersonal],
		});
		addDBRecord(obj);

		obj.setState({
			taskName: 'Morning',
			nHrs: 2.0,
			selectedItems: [tagDailyRoutine, tagPersonal],
		});
		addDBRecord(obj);

		obj.setState({
			taskName: 'Lunch',
			nHrs: 0.5,
			selectedItems: [tagDailyRoutine, tagPersonal],
		});
		addDBRecord(obj);

		obj.setState({
			taskName: 'Walk',
			nHrs: 0.5,
			selectedItems: [tagDailyRoutine, tagFamily, tagExercise],
		});
		addDBRecord(obj);

		obj.setState({
			taskName: 'Dinner',
			nHrs: 1.5,
			selectedItems: [tagDailyRoutine, tagFamily],
		});
		addDBRecord(obj);

		obj.setState({
			taskName: 'Evening family',
			nHrs: 1.0,
			selectedItems: [tagDailyRoutine, tagFamily],
		});
		addDBRecord(obj);

	} else {

		addDBRecord(obj);

	}
}

export { EventHandler, SubmitForm };

