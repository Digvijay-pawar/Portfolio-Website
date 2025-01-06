import Resume from './Resume';

const Header = () => {
    return ( 
        <div className="bg-gray-100 p-5 px-20 flex items-center justify-between ">
            <ul className="flex space-x-10 text-xl font-medium text-gray-800">
                <li className="flex items-center space-x-2">
                    <img src="/github.png" alt="GitHub" className="w-6 h-6" />
                    <span>GitHub</span>
                </li>
                <li className="flex items-center space-x-2">
                    <img src="/linkdin.png" alt="LinkedIn" className="w-6 h-6" />
                    <span>LinkedIn</span>
                </li>
                <li className="flex items-center space-x-2">
                    <img src="/leetcode.webp" alt="LeetCode" className="w-6 h-6" />
                    <span>LeetCode</span>
                </li>
            </ul>
            <div className=''>
                <Resume />
            </div>
        </div>
    );
}
 
export default Header;
