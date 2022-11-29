import React, { FC, memo } from 'react';
import SaxophoneSvg from '../svg/saxophone.svg';

export interface ISaxophoneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SaxophoneIcon: FC<ISaxophoneIconProps> = memo(props => {
  return <SaxophoneSvg {...props} />;
});
