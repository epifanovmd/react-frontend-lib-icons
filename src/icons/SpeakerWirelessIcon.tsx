import React, { FC, memo } from 'react';
import SpeakerWirelessSvg from '../svg/speaker-wireless.svg';

export interface ISpeakerWirelessIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SpeakerWirelessIcon: FC<ISpeakerWirelessIconProps> = memo(props => {
  return <SpeakerWirelessSvg {...props} />;
});
