import React, { FC, memo } from 'react';
import SetRightSvg from '../svg/set-right.svg';

export interface ISetRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SetRightIcon: FC<ISetRightIconProps> = memo(props => {
  return <SetRightSvg {...props} />;
});
