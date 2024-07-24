const NewsLetter = () => {
    return ( <div>
        <h2> Subscribe To our NewsLetter</h2>
        <form className="flex  items-center" action="onSubmit ">
            <label htmlFor="">Email Address
                <input className=" block rounded-lg mx-4 p-2 w-full" type="email" />
            </label>
            <button className="p-2 bg-primary-blue mt-6 text-white rounded-lg text-sm">Subscribe</button>
        </form>
    </div> );
}
 
export default NewsLetter;