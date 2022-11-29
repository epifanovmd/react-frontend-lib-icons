import React, { FC, memo } from 'react';
import AxeSvg from '../svg/axe.svg';

export interface IAxeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AxeIcon: FC<IAxeIconProps> = memo(props => {
  return <AxeSvg {...props} />;
});
