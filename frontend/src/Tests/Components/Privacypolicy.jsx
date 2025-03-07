    import React from 'react'
import Navbar from '../../components/Navbar'
    
    function Privacypolicy() {
      return (
        <div className='bg-main'>
      <Navbar />
      <div className="relative bg-cover bg-center w-screen h-screen space-y-5 flex text-white text-center" style={{ backgroundImage: "url('https://s3-alpha-sig.figma.com/img/f11d/4aa0/babd7bb113a756fb50fd292071986e56?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=i5BUx4tfE4W8SVgVA8nV7P-kZuyUvzzXAKRZDaRszc676bMUS5MvyYkXwV~Nz2PDtyhUCH5cJZDmsQmDFS95-6AqnZu9BkqashhTD~kYhhEJ7cvu153ryP1BgaoO4PvUENTVLHkG-DTcIbtHpD6-aQ~GqIWh~YOfJHSNMKpe9K-A~0Sy7bp~QhtJZUxvK3Vxc0YZRsLmqS1K-qhiCoY2Gan69tbM3YFAwOHG4Xk4JyyqpxK6SpqqF9yolWKYZm6P0sZWNEwYV4aMtpx7BA4PbWezMdgHoW4CXNCjnc8q7dP4WklM3UJJfCnFvSfCA1YBQwTxOvtbKjilixLfT9afzw__')" }}>
        <div className="bg-black bg-opacity-50 w-screen p-6 rounded-lg  place-content-center">
          <h1 className="text-4xl font-bold">Your Privacy, Our Priority</h1>
          <p className="mt-2 text-lg">We’re committed to protecting your personal information.</p>
          <p className="mt-2 text-sm">SPIRO is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform. By using SPIRO, you agree to the practices outlined in this policy.</p>
          <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg">Get free demo</button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="bg-white p-6 shadow-md rounded-lg mb-6">
          <h2 className="text-xl font-semibold text-blue-700">Information We Collect</h2>
          <ul className="mt-2 list-disc list-inside">
            <li><strong>Personal Information:</strong> Name, email address, phone number, and other details provided during registration.</li>
            <li><strong>Non-Personal Information:</strong> Browser type, IP address, and usage data collected through cookies and similar technologies.</li>
            <li><strong>Payment Information:</strong> Billing details, transaction history, and payment methods for purchases made on the platform.</li>
          </ul>
        </div>

        <div className="bg-white p-6 shadow-md rounded-lg flex">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-blue-700">How We Use Your Information</h2>
            <ul className="mt-2 list-disc list-inside">
              <li>Provide and improve our services.</li>
              <li>Personalize your user experience.</li>
              <li>Communicate updates, promotions, and announcements.</li>
              <li>Process payments and transactions securely.</li>
              <li>Ensure compliance with our Terms and Conditions.</li>
            </ul>
          </div>
          <div className="w-1/3 ml-6">
            <img src="https://s3-alpha-sig.figma.com/img/52ff/18db/0d2362cb8efd202559a78b0e07e8c190?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=d4gGvUOjXk4ImPwmApIoBmk2URWXC7xWSzcFIl1jr8SoZKI4OIDR1KYHBmipDTn7t9Nr42LjXPUD8tNcCcrkLv68HzeDKZ31oIuobr0hYWuRZde68TrSElNZEMivvK8-geq9a6Uj3yHgaZn3X2mZp1WwXAdRu6oGK0wKiHWgp7x-dNeNQnHQBAjUwtO3O3wfRdJ29pkLx-PspCgoGXSiW5K3Gy18WE~0w981TAVrXMAFoZIQfW6Y~YUUBheWlB7xNuVdhQn~8V3X3vkH-HknDK1wJv9Rbdn7P63spJaOPiw029el9wykWikbi1RQwDGU5oy~gHI1XIGf~KQjbOSp8w__" alt="Data Security" className="rounded-lg shadow-md" />
          </div>
        </div>
        <div >
        <div className="bg-white p-6  shadow-md rounded-lg mb-6">
          <h2 className="text-xl font-semibold text-blue-700">Information We Collect</h2>
          <p className="mt-2">We may collect the following types of information:</p>
          <ul className="mt-2 list-disc list-inside">
            <li><strong>Personal Information:</strong> Name, email address, phone number, and other details provided during registration.</li>
            <li><strong>Non-Personal Information:</strong> Browser type, IP address, and usage data collected through cookies and similar technologies.</li>
            <li><strong>Payment Information:</strong> Billing details, transaction history, and payment methods for purchases made on the platform.</li>
          </ul>
        </div>

        <div className="bg-white p-6  shadow-md rounded-lg mb-6">
          <h2 className="text-xl font-semibold text-blue-700">Sharing Your Information</h2>
          <p className="mt-2">We do not sell, rent, or trade your personal information to third parties. However, we may share your information:</p>
          <ul className="mt-2 list-disc list-inside">
            <li>With trusted service providers to help deliver our services.</li>
            <li>To comply with legal obligations or enforce our Terms and Conditions.</li>
            <li>During a business transfer, such as a merger or acquisition.</li>
          </ul>
        </div>

        <div className="bg-white p-6 shadow-md rounded-lg mb-6">
          <h2 className="text-xl font-semibold text-blue-700">Cookies and Tracking Technologies</h2>
          <p className="mt-2">SPIRO uses cookies and similar technologies to enhance your experience. These cookies may track your preferences, session data, and platform usage. You can disable cookies through your browser settings, but this may affect certain features of the platform.</p>
        </div>

        <div className="bg-white p-6  shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-blue-700">Data Security</h2>
          <p className="mt-2">We take reasonable measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is entirely secure, and we cannot guarantee absolute security.</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap items-center bg-blue-700 text-white p-6 md:p-10 w-full">
  {/* Image Section */}
  <div className="w-full md:w-1/3 p-2">
    <img
      src="https://s3-alpha-sig.figma.com/img/1e02/14b4/74d3a40b1c765f4791a98ecf53a146a7?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=P9~bnXt7An0cH62YoRFiX~rsy37I7VP3~Yl5~gXScUIbKqd7xAN4T4ED4Um~KM4g2qoDq1FFcmlMBiQOrqkvgRj7A9sI3fjVCMyAZmrCQsRmVrVVxLTqINaqL6X~FpGq9Afx4EOQ1fjTvyXCBvrpV55g1gZrMJtz3kPWpXVW2dGnwiTVDxi9Ea-8VM9LWxJAeVkbQC9ibe9bKga8Kdtw1Bo-YrwykFdb0UNY~T92Jr4sSsRiKLppsKXPJMpMTvE8WxIq8kfllI5H5SCjC2RMRWRblNs62sX7Dr7nL8uG5Qo5iMZHYoCPkkCvk70PiWXoDC1VeqMCY38Ns4x5WMUUvQ__"
      alt="Laptop Image"
      className="w-full max-w-sm md:max-w-full rounded-lg shadow-md"
    />
  </div>





      {/* Text Section */}
      <div className="md:w-2/3 w-full mt-4 md:mt-0 md:pl-6">
        <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
        <p>You have the following rights regarding your personal information:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Access, update, or delete your data.</li>
          <li>Opt-out of receiving promotional emails.</li>
          <li>Withdraw consent for data processing at any time.</li>
        </ul>
        <p className="mt-4">
          To exercise these rights, please contact us at{" "}
          <a href="mailto:spiroedu5@gmail.com" className="underline font-semibold">
            spiroedu5@gmail.com
          </a>.
        </p>
      </div>
    </div>
    <div className="container">
      <div className="bg-white p-6 shadow-md rounded-lg mb-6">
        <h2>Third-Party Links</h2>
        <p>
          Our platform may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.
        </p>
      </div>

      <div className="bg-white p-6 shadow-md rounded-lg mb-6 space-y-4">
        <p className='py-11'>
          We may update this Privacy Policy periodically. Any changes will be communicated via email or posted on our platform.
        </p>
      
        <h2>Contact Us</h2>
        <p>
          If you have questions or concerns about this Privacy Policy, please reach out to us at{" "}
          <a href="mailto:spiroedu9@gmail.com">spiroedu9@gmail.com</a>.
        </p>
      </div>
    </div> 
      </div>

    </div>
      )
    }
    
    export default Privacypolicy
    