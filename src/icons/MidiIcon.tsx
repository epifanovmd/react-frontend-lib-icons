import React, { FC, memo } from 'react';
import MidiSvg from '../svg/midi.svg';

export interface IMidiIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MidiIcon: FC<IMidiIconProps> = memo(props => {
  return <MidiSvg {...props} />;
});
