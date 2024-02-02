import './App.css';
import overview from './icons/overview.svg';
import search from './icons/search.svg';
import notification from './icons/notification.svg';
import profile from './images/profile.jpg';
import dividerBlue from './icons/dividerBlue.svg';
import dividerGray from './icons/dividerGray.svg';
import addIcon from './icons/add.svg';
import agents from './icons/agents.svg';
import articles from './icons/articles.svg';
import contacts from './icons/contacts.svg';
import ideas from './icons/ideas.svg';
import settings from './icons/settings.svg';
import subscription from './icons/subscription.svg';
import tickets from './icons/tickets.svg';
import logo from './icons/logo.svg';
// import icon1 from './icons/icon1.svg';
// import icon1 from './icons/icon1.svg';
// import icon1 from './icons/icon1.svg';
// import icon1 from './icons/icon1.svg';

function App() {
return (
    <div className="App w-full h-full overflow-auto">
        <div className='sidebar absolute left-0 h-full py-4 w-2/12 overflow-auto bg-gray-900 text-gray-400'>
            <div className='px-5 mb-10'>
                <img className='inline mr-2' src={logo} alt="" />
                <h2 className='inline'>Dashboard Kit</h2>
            </div>
            <div className='active bg-gray-800 h-10 px-5 leading-10 border-l-2 border-green-300 text-gray-300 hover:bg-gray-800 cursor-pointer'>
                <img className='inline leading-10 mr-3' src={overview} alt="" />
                Overview
            </div>
            <div className='h-10 leading-10 px-5 hover:bg-gray-800 cursor-pointer'>
                <img className='inline leading-10 mr-3' src={tickets} alt="" />
                Tickets
            </div>
            <div className='h-10 leading-10 px-5 hover:bg-gray-800 cursor-pointer'>
                <img className='inline leading-10 mr-3' src={ideas} alt="" />
                Ideas
            </div>
            <div className='h-10 leading-10 px-5 hover:bg-gray-800 cursor-pointer'>
                <img className='inline leading-10 mr-3' src={contacts} alt="" />
                Contacts
            </div>
            <div className='h-10 leading-10 px-5 hover:bg-gray-800 cursor-pointer'>
                <img className='inline leading-10 mr-3' src={agents} alt="" />
                Agents
            </div>
            <div className='h-10 leading-10 px-5 hover:bg-gray-800 cursor-pointer'>
                <img className='inline leading-10 mr-3' src={articles} alt="" />
                Articles
            </div>

            <hr className='border-gray-800 my-5' />

            <div className='h-10 leading-10 px-5 hover:bg-gray-800 cursor-pointer'>
                <img className='inline leading-10 mr-3' src={settings} alt="" />
                Settings
            </div>
            <div className='h-10 leading-10 px-5 hover:bg-gray-800 cursor-pointer'>
                <img className='inline leading-10 mr-3' src={subscription} alt="" />
                Subscription
            </div>
        </div>

        <div className='main absolute right-0 bg-gray-200 w-10/12 h-full overflow-auto px-5 py-4'>
            <div className='header mb-10'>
                <h2 className='inline-block font-semibold text-lg'>Overview</h2>
                <div className='inline-block w-fit float-right'>
                    <img className='inline-block cursor-pointer' src={search} alt="" />
                    <img className='inline-block mx-2.5 cursor-pointer' src={notification} alt="" />
                    |
                    <div className='profile inline-block ml-2.5'>
                        Jones Ferdinand
                        <img className='w-8 inline-block ml-2.5 rounded-3xl cursor-pointer' src={profile} alt="" />
                    </div>
                </div>
            </div>
            <div className='category grid grid-cols-4 gap-5 mb-8'>
                <div className='bg-white py-5 rounded-lg border border-gray-300'>
                    <h3 className='w-fit text-gray-400 m-auto mb-2.5'>Unresolved</h3>
                    <span className='text-4xl block w-fit m-auto'>60</span>
                </div>
                <div className='active bg-white text-sky-600 py-5 rounded-lg border border-sky-600'>
                    <h3 className='w-fit m-auto mb-2.5'>Overdue</h3>
                    <span className='text-4xl block w-fit m-auto'>16</span>
                </div>
                <div className='bg-white py-5 rounded-lg border-gray-300'>
                    <h3 className='w-fit text-gray-400 m-auto mb-2.5'>Open</h3>
                    <span className='text-4xl block w-fit m-auto'>43</span>
                </div>
                <div className='bg-white py-5 rounded-lg border-gray-300'>
                    <h3 className='w-fit text-gray-400 m-auto mb-2.5'>On hold</h3>
                    <span className='text-4xl block w-fit m-auto'>64</span>
                </div>
            </div>

            <div className='grid grid-cols-4 h-5/6 mb-5'>
                <div className='trends col-span-3 bg-white p-5 px-6 border-r'>
                    <h3 className='font-semibold text-md'>Today's trends</h3>
                    <div className='text-gray-400'>
                        <span>as of 25 May 2019, 09:41 PM</span>
                        <div className='inline-block float-right'>
                            <span>
                                <img className='inline mr-2' src={dividerBlue} alt="" />
                                Today
                            </span>
                            <span className='ml-8'>
                                <img className='inline mr-2' src={dividerGray} alt="" />
                                Yesterday
                            </span>
                        </div>
                    </div>
                </div>
                <div className='bg-white grid grid-rows-5'>
                    <div className='border-b py-5'>
                        <h4 className='w-fit text-gray-400 m-auto mb-1'>Resolved</h4>
                        <span className='text-2xl block w-fit m-auto'>449</span>
                    </div>
                    <div className='border-b py-5'>
                        <h4 className='w-fit text-gray-400 m-auto mb-1'>Received</h4>
                        <span className='text-2xl block w-fit m-auto'>426</span>
                    </div>
                    <div className='border-b py-5'>
                        <h4 className='w-fit text-gray-400 m-auto mb-1'>Average first response time</h4>
                        <span className='text-2xl block w-fit m-auto'>33m</span>
                    </div>
                    <div className='border-b py-5'>
                        <h4 className='w-fit text-gray-400 m-auto mb-1'>Average response time</h4>
                        <span className='text-2xl block w-fit m-auto'>3h 8m</span>
                    </div>
                    <div className='border-b py-5'>
                        <h4 className='w-fit text-gray-400 m-auto mb-1'>Resolution within SLA</h4>
                        <span className='text-2xl block w-fit m-auto'>94%</span>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-5 h-3/6'>
                <div className='bg-white flex flex-col'>
                    <div className='p-5 h-2/6'>
                        <h3 className='inline font-semibold text-md'>Unresolved tickets</h3>
                        <a href="#" className='float-right text-sky-600'>View details</a>
                        <p>
                            <span className='text-gray-400'>Group: </span>Support
                        </p>
                    </div>
                    <div className='grid grid-rows-4 basis-auto grow-0 shrink h-4/6'>
                        <div className='px-5 border-b leading-[50px]'>
                            Waiting on Feature Request
                            <span className='text-gray-400 float-right'>4238</span>
                        </div>
                        <div className='px-5 border-b leading-[50px]'>
                            Awaiting Customer Response
                            <span className='text-gray-400 float-right'>1005</span>
                        </div>
                        <div className='px-5 border-b leading-[50px]'>
                            Awaiting Developer Fix
                            <span className='text-gray-400 float-right'>914</span>
                        </div>
                        <div className='px-5 leading-[50px]'>
                            Pending
                            <span className='text-gray-400 float-right'>281</span>
                        </div>

                    </div>
                </div>
                <div className='bg-white flex flex-col'>
                    <div className='p-5 h-2/6'>
                        <h3 className='inline font-semibold text-md'>Tasks</h3>
                        <a href="#" className='float-right text-sky-600'>View all</a>
                        <p>
                            <span className='text-gray-400'>Today</span>
                        </p>
                    </div>
                    <div className='grid grid-rows-4 basis-auto grow-0 shrink h-4/6'>
                        <div className='relative px-5 border-b leading-[50px]'>
                            <input className='w-11/12' type="text" placeholder='Create new task' />
                            <img className='absolute right-5 top-2 cursor-pointer' src={addIcon} alt="" />
                        </div>
                        <div className='px-5 border-b leading-[50px]'>
                            <input className='mr-3' type="checkbox" />
                            Finish ticket update
                        </div>
                        <div className='px-5 border-b leading-[50px]'>
                            <input className='mr-3' type="checkbox" />
                            Create new ticket example
                        </div>
                        <div className='px-5 border-b leading-[50px]'>
                            <input className='mr-3' type="checkbox" />
                            Update ticket report
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
);
}

export default App;
