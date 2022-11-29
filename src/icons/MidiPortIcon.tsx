import React, { FC, memo } from 'react';
import MidiPortSvg from '../svg/midi-port.svg';

export interface IMidiPortIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MidiPortIcon: FC<IMidiPortIconProps> = memo(props => {
  return <MidiPortSvg {...props} />;
});
