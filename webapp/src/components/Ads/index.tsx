interface IAd {
  link: string;
  logo: string;
  title: string;
  description: JSX.Element;
}

const roboDroidAd: IAd = {
  link: "https://github.com/cybersecsi/robodroid",
  logo: "https://raw.githubusercontent.com/cybersecsi/robodroid/main/logo.png",
  title: "RoboDroid",
  description: (
    <>
    <b>RoboDroid</b> is a cutting-edge software tool designed to simplify the process of managing (and very soon also deploying) Android machines for usage in <i>Cyber Range</i> environments. With RoboDroid, users can easily set up and customize pre-defined behaviors for their Android machines, allowing them to simulate human-like behaviors and actions on mobile devices. Check it out on <i>GitHub</i>, it's <b>open-source!</b>
    <br/>
    </>
  )
}

const ad = roboDroidAd;

const Ads = () => {
  return (
    <a className="no-underline" href={ad.link} target="_blank">
      <div className="relative flex max-w-5xl mx-auto border-2 border-slate-200 p-4 rounded-md font-Karla gap-4 bg-slate-50 items-center transition-all duration-300 hover:border-sky-400 cursor-pointer">
        <div className="absolute top-2 right-4 text-sm font-bold bg-sky-400 border-2 text-slate-100 border-sky-600 p-1 rounded-sm">
          ADS
        </div>
        <img className="h-20" src={ad.logo} />
        <div className="flex flex-col gap-2">
          <h2 className="my-0 text-2xl">{ad.title}</h2>
          <p className="text-sm text-justify text-slate-700">{ad.description}</p>
        </div>
      </div>
    </a>
  )
}

export default Ads;