const Search=({searchtext})=>{
return (
    <div className="bg-ground-blue">
        <input type="search" placeholder="Search Robot" onChange={searchtext} className="pa2"/>
    </div>
)
}

export default Search;