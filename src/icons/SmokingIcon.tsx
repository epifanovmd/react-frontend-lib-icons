import React, { FC, memo } from 'react';
import SmokingSvg from '../svg/smoking.svg';

export interface ISmokingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SmokingIcon: FC<ISmokingIconProps> = memo(props => {
  return <SmokingSvg {...props} />;
});
