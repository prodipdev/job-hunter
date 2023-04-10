import React from "react";

const Footer = () => {
  return (
    <div className="px-5 sm:px-10 py-10 sm:py-20 bg-black text-gray-300">
      <div className="grid sm:grid-cols-12 gap-5">
        <div className="col-span-4">
          <h2 className="text-3xl font-semibold tracking-wide text-white mb-5">
            JobHunter
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <div className="flex gap-3 mt-4">
            <img
              className="w-9 h-9 p-2 rounded-full bg-white"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
              alt="facebook"
            />
            <span className="rounded-full bg-white">
              <img
                className="w-9 h-9 p-2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Logo_of_Twitter%2C_Inc..svg/300px-Logo_of_Twitter%2C_Inc..svg.png"
                alt="twitter"
              />
            </span>
            <img
              className="w-9 h-9 p-2 rounded-full bg-white"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/300px-Instagram_logo_2022.svg.png"
              alt="instagram"
            />
          </div>
        </div>
        <div className="col-span-2 flex gap-2 flex-col">
          <h3 className="text-xl font-semibold mb-3 text-white">Company</h3>
          <a href="#">Prototype</a>
          <a href="#">Plans & Pricing</a>
          <a href="#">Customers</a>
          <a href="#">Integrations</a>
        </div>
        <div className="col-span-2 flex gap-2 flex-col">
          <h3 className="text-xl font-semibold mb-3 text-white">Product</h3>
          <a href="#">About Us</a>
          <a href="#">Work</a>
          <a href="#">Latest News</a>
          <a href="#">Careers</a>
        </div>
        <div className="col-span-2 flex gap-2 flex-col">
          <h3 className="text-xl font-semibold mb-3 text-white">Support</h3>
          <a href="#">Help Desk</a>
          <a href="#">Sales</a>
          <a href="#">Become a Partner</a>
          <a href="#">Developers</a>
        </div>
        <div className="col-span-2 flex gap-2 flex-col">
          <h3 className="text-xl font-semibold mb-3 text-white">Contact</h3>
          <a href="#">524 Broadway, NYC</a>
          <a href="#">+1777-978-5570</a>
        </div>
      </div>
      <div className="flex justify-between mt-14">
        <p>@2023 JobHunter. All Rights Reserved</p>
        <p>
          Powered by <span className="text-lg font-semibold">JobHunter</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
