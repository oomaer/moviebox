import {Link} from 'react-router-dom';
import './contentpagecover.css';

const ContentPageCover = ({content, details}) => {
    const backgroundimage = {'background-image': `url(${content.COVER})`};
    return(
        <div className = 'contentpage-cover-container' style = {backgroundimage}>
            <div className = 'contentpage-cover-content'>
                <div className = 'contentpage-cover-content-details'> 
                    <label>{content.RELEASEDATE.split('-')[0]}</label>
                    <h1>{content.TITLE}</h1>
                    <div className = 'contentpage-cover-small-details'>
                        <label id = 'contentpage-cover-runtime'>{`${content.RUNTIME} mins`}</label>
                        {details.genres.map((item, index) => {
                            if(index===0){
                                return <label>     |     {item.NAME}</label>
                            }
                            else{ 
                                return <label>,  {item.NAME}</label> 
                            }
                        })}
                        {content.TYPE === 'movie' 
                        ? (<label>    |    Movie</label>)
                        : (<label>    |    TV Series</label>)
                        }
                        
                    </div>
                    <div className = 'content-details-cover-btns'>
                        <button id = 'watch-trailer-btn' className = ''>WATCH TRAILER</button>
                        <Link to = {`/admin/editcontent/${content.ID}`}><button id = 'watch-trailer-btn' className = ''>Edit</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentPageCover;