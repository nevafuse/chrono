
test("Test - International Standard Parser", function() {
	
	var text = "Let's finish this before this 2013-2-7.";
	var parser = chrono.parsers.InternationalStandardParser(text, new Date(2012,7,8));
	ok(parser, parser)
	
	parser.execAll();
	ok(parser.results().length == 1, JSON.stringify( parser.results() ) )

	var result = parser.results()[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2013, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 1, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 7, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2013,1,7,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	
	var text = "Let's finish this before this 2013-02-07.";
	var parser = chrono.parsers.InternationalStandardParser(text, new Date(2012,7,8));
	ok(parser, parser)
	
	parser.execAll();
	ok(parser.results().length == 1, JSON.stringify( parser.results() ) )

	var result = parser.results()[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2013, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 1, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 7, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2013,1,7,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	var text = "Let's finish this before this 2013-02-29.";
	var parser = chrono.parsers.InternationalStandardParser(text, new Date(2012,7,8));
	ok(parser, parser)
	
	parser.execAll();
	ok(parser.results().length == 0, JSON.stringify( parser.results() ) )
});

test("Test - Slash", function() {
	
	var text = "The Deadline is 8/10/2012";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		ok(result.index == 16, 'Wrong index')
		ok(result.text == '8/10/2012', result.text )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	
	var text = "The Deadline is 1/10/13";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2013, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 0, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2013,0,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	var text = "The Deadline is 1/10/56";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2013, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 0, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2013,0,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
  
  
  var text = "The Deadline is 1/10/56 - 3/10/56";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2013, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 0, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2013,0,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		
		ok(result.end.year == 2013, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.end.month == 2, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.end.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.endDate);
		var expectDate = (new Date(2013,2,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		
	}
	
	var text = "The Deadline is 05/06/13";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2013, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 4, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 6, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2013,4,6,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	
	var text = "The Deadline is 05.06.2013";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2013, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 4, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 6, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2013,4,6,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	var text = "The Deadline is 02.07.2013";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2013, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 1, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 7, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2013,1,7,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
});

test("Test - Little Endian with Month's name", function() {
	
	var text = "The Deadline is 10 August 2012";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	
	var text = "The Deadline is 10 August";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	
	
	var text = "The Deadline is 10 August 2555 BE";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	var text = "The Deadline is Tuesday, 10 January";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2013, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 0, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		ok(result.start.dayOfWeek == 2, 'Test Result - (Day of Week) ' + JSON.stringify(result.start) )
		
		ok(result.text == 'Tuesday, 10 January', result.text)
		var resultDate = (result.startDate);
		var expectDate = (new Date(2013,0,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		
	}
	
	
	
	var text = "The Deadline is Tue, 10 January";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2013, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 0, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		ok(result.text == 'Tue, 10 January', result.text)
		var resultDate = (result.startDate);
		var expectDate = (new Date(2013,0,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		
	}
  
	
	
	var text = "The Deadline is 10-12 August 2012";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		
		ok(result.referenceDate)
	}
	
	var text = "The Deadline is 10 to 12 August 2012";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		
		ok(result.referenceDate)
	}
	
	var text = "The Deadline is 10 - 12 August";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		
		ok(result.referenceDate)
	}
	
	
	
	var text = "The Deadline is 10 August - 12 September";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		
		ok(result.end, JSON.stringify(result.start) )
		ok(result.end.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.end.month == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.end.day == 12, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.endDate);
		var expectDate = (new Date(2012,8,12,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		
		ok(result.referenceDate)
	}
	
	var text = "The Deadline is 10 August to 12 Sep";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		
		
		ok(result.end, JSON.stringify(result.start) )
		ok(result.end.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.end.month == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.end.day == 12, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.endDate);
		var expectDate = (new Date(2012,8,12,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		
		ok(result.referenceDate)
	}
	
	
	var text = "The Deadline is 12 September - 10 August";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		
		
		ok(result.end, JSON.stringify(result.start) )
		ok(result.end.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.end.month == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.end.day == 12, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.endDate);
		var expectDate = (new Date(2012,8,12,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		
		ok(result.referenceDate)
	}
	
	
	var text = "The Deadline is 12 September - 10 August 2013";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2013, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2013,7,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		
		
		ok(result.end, JSON.stringify(result.start) )
		ok(result.end.year == 2013, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.end.month == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.end.day == 12, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		var resultDate = (result.endDate);
		var expectDate = (new Date(2013,8,12,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		
		ok(result.referenceDate)
	}
	
	
	
	var text = "The Deadline is 12 September - 10 August 2011";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2011, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		ok(!result.start.impliedComponents, 'Implied Components - ' + JSON.stringify(result.start.impliedComponents) )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2011,7,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		
		
		ok(result.end, JSON.stringify(result.start) )
		ok(result.end.year == 2011, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.end.month == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.end.day == 12, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		ok(!result.end.impliedComponents, 'Implied Components - ' + JSON.stringify(result.start.impliedComponents) )
    
		var resultDate = (result.endDate);
		var expectDate = (new Date(2011,8,12,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		
		ok(result.referenceDate)
	}
	
	var text = "The Deadline is 10 August - 12 September 2011";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2011, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		ok(!result.start.impliedComponents, 'Implied Components - ' + JSON.stringify(result.start.impliedComponents) )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2011,7,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		
		
		ok(result.end, JSON.stringify(result.start) )
		ok(result.end.year == 2011, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.end.month == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.end.day == 12, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		ok(!result.end.impliedComponents, 'Implied Components - ' + JSON.stringify(result.start.impliedComponents) )
    
		var resultDate = (result.endDate);
		var expectDate = (new Date(2011,8,12,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		
		ok(result.referenceDate)
	}
	
	
	
});

test("Test - Middle Endian with Month's name", function() {
	
	var text = "The Deadline is August 10, 2012";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	
	var text = "The Deadline is August 10";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	
	
	var text = "The Deadline is August 10 2555 BE";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	var text = "The Deadline is January 10";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2013, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 0, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2013,0,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	var text = "The Deadline is Tuesday, January 10";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2013, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 0, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
    ok(result.start.dayOfWeek == 2, 'Test Result - (Day of Week) ' + JSON.stringify(result.start) )
		ok(result.text == 'Tuesday, January 10', result.text)
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2013,0,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	
	var text = "The Deadline is Tue, January 10";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2013, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 0, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		ok(result.start.dayOfWeek == 2, 'Test Result - (Day of Week) ' + JSON.stringify(result.start) )
		ok(result.start.impliedComponents, 'Implied Components - ' + JSON.stringify(result.start.impliedComponents) )
		
		ok(result.text == 'Tue, January 10', result.text)
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2013,0,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	
	var text = "The Deadline is August 10-12, 2012";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		ok(result.end, JSON.stringify(result.start) )
		ok(result.end.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.end.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.end.day == 12, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	var text = "The Deadline is  August 10 to 12 2012";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		ok(result.end, JSON.stringify(result.start) )
		ok(result.end.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.end.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.end.day == 12, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	var text = "The Deadline is August 10 - 12";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		
		ok(result.end, JSON.stringify(result.start) )
		ok(result.end.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.end.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.end.day == 12, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	
	var text = "The Deadline is August 10 - November 12";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		
		
		ok(result.end, JSON.stringify(result.start) )
		ok(result.end.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.end.month == 10, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.end.day == 12, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.endDate);
		var expectDate = (new Date(2012,10,12,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	
	var text = "The Deadline is August 10 to November 12";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		
		
		ok(result.end, JSON.stringify(result.start) )
		ok(result.end.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.end.month == 10, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.end.day == 12, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.endDate);
		var expectDate = (new Date(2012,10,12,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	
	var text = "The Deadline is Aug 10 - Nov 12";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		
		
		ok(result.end, JSON.stringify(result.start) )
		ok(result.end.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.end.month == 10, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.end.day == 12, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.endDate);
		var expectDate = (new Date(2012,10,12,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	
	var text = "The Deadline is Aug 10 - Nov 12, 2013";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2013, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2013,7,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		
		
		ok(result.end, JSON.stringify(result.start) )
		ok(result.end.year == 2013, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.end.month == 10, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.end.day == 12, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.endDate);
		var expectDate = (new Date(2013,10,12,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	
	var text = "The Deadline is Aug 10 - Nov 12, 2011";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2011, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		ok(!result.start.impliedComponents, 'Implied Components - ' + JSON.stringify(result.start.impliedComponents) )
		var resultDate = (result.startDate);
		var expectDate = (new Date(2011,7,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
		
		
		ok(result.end, JSON.stringify(result.start) )
		ok(result.end.year == 2011, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.end.month == 10, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.end.day == 12, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		ok(!result.end.impliedComponents, 'Implied Components - ' + JSON.stringify(result.end.impliedComponents) )
		
		var resultDate = (result.endDate);
		var expectDate = (new Date(2011,10,12,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
  
	
});

test("Test - Date + Time", function() {
	
	var text = "The Deadline is August 10, 2012 10:12 pm";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		ok(result.start.hour == 22, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
		ok(result.start.minute == 12, 'Test Result - (Minute) ' + JSON.stringify(result.start) )
		ok(result.start.second == 0, 'Test Result - (Second) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,10,22,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 1000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	var text = "The Deadline is August 10, 2012 10:12:59 pm";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		ok(result.start.hour == 22, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
		ok(result.start.minute == 12, 'Test Result - (Minute) ' + JSON.stringify(result.start) )
		ok(result.start.second == 59, 'Test Result - (Second) ' + JSON.stringify(result.start) )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,10,22,12,59));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 1000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	var text = "The Deadline is Friday at 10 am";
	var results = chrono.parse(text, new Date(2012,7,9));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		ok(result.start.hour == 10, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
		ok(result.start.minute == 0, 'Test Result - (Minute) ' + JSON.stringify(result.start) )
		ok(result.start.second == 0, 'Test Result - (Second) ' + JSON.stringify(result.start) )
		ok(result.start.dayOfWeek == 5, 'Test Result - (Day of Week) ' + JSON.stringify(result.start) )
		
		ok(result.text == 'Friday at 10 am', result.text )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,10,10,0,0));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 1000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	
	var text = "The Deadline is Friday at 10am";
	var results = chrono.parse(text, new Date(2012,7,9));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		ok(result.start.hour == 10, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
		ok(result.start.minute == 0, 'Test Result - (Minute) ' + JSON.stringify(result.start) )
		ok(result.start.second == 0, 'Test Result - (Second) ' + JSON.stringify(result.start) )
		ok(result.start.dayOfWeek == 5, 'Test Result - (Day of Week) ' + JSON.stringify(result.start) )
		ok(result.text == 'Friday at 10am', result.text )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,10,10,0,0));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 1000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	var text = "The Deadline is Monday at 10 am";
	var results = chrono.parse(text, new Date(2012,7,9));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 13, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		ok(result.start.hour == 10, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
		ok(result.start.minute == 0, 'Test Result - (Minute) ' + JSON.stringify(result.start) )
		ok(result.start.second == 0, 'Test Result - (Second) ' + JSON.stringify(result.start) )
		ok(result.start.dayOfWeek == 1, 'Test Result - (Day of Week) ' + JSON.stringify(result.start) )
		ok(result.text == 'Monday at 10 am', result.text )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,13,10,0,0));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 1000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	var text = "The Deadline is Thursday at 10 am";
	var results = chrono.parse(text, new Date(2012,7,9));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 16, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		ok(result.start.hour == 10, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
		ok(result.start.minute == 0, 'Test Result - (Minute) ' + JSON.stringify(result.start) )
		ok(result.start.second == 0, 'Test Result - (Second) ' + JSON.stringify(result.start) )
		
		ok(result.text == 'Thursday at 10 am', result.text )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,16,10,0,0));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 1000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
  
  
	
	var text = "The Deadline is last Friday at 9.30";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 3, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		ok(result.start.hour == 9, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
		ok(result.start.minute == 30, 'Test Result - (Minute) ' + JSON.stringify(result.start) )
		ok(result.start.second == 0, 'Test Result - (Second) ' + JSON.stringify(result.start) )
		ok(result.start.dayOfWeek == 5, 'Test Result - (Day of Week) ' + JSON.stringify(result.start) )
		ok(result.text == 'last Friday at 9.30', result.text )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,3,9,30,0));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 1000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	
	var text = "The Deadline is 16 Aug 2012 22:48:58 xx";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 16, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		ok(result.start.hour == 22, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
		ok(result.start.minute == 48, 'Test Result - (Minute) ' + JSON.stringify(result.start) )
		ok(result.start.second == 58, 'Test Result - (Second) ' + JSON.stringify(result.start) )
		
		ok(result.text == '16 Aug 2012 22:48:58', result.text )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,16,22,48,58));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 1000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	var text = "The Deadline is Aug 16 2012 22:48:58 xx";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 16, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		ok(result.start.hour == 22, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
		ok(result.start.minute == 48, 'Test Result - (Minute) ' + JSON.stringify(result.start) )
		ok(result.start.second == 58, 'Test Result - (Second) ' + JSON.stringify(result.start) )
		
		ok(result.text == 'Aug 16 2012 22:48:58', result.text )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,16,22,48,58));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 1000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	var text = "On Jun 26, 2013, at 12:40 AM";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2013, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 5, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 26, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		ok(result.start.hour == 0, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
		ok(result.start.minute == 40, 'Test Result - (Minute) ' + JSON.stringify(result.start) )
		
		ok(result.text == 'Jun 26, 2013, at 12:40 AM', result.text )
	}
	
	
	
	var text = "monday 4/29/2013 630-930am";
	var results = chrono.parse(text, new Date(2012,7,10));
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2013, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 3, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 29, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		ok(result.start.hour == 6, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
		ok(result.start.minute == 30, 'Test Result - (Minute) ' + JSON.stringify(result.start) )
		ok(result.start.second == 0, 'Test Result - (Second) ' + JSON.stringify(result.start) )
		ok(result.start.dayOfWeek == 1, 'Test Result - (Day of Week) ' + JSON.stringify(result.start) )
		
		ok(result.end.year == 2013, 'Test Result - (Year) ' + JSON.stringify(result.end) )
  	ok(result.end.month == 3, 'Test Result - (Month) ' + JSON.stringify(result.end) )
  	ok(result.end.day == 29, 'Test Result - (Day) ' + JSON.stringify(result.end) )
  	ok(result.end.hour == 9, 'Test Result - (Hour) ' + JSON.stringify(result.end) )
  	ok(result.end.minute == 30, 'Test Result - (Minute) ' + JSON.stringify(result.end) )
  	ok(result.end.second == 0, 'Test Result - (Second) ' + JSON.stringify(result.end) )
		ok(result.end.dayOfWeek == 1, 'Test Result - (Day of Week) ' + JSON.stringify(result.start) )
		
		ok(result.concordance )
		var resultDate = result.startDate;
		var expectDate = new Date(2013,3,29,6,30,0);
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 1000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
  
  
  
  
  var text = "tuesday 6/25/2013 12:30 pm";
  var results = chrono.parse(text);
  ok(results.length == 1, JSON.stringify( results ) )

  var result = results[0];
  if(result){
    ok(result.start, JSON.stringify(result.start) )
    ok(result.start.year == 2013, 'Test Result - (Year) ' + JSON.stringify(result.start) )
    ok(result.start.month == 5, 'Test Result - (Month) ' + JSON.stringify(result.start) )
    ok(result.start.day == 25, 'Test Result - (Day) ' + JSON.stringify(result.start) )
    ok(result.start.hour == 12, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
    ok(result.start.minute == 30, 'Test Result - (Minute) ' + JSON.stringify(result.start) )
    ok(result.start.second == 0, 'Test Result - (Second) ' + JSON.stringify(result.start) )
    ok(result.start.dayOfWeek == 2, 'Test Result - (Day of Week) ' + JSON.stringify(result.start) )
  }
  
  var text = "tuesday 6/25/2013 12:30 am";
  var results = chrono.parse(text);
  ok(results.length == 1, JSON.stringify( results ) )
  
  var result = results[0];
  if(result){
    ok(result.start, JSON.stringify(result.start) )
    ok(result.start.year == 2013, 'Test Result - (Year) ' + JSON.stringify(result.start) )
    ok(result.start.month == 5, 'Test Result - (Month) ' + JSON.stringify(result.start) )
    ok(result.start.day == 25, 'Test Result - (Day) ' + JSON.stringify(result.start) )
    ok(result.start.hour == 0, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
    ok(result.start.minute == 30, 'Test Result - (Minute) ' + JSON.stringify(result.start) )
    ok(result.start.second == 0, 'Test Result - (Second) ' + JSON.stringify(result.start) )
  }
  
  var text = "tuesday 6/25/2013 10pm - 12:30 am";
  var results = chrono.parse(text);
  ok(results.length == 1, JSON.stringify( results ) )
  
  var result = results[0];
  if(result){
    ok(result.start, JSON.stringify(result.start) )
    ok(result.start.year == 2013, 'Test Result - (Year) ' + JSON.stringify(result.start) )
    ok(result.start.month == 5, 'Test Result - (Month) ' + JSON.stringify(result.start) )
    ok(result.start.day == 25, 'Test Result - (Day) ' + JSON.stringify(result.start) )
    ok(result.start.hour == 22, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
    ok(result.start.minute == 0, 'Test Result - (Minute) ' + JSON.stringify(result.start) )
    ok(result.start.second == 0, 'Test Result - (Second) ' + JSON.stringify(result.start) )
    
    ok(result.end.year  == 2013, 'Test Result - (Year) ' + JSON.stringify(result.end) )
  	ok(result.end.month == 5, 'Test Result - (Month) ' + JSON.stringify(result.end) )
  	ok(result.end.day   == 26, 'Test Result - (Day) ' + JSON.stringify(result.end) )
    ok(result.end.hour == 0, 'Test Result - (Hour) ' + JSON.stringify(result.end) )
  	ok(result.end.minute == 30, 'Test Result - (Minute) ' + JSON.stringify(result.end) )
  	ok(result.end.second == 0, 'Test Result - (Second) ' + JSON.stringify(result.end) )
  }
  
  var text = "7/2/2013 1-230 pm";
  var results = chrono.parse(text);
  ok(results.length == 1, JSON.stringify( results ) )
  
  var result = results[0];
  if(result){
    ok(result.start, JSON.stringify(result.start) )
    ok(result.start.year == 2013, 'Test Result - (Year) ' + JSON.stringify(result.start) )
    ok(result.start.month == 6, 'Test Result - (Month) ' + JSON.stringify(result.start) )
    ok(result.start.day == 2, 'Test Result - (Day) ' + JSON.stringify(result.start) )
    ok(result.start.hour == 13, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
    ok(result.start.minute == 0, 'Test Result - (Minute) ' + JSON.stringify(result.start) )
    ok(result.start.second == 0, 'Test Result - (Second) ' + JSON.stringify(result.start) )
    
    ok(result.end.year  == 2013, 'Test Result - (Year) ' + JSON.stringify(result.end) )
  	ok(result.end.month == 6, 'Test Result - (Month) ' + JSON.stringify(result.end) )
  	ok(result.end.day   == 2, 'Test Result - (Day) ' + JSON.stringify(result.end) )
    ok(result.end.hour == 14, 'Test Result - (Hour) ' + JSON.stringify(result.end) )
  	ok(result.end.minute == 30, 'Test Result - (Minute) ' + JSON.stringify(result.end) )
  	ok(result.end.second == 0, 'Test Result - (Second) ' + JSON.stringify(result.end) )
  }
  
  
  var text = "11:15 tomorrow";
  var results = chrono.parse(text, new Date(2012,7,10,10));
  ok(results.length == 1, JSON.stringify( results ) )
  
  var result = results[0];
  if(result){
    ok(result.start, JSON.stringify(result) )
    ok(result.text == '11:15 tomorrow', JSON.stringify(result) )
    ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
    ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
    ok(result.start.day == 11, 'Test Result - (Day) ' + JSON.stringify(result.start) )
    ok(result.start.hour == 11, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
    ok(result.start.minute == 15, 'Test Result - (Minute) ' + JSON.stringify(result.start) )
    ok(result.start.second == 0, 'Test Result - (Second) ' + JSON.stringify(result.start) )
  }
  
  var text = "11:15 - 12.15 tomorrow";
  var results = chrono.parse(text, new Date(2012,7,10,10));
  ok(results.length == 1, JSON.stringify( results ) )
  
  var result = results[0];
  if(result){
    ok(result.start, JSON.stringify(result) )
    ok(result.text == '11:15 - 12.15 tomorrow', JSON.stringify(result) )
    ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
    ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
    ok(result.start.day == 11, 'Test Result - (Day) ' + JSON.stringify(result.start) )
    ok(result.start.hour == 11, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
    ok(result.start.minute == 15, 'Test Result - (Minute) ' + JSON.stringify(result.start) )
    ok(result.start.second == 0, 'Test Result - (Second) ' + JSON.stringify(result.start) )
    
    ok(result.end.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
    ok(result.end.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
    ok(result.end.day == 11, 'Test Result - (Day) ' + JSON.stringify(result.start) )
    ok(result.end.hour == 12, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
    ok(result.end.minute == 15, 'Test Result - (Minute) ' + JSON.stringify(result.start) )
    ok(result.end.second == 0, 'Test Result - (Second) ' + JSON.stringify(result.start) )
  }
  
  
  var text = "12.15 on 3/3/2012 - 3/4/2012";
  var results = chrono.parse(text, new Date(2012,7,10));
  ok(results.length == 1, JSON.stringify( results ) )
  
  var result = results[0];
  if(result){
    ok(result.start, JSON.stringify(result) )
    ok(result.text == '12.15 on 3/3/2012 - 3/4/2012', JSON.stringify(result) )
    ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
    ok(result.start.month == 2, 'Test Result - (Month) ' + JSON.stringify(result.start) )
    ok(result.start.day == 3, 'Test Result - (Day) ' + JSON.stringify(result.start) )
    ok(result.start.hour == 12, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
    ok(result.start.minute == 15, 'Test Result - (Minute) ' + JSON.stringify(result.start) )
    ok(result.start.second == 0, 'Test Result - (Second) ' + JSON.stringify(result.start) )
    
    ok(result.end.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
    ok(result.end.month == 2, 'Test Result - (Month) ' + JSON.stringify(result.start) )
    ok(result.end.day == 4, 'Test Result - (Day) ' + JSON.stringify(result.start) )
    ok(result.end.hour == 12, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
    ok(result.end.minute == 15, 'Test Result - (Minute) ' + JSON.stringify(result.start) )
    ok(result.end.second == 0, 'Test Result - (Second) ' + JSON.stringify(result.start) )
  }
  
  var text = "Tuesday, Jul 9, 5:30pm - 6:00pm (EDT) > Wednesday, Jul 10, 12:00";
  var results = chrono.parse(text, new Date(2012,7,10));
  ok(results.length == 2, JSON.stringify( results ) )
  
  var result = results[0];
  if(result){
    ok(result.start, JSON.stringify(result) )
    ok(result.text == 'Tuesday, Jul 9, 5:30pm - 6:00pm (EDT)', JSON.stringify(result) )
    ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
    ok(result.start.month == 6, 'Test Result - (Month) ' + JSON.stringify(result.start) )
    ok(result.start.day == 9, 'Test Result - (Day) ' + JSON.stringify(result.start) )
    ok(result.start.hour == 17, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
    ok(result.start.minute == 30, 'Test Result - (Minute) ' + JSON.stringify(result.start) )
    ok(result.start.second == 0, 'Test Result - (Second) ' + JSON.stringify(result.start) )
    
    ok(result.end.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
    ok(result.end.month == 6, 'Test Result - (Month) ' + JSON.stringify(result.start) )
    ok(result.end.day == 9, 'Test Result - (Day) ' + JSON.stringify(result.start) )
    ok(result.end.hour == 18, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
    ok(result.end.minute == 0, 'Test Result - (Minute) ' + JSON.stringify(result.start) )
    ok(result.end.second == 0, 'Test Result - (Second) ' + JSON.stringify(result.start) )
  }
  
  
  
});

test('Test - Timezone', function() {
  
  var expected = "Thu, 18 Jul 2013 11:33:14 GMT";
  var text = "Thu Jul 18 2013 20:33:14 GMT+0900 (JST)";
  
  var results = chrono.parse(text);
  ok(results.length == 1, JSON.stringify( results ) )
  ok(results[0].text == text, results[0].text);
  ok(results[0].start.date().getTime() == new Date(expected).getTime(), 
    results[0].start.date() +' != '+ new Date(expected));
  
  //Fri 19 Jul 2013 11:59 PM PDT (UTC -0700).
  //Sat Jul 20 2013 15:59:00 GMT+0900 (JST)
});


test("Test - General", function() {
	
	var text = "The Deadline is today";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		ok(result.index == 16, 'Wrong index')
		ok(result.text == 'today', result.text )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,10,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	var text = "The Deadline is Tomorrow";
	var results = chrono.parse(text, new Date(2012,7,10,12));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 11, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		ok(result.index == 16, 'Wrong index')
		ok(result.text == 'Tomorrow', result.text )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,11,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	var text = "The Deadline is Tomorrow 12.30pm";
	var results = chrono.parse(text, new Date(2013,5,26,0,40));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2013, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 5, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 26, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		ok(result.start.hour == 12, 'Test Result - (Hour) ' + JSON.stringify(result.start) )
		ok(result.start.minute == 30, 'Test Result - (Minute) ' + JSON.stringify(result.start) )
		
		ok(result.index == 16, 'Wrong index')
		ok(result.text == 'Tomorrow 12.30pm', result.text )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2013,5,26,12,30));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	var text = "The Deadline is yesterday";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 9, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		
		ok(result.index == 16, 'Wrong index')
		ok(result.text == 'yesterday', result.text )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,9,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	
	var text = "The Deadline is last night";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		ok(result.start.hour === 0, 'Test Result - (hour) ' + JSON.stringify(result.start) )
		
		ok(result.index == 16, 'Wrong index')
		ok(result.text == 'last night', result.text )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,10,0));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	
	var text = "The Deadline is last night at 22.30";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 9, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		ok(result.start.hour === 22, 'Test Result - (hour) ' + JSON.stringify(result.start) )
		ok(result.start.minute === 30, 'Test Result - (hour) ' + JSON.stringify(result.start) )
		
		ok(result.index == 16, 'Wrong index')
		ok(result.text == 'last night at 22.30', result.text )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,9,22,30));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	
	var text = "The Deadline is last night at 1:23 am";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
		ok(result.start.hour === 1, 'Test Result - (hour) ' + JSON.stringify(result.start) )
		ok(result.start.minute === 23, 'Test Result - (hour) ' + JSON.stringify(result.start) )
		
		ok(result.index == 16, 'Wrong index')
		ok(result.text == 'last night at 1:23 am', result.text )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,10,1,23));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	
	
	var text = "5 days ago, we did something";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )
	var result = results[0];
	if(result){
		ok(result.start, JSON.stringify(result.start) )
		ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
		ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
		ok(result.start.day == 5, 'Test Result - (Day) ' + JSON.stringify(result.start) )

		ok(result.index == 0, 'Wrong index')
		ok(result.text == '5 days ago', result.text )
		
		var resultDate = (result.startDate);
		var expectDate = (new Date(2012,7,5,12));
		ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
	}
	
	
	//Time only
	var text = "The Deadline is 12:00";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
  if(result){
    ok(result.start, JSON.stringify(result.start) )
    ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
    ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
    ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
    ok(result.start.hour === 12, 'Test Result - (hour) ' + JSON.stringify(result.start) )
    ok(result.start.minute === 00, 'Test Result - (hour) ' + JSON.stringify(result.start) )
    
    ok(result.text == '12:00', result.text )
    
    var resultDate = (result.startDate);
    var expectDate = (new Date(2012,7,10,12,00));
    ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
  }
	
	var text = "The Deadline is 11:00";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
  if(result){
    ok(result.start, JSON.stringify(result.start) )
    ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
    ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
    ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
    ok(result.start.hour === 11, 'Test Result - (hour) ' + JSON.stringify(result.start) )
    ok(result.start.minute === 00, 'Test Result - (hour) ' + JSON.stringify(result.start) )
    
    ok(result.text == '11:00', result.text )
    
    var resultDate = (result.startDate);
    var expectDate = (new Date(2012,7,10,11,00));
    ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
  }
	
	var text = "The Deadline is 11:00pm    ";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
  if(result){
    ok(result.start, JSON.stringify(result.start) )
    ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
    ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
    ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
    ok(result.start.hour === 23, 'Test Result - (hour) ' + JSON.stringify(result.start) )
    ok(result.start.minute === 00, 'Test Result - (hour) ' + JSON.stringify(result.start) )
    
    ok(result.text == '11:00pm', result.text )
    
    var resultDate = (result.startDate);
    var expectDate = (new Date(2012,7,10,23,00));
    ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
  }
	
	
	var text = "The Deadline is 11:00pm    ";
	var results = chrono.parse(text, new Date(2012,7,10));
	
	ok(results.length == 1, JSON.stringify( results ) )

	var result = results[0];
  if(result){
    ok(result.start, JSON.stringify(result.start) )
    ok(result.start.year == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
    ok(result.start.month == 7, 'Test Result - (Month) ' + JSON.stringify(result.start) )
    ok(result.start.day == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )
    ok(result.start.hour === 23, 'Test Result - (hour) ' + JSON.stringify(result.start) )
    ok(result.start.minute === 00, 'Test Result - (hour) ' + JSON.stringify(result.start) )
    
    ok(result.text == '11:00pm', result.text )
    
    var resultDate = (result.startDate);
    var expectDate = (new Date(2012,7,10,23,00));
    ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
  }
	
});

test("Test - General2", function() {
  
  var text = "monday 4/29/2013 630-930am";
  var result = chrono.parse(text)[0];
  ok(result.text == text, result.text)
  
  var text = "wednesday 5/1/2013 1115am";
  var result = chrono.parse(text)[0];
  ok(result.text == text, result.text)
  
  var text = "friday 5/3/2013 1230pm";
  var result = chrono.parse(text)[0];
  ok(result.text == text, result.text)
  
  var text = "sunday 5/6/2013  750am-910am";
  var result = chrono.parse(text)[0];
  ok(result.text == text, result.text)
  
  var text = "monday 5/13/2013 630-930am";
  var result = chrono.parse(text)[0];
  ok(result.text == text, result.text)
  
  var text = "wednesday 5/15/2013 1030am";
  var result = chrono.parse(text)[0];
  ok(result.text == text, result.text)
  
  var text = "friday 6/21/2013 2:30";
  var result = chrono.parse(text)[0];
  ok(result.text == text, result.text)
  
  var text = "tuesday 7/2/2013 1-230 pm";
  var result = chrono.parse(text)[0];
  ok(result.text == text, result.text)
  
  var text = "Monday, 6/24/2013, 7:00pm - 8:30pm";
  var result = chrono.parse(text)[0];
  ok(result.text == text, result.text)
  
  var text = "Thursday6/20/2013 from 7:00 PM to 10:00 PM";
  var result = chrono.parse(text)[0];
  ok(result.text == text, result.text)
  
  var text = "Wednesday, July 03, 2013 2pm";
  var result = chrono.parse(text)[0];
  ok(result.text == text, result.text)
  
  
  var text = "6pm";
  var result = chrono.parse(text)[0];
  ok(result.text == text, result.text)
  
  var text = "6 pm";
  var result = chrono.parse(text)[0];
  ok(result.text == text, result.text)
  
  var text = "7-10pm";
  var result = chrono.parse(text)[0];
  ok(result.text == text, result.text)
  
  var text = "11.1pm";
  var result = chrono.parse(text)[0];
  ok(result.text == text, result.text)
  
  var text = "that I need to know or am I covered?";
  var result = chrono.parse(text);
  ok(result.length == 0, result)
  
  
  
  /*
  */
  
});