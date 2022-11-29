import React, { FC, memo } from 'react';
import TurkeySvg from '../svg/turkey.svg';

export interface ITurkeyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TurkeyIcon: FC<ITurkeyIconProps> = memo(props => {
  return <TurkeySvg {...props} />;
});
