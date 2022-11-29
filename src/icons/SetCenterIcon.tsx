import React, { FC, memo } from 'react';
import SetCenterSvg from '../svg/set-center.svg';

export interface ISetCenterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SetCenterIcon: FC<ISetCenterIconProps> = memo(props => {
  return <SetCenterSvg {...props} />;
});
