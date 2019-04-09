/*
|--------------------------------------------------------------------------
	Quotation Booking - Multi Step Quotation Booking Request PHP Form For Cleaning Service Script Main JS
	Author: MGScoder
	Author URL: https://codecanyon.net/user/mgscoder
|--------------------------------------------------------------------------
*/

	document.addEventListener("touchstart", function() {},false);
	(function ($) {
		"use strict";

		/*
        |--------------------------------------------------------------------------
            Math Captcha
        |--------------------------------------------------------------------------
        */
		$(function(){

			var randNumber_1 = parseInt( Math.ceil( Math.random() * 15 ), 10 );
			var randNumber_2 = parseInt( Math.ceil( Math.random() * 15 ), 10 );
			humanCheckCaptcha(randNumber_1, randNumber_2);

		});
		function humanCheckCaptcha(randNumber_1, randNumber_2){
			$( "#humanCheckCaptchaBox" ).html( "Solve The Math " );
			$( "#firstDigit" ).html( '<input name="mathfirstnum" id="mathfirstnum" class="form-control" type="text" value="' + randNumber_1 + '" readonly>' );
			$( "#secondDigit" ).html( '<input name="mathsecondnum" id="mathsecondnum" class="form-control" type="text" value="' + randNumber_2 + '" readonly>' );
		}

		/*
        |--------------------------------------------------------------------------
            Datepicker Calendar
        |--------------------------------------------------------------------------
        */
		$(function(){

			$('#preferred-date input').datepicker({
				format: "dd MM, yyyy",
				startDate: "0d",
				todayBtn: "linked",
				todayHighlight: true,
				autoclose: true
			});

		});

		/*
        |--------------------------------------------------------------------------
            QuoteForm
        |--------------------------------------------------------------------------
        */
            $("#QuoteForm").validator().on("submit", function (event) {
                if (event.isDefaultPrevented()) {
                    //handle the invalid form...
                    formError();
                    submitMSG(false, "Please fill in the form properly!");
                    sweetAlert("Oops...", "Please fill in the form properly!!!", "error");
                } else {
                    var mathPart_1 = parseInt( $("#mathfirstnum").val(), 10 );
                    var mathPart_2 = parseInt( $("#mathsecondnum").val(), 10 );
                    var correctMathSolution = parseInt( ( mathPart_1 + mathPart_2 ), 10 );
                    var inputHumanAns = $("#humanCheckCaptchaInput").val();
                    if (inputHumanAns == correctMathSolution){
                        //everything looks good!
                        //event.preventDefault();
                        //submitForm();
                    }
                    else{
                        submitMSG(false, "Please solve Human Captcha!!!");
                        sweetAlert("Oops...", "Please solve Human Captcha!!!", "error");
                        return false;
                    }
                }
            });

            function submitForm(){
                var form_data = new FormData($("#QuoteForm")[0]);
                form_data.append('file', form_data);

                $('#processing-image').show();
                $('#final-step-buttons').hide();

                $.ajax({
                    type: "POST",
                    url: "register",
                    data : form_data,
                    processData: false,
                    contentType: false,
                    success : function(text){
                        if (text === "success"){
                            formSuccess();
                        } else {
                            formError();
                            submitMSG(false,text);
                            sweetAlert("Oops...", text, "error");
                        }
                    },
                    complete: function(){
                        $('#processing-image').hide();
                        $('#final-step-buttons').show();
                    }
                });
            }

		//attachment
		$(function() {

			$(document).on('change', ':file', function() {
				var input = $(this),
					numFiles = input.get(0).files ? input.get(0).files.length : 1,
					label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
				input.trigger('fileselect', [numFiles, label]);
			});

			$(':file').on('fileselect', function(event, numFiles, label) {

				var input = $(this).parents('.form-group').find(':text'),
					log = numFiles > 1 ? numFiles + ' files selected' : label;

				if( input.length ) {
					input.val(log);
				} else {
					if( log ) alert(log);
				}

			});

		});

		function formSuccess(){
			$("#QuoteForm")[0].reset();
			$( "#section-5 #lastsection-laststep" ).addClass( "active" );
			submitMSG(true, "Your Quotation Request Submitted Successfully!!!");
			swal("Good job!", "Your Quotation Request Submitted Successfully!!!");
		}

		function formError(){
			$(".help-block.with-errors").removeClass('hidden');
		}

		function submitMSG(valid, msg){
			if(valid){
				var msgClasses = "h3 text-center text-success";
				$( "#final-step-buttons" ).html( '<div class="h3 text-center text-success"> Tahnk you for your concern. We will get back to you very soon!</div>' );
			} else {
				var msgClasses = "h3 text-center text-danger";
			}
			$("#mgsContactSubmit").removeClass().addClass(msgClasses).text(msg);
		}

	})(jQuery);

	/*
    |--------------------------------------------------------------------------
        Step by Step Validation
    |--------------------------------------------------------------------------
    */

	function isEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}

	function nextStep2() {

		var servicetype = $('input[name=servicetype]:checked').val();
		var cleaningtype = $('input[name=cleaningtype]:checked').val();
		var propertyaddress = $("#propertyaddress").val();

		if( servicetype )
			$( ".validservicetype .help-block.with-errors" ).html( '' );
		else
			$( ".validservicetype .help-block.with-errors" ).html( '<ul class="list-unstyled"><li>Please Select Property Type</li></ul>' );

		if( cleaningtype )
			$( ".validcleaningtype .help-block.with-errors" ).html( '' );
		else
			$( ".validcleaningtype .help-block.with-errors" ).html( '<ul class="list-unstyled"><li>Please Select Cleaning Type</li></ul>' );

		if( propertyaddress )
			$( ".validpropertyaddress .help-block.with-errors" ).html( '' );
		else
			$( ".validpropertyaddress .help-block.with-errors" ).html( '<ul class="list-unstyled"><li>Please enter Property Address</li></ul>' );

		if( servicetype && cleaningtype && propertyaddress.length > 0 && propertyaddress ) {
			$( "#section-1 .help-block.with-errors" ).html( '' );
			$( "#section-1" ).removeClass( "open" );
			$( "#section-1" ).addClass( "slide-left" );
			$( "#section-2" ).removeClass( "slide-right" );
			$( "#section-2" ).addClass( "open" );
		}
		else {
			$( "#section-1 .help-block.with-errors.mandatory-error" ).html( '<ul class="list-unstyled"><li>Please Fill the Form Properly!!!</li></ul>' );
			sweetAlert("Oops...", "Please Fill the Form Properly!!!", "error");
		}

	}
	function previousStep1() {
		$( "#section-1" ).removeClass( "slide-left" );
		$( "#section-1" ).addClass( "open" );
		$( "#section-2" ).removeClass( "open" );
		$( "#section-2" ).addClass( "slide-right" );
	}
	function nextStep3() {

		var propertysize = $('input[name=propertysize]:checked').val();
		var bedrooms = $('input[name=bedrooms]:checked').val();
		var bathrooms = $('input[name=bathrooms]:checked').val();
		var bathtubs = $('input[name=bathtubs]:checked').val();
		var sittingroom = $('input[name=sittingroom]:checked').val();
		var diningroom = $('input[name=diningroom]:checked').val();
		var kitchen = $('input[name=kitchen]:checked').val();
		var oven = $('input[name=oven]:checked').val();
		var kitchenitem = '';
		$('.validkitchenitems input[type=checkbox]:checked').each(function(){
			var kivalues = $(this).val();
			kitchenitem += kivalues + ', ';
		});
		var kitchenitems = kitchenitem.slice(0,-2);

		if( propertysize )
			$( ".validpropertysize .help-block.with-errors" ).html( '' );
		else
			$( ".validpropertysize .help-block.with-errors" ).html( '<ul class="list-unstyled"><li>Please Select ProPerty Size</li></ul>' );

		if( bedrooms )
			$( ".validbedrooms .help-block.with-errors" ).html( '' );
		else
			$( ".validbedrooms .help-block.with-errors" ).html( '<ul class="list-unstyled"><li>Please Select Bedrooms</li></ul>' );

		if( bathrooms )
			$( ".validbathrooms .help-block.with-errors" ).html( '' );
		else
			$( ".validbathrooms .help-block.with-errors" ).html( '<ul class="list-unstyled"><li>Please Select Bathrooms</li></ul>' );

		if( bathtubs )
			$( ".validbathtubs .help-block.with-errors" ).html( '' );
		else
			$( ".validbathtubs .help-block.with-errors" ).html( '<ul class="list-unstyled"><li>Please Select Bath Tubs</li></ul>' );

		if( sittingroom )
			$( ".validsittingroom .help-block.with-errors" ).html( '' );
		else
			$( ".validsittingroom .help-block.with-errors" ).html( '<ul class="list-unstyled"><li>Please Select Sitting/Conference Room</li></ul>' );

		if( diningroom )
			$( ".validdiningroom .help-block.with-errors" ).html( '' );
		else
			$( ".validdiningroom .help-block.with-errors" ).html( '<ul class="list-unstyled"><li>Please Select Dining Room</li></ul>' );

		if( kitchen )
			$( ".validkitchen .help-block.with-errors" ).html( '' );
		else
			$( ".validkitchen .help-block.with-errors" ).html( '<ul class="list-unstyled"><li>Please Select Kitchen</li></ul>' );

		if( oven )
			$( ".validoven .help-block.with-errors" ).html( '' );
		else
			$( ".validoven .help-block.with-errors" ).html( '<ul class="list-unstyled"><li>Please Select Oven</li></ul>' );

		if( kitchenitems )
			$( ".validkitchenitems .help-block.with-errors" ).html( '' );
		else
			$( ".validkitchenitems .help-block.with-errors" ).html( '<ul class="list-unstyled"><li>Please Select Kitchen Items</li></ul>' );

		if( propertysize && bedrooms && bathrooms && bathtubs && sittingroom && diningroom && kitchen && oven && kitchenitems ) {
			$( "#section-2 .help-block.with-errors.mandatory-error" ).html( '' );
			$( "#section-2" ).removeClass( "open" );
			$( "#section-2" ).addClass( "slide-left" );
			$( "#section-3" ).removeClass( "slide-right" );
			$( "#section-3" ).addClass( "open" );
		}
		else {
			$( "#section-2 .help-block.with-errors.mandatory-error" ).html( '<ul class="list-unstyled"><li>Please Fill the Form Properly!!!</li></ul>' );
			sweetAlert("Oops...", "Please Fill the Form Properly!!!", "error");
		}

	}
	function previousStep2() {
		$( "#section-2" ).removeClass( "slide-left" );
		$( "#section-2" ).addClass( "open" );
		$( "#section-3" ).removeClass( "open" );
		$( "#section-3" ).addClass( "slide-right" );
	}
	function nextStep4() {

		var frequencycleaning = $('input[name=frequencycleaning]:checked').val();
		var preferredtime = $('input[name=preferredtime]:checked').val();
		var priority = $('input[name=priority]:checked').val();
		var preferreddate = $("#preferreddate").val();
		var preferredday = '';
		$('.validpreferreddays input[type=checkbox]:checked').each(function(){
			var pdvalues = $(this).val();
			preferredday += pdvalues + ', ';
		});
		var preferreddays = preferredday.slice(0,-2);


		if( frequencycleaning )
			$( ".validfrequencycleaning .help-block.with-errors" ).html( '' );
		else
			$( ".validfrequencycleaning .help-block.with-errors" ).html( '<ul class="list-unstyled"><li>Please Select Frequency of Cleaning</li></ul>' );

		if( preferreddays )
			$( ".validpreferreddays .help-block.with-errors" ).html( '' );
		else
			$( ".validpreferreddays .help-block.with-errors" ).html( '<ul class="list-unstyled"><li>Please Select Preferred Day(s)</li></ul>' );

		if( preferredtime )
			$( ".validpreferredtime .help-block.with-errors" ).html( '' );
		else
			$( ".validpreferredtime .help-block.with-errors" ).html( '<ul class="list-unstyled"><li>Please Select Preferred Time</li></ul>' );

		if( priority )
			$( ".validpriority .help-block.with-errors" ).html( '' );
		else
			$( ".validpriority .help-block.with-errors" ).html( '<ul class="list-unstyled"><li>Please Select Priority</li></ul>' );

		if( preferreddate )
			$( ".validpreferreddate .help-block.with-errors" ).html( '' );
		else
			$( ".validpreferreddate .help-block.with-errors" ).html( '<ul class="list-unstyled"><li>Please Select Preferred Date</li></ul>' );

		if( frequencycleaning && preferreddays && preferredtime && priority && preferreddate) {
			$( "#section-3 .help-block.with-errors.mandatory-error" ).html( '' );
			$( "#section-3" ).removeClass( "open" );
			$( "#section-3" ).addClass( "slide-left" );
			$( "#section-4" ).removeClass( "slide-right" );
			$( "#section-4" ).addClass( "open" );
		}
		else {
			$( "#section-3 .help-block.with-errors.mandatory-error" ).html( '<ul class="list-unstyled"><li>Please Fill the Form Properly!!!</li></ul>' );
			sweetAlert("Oops...", "Please Fill the Form Properly!!!", "error");
		}

	}
	function previousStep3() {
		$( "#section-3" ).removeClass( "slide-left" );
		$( "#section-3" ).addClass( "open" );
		$( "#section-4" ).removeClass( "open" );
		$( "#section-4" ).addClass( "slide-right" );
	}
	function nextStep5() {

		//inputed value
		var servicetype = $('input[name=servicetype]:checked').val();
		var cleaningtype = $('input[name=cleaningtype]:checked').val();
		var propertyaddress = $("#propertyaddress").val();
		var propertysize = $('input[name=propertysize]:checked').val();
		var bedrooms = $('input[name=bedrooms]:checked').val();
		var bathrooms = $('input[name=bathrooms]:checked').val();
		var bathtubs = $('input[name=bathtubs]:checked').val();
		var sittingroom = $('input[name=sittingroom]:checked').val();
		var diningroom = $('input[name=diningroom]:checked').val();
		var kitchen = $('input[name=kitchen]:checked').val();
		var oven = $('input[name=oven]:checked').val();

		var kitchenitem = '';
		$('.validkitchenitems input[type=checkbox]:checked').each(function(){
			var kivalues = $(this).val();
			kitchenitem += kivalues + ', ';
		});
		var kitchenitems = kitchenitem.slice(0,-2);

		var frequencycleaning = $('input[name=frequencycleaning]:checked').val();

		var preferredday = '';
		$('.validpreferreddays input[type=checkbox]:checked').each(function(){
			var pdvalues = $(this).val();
			preferredday += pdvalues + ', ';
		});
		var preferreddays = preferredday.slice(0,-2);

		var preferredtime = $('input[name=preferredtime]:checked').val();
		var priority = $('input[name=priority]:checked').val();
		var preferreddate = $("#preferreddate").val();
		var requirementdetails = $("#requirementdetails").val();
		var additionalinfo = $("#additionalinfo").val();
		var fname = $("#fname").val();
		var lname = $("#lname").val();
		var gender = $("#gender").val();
		var address = $("#address").val();
		var email = $("#email").val();
		var phone = $("#phone").val();
		var attachedFile = $("#attachedFile").val();
		var preferedcontact = $('input[name=preferedcontact]:checked').val();
		var validemail = isEmail(email);

		//write inputed data
		$( "#servicetypeData" ).html( '<strong>Selected Property Type:</strong> '+ servicetype );
		$( "#cleaningtypeData" ).html( '<strong>Selected Cleaning Type:</strong> '+ cleaningtype );
		$( "#propertyaddressData" ).html( '<strong>Property Address:</strong> '+ propertyaddress );
		$( "#propertysizeData" ).html( '<strong>ProPerty Size (sq. ft.):</strong> '+ propertysize );
		$( "#bedroomsData" ).html( '<strong>Bedrooms:</strong> '+ bedrooms );
		$( "#bathroomsData" ).html( '<strong>Bathrooms:</strong> '+ bathrooms );
		$( "#bathtubsData" ).html( '<strong>Bath Tubs:</strong> '+ bathtubs );
		$( "#sittingroomData" ).html( '<strong>Sitting/Conference Room:</strong> '+ sittingroom );
		$( "#diningroomData" ).html( '<strong>Dining Room:</strong> '+ diningroom );
		$( "#kitchenData" ).html( '<strong>Kitchen:</strong> '+ kitchen );
		$( "#ovenData" ).html( '<strong>Oven:</strong> '+ oven );
		$( "#kitchenitemsData" ).html( '<strong>Kitchen Items:</strong> '+ kitchenitems );
		$( "#frequencycleaningData" ).html( '<strong>Frequency of Cleaning:</strong> '+ frequencycleaning );
		$( "#preferreddaysData" ).html( '<strong>Preferred Day(s):</strong> '+ preferreddays );
		$( "#preferredtimeData" ).html( '<strong>Preferred Time:</strong> '+ preferredtime );
		$( "#priorityData" ).html( '<strong>Priority:</strong> '+ priority );
		$( "#preferreddateData" ).html( '<strong>Preferred Date:</strong> '+ preferreddate );
		$( "#requirementdetailsData" ).html( '<strong>Requirement Details:</strong> '+ requirementdetails );
		$( "#additionalinfoData" ).html( '<strong>Additional Info:</strong> '+ additionalinfo );
		$( "#firstNameData" ).html( '<strong>First Name:</strong> '+ fname );
		$( "#lastNameData" ).html( '<strong>Last Name:</strong> '+ lname );
		$( "#genderData" ).html( '<strong>Gender:</strong> '+ gender );
		$( "#addressData" ).html( '<strong>Address:</strong> '+ address );
		$( "#emailaddressData" ).html( '<strong>email:</strong> '+ email );
		$( "#phoneData" ).html( '<strong>Phone:</strong> '+ phone );
		$( "#preferedcontactData" ).html( '<strong>Preferred Contact Method:</strong> '+ preferedcontact );

		if( requirementdetails.length > 0 && requirementdetails )
			$( ".validreqdetails .help-block.with-errors" ).html( '' );
		else
			$( ".validreqdetails .help-block.with-errors" ).html( '<ul class="list-unstyled"><li>Please Provide Requirement Details</li></ul>' );

		if( fname )
			$( ".validfname .help-block.with-errors" ).html( '' );
		else
			$( ".validfname .help-block.with-errors" ).html( '<ul class="list-unstyled"><li>Please enter First Name</li></ul>' );

		if( lname )
			$( ".validlname .help-block.with-errors" ).html( '' );
		else
			$( ".validlname .help-block.with-errors" ).html( '<ul class="list-unstyled"><li>Please enter Last Name</li></ul>' );

		if( gender )
			$( ".validgender .help-block.with-errors" ).html( '' );
		else
			$( ".validgender .help-block.with-errors" ).html( '<ul class="list-unstyled"><li>Please Select Gender</li></ul>' );

		if( address )
			$( ".validaddress .help-block.with-errors" ).html( '' );
		else
			$( ".validaddress .help-block.with-errors" ).html( '<ul class="list-unstyled"><li>Please enter Address</li></ul>' );

		if( validemail )
			$( ".validemail .help-block.with-errors" ).html( '' );
		else
			$( ".validemail .help-block.with-errors" ).html( '<ul class="list-unstyled"><li>Please enter valid email</li></ul>' );

		var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
		if (filter.test(phone)) {
			$( ".validphone .help-block.with-errors" ).html( '' );
			var validphone = 1;
		}
		else{
			$( ".validphone .help-block.with-errors" ).html( '<ul class="list-unstyled"><li>Please enter valid Phone</li></ul>' );
			var validphone = 0;
		}

		if( preferedcontact )
			$( ".validpreferedcontact .help-block.with-errors" ).html( '' );
		else
			$( ".validpreferedcontact .help-block.with-errors" ).html( '<ul class="list-unstyled"><li>Please Select Prefered Contact Method</li></ul>' );

		if( $('#aggre').is(":checked") )
			$( ".validagree .help-block.with-errors" ).html( '' );
		else
			$( ".validagree .help-block.with-errors" ).html( '<ul class="list-unstyled"><li>Please Aggre with terms &amp; conditions</li></ul>' );

		if (requirementdetails.length > 0 && requirementdetails && fname.length > 0 && fname && lname.length > 0 && lname && gender && address.length > 0 && address && validemail && phone.length > 4 && validphone > 0 && preferedcontact && $('#aggre').is(":checked")) {
			$( "#section-4 .help-block.with-errors.mandatory-error" ).html( '' );
			$( "#section-4" ).removeClass( "open" );
			$( "#section-4" ).addClass( "slide-left" );
			$( "#section-5" ).removeClass( "slide-right" );
			$( "#section-5" ).addClass( "open" );
		}
		else {
			$( "#section-4 .help-block.with-errors.mandatory-error" ).html( '<ul class="list-unstyled"><li>Please Fill the Form Properly!!!</li></ul>' );
			sweetAlert("Oops...", "Please Fill the Form Properly!!!", "error");
		}

	}
	function previousStep4() {
		$("#section-4").removeClass("slide-left");
		$("#section-4").addClass("open");
		$("#section-5").removeClass("open");
		$("#section-5").addClass("slide-right");
	}

/*
|--------------------------------------------------------------------------
	End
|--------------------------------------------------------------------------
*/