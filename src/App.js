import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

const App = () => {
  const item =[
    {
      title : 'Twitter',
      link : 'https://twitter.com/oritise_success'
    },
    {
      title : 'Twitter',
      link : 'https://twitter.com/oritise_success'
    },
  ]
  return (
    
    <div className="App">

      {item.map(d => {
        return (
          <Button 
            link={d.link}
            title={d.title}
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