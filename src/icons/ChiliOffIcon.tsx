import React, { FC, memo } from 'react';
import ChiliOffSvg from '../svg/chili-off.svg';

export interface IChiliOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChiliOffIcon: FC<IChiliOffIconProps> = memo(props => {
  return <ChiliOffSvg {...props} />;
});
