import Watch from "../Watch/Watch";

const Watches = () => {

    const watches = [
        {
          id: 1,
          brand: "Rolex",
          model: "Submariner",
          price: 10500,
          color: "Black",
          material: "Stainless Steel",
          waterResistant: true,
          displayType: "Analog",
          strapType: "Metal",
          features: ["Chronometer", "Date"],
        },
        {
          id: 2,
          brand: "Omega",
          model: "Speedmaster",
          price: 7200,
          color: "Silver",
          material: "Titanium",
          waterResistant: true,
          displayType: "Analog",
          strapType: "Leather",
          features: ["Chronograph", "Tachymeter"],
        },
        {
          id: 3,
          brand: "Casio",
          model: "G-Shock GA2100",
          price: 150,
          color: "Black",
          material: "Resin",
          waterResistant: true,
          displayType: "Digital",
          strapType: "Rubber",
          features: ["Shock Resistant", "World Time"],
        },
        {
          id: 4,
          brand: "Seiko",
          model: "Prospex Diver",
          price: 800,
          color: "Blue",
          material: "Stainless Steel",
          waterResistant: true,
          displayType: "Analog",
          strapType: "Metal",
          features: ["Luminous Hands", "Date"],
        },
        {
          id: 5,
          brand: "Fossil",
          model: "Gen 6",
          price: 299,
          color: "Rose Gold",
          material: "Stainless Steel",
          waterResistant: true,
          displayType: "Smartwatch",
          strapType: "Metal",
          features: ["Heart Rate Monitor", "GPS"],
        },
        {
          id: 6,
          brand: "Timex",
          model: "Weekender",
          price: 50,
          color: "White",
          material: "Brass",
          waterResistant: false,
          displayType: "Analog",
          strapType: "Nylon",
          features: ["Indiglo Backlight"],
        },
        {
          id: 7,
          brand: "Tag Heuer",
          model: "Carrera",
          price: 4100,
          color: "Black",
          material: "Ceramic",
          waterResistant: true,
          displayType: "Analog",
          strapType: "Leather",
          features: ["Chronograph", "Sapphire Crystal"],
        },
        {
          id: 8,
          brand: "Citizen",
          model: "Eco-Drive",
          price: 250,
          color: "Silver",
          material: "Stainless Steel",
          waterResistant: true,
          displayType: "Analog",
          strapType: "Metal",
          features: ["Solar Powered", "Date"],
        },
        {
          id: 9,
          brand: "Apple",
          model: "Watch Series 9",
          price: 499,
          color: "Midnight",
          material: "Aluminum",
          waterResistant: true,
          displayType: "Smartwatch",
          strapType: "Silicone",
          features: ["ECG", "Fall Detection"],
        },
        {
          id: 10,
          brand: "Garmin",
          model: "Forerunner 955",
          price: 599,
          color: "Black",
          material: "Fiber-Reinforced Polymer",
          waterResistant: true,
          displayType: "Digital",
          strapType: "Silicone",
          features: ["GPS", "Heart Rate Monitor", "Pace Pro"],
        },
      ];
      
      console.log(watches);
      
    return (
        <div>
            {
                watches.map(watch=><Watch watch={watch} key={watch?.id}></Watch>)
            }
        </div>
    );
};

export default Watches;