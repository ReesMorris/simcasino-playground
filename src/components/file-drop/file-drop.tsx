import React, { useCallback, useState } from 'react';
import Styles from './file-drop.styles';
import { useDispatch } from 'react-redux';
import { setProfile } from '../../redux/profile/actions';
import { useDropzone } from 'react-dropzone';
import { setCasino } from '../../redux/casino/actions';

const FileDrop = () => {
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const onDrop = useCallback(
    acceptedFiles => {
      acceptedFiles.forEach((file: File) => {
        let hasFoundMatch = false;
        const reader = new FileReader();
        reader.readAsText(file);

        // Find the .profile file
        if (file.name.match(/^.*\.profile$/)) {
          hasFoundMatch = true;
          reader.onabort = () =>
            dispatch(setProfile('ERROR File reading was aborted'));
          reader.onerror = () =>
            dispatch(setProfile('ERROR File reading failed'));
          reader.onload = () => dispatch(setProfile(reader.result));
        }

        // Find the .casino file
        if (file.name.match(/^.*\.casino$/)) {
          hasFoundMatch = true;
          reader.onabort = () =>
            dispatch(setProfile('ERROR File reading was aborted'));
          reader.onerror = () =>
            dispatch(setProfile('ERROR File reading failed'));
          reader.onload = () => {
            dispatch(setCasino(reader.result, file));
          };
        }

        // No matches?
        setError(
          hasFoundMatch
            ? null
            : 'No files matched! Please double-check the instructions.'
        );
      });
    },
    [dispatch]
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({ onDrop, maxFiles: 10 });
  return (
    <Styles.FileDropWrapper>
      <Styles.FileDrop
        {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
      >
        <input {...getInputProps()} />
        <Styles.TextWrapper>
          <Styles.UploadText>
            Drag and drop your save folder or files into this area
          </Styles.UploadText>
          <Styles.SubText>
            Note that you can currently only edit one .casino file at a time
          </Styles.SubText>
          {error && <Styles.SubText>{error}</Styles.SubText>}
        </Styles.TextWrapper>
      </Styles.FileDrop>
      <Styles.HelpTextWrapper>
        <Styles.HelpText bold>
          Simply drag your entire save folder or files into the area above.
        </Styles.HelpText>
        <Styles.HelpText>
          <Styles.HelpIcon icon='windows' weight='fab' title='Windows' />
          <span>
            %userprofile%\AppData\LocalLow\LVGameDev LLC\SimCasino\SavesDir
          </span>
        </Styles.HelpText>
        <Styles.HelpText>
          <Styles.HelpIcon icon='apple' weight='fab' title='MacOS' />
          <span>
            ~/Library/Application Support/LVGameDev LLC/SimCasino/SavesDir
          </span>
        </Styles.HelpText>
      </Styles.HelpTextWrapper>
      <Styles.InfoTextWrapper>
        <Styles.InfoText>
          All files are processed locally: absolutely nothing is recorded,
          uploaded, or saved.
        </Styles.InfoText>
        <Styles.InfoText>
          Please make a backup before using. SimCasino is rapidly changing and I
          can't guarantee compatibility.
        </Styles.InfoText>
      </Styles.InfoTextWrapper>
    </Styles.FileDropWrapper>
  );
};

export default FileDrop;
