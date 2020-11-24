import React, { useCallback } from 'react';
import Dropzone from 'react-dropzone';
import { useDispatch } from 'react-redux';
import { setProfile } from '../../redux/profile/actions';

const FileDrop = () => {
  const dispatch = useDispatch();

  const onDrop = useCallback(
    acceptedFiles => {
      acceptedFiles.forEach((file: File) => {
        const reader = new FileReader();
        reader.readAsText(file);

        // Find the .profile file
        if (file.name.match(/^.*\.profile$/)) {
          reader.onabort = () =>
            dispatch(setProfile('ERROR File reading was aborted'));
          reader.onerror = () =>
            dispatch(setProfile('ERROR File reading failed'));
          reader.onload = () => dispatch(setProfile(reader.result));
        }

        // Find the .casino file
        // if (file.name.match(/^.*\.casino$/)) {
        //   console.log(file);
        // }
      });
    },
    [dispatch]
  );

  return (
    <Dropzone onDrop={onDrop}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </section>
      )}
    </Dropzone>
  );
};

export default FileDrop;
