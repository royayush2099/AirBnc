import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Perks from "../Perks";

const PlacesPage = () => {
  const { action } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhoto, setAddedPhoto] = useState([]);
  const [photoLink, setPhotoLink] = useState("");
  const [description, setDescription] = useState("");
  const [perks,setPerks] = useState([]);
  const [extrainfo,setExtraInfo] = useState('');
  const [checkin,setCheckIn] = useState('');
  const [checkout,setCheckOut] = useState('');
  const [maxGuest,setMaxGuests] = useState(1);
  function inputHeader(text){
    return ( <h2 className="text-2xl mt-4">{text}</h2>);
  };
  function inputDescription (text){
    return ( <p className="text-gray-500 text-sm">
     {text}
    </p>); 
  };
  function preInput(header,description){
return(
  <>
  {inputHeader(header)}
  {inputDescription(description)}
  </>
);
  }
  return (
    <div>
      {action !== "new" && (
        <div className="text-center">
          <Link
            className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
            to={"/account/places/new"}
          >
            {/**this is like when we click on accommodations it will take us to this link */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add New Place
          </Link>
        </div>
      )}
      {action === "new" && (
        <div>
          <form>
            {preInput('Title',' Title for your place. Should be catchy, like in advertisements.')}
          
            <input
              type="text"
              value={title}
              onChange={ev => setTitle(ev.target.value)}
              placeholder="Title, for example: My Lovely Apartment"
              className="w-full p-2 border rounded-xl"
            />
             {preInput('Address','Address of this place.')}
          
            <input
              type="text"
              value={address}
              onChange={ev => setAddress(ev.target.value)}
              placeholder="Address"
              className="w-full p-2 border rounded-xl"
            />
            {preInput('Photos','More = Better')}
          
            <div className="flex gap-2">
              <input
                type="text"
                value={photoLink}
                onChange={ev => setPhotoLink(ev.target.value)}
                placeholder="Add using a link ...jpg"
                className="w-full p-2 border rounded-xl"
              />
              <button className="bg-gray-200 px-4 rounded-2xl">
                Add&nbsp; Photo
              </button>
            </div>
            <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              <button className=" flex gap-1 justify-center border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                  />
                </svg>
                Upload
              </button>
            </div>
            {preInput('Description','description of the place')}
       
            <textarea className="w-full" value={description} onChange={ev => setDescription(ev.target.value)}/>
            {preInput('Perks',' select all the perks your place have')}
           <div  className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            <Perks selected={perks} onChange={setPerks}/>
           </div>
           {/**here goes the perks component */}
            {preInput('Extra Info','house rules, etc.')}
          
            <textarea className="w-full" value={extrainfo} onChange={ev => setExtraInfo(ev.target.value)} />
            {preInput('Check In & Out Times','  add check in and out times, remember to have some time window to cleaning the room between guests')}
           
            <div className="grid gap-2 sm:grid-cols-3">
              <div>
                <h3 className="mt-2 -mb-1">Check In Time</h3>
                <input type="text" value={checkin} onChange={ev=> setCheckIn(ev.target.value)} placeholder="14" />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Check Out Time</h3>
                <input type="text"  value={checkout} onChange={ev => setCheckOut(ev.target.value)}  placeholder="11" />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Max No. of Guests</h3>
                <input type="number" value={maxGuest} onChange={ev => setMaxGuests(ev.target.value)}/>
              </div>
            </div>

            <button className="primary my-4">Save</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PlacesPage;
