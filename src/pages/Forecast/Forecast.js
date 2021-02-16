
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loader from './../../components/Loader';
import DailyForecast from './../../components/DailyForecast';

import { fetchForecastStart } from './actions/forecast.actions';
import { 
  forecastFetchErrorSelector, 
  forecastFetchIsStatusInProgress,
  forecastFetchDataSelector
} 
from './selectors/forecast.selectors';


export class Forecast extends Component {
  componentDidMount() {
    if(navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(this.fetchForecast, console.error)
    }
  }

  fetchForecast = ({ coords: { latitude, longitude }}) => {
    const {
      getForecast,
    } = this.props;
    getForecast(latitude, longitude);
  }


  render() {
    const { loading, data, error } = this.props;
    console.log(data)

    return (
      <div className="container pt-5">
        {loading && <Loader />}
        {!loading && !error && data && (
          // <div>sm</div>
         data.daily.data.map(forecast => <DailyForecast key={forecast.time} forecast={forecast}/>)
          // <Card>
          //   <CardBody>
          //     <CardTitle tag="h3">{book.title}</CardTitle>
          //     <CardSubtitle tag="h6" className="mb-2 text-muted">
          //       {book.description}
          //     </CardSubtitle>
          //     <CardText>{book.excerpt}</CardText>
          //     <CardText tag="h5">
          //       Page count:
          //       {book.pageCount}
          //     </CardText>
          //     <CardText>
          //       <small className="text-muted">
          //         {moment(book.publishDate).fromNow()}
          //       </small>
          //     </CardText>
          //     <Button onClick={() => this.deleteBook(book.id)} id="delete-book">
          //       Delete this book
          //     </Button>
          //     <Button onClick={() => this.updateBook(book.id)} id="update-book">
          //       Update this book
          //     </Button>
          //   </CardBody>
          // </Card>
        )}
        {/* {!error && !loading && !book && <div id="no-book">No book</div>} */}
        {/* {error && <Error error={error} />} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: forecastFetchDataSelector(state),
  loading: forecastFetchIsStatusInProgress(state),
  error: forecastFetchErrorSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  getForecast: (lat, lng) => dispatch(fetchForecastStart(lat, lng)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
