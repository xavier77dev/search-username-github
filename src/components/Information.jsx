import { useContext } from "react"
import InfoIcon from "./InfoIcon"
import InfoUser from "./InfoUser"
import { ContextSearch } from "../context/ProviderSearch"
import useDate from "../helpers/useDate"

const Information = () => {
  const {infoUser} = useContext(ContextSearch);
  const {data} = infoUser[0];
  return (
    <>
      <section className="mx-6 mb-6 md:mb-0">
        <article className="flex flex-col md:flex-row md:gap-6 justify-center items-center md:items-end">
          <div className="rounded-md p-2 bg-[#121322] mt-[-35px]">
            <img className="md:w-[125px] w-[135px] rounded-md" src={data.avatar_url} alt="image profile"/>
          </div>

          <div className="flex gap-2 flex-wrap justify-center items-center">
            <InfoUser textInfo={"folowers"} infoUser={data.followers}/>
            <InfoUser textInfo={"following"} infoUser={data.following}/>
            <InfoUser textInfo={"location"} infoUser={data.location ?? "unknown"}/>
          </div>
        </article>
                
        <div className="flex flex-col justify-center items-center mb-8">
          <h3 className="text-white text-3xl mt-7 mb-2">{data.login}</h3>
          <p className=" text-slate-500">{data.bio}</p>
        </div>

        <article className="flex justify-center flex-col gap-2">
          <div className="grid  sm:grid-cols-2 gap-2">
            <InfoIcon textTitle="name" icon="fa-solid fa-face-smile-beam" info={data.name}/>
            <InfoIcon textTitle="repo public" icon="fa-solid fa-folder" info={data.public_repos}/>
            <InfoIcon textTitle="created at" icon="fa-brands fa-github" info={useDate(data.created_at)}/>
            <InfoIcon textTitle="updated at" icon="fa-solid fa-folder" info={useDate(data.updated_at)}/>
          </div>      
           
        </article>
      </section>

    </>
  )
}

export default Information