import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

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

      {item.map(data => {
        return (
          <Button 
            link={data.link}
            title={data.title}
          />
        )
      })}
      

      {/* <Button textName='Zuri Team' link='https://training.zuri.team/'/> <br/>
      <Button textName='Zuri Books' link='http://books.zuri.team'/> <br/>
      <Button textName='Python Books'link='https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>' /> <br/>
      <Button textName='Background Check For Colors' link='https://background.zuri.team/' /> <br/>
      <Button textName='Designer Books' link='https://books.zuri.team/design-rules' /> */}
    </div>
  );
}

export default App;