import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

import SlackIcon from './images/slack.svg'
import GitHubIcon from './images/github.svg'
import ProfileImg from './images/ibrahim.webp'


const App = () => {
  const item =[
    {
      id: 'twitter',
      title : 'Twitter',
      link : 'https://twitter.com/oritise_success'
    },
    {
      id: 'btn__zuri',
      title : 'Zuri Team',
      link : 'https://training.zuri.team/'
    },
    {
      id: 'books',
      title : 'Zuri Books',
      link : 'http://books.zuri.team'
    },
    {
      id: 'book__python',
      title : 'Python Books',
      link : 'https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>'
    },
    {
      id: 'pitch',
      title : 'Background Check For Colors',
      link : 'https://background.zuri.team/'
    },
    {
      id: 'book__design',
      title : 'Designer Books',
      link : 'https://books.zuri.team/design-rules'
    },
  ]
  return (
    
    <div className="App">

      <div className='profileWrapper'>
        <img src={ProfileImg} id='profile__img'/>
        <h2 className='profileName'>Oritise Success</h2>
      </div>
      {item.map(data => {
        return (
          <Button 
            link={data.link}
            title={data.title}
          />
        )
      })}
      
      <div className='IconWrapper'>
        <a href=''>
          <img src={SlackIcon} alt='Slack-icon' className='icon' style={{marginRight: '15px'}}/>
        </a>
        <a  href='https://github.com/oritise1'>
          <img src={GitHubIcon} alt='github-icon' className='icon'/>
        </a>
      </div>
    </div>
  );
}

export default App;