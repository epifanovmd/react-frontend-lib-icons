import React, { FC, memo } from 'react';
import MusicNoteBluetoothSvg from '../svg/music-note-bluetooth.svg';

export interface IMusicNoteBluetoothIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicNoteBluetoothIcon: FC<IMusicNoteBluetoothIconProps> = memo(props => {
  return <MusicNoteBluetoothSvg {...props} />;
});
