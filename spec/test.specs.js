describe('LimeSharp Application', function() {
	/*
		Run all the tasks for LimeSharp Application
	*/
	describe('Should run two functions', function() {
		
		/**
		 *	TestCases for Repeat and Reformat functions 
		 **/
		 
		const NUM_REPEAT = 3;

		/**
			 Test Case For Task#1
		*/
		describe('Task-1- Repeat 3 times content of array', function() {
			
			it('Pass Numerical value', function(){
				let arrayNum=[1,2,3];
				var actual = repeat(arrayNum);
				
				
				var expected=[1,2,3,1,2,3,1,2,3];
				
				expect(expected).to.eql(actual);
			});
			it('Pass wrong data', function(){
				let arrayNum=[1,2,3];
				var actual = repeat(arrayNum);
				
				
				var expected=[1,2,3,1,2,3,1,2,3,4];
				
				expect(expected).to.not.eql(actual);
			});
			it('Pass String data', function(){
				let arrayNum=['Kamal','Test1','Test2'];
				var actual = repeat(arrayNum);
				
				var expected=['Kamal', 'Test1','Test2','Kamal', 'Test1','Test2','Kamal', 'Test1','Test2'];
				
				expect(expected).to.eql(actual);
			});
			it('Pass String And Numbers data', function(){
				let arrayNum=['Kamal',1,'Test2'];
				var actual = repeat(arrayNum);
				
				var expected=['Kamal', 1,'Test2','Kamal', 1,'Test2','Kamal', 1,'Test2'];
				
				expect(expected).to.eql(actual);
			});
			it('Pass empty data', function(){
				let arrayNum=[];
				var actual = repeat(arrayNum);
				
				expect(actual).to.be.empty;
			});			
		});
		
		/**
			 Test Case for Company  User
		*/
		
		describe('Task-2-Remove Vowel and FirstCase as Capital', function() {
			
			it('Pass string data', function(){
				var string = 'liMeSHArp DeveLoper TEST'
				var actual = reformat(string);
				
				var expected= 'Lmshrp dvlpr tst';
				expect(expected).to.equal(actual);
			});
			
			it('pass First letter as String', function(){
				var string = 'LiMeSHArk OwNer REST'
				var actual = reformat(string);
				
				var expected= 'Lmshrk wnr rst';
				expect(expected).to.equal(actual);
			});	
			it('pass First letter as Number', function(){
				var string = '23iMeSHArk ONer REST'
				var actual = reformat(string);
				
				var expected= '23mshrk nr rst';
				expect(expected).to.equal(actual);
			});	
			it('pass First letter as character and numbers', function(){
				var string = '45iMeSHArk O#er R@ST'
				var actual = reformat(string);
				
				var expected= '45mshrk #r r@st';
				expect(expected).to.equal(actual);
			});	
		
		});
	});
});