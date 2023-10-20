
import './App.css'

function App() {
  const data =
    [
      {
        tag: "FREE",
        heading: "$0",
        user: { iscorrect: true, value: "Single User" },
        storage: { iscorrect: true, value: "50GB Storage" },
        publicProject: { iscorrect: true, value: "Unlimited Public Projects" },
        access: { iscorrect: true, value: "Community Access" },
        privateProject: { iscorrect: false, value: "Unlimited Private Projects" },
        phone: { iscorrect: false, value: "Dedicated Phone Support" },
        subdomain: { iscorrect: false, value: "Free Subdomain" },
        monthly: { iscorrect: false, value: "Monthly Status Reports" },


      },
      {
            tag:"PLUS",
            heading:"$9",
            user:{iscorrect:true,value:"5 User"},
            storage:{iscorrect:true,value:"50GB Storage"},
            publicProject:{iscorrect:true,value:"Unlimited Public Projects"},
            access:{iscorrect:true,value:"Community Access"},
            privateProject:{iscorrect:true,value:"Unlimited Private Projects"},
            phone:{iscorrect:true,value:"Dedicated Phone Support"},
            subdomain:{iscorrect:true,value:"Free Subdomain"},
            monthly:{iscorrect:false,value:"Monthly Status Reports"}
      },
      {
            tag:"pro",
            heading:"$49",
            user:{iscorrect:true,value:"Unlimited User"},
            storage:{iscorrect:true,value:"50GB Storage"},
            publicProject:{iscorrect:true,value:"Unlimited Public Projects"},
            access:{iscorrect:true,value:"Community Access"},
            privateProject:{iscorrect:true,value:"Unlimited Private Projects"},
            phone:{iscorrect:true,value:"Dedicated Phone Support"},
            subdomain:{iscorrect:true,value:"Free Subdomain"},
            monthly:{iscorrect:true,value:"Monthly Status Reports"}
      }

    ]


  return (
    <div className='mainBox'>
      {
        data.map((jio, idx) => (
          <PriceCard key={idx}
            tag={jio.tag}
            heading={jio.heading}
            user={jio.user.value}
            isuser={jio.user.iscorrect}
            storage={jio.storage.value}
            isstorage={jio.storage.iscorrect}
            publicProject={jio.publicProject.value}
            ispublicProject={jio.publicProject.iscorrect}
            access={jio.access.value}
            isaccess={jio.access.iscorrect}
            privateProject={jio.privateProject.value}
            isprivateProject={jio.privateProject.iscorrect}
            phone={jio.phone.value}
            isphone={jio.phone.iscorrect}
            subdomain={jio.subdomain.value}
            issubdomain={jio.subdomain.iscorrect}
            monthly={jio.monthly.value}
            ismonthly={jio.monthly.iscorrect}
          />))

      }

    </div>
  )
}

export default App

// eslint-disable-next-line react/prop-types, no-unused-vars
function PriceCard({ tag, heading, user,isuser, storage, isstorage,publicProject,ispublicProject, access,isaccess ,privateProject,isprivateProject ,phone, isphone,subdomain, issubdomain,monthly,ismonthly}) {
  console.log(user, "tharun");
  return (
    <>

      <div className='card'>
        <p className='tag'>{tag}</p>
        <div className='card-header'>
          <h1 className='heading'>{heading}/month</h1>
          <hr />
        </div>
        <div className='card-body'>
          <p className={isuser?"correct":"notcorrect"}><span></span>{user}</p>
           <p className={isstorage ?"correct":"notcorrect"}><span></span>{storage}</p>
          <p className={ispublicProject?"correct":"notcorrect"}><span></span>{publicProject}</p>
          <p className={isaccess?"correct":"notcorrect"}><span></span>{access}</p>
          <p className={isprivateProject?"correct":"notcorrect"}><span></span>{privateProject}</p>
          <p className={isphone?"correct":"notcorrect"}><span></span>{phone}</p>
          <p className={issubdomain?"correct":"notcorrect"}><span></span>{subdomain}</p>
          <p className={ismonthly?"correct":"notcorrect"}><span></span>{monthly}</p>
          <button className={(isuser && isstorage && ispublicProject && isaccess && isprivateProject && isphone && issubdomain && ismonthly)?"btn":"btn btn-disable"}>BUTTON</button> 
        </div>

      </div></>
  )
}