import Airtel from "../assets/logo-wall/airtel.png";
import Bedc from "../assets/logo-wall/bedc.png";
import Dstv from "../assets/logo-wall/dstv.png";
import Ikeja from "../assets/logo-wall/ikeja.png";
import Klarna from "../assets/logo-wall/klarna.png";
import Mastercard from "../assets/logo-wall/mastercard.png";
import Mobile from "../assets/logo-wall/mobile.png";
import Mtn from "../assets/logo-wall/mtn.png";
import Payoneer from "../assets/logo-wall/payoneer.png";
import Paypal from "../assets/logo-wall/paypal.png";
import Stripe from "../assets/logo-wall/stripe.png";
import Visa from "../assets/logo-wall/visa.png";
import LogoWall from "../common/LogoWall";

function Partners() {
  return (
    <section id="partners" className="mt-20 flex flex-col bg-gray-50 py-20">
      <article className="mb-10 w-full px-8 text-center lg:px-12">
        <h2 className="mb-4 text-4xl font-semibold text-gray-800">
          Transact seamlessly with...
        </h2>
        <p>
          Connect your accounts to Kobodrop seamlessly. Kobodrop supports 200+
          <br />
          integrations with other payment platforms like stripe, paypal,
          payoneer and others
        </p>
      </article>
      <div className="xl:flex xl:justify-center">
        <LogoWall
          src1={Klarna}
          src2={Paypal}
          src3={Stripe}
          alt1="Klarna logo"
          alt2="Paypal logo"
          alt3="Stripe logo"
        />
        <LogoWall
          src1={Airtel}
          src2={Bedc}
          src3={Dstv}
          alt1="Airtel logo"
          alt2="Bedc logo"
          alt3="Dstv logo"
        />
      </div>
      <div className="xl:flex xl:justify-center">
        <LogoWall
          src1={Ikeja}
          src2={Mastercard}
          src3={Mobile}
          alt1="Ikeja logo"
          alt2="Mastercard logo"
          alt3="Mobile logo"
        />
        <LogoWall
          src1={Mtn}
          src2={Payoneer}
          src3={Visa}
          alt1="Mtn logo"
          alt2="Payoneer logo"
          alt3="Visa logo"
        />
      </div>
    </section>
  );
}

export default Partners;
