const Ticket = function() {   
   
    const   buttonReservation            = document.querySelector( '.btn-reservation' ),
            name            = document.querySelector( '#name' ),
            lastName            = document.querySelector( '#last-name' ),
            phone           = document.querySelector( '#phone' ),
            state           = document.querySelector( '#state' ),
            alertMessage    = document.querySelector( '.alert-message-create' ),
            formTicket      = document.querySelector( '#form-ticket' );

    function _cleanClassError(){

        alertMessage.classList.add( 'd-none' );
        alertMessage.innerHTML = '';
        name.classList.remove( 'error' );
        lastName.classList.remove( 'error' );
        phone.classList.remove( 'error' );
        state.classList.remove( 'error' );
    }

    function create(){

        formTicket.addEventListener( 'submit', ( event ) =>{

            event.preventDefault();
            let error = 0;
            _cleanClassError();

            buttonReservation.innerHTML = 'APARTANDO...';
            buttonReservation.disabled = true;
            let msgText = "";

            if( name.value == '' ){
                
                error = 1;
                name.classList.add( 'error' );
                msgText += "El nombre(s) es obligatorio";
            }

            if( lastName.value == '' ){
                
                error = 1;
                lastName.classList.add( 'error' );
                msgText += "El apellido(s) es obligatorio";
            }

            if( phone.value == '' ){
                
                error = 1;
                phone.classList.add( 'error' );
                msgText += "<br>El whassap es obligatorio";
            }
            else{

                if( phone.value.length != 10 ){
                
                    error = 1;
                    phone.classList.add( 'error' );
                    msgText += "<br>El whassap debe ser de 10 digitos";
                }
                if( isNaN( phone.value ) ){

                    error = 1;
                    phone.classList.add( 'error' );
                    msgText += "<br>El whassap debe ser númerico";
                }
            }


            if( state.value == '' ){
                
                error = 1;
                state.classList.add( 'error' );
                msgText += "<br>El estado es obligatorio";
            }

            if( error != 1){

                document.getElementById( "form-ticket" ).submit();
            }
            else{

                alertMessage.innerHTML = msgText;

                alertMessage.classList.remove( 'd-none' );

                buttonReservation.innerHTML = 'RESERVAR';
                buttonReservation.disabled = false;
            }
        });
    }

    return {
        detail: function() {
        },
        init: function() {
            create();
        }
    }
}();