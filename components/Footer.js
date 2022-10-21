import { BsGlobe } from "react-icons/bs";

function Footer() {
    return <footer>
        <div className="flex justify-center items-center space-x-4 py-3">
            <BsGlobe className="h-5" />

            <select name="" id="" className="focus:outline-none">
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Marathi">Marathi</option>
            </select>
        </div>

    </footer>
}

export default Footer;