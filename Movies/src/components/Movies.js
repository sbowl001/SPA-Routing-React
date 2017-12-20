import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {getMovies} from '../actions';

class Movies extends React.Component{
    componentDidMount(){
        this.props.getMovies();
    }

render(){
    return (
        <div>
            <ul>
                {this.props.movies.map((movie) => {
                    return (
                        <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`} >{movie.title}</Link> {/*???*/}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
   }

}

const mapStateToProps = state => {
    return { 
        movies: state.movies,
    };
};

export default connect(mapStateToProps, {getMovies})(Movies);