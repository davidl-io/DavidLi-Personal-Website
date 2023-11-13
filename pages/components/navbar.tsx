import { Navbar as FlowbiteNavbar } from 'flowbite-react';
import { FaLinkedinIn, FaGithub, FaXTwitter } from 'react-icons/fa6'; 

const Navbar = () => {
  return (
    <div className="fixed w-full">
      <FlowbiteNavbar>
        <FlowbiteNavbar.Brand href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{'< Li. >'}</span>
        </FlowbiteNavbar.Brand>

        <div className="flex md:order-2">

          <FlowbiteNavbar.Collapse className="pr-8">
            <FlowbiteNavbar.Link href="#" active={true}>
              Blog
            </FlowbiteNavbar.Link>
            <FlowbiteNavbar.Link href="#">
              Projects
            </FlowbiteNavbar.Link>
            <FlowbiteNavbar.Link href="#">
              About Me
            </FlowbiteNavbar.Link>
          </FlowbiteNavbar.Collapse>

          <FlowbiteNavbar.Collapse>
          <div class="flex space-x-4">
            <FlowbiteNavbar.Link href="https://www.linkedin.com/in/your-linkedin/">
              <FaLinkedinIn size={20} />
            </FlowbiteNavbar.Link>
            <FlowbiteNavbar.Link href="https://github.com/your-github/">
              <FaGithub size={20} />
            </FlowbiteNavbar.Link>
            <FlowbiteNavbar.Link href="https://twitter.com/your-twitter/">
              <FaXTwitter size={20} /> {/* Corrected Icon Name */}
            </FlowbiteNavbar.Link>
          </div>
          </FlowbiteNavbar.Collapse>
        </div>

      </FlowbiteNavbar>
    </div>
  );
}

export default Navbar;

