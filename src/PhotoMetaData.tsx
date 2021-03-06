import React, { FC } from 'react';
import { Photo } from './types';
import PhotoMap from './PhotoMap';

interface PhotoMetaDataProps {
  photo: Photo;
}

const PhotoMetaData: FC<PhotoMetaDataProps> = (props) => {
  const { meta_data } = props.photo;
  const fileName = props.photo.file_path.match(/[^/]*$/g);

  const doNotClickPhoto = () => {};
  return (
    <>
      <div className="row">
        <div className="col">
          {props.photo.location && <PhotoMap photos={[props.photo]} selectPhoto={doNotClickPhoto} />}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <img src={`data:image/png;base64, ${props.photo.thumbnail}`} alt="thumbnail" />
          <h3>{fileName}</h3>
        </div>
        <div className="col-sm-6">
          <table className="table">
            <thead>
              <tr>
                <th>Data</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(meta_data).map((key) => {
                const value = meta_data[key];
                return (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{value.toString().substring(0, 400)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PhotoMetaData;
