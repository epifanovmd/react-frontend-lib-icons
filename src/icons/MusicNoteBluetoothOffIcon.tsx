import React, { FC, memo } from 'react';
import MusicNoteBluetoothOffSvg from '../svg/music-note-bluetooth-off.svg';

export interface IMusicNoteBluetoothOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicNoteBluetoothOffIcon: FC<IMusicNoteBluetoothOffIconProps> = memo(props => {
  return <MusicNoteBluetoothOffSvg {...props} />;
});
