const priorities = [
	{ value: 'Low', label: 'Low' },
	{ value: 'Medium', label: 'Medium' },
	{ value: 'High', label: 'High' },
	{ value: 'Time-sensitive', label: 'Time-sensitive' },
	{ value: 'Daily routine', label: 'Daily routine' },
	{ value: 'Schedule', label: 'Schedule' },
	{ value: 'Urgent', label: 'Urgent' },
];

const Airtable = require('airtable');
const base = new Airtable({apiKey: 'keymrBNLy7tXIfV2H'}).base('apptbLLUUnap2S6oD');

var tagList = [];

const dbGetTags = (theTagList) => {
	tagList = theTagList;
};

const getOptions = (inputValue: string) => {
	return tagList.filter(i =>
		i.label.toLowerCase().includes(inputValue.toLowerCase())
	);
};

const loadOptions = (inputValue, callback) => {
	GetTags(base, dbGetTags);
	setTimeout(() => {
		callback(getOptions(inputValue));
	}, 3000);
};

function GetTags(base, callbackFn) {
	var recordList = [];
	base('Tags').select({
	}).eachPage(function page(records, fetchNextPage) {
		records.forEach(function(record) {
			let newRecord = { value: record.id, label: record.get('Name') };
			recordList.push(newRecord);
		});
		fetchNextPage();
	}, function done(err) {
		if (err) { console.error(err); return; } else {
			callbackFn(recordList);
		}
	});
};

export { priorities, base, tagList, loadOptions };
