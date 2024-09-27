import { useState } from 'react';
import './App.css';
import {Button} from 'antd'
import { PoweroffOutlined } from '@ant-design/icons';
function App() {
  const[loading, setLoading] = useState(false)
const onButtonClick = (e) => {
  console.log('Button clicked')
  setLoading(true)
  setTimeout(() => {
    setLoading(false)
  }, 2000);
}

  return (
    <div className="App">
      <header className="App-header">
        <Button type='primary' block
        loading={loading}
        icon={<PoweroffOutlined />}
        style={{backgroundColor:'orange', color:'red'}}
        onClick={onButtonClick}>My First Button</Button>
       
      </header>
    </div>
  );
}

export default App;
