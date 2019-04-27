$( document ).ready(function() {

  const fileId = '1stX3-Tl4fBGw425tso4dyBOosXZ2Duv_2lB4cn2xd2M'
  const url = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`
  let fileData = ''

  $.ajax({
            url: URL,
            type: 'GET',
            // dataType: 'json',
            headers: {
                Authorization: 'Bearer ya29.Glv4Buc418KQQGctXHtm_kANxkUqALWr-UbH5JvPMAgW6lONsgCD6TMiyaVgW1xeUOgRxfUHDspWv77LmvdU3x4bw6Xmc5DlpMl0bm9Bk2roFO_oJyAPna07xxf7'
            },
            // contentType: 'application/json; charset=utf-8',
            success: function (result) {
              console.log('zuccess');
              console.log({result});
               // CallBack(result);
            },
            error: function (error) {
              console.error({error});
            }
        });

  let string = ''
  for (let i = 0; i < CHARACTERS.length; i++){
    const character = CHARACTERS[i]
    if (character) {
      string += `
      <li class="row">
        <div class="character">
          <div class="character-header">${character.name}</div>
          <div>${character.description}</div>
        </div>
          <div class='input-wrapper'>
            <input type='radio' name='${character.id}' class='survive' value='0' data-score='0' checked/>
          </div>
          <div class='input-wrapper'>
            <input type='radio' name='${character.id}' class='maybe' value='1' data-score='1'/>
          </div>
          <div class='input-wrapper'>
            <input type='radio' name='${character.id}' class='probably' value='2' data-score='2'/>
          </div>
          <div class='input-wrapper'>
            <input type='radio' name='${character.id}' class='definitely' value='4' data-score='4'/>
          </div>
      </li>
      `
    }
  }

  $('.checkbox-form').prepend(string)

  $('.check-form').click((e) => {
    e.preventDefault()
    const form = $("form").serializeArray()
    console.log({e});
    console.log({form});
  })



})
