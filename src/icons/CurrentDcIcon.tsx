import React, { FC, memo } from 'react';
import CurrentDcSvg from '../svg/current-dc.svg';

export interface ICurrentDcIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CurrentDcIcon: FC<ICurrentDcIconProps> = memo(props => {
  return <CurrentDcSvg {...props} />;
});
