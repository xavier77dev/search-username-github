const InfoIcon = ({textTitle, icon, info}) => {
  return (
    <div className="bg-black px-6 py-3 rounded-md uppercase text-xs flex flex-col justify-between items-center gap-2">
      <p className="text-indigo-600 font-bold">{textTitle}</p>
      <div className="flex items-center gap-5">
        <i className={`${icon} text-indigo-700 text-3xl`}></i>
        <span className="text-white text-lg">{info ?? "unknow"}</span>
      </div>
    </div>
  )
}

export default InfoIcon
