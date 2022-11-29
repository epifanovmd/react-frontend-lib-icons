import React, { FC, memo } from 'react';
import SetLeftSvg from '../svg/set-left.svg';

export interface ISetLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SetLeftIcon: FC<ISetLeftIconProps> = memo(props => {
  return <SetLeftSvg {...props} />;
});
