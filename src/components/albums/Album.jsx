import "./Album.scss";

const Album = ({ album }) => {
    return (
        <div className="album col-sm-6 col-md-4 col-lg-3">
            <img className="album__image" src={album.cover_medium} alt={album.title} />
            <h4 className="album__title">{album.title}</h4>
        </div>
    );
};

export default Album;
