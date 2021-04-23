document.querySelector("#fire").addEventListener('click', search)
document.querySelector("#clear").addEventListener('click', clear)


function clear () {
  const month = document.querySelector("#month").value = '';
  const day =   document.querySelector("#day").value = '';
  const year =  document.querySelector("#year").value = '';
  document.querySelector('body').style.backgroundImage ='';
  document.querySelector('#ohyeah').innerText = '';
  document.querySelector('#ohno').innerText = '';

}
function search() {

  const month = document.querySelector("#month").value
  const day =   document.querySelector("#day").value
  const year =  document.querySelector("#year").value


  const synth = window.speechSynthesis;


  if (month == 'march'  &&  day >= 21 || month == 'april' && day <= 19) {
    document.querySelector('#ohyeah').innerText = 'Your Horoscope'
    document.querySelector('#ohno').innerText = 'Aries!'

    let yellThis = new SpeechSynthesisUtterance('Welcome Aries');
    synth.speak(yellThis);

    document.querySelector('body').style.backgroundImage = "url(https://media.giphy.com/media/2tSihxRmUueteWP3vR/giphy.gif)"
        document.querySelector('body').style.color = 'white'
      } else if (month == 'March'  &&  day >= 21 || month == 'April' && day <= 19) {
        document.querySelector('#ohyeah').innerText = 'Your Horoscope'
        document.querySelector('#ohno').innerText = 'Aries!'

        let yellThis = new SpeechSynthesisUtterance('Welcome Aries');
        synth.speak(yellThis);

        document.querySelector('body').style.backgroundImage = "url(https://media.giphy.com/media/2tSihxRmUueteWP3vR/giphy.gif)"
            document.querySelector('body').style.color = 'white'
       }else if (month == 'april'  && day >= 20 || month == 'may'  && day <= 20){
      document.querySelector('#ohyeah').innerText = 'Your Horoscope'
      document.querySelector('#ohno').innerText = 'Taurus!'



            let yellThis = new SpeechSynthesisUtterance('Welcome Taurus');
            synth.speak(yellThis);

            document.querySelector('body').style.backgroundImage = "url(https://media.giphy.com/media/1xkcbQdXlUlq1w0g3N/giphy.gif)"
           document.querySelector('body').style.color = 'white'


        }else if (month == 'April'  && day >= 20 || month == 'May'  && day <= 20){
       document.querySelector('#ohyeah').innerText = 'Your Horoscope'
       document.querySelector('#ohno').innerText = 'Taurus!'



             let yellThis = new SpeechSynthesisUtterance('Welcome Taurus');
             synth.speak(yellThis);

             document.querySelector('body').style.backgroundImage = "url(https://media.giphy.com/media/1xkcbQdXlUlq1w0g3N/giphy.gif)"
            document.querySelector('body').style.color = 'white'


         }else if (month == 'may'  && day >= 21 || month == 'june'  && day <= 20){
            document.querySelector('#ohyeah').innerText = 'Your Horoscope'
            document.querySelector('#ohno').innerText = 'Gemini!'

            let yellThis = new SpeechSynthesisUtterance('Welcome Gemini');
            synth.speak(yellThis);

            document.querySelector('body').style.backgroundImage = "url(https://media.giphy.com/media/WS6BW3z670A7K2lm4S/giphy.gif)"
              document.querySelector('body').style.color = 'white'
        }else if (month == 'May'  && day >= 21 || month == 'June'  && day <= 20){
                 document.querySelector('#ohyeah').innerText = 'Your Horoscope'
                 document.querySelector('#ohno').innerText = 'Gemini!'

                 let yellThis = new SpeechSynthesisUtterance('Welcome Gemini');
                 synth.speak(yellThis);

                 document.querySelector('body').style.backgroundImage = "url(https://media.giphy.com/media/WS6BW3z670A7K2lm4S/giphy.gif)"
                   document.querySelector('body').style.color = 'white'
         }else if (month == 'june'  && day >= 21 || month == 'july'  && day <= 22){
             document.querySelector('#ohyeah').innerText = 'Your Horoscope'
             document.querySelector('#ohno').innerText = 'Cancer!'

             let yellThis = new SpeechSynthesisUtterance('Welcome Cancer');
             synth.speak(yellThis);

             document.querySelector('body').style.backgroundImage = "url(https://media.giphy.com/media/FsW0ShEaJGjl0u8Ik0/giphy.gif)"
                  document.querySelector('body').style.color = 'white'
          }else if (month == 'June'  && day >= 21 || month == 'July'  && day <= 22){
              document.querySelector('#ohyeah').innerText = 'Your Horoscope'
              document.querySelector('#ohno').innerText = 'Cancer!'

              let yellThis = new SpeechSynthesisUtterance('Welcome Cancer');
              synth.speak(yellThis);

              document.querySelector('body').style.backgroundImage = "url(https://media.giphy.com/media/FsW0ShEaJGjl0u8Ik0/giphy.gif)"
                   document.querySelector('body').style.color = 'white'
          }else if (month == 'july'  && day >= 23 || month == 'august'  && day <= 22){
              document.querySelector('#ohyeah').innerText = 'Your Horoscope'
              document.querySelector('#ohno').innerText = 'Leo!'

              let yellThis = new SpeechSynthesisUtterance('Welcome Leo');
              synth.speak(yellThis);

              document.querySelector('body').style.backgroundImage = "url(https://media.giphy.com/media/d7ne3linVUMZQfB8M5/giphy.gif)"
                   document.querySelector('body').style.color = 'white'
           }else if (month == 'July'  && day >= 23 || month == 'August'  && day <= 22){
               document.querySelector('#ohyeah').innerText = 'Your Horoscope'
               document.querySelector('#ohno').innerText = 'Leo!'

               let yellThis = new SpeechSynthesisUtterance('Welcome Leo');
               synth.speak(yellThis);

               document.querySelector('body').style.backgroundImage = "url(https://media.giphy.com/media/d7ne3linVUMZQfB8M5/giphy.gif)"
                    document.querySelector('body').style.color = 'white'
            }else if (month == 'august'  && day >= 23 || month == 'september'  && day <= 22){
               document.querySelector('#ohyeah').innerText = 'Your Horoscope'
               document.querySelector('#ohno').innerText = 'Virgo!'

               let yellThis = new SpeechSynthesisUtterance('Welcome Virgo');
               synth.speak(yellThis);

               document.querySelector('body').style.backgroundImage = "url(https://media.giphy.com/media/1yTgp7c89FqWwc2kzm/giphy.gif)"
                    document.querySelector('body').style.color = 'white'
            }else if (month == 'August'  && day >= 23 || month == 'September'  && day <= 22){
               document.querySelector('#ohyeah').innerText = 'Your Horoscope'
               document.querySelector('#ohno').innerText = 'Virgo!'

               let yellThis = new SpeechSynthesisUtterance('Welcome Virgo');
               synth.speak(yellThis);

               document.querySelector('body').style.backgroundImage = "url(https://media.giphy.com/media/1yTgp7c89FqWwc2kzm/giphy.gif)"
                    document.querySelector('body').style.color = 'white'
            }else if (month == 'september'  && day >= 23 || month == 'october'  && day <= 22){
                document.querySelector('#ohyeah').innerText = 'Your Horoscope'
                document.querySelector('#ohno').innerText = 'Libra!'

                let yellThis = new SpeechSynthesisUtterance('Welcome Libra');
                synth.speak(yellThis);

                document.querySelector('body').style.backgroundImage = "url(https://media.giphy.com/media/f9SiEl5QdgBdyOSMYX/giphy.gif)"
                     document.querySelector('body').style.color = 'white'
           }else if (month == 'September'  && day >= 23 || month == 'October'  && day <= 22){
               document.querySelector('#ohyeah').innerText = 'Your Horoscope'
               document.querySelector('#ohno').innerText = 'Libra!'

               let yellThis = new SpeechSynthesisUtterance('Welcome Libra');
               synth.speak(yellThis);

               document.querySelector('body').style.backgroundImage = "url(https://media.giphy.com/media/f9SiEl5QdgBdyOSMYX/giphy.gif)"
                    document.querySelector('body').style.color = 'white'
           }else if (month == 'october'  && day >= 23 || month == 'november'  && day <=21) {
               document.querySelector('#ohyeah').innerText = 'Your Horoscope'
               document.querySelector('#ohno').innerText = 'Scorpio!'

               let yellThis = new SpeechSynthesisUtterance('Welcome Scorpio');
               synth.speak(yellThis);

               document.querySelector('body').style.backgroundImage = "url(https://media.giphy.com/media/33KNW6bBorFzqdyLSP/giphy.gif)"
                    document.querySelector('body').style.color = 'white'
          }else if (month == 'October'  && day >= 23 || month == 'November'  && day <=21) {
              document.querySelector('#ohyeah').innerText = 'Your Horoscope'
              document.querySelector('#ohno').innerText = 'Scorpio!'

              let yellThis = new SpeechSynthesisUtterance('Welcome Scorpio');
              synth.speak(yellThis);

              document.querySelector('body').style.backgroundImage = "url(https://media.giphy.com/media/33KNW6bBorFzqdyLSP/giphy.gif)"
                   document.querySelector('body').style.color = 'white'
          }else if (month == 'november'  && day >= 22 || month == 'december'  && day <= 21){
              document.querySelector('#ohyeah').innerText = 'Your Horoscope'
              document.querySelector('#ohno').innerText = 'Sagittarius!'

              let yellThis = new SpeechSynthesisUtterance('Welcome Sagittarius');
                  synth.speak(yellThis);

                  document.querySelector('body').style.backgroundImage = "url(https://media.giphy.com/media/gIszyDPvwfPtyCfDyK/giphy.gif)"
                       document.querySelector('body').style.color = 'white'
           }else if (month == 'November'  && day >= 22 || month == 'December'  && day <= 21){
               document.querySelector('#ohyeah').innerText = 'Your Horoscope'
               document.querySelector('#ohno').innerText = 'Sagittarius!'

               let yellThis = new SpeechSynthesisUtterance('Welcome Sagittarius');
                   synth.speak(yellThis);

                   document.querySelector('body').style.backgroundImage = "url(https://media.giphy.com/media/gIszyDPvwfPtyCfDyK/giphy.gif)"
                        document.querySelector('body').style.color = 'white'
           }else if (month == 'december'  && day >= 22 || month == 'january'  && day <= 19){
               document.querySelector('#ohyeah').innerText = 'Your Horoscope'
               document.querySelector('#ohno').innerText = 'Capricorn!'

               let yellThis = new SpeechSynthesisUtterance('Welcome Capricorn');
               synth.speak(yellThis);

               document.querySelector('body').style.backgroundImage = "url(https://media.giphy.com/media/1gdqABrBFlOAvvn1LZ/giphy.gif)"
                    document.querySelector('body').style.color = 'white'
           }else if (month == 'December'  && day >= 22 || month == 'January'  && day <= 19){
               document.querySelector('#ohyeah').innerText = 'Your Horoscope'
               document.querySelector('#ohno').innerText = 'Capricorn!'

               let yellThis = new SpeechSynthesisUtterance('Welcome Capricorn');
               synth.speak(yellThis);

               document.querySelector('body').style.backgroundImage = "url(https://media.giphy.com/media/1gdqABrBFlOAvvn1LZ/giphy.gif)"
                    document.querySelector('body').style.color = 'white'
           }else if (month == 'january'  && day >= 20 || month == 'february'  && day <= 18){
               document.querySelector('#ohyeah').innerText = 'Your Horoscope'
               document.querySelector('#ohno').innerText = 'Aquarius!'

               let yellThis = new SpeechSynthesisUtterance('Welcome Aquarius');
               synth.speak(yellThis);

               document.querySelector('body').style.backgroundImage = "url(https://media.giphy.com/media/5n5JFYpkfjA1ZgnUTq/giphy.gif)"
                    document.querySelector('body').style.color = 'white'
          }else if (month == 'January'  && day >= 20 || month == 'February'  && day <= 18){
              document.querySelector('#ohyeah').innerText = 'Your Horoscope'
              document.querySelector('#ohno').innerText = 'Aquarius!'

              let yellThis = new SpeechSynthesisUtterance('Welcome Aquarius');
              synth.speak(yellThis);

              document.querySelector('body').style.backgroundImage = "url(https://media.giphy.com/media/5n5JFYpkfjA1ZgnUTq/giphy.gif)"
                   document.querySelector('body').style.color = 'white'
          }else if (month == 'february'  && day >= 19 || month == 'march'  && day <= 20) {
              document.querySelector('#ohyeah').innerText = 'Your Horoscope'
              document.querySelector('#ohno').innerText = 'Pisces!'

              let yellThis = new SpeechSynthesisUtterance('Welcome Pisces');
              synth.speak(yellThis);

              document.querySelector('body').style.backgroundImage = "url(https://media.giphy.com/media/NTTpnGvFPHjVrPiutx/giphy.gif)"
                   document.querySelector('body').style.color = 'white'
      }else if (month == 'February'  && day >= 19 || month == 'March'  && day <= 20) {
          document.querySelector('#ohyeah').innerText = 'Your Horoscope'
          document.querySelector('#ohno').innerText = 'Pisces!'

          let yellThis = new SpeechSynthesisUtterance('Welcome Pisces');
          synth.speak(yellThis);

          document.querySelector('body').style.backgroundImage = "url(https://media.giphy.com/media/NTTpnGvFPHjVrPiutx/giphy.gif)"
               document.querySelector('body').style.color = 'white'
        }
}
