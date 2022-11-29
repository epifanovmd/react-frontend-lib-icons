import React, { FC, memo } from 'react';
import PauseOctagonSvg from '../svg/pause-octagon.svg';

export interface IPauseOctagonIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PauseOctagonIcon: FC<IPauseOctagonIconProps> = memo(props => {
  return <PauseOctagonSvg {...props} />;
});
