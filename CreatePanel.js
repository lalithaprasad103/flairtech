import React from 'react'
const CreatePanel =()=>{
  return(
      
      <div class="row">
        <h3 className="font-cursive">Create a Panel</h3>
      <form class="col s8">
        <div class="row">
          <div class="input-field col s6">
            <input id="input_text1" type="text" data-length="10"/>
            <label for="input_text1">Title</label>
          </div>
        </div> 
        <div class="row">
          <div class="input-field col s9">
          <input id="input_text1" type="text" data-length="120"/>
            <label for="input_text2">Content</label>
          </div>
        </div>
        <button type="submit" className="waves-effect waves-light btn">Create</button>
      </form>
    </div>
  )
}

export default CreatePanel