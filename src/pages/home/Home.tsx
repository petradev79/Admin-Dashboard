import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Widget from '../../components/widget/Widget';
import './home.scss';

const Home = () => {
  return (
    <div className='home container'>
      <div className='widgets'>
        <Widget type='user' />
        <Widget type='order' />
        <Widget type='earning' />
        <Widget type='balance' />
      </div>
      <div className='home__charts'>
        <Featured />
        <Chart />
      </div>
    </div>
  );
};

export default Home;
