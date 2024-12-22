import React, {useState} from 'react';
import './Tabs.css';

export default function Tabs() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }

  return (
      <div className='container'>
          <div className='bloc-tabs'>
              <div className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(1)}>Tab 1</div>
              <div className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(2)}>Tab 2</div>
              <div className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(3)}>Tab 3</div>
          </div>

          <div className='content-tabs'>
              <div className={toggleState === 1 ? 'content active-content' : 'content'}>
                  <h2>Content 1</h2>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
              </div>
              <div className={toggleState === 2 ? 'content active-content' : 'content'}>
                  <h2>Content 2</h2>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.
                  </p>
              </div>
              <div className={toggleState === 3 ? 'content active-content' : 'content'}>
                  <h2>Content 3</h2>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat hello is greate all see happy.
                  </p>
              </div>
          </div>
    </div>
  )
}
