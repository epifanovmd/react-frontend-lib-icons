import React, { FC, memo } from 'react';
import SetLeftCenterSvg from '../svg/set-left-center.svg';

export interface ISetLeftCenterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SetLeftCenterIcon: FC<ISetLeftCenterIconProps> = memo(props => {
  return <SetLeftCenterSvg {...props} />;
});
