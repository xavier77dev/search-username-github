const InfoUser = ({textInfo, infoUser}) => {
  return (
    <div className="bg-black p-2 rounded-md uppercase text-xs mt-2 md:mb-6">
      <p className="text-indigo-600 font-bold flex gap-2">
        {textInfo} 
        <span className="text-white">{infoUser}</span></p>
    </div>
  )
}

export default InfoUser
