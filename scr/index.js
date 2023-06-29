const modal = $.modal({
    title: 'Keyboard Options',
    closable: true,
    content: `
        <div class="modal-form">
            <label for="name">Keyboard Name:</label><br>
            <input type="text" id="name" name="name" class="modal-form-field" placeholder="Input keyboard name..."/><br><br>
            <label for="type">Keyboard type :</label><br>
            <input type="text" id="type" name="type" class="modal-form-field" placeholder="Input keyboard type..."/><br><br>
            <label for="button">Keyboard buttons type:</label><br>
            <select id="button" name="button" class="modal-form-field">
            <option value="Mechanical">Mechanical</option>
            <option value="Membran">Membran</option>
            </select><br><br>
            <label for="color">Keyboard color:</label><br>
            <input type="text" id="color" name="color" class="modal-form-field" placeholder="Input color..."/><br><br>
            <label for="connect">Keyboard connectivity technology:</label><br>
            <input type="text" id="connect" name="connect" class="modal-form-field" placeholder="Input connect type..."/><br><br>
            </select><br><br>
            <div id= "img-prev-section">
                <img id="imgprev" src="" >
            </div>   
                <label for="file" id="label-select-img">Select image file:</label><br>
                <input type="file" id="imgfile" name="imgfile"><br><br>
            
            <button id="submitbtn" class="button" onclick="myFunction()">Update</button>
        </div> 
    `,
    width: '500px'
})








