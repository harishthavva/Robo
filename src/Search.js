const Search=({searchtext})=>{
return (
    <div>
        <input type="search" placeholder="Search Robot" onChange={searchtext}/>
    </div>
)
}

export default Search;