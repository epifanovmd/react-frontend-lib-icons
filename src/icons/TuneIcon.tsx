import React, { FC, memo } from 'react';
import TuneSvg from '../svg/tune.svg';

export interface ITuneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TuneIcon: FC<ITuneIconProps> = memo(props => {
  return <TuneSvg {...props} />;
});
