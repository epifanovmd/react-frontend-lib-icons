import React, { FC, memo } from 'react';
import SetCenterRightSvg from '../svg/set-center-right.svg';

export interface ISetCenterRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SetCenterRightIcon: FC<ISetCenterRightIconProps> = memo(props => {
  return <SetCenterRightSvg {...props} />;
});
