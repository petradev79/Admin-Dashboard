import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Datatable from '../../components/datatable/Datatable';
import Widget from '../../components/widget/Widget';
import './home.scss';

const Home = () => {
  return (
    <div className='container flex-container-column'>
      <div className='flex-container'>
        <Widget type='user' />
        <Widget type='order' />
        <Widget type='earning' />
        <Widget type='balance' />
      </div>
      <div className='flex-container'>
        <Featured />
        <Chart />
      </div>
      <Datatable />
    </div>
  );
};

export default Home;
