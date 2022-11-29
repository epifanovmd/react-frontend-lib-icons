import React, { FC, memo } from 'react';
import SetLeftRightSvg from '../svg/set-left-right.svg';

export interface ISetLeftRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SetLeftRightIcon: FC<ISetLeftRightIconProps> = memo(props => {
  return <SetLeftRightSvg {...props} />;
});
