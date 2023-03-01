import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export default function Header() {
  return (
    <>    
      <img
        className="absolute h-[21.21%] w-[23.39%] top-[-12.27%] right-[-99.69%] bottom-[91.05%] left-[176.3%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="../@2x.png"
      />
      <img
        className="absolute h-[20.31%] w-[24.22%] top-[-11.36%] right-[-150.68%] bottom-[91.05%] left-[226.46%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="../1@2x.png"
      />
      <img
        className="absolute h-[19.59%] w-[41.41%] top-[-10.64%] right-[-236.15%] bottom-[91.05%] left-[294.74%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="../2@2x.png"
      />
      <img
        className="absolute h-[11%] w-[39.38%] top-[38.2%] right-[9.9%] bottom-[50.79%] left-[50.73%] max-w-full overflow-hidden max-h-full object-cover hidden"
        alt=""
        src="../image-7@2x.png"
      />
      <img
        className="absolute h-[32.64%] w-full top-[0%] right-[0%] bottom-[67.36%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="../rectangle-1.svg"
      />
      <img
        className="absolute h-[30.73%] w-full top-[0%] right-[0%] bottom-[69.27%] left-[0%] max-w-full overflow-hidden max-h-full object-cover opacity-[0.7]"
        alt=""
        src="../3@2x.png"
      />
      <img
        className="absolute h-[1.4%] w-[8.25%] top-[3.15%] right-[77.58%] bottom-[95.46%] left-[14.17%] max-w-full overflow-hidden max-h-full hidden"
        alt=""
        src="../group-1.svg"
      />
      <Button
        className="absolute top-[3.73%] left-[33.75%] hidden"
        variant="outline-primary"
      >
        Home
      </Button>
      <Button
        className="absolute top-[3.73%] left-[42.66%] hidden"
        variant="outline-primary"
      >
        About us
      </Button>
      <Button
        className="absolute top-[3.73%] left-[53.54%] hidden"
        variant="outline-primary"
      >
        Team
      </Button>
      <Button
        className="absolute top-[3.73%] left-[62.45%] hidden"
        variant="outline-primary"
      >
        Events
      </Button>
    </>
  );
}
