import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header className="">
            <div>
                <div className="flex bg-gray-400  px-16 py-3  shadow justify-between mt-2 text-xs font-bold">
                    <div className="h-4 w-8  mb-4"><img src="https://1businessworld.com/wp-content/uploads/2021/04/03/logo-8.png "></img></div>
                    <nav className="space-x-3 mt-1 ">

                        {/* <Link to="/">Home</Link>*/}


                        <Link to="/jobs">Jobs</Link>
                        <Link to="/recruit">Recruit</Link>
                        <Link to="/blogs">Blogs</Link>

                    </nav>
                </div>

                <div className="flex bg-white  px-16 py-1  shadow justify-between mr-5 mt-2 ml-5 text-sm">
                    <div className="flex space-x-3 text-xs  mt-1" >
                        <div className="shadow w-6 h-6     align-middle  justify-center "><img src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2Fb0c032466eb88b109f20d7d9f6b4e0a8%2F0x0.jpg " class="rounded-3xl justify-center"></img></div>
                        <div><h4 className="text-red-500 font-bold ">Rohit Balodi</h4>
                            <p className="text-xs font-thin">Recruiter of XYZ</p>
                        </div>
                    </div>
                    <div className="flex-end py-1"><button class="bg-red-500 hover:bg-green-700 text-white font-thin py-1 px-1 rounded text-xs flex-left mt-1 ">Add a Job</button></div>
                </div>





                <div className="flex bg-white  px-12 py-2  shadow justify-between mr-5 ml-5 mt-4 text-xs font-thin">
                    <p className="ml-8">100 Jobs Added</p>
                    <nav>
                        <div className="flex space-x-1">
                            <p>Sort by:Latest</p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </nav>
                </div>






                <div className="flex bg-white  px-20 py-6 mt-2   shadow justify-between   ml-5 mr-5 text-sm">
                    <div className="  text-xs font-20" >
                        <div className="flex space-x-60"><h3>JobPost</h3>
                            <p>Applications</p>
                            <h3>Recruiter</h3>

                        </div>
                        <div className="mt-5 flex justify-between"><div className="flex space-x-3"><h4 className="text-red-500 font-bold ">Android Developer </h4>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg></div>


                            <h3>203 Applications</h3>
                            <h3>Rohit Balodi</h3></div>
                        <div className="flex space-x-2 mt-3"><p className="text-xs font-bold  ">Nearsure Agency.</p>
                            <p className="text-xs">Job Posted on 28 February 2021</p>
                        </div>



                        <div className="flex space-x-3 mt-3" ><p>Share</p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                            <p>Pause</p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p>Delete</p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </div>



                        <div className="mt-5 flex justify-between border-t-2 border-red-500"><div className="flex space-x-3"><h4 className="text-red-500 font-bold mt-2 ">Android Developer </h4>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mt-2" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>

                        </div>


                            <h3 className="mt-2">203 Applications</h3>
                            <h3 className="mt-2">Rohit Balodi</h3></div>
                        <div className="flex space-x-2 mt-3"><p className="text-xs font-bold  ">Nearsure Agency.</p>
                            <p className="text-xs">Job Posted on 28 February 2021</p>
                        </div>



                        <div className="flex space-x-3 mt-3" ><p>Share</p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                            <p>Pause</p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p>Delete</p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </div>


                        <div className="mt-5 flex justify-between border-t-2 border-gray-500"><div className="flex space-x-3"><h4 className="text-red-500 font-bold mt-2 ">Android Developer </h4>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mt-2" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>

                        </div>


                            <h3 className="mt-2">203 Applications</h3>
                            <h3 className="mt-2">Rohit Balodi</h3></div>
                        <div className="flex space-x-2 mt-3"><p className="text-xs font-bold  ">Nearsure Agency.</p>
                            <p className="text-xs">Job Posted on 28 February 2021</p>
                        </div>



                        <div className="flex space-x-3 mt-3" ><p>Share</p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                            <p>Pause</p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p>Delete</p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </div>


                        <div className="mt-5 flex justify-between border-t-2 border-gray-500"><div className="flex space-x-3"><h4 className="text-red-500 font-bold mt-2 ">Android Developer </h4>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mt-2" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>

                        </div>


                            <h3 className="mt-2">203 Applications</h3>
                            <h3 className="mt-2">Rohit Balodi</h3></div>
                        <div className="flex space-x-2 mt-3"><p className="text-xs font-bold  ">Nearsure Agency.</p>
                            <p className="text-xs">Job Posted on 28 February 2021</p>
                        </div>



                        <div className="flex space-x-3 mt-3" ><p>Share</p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                            <p>Pause</p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p>Delete</p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </div>



                        <div className="mt-5 flex justify-between border-t-2 border-gray-500"><div className="flex space-x-3"><h4 className="text-red-500 font-bold mt-2 ">Android Developer </h4>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mt-2" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>

                        </div>


                            <h3 className="mt-2">203 Applications</h3>
                            <h3 className="mt-2">Rohit Balodi</h3></div>
                        <div className="flex space-x-2 mt-3"><p className="text-xs font-bold  ">Nearsure Agency.</p>
                            <p className="text-xs">Job Posted on 28 February 2021</p>
                        </div>



                        <div className="flex space-x-3 mt-3" ><p>Share</p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                            <p>Pause</p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p>Delete</p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </div>


                    </div>




                </div>

            </div>
        </header>

    )
}
