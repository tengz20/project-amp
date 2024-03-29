define(['pipAPI', 'https://cdn.jsdelivr.net/gh/tengz20/project-amp@main/full_script.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Black people',  //Will be used in the user feedback 
				nameForLogging : 'Black people', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'b01.jpg'}, 
					{image : 'b02.jpg'}, 
					{image : 'b03.jpg'}, 
					{image : 'b04.jpg'}, 
					{image : 'b05.jpg'}, 
					{image : 'b06.jpg'}, 
					{image : 'b07.jpg'}, 
					{image : 'b08.jpg'}, 
					{image : 'b09.jpg'}, 
					{image : 'b10.jpg'}, 
					{image : 'b11.jpg'}, 
					{image : 'b12.jpg'}]

			}, 
			{
				nameForFeedback : 'White people',  //Will be used in the user feedback 
				nameForLogging : 'White people', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'n01.jpg'}, 
					{image : 'n02.jpg'}, 
					{image : 'n03.jpg'}, 
					{image : 'n04.jpg'}, 
					{image : 'n05.jpg'}, 
					{image : 'n06.jpg'}, 
					{image : 'n07.jpg'}, 
					{image : 'n08.jpg'}, 
					{image : 'n09.jpg'}, 
					{image : 'n10.jpg'}, 
					{image : 'n11.jpg'}, 
					{image : 'n12.jpg'}]
			}
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'ampchair.jpg'}, {image : 'amplamp.jpg'}, {image : 'ampumbrella.jpg'}]
		},

		base_url : {//Where are your images at?
			image : 'https://github.com/tengz20/project-amp/tree/main/images'
		}
	});
});
