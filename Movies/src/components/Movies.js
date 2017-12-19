import React from 'react';

export default class Movies extends React.Component{

    componentDidMount(){
        this.props.getMovies();
    }
render(){
    return (
        <div>
            <ul>
                {this.props.movies.map((movie, i) => {
                    return (
                        <li key={i}>
                        <Link to={`/movies/${movie.id}`} >{}
                        </li>
                    )
                })}
    )
}

}