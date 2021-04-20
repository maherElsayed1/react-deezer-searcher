import Album from "./Album";

const Albums = (props) => {
    return (
        <div className="albums">
            <div className="row">
                {props.albums.map((album) => (
                    <Album album={album} key={album.id} />
                ))}
            </div>
        </div>
    );
};

export default Albums;
