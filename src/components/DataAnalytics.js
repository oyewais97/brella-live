import React from 'react';
import { Typography } from "antd";
import Marquee from "react-fast-marquee";
const DataAnalytics = () => {
  const { Title } = Typography;
  const [contenshow, setContenshow] = React.useState(false);
  const [networkshow, setNetworkshow] = React.useState(false);

  const handleContent = ()=>{
    setContenshow(!contenshow);

  }
  const handleNetwork = ()=>{
    setNetworkshow(!networkshow);
  }
  return (
    <>
    <div className="analytics">
      <div className="data-left-side col-sm-10 col-lg-6">
      <Title level={4} style={{fontSize:"2rem" ,  }}>Stay ahead of the <br/>curve with key insights</Title>
      <p className="data-text col-9 mx-auto">
        Gain a whole new perspective on the impact of your event. Measure
        attendee engagement, content relevance, sponsor ROI and much more.
      </p>
      </div>
      <div className="data-and-analytics col-sm-10 col-lg-6">
        <Marquee gradient={false}>
          
            
          <div className="analytics-container">
            <div className="line-and-text">
              <p>Sponsor ROI</p>
            </div>
            <img
              src="https://www.brella.io/hubfs/web-assets-brella-2021-theme/Sponsor%20ROI.svg"
              alt="meetings"
            />
          </div>
        </Marquee>
      </div>
      
    </div>
    <div className="measure-everything">
        <div className="measure-left col-5 mx-auto">
          <h1 className="measure-heading col-8 mx-auto">Measure everything, down to the last detail</h1>
          <p className="measure-para col-7 mx-auto">
          Thousands of event organizers rely on Brella’s 
          detailed analytics for the insights they need to make informed decisions that maximize ROI.
          </p>
          <ul className="ul-measure col-8 mx-auto">
            <li type="button" className="measure-list col-8 " onClick={handleContent}>
              Content
              {contenshow ?
              <p className="content-para col-12">
              Measure the impact of event content, determine the most popular sessions and segment virtual vs live attendance.
              </p>
              :''
}
            </li>
            <li type="button" className="measure-list col-8 " onClick={handleNetwork}>
              <span className="ne col-11" style={{}}>Network & matching</span>
              {networkshow ?
              <span className="network-para col-12">
              Measure the impact of event content, determine the most popular sessions and segment virtual vs live attendance.
              </span>
              :''
}
            </li>
          </ul>
          </div>
          <div className="measure-right col-7 mx-auto">
            { contenshow ?
           <img src="https://www.brella.io/hubfs/web-assets-brella-2021-theme/Sponsor%20ROI.svg" className="img1-measure"/>
            : ''}
            { networkshow ?
           <img src="https://www.brella.io/hs-fs/hubfs/Illustrations%20Web2021/Networking%20%26%20matchmaking-Analystics.png?width=2163&height=1415&name=Networking%20%26%20matchmaking-Analystics.png" className="img1-measure col-8 mx-auto"/>
            : ''}
           </div>
          </div>
    </>
  );
};

export default DataAnalytics;
