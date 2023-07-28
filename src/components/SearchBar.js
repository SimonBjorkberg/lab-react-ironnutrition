import { Input } from 'antd'

const Searchbar = (props) => {
    return ( <div className="search-bar my-5 mx-auto w-1/3">
    <Input onChange={(e) => props.search(e)} />
    </div> );
}
 
export default Searchbar;