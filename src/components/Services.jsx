import React from "react";

const Services = () => {
  const serviceItems = [
    {
      icon: "bi bi-code-slash",
      title: "Custom Web Development",
      desc: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat."
    },
    {
      icon: "bi bi-phone-fill",
      title: "Mobile App Solutions",
      desc: "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
    },
    {
      icon: "bi bi-palette2",
      title: "UI/UX Design",
      desc: "Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus."
    },
    {
      icon: "bi bi-bar-chart-line",
      title: "Digital Marketing",
      desc: "Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit."
    },
    {
      icon: "bi bi-cloud-check",
      title: "Cloud Computing",
      desc: "Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh."
    },
    {
      icon: "bi bi-shield-lock",
      title: "Cybersecurity Solutions",
      desc: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui."
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-darkBg text-gold min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Services</h2>
          <p className="text-softGold max-w-xl mx-auto">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceItems.map((item, index) => (
            <div key={index} className="bg-shadowBlack p-6 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">
                <i className={item.icon}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-softGold text-sm mb-4">{item.desc}</p>
              <a href="#" className="inline-flex items-center text-gold font-semibold hover:text-softGold transition">
                <span>Learn More</span>
                <i className="bi bi-arrow-right ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
