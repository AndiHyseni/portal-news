import "../Footer/Footer.css";
import { Image } from "@mantine/core";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div style={{ display: "flex" }}>
        <div className="column1">
          <Image src="../images/PN.png" height={100} width={100} />
          <p>
            Ky portal mirëmbahet nga kompania "Portal News". Materialet dhe
            informacionet në këtë portal nuk mund të kopjohen, të shtypen, ose
            të përdoren në çfarëdo forme tjetër për qëllime përfitimi, pa
            miratimin e drejtuesve të "Portal News". Për ta shfrytëzuar
            materialin e këtij portali obligoheni t'i pranoni Kushtet e
            përdorimit.
          </p>
        </div>
        <div className="column2">
          <div className="footerFirstItem">
            <b>Udhëzim</b>
          </div>
          <Link to="/">
            <div className="footerItem">Bota</div>
          </Link>
          <Link to="/">
            <div className="footerItem">Sport</div>
          </Link>
          <Link to="/">
            <div className="footerItem">Ekonomi</div>
          </Link>
        </div>
      </div>
      <div className="hr-footer">
        <hr
          style={{
            background: "white",
            color: "white",
            borderColor: "white",
            width: "100%",
          }}
        />
      </div>
      <div className="copyright">
        <h4>Portal News © All rights reserved</h4>
      </div>
    </div>
  );
};
