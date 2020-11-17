import React from 'react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { Button } from 'antd';

function Page2() {
  return (
    <div className="home-page page2">
      <div className="home-page-wrapper">
        <div className="title-line-wrapper page2-line">
          <div className="title-line" />
        </div>
        <h2>
          About <span>Express Groomers</span>
        </h2>
        <OverPack>
          <QueueAnim
            key="queue"
            type="bottom"
            leaveReverse
            className="page2-content"
          >
            <p key="p" className="page-content">
              This is the about page：
            </p>
            <div key="code1" className="home-code">
              <div>$ cd ant-design-pro</div>
              <div>$ npm install</div>
              <div>
                $ npm start
                <span className="home-code-comment">http://localhost:8000</span>
              </div>
            </div>
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
}

export default Page2;
