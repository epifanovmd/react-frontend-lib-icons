import React, { FC, memo } from 'react';
import AwningSvg from '../svg/awning.svg';

export interface IAwningIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AwningIcon: FC<IAwningIconProps> = memo(props => {
  return <AwningSvg {...props} />;
});
