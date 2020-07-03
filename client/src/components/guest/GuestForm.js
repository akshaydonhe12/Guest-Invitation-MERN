import React, {useState} from 'react';

const GuestForm = () => {
  const [guest, setGuest] = useState({
    name:'',
    phone:'',
    dietary:'Non-Veg'
  })

const {name, phone, dietary} = guest

const handelChange = e => {
  setGuest({
    ...guest,
    [e.target.name]:e.target.value
  })
}

const onsubmit = e => {
  e.preventDefault()
 {/* console.log(guest) */}
  setGuest({
    name:'',
    phone:'',
    dietary:'Non-Veg'
  })
}

return (
   <div className="invite-section">
      <h1>Invite Here</h1>
      <form onSubmit={onsubmit}>
          <input type="text" placeholder="Name" name="name" value={name} onChange={handelChange} />
          <input type="text" placeholder="Phone" name="phone" value={phone} onChange={handelChange} />
          <p className="options-label">Dietary</p>

    <div className="options">
      <label className="container">Non-veg
        <input type="radio" name="dietary" Value='Non-Veg' checked={dietary=== 'Non-Veg'} onChange={handelChange} />
        <span className="checkmark"></span>
      </label>

      <label className="container">Vegan
        <input type="radio" name="dietary" Value='Vegan' onChange={handelChange} />
        <span className="checkmark"></span>
      </label>

      <label className="container">Pescetarians
        <input type="radio" name="dietary" Value='Pescetarians' onChange={handelChange} />
        <span className="checkmark"></span>
      </label>
    </div>

        <input type="submit" value="Add Guest" className="btn" />
    </form>
  </div>
  )
}

export default GuestForm
