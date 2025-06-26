import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import AddJob from '../components/AddJob';

function AddJobPage(){
    return (
        <>
            <div className="w-screen flex">
                <div className="ml-20 w-[12%] flex items-center p-4">

                    <img className="w-12 h-12 flex items-center justify-center" src="src/assets/Logo.png" alt="Job Board Logo" />

                    <h2 className="text-teal-500 text-2xl font-semibold ml-2">Jobify</h2>
                </div>
                <div className="w-[78%]"><Navbar /></div>
            </div>
            <div className='flex w-screen'>
                <Sidebar />
                <div className='w-[80%] p-10'>
                    <AddJob/>
                </div>
            </div>
        </>
    );
};

export default AddJobPage;
