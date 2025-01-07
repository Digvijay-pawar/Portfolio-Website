const Section = ({name, imgLink}) => {
    return (
        <a href={`#${name}`}>
            <div className="border p-2 px-5 rounded-t-lg bg-white"><img src={imgLink} alt={name + "Image"} /></div>
            <div className="text-center border text-base font-semibold p-2 rounded-b-lg bg-gray-100">{name}</div>
        </a>
     );
}
 
export default Section;